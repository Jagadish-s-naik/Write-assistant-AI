import { Sparkles, Mic, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img 
          src={heroBg} 
          alt="AI Writing Background" 
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan rounded-full blur-[120px] opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border">
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm font-medium">Powered by Advanced AI</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Write Better, Faster
            <br />
            <span className="gradient-text">With AI Assistance</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
            Transform your writing with intelligent suggestions, grammar checks, and style improvements.
            Create professional content in seconds with our AI-powered writing assistant.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-gradient-primary shadow-glow-primary hover-lift text-base px-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Writing Free
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              Watch Demo
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-xl border hover-lift">
              <Mic className="w-8 h-8 mb-3 text-accent-cyan" />
              <h3 className="font-semibold mb-2">Voice Input</h3>
              <p className="text-sm text-muted-foreground">Dictate your ideas with speech recognition</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl border hover-lift">
              <Globe className="w-8 h-8 mb-3 text-accent-cyan" />
              <h3 className="font-semibold mb-2">Multi-Language</h3>
              <p className="text-sm text-muted-foreground">Write and translate in 50+ languages</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl border hover-lift">
              <Zap className="w-8 h-8 mb-3 text-accent-cyan" />
              <h3 className="font-semibold mb-2">Real-Time AI</h3>
              <p className="text-sm text-muted-foreground">Get instant suggestions as you type</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
