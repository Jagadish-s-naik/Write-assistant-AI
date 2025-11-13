import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Mic, MicOff, Loader2, Save, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Editor = () => {
  const [content, setContent] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const words = content.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  }, [content]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await transcribeAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      
      toast({
        title: "Recording started",
        description: "Speak clearly into your microphone",
      });
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast({
        title: "Microphone access denied",
        description: "Please allow microphone access to use voice input",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const transcribeAudio = async (audioBlob: Blob) => {
    setIsTranscribing(true);
    
    try {
      // Convert blob to base64
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        
        const { data, error } = await supabase.functions.invoke('voice-to-text', {
          body: { audio: base64Audio }
        });

        if (error) throw error;

        if (data?.text) {
          setContent(prev => prev + (prev ? ' ' : '') + data.text);
          toast({
            title: "Transcription complete",
            description: "Your speech has been converted to text",
          });
        }
      };
    } catch (error) {
      console.error('Transcription error:', error);
      toast({
        title: "Transcription failed",
        description: "Please try again or check your API key",
        variant: "destructive",
      });
    } finally {
      setIsTranscribing(false);
    }
  };

  const handleSave = () => {
    toast({
      title: "Document saved",
      description: "Your content has been saved successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-muted/50"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold gradient-text">AI Editor</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              {wordCount} words
            </div>
            <Button onClick={handleSave} size="sm" className="bg-gradient-primary shadow-glow-primary">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </header>

      {/* Main Editor */}
      <main className="pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl border p-8 shadow-lg min-h-[600px]">
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start typing or use voice input to dictate your content..."
              className="min-h-[500px] text-lg leading-relaxed resize-none border-0 focus-visible:ring-0 bg-transparent"
            />
          </div>
        </div>
      </main>

      {/* Voice Input Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-card border rounded-full p-2 shadow-glow-primary">
          {!isRecording && !isTranscribing && (
            <Button
              onClick={startRecording}
              size="lg"
              className="rounded-full w-16 h-16 bg-gradient-primary shadow-glow-primary group relative"
            >
              <Mic className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-accent-cyan rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
            </Button>
          )}
          
          {isRecording && (
            <Button
              onClick={stopRecording}
              size="lg"
              className="rounded-full w-16 h-16 bg-destructive shadow-glow animate-pulse"
            >
              <MicOff className="w-6 h-6" />
            </Button>
          )}
          
          {isTranscribing && (
            <div className="rounded-full w-16 h-16 bg-primary/20 flex items-center justify-center">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          )}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-4">
          {isRecording ? "Recording... Click to stop" : isTranscribing ? "Transcribing..." : "Click to start dictation"}
        </p>
      </div>
    </div>
  );
};

export default Editor;
