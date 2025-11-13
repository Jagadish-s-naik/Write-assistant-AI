import { Sparkles, Mic, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero" />
        <img 
          src={heroBg} 
          alt="AI Writing Background" 
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
      </div>

      {/* Enhanced Floating Elements with 3D effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-cyan rounded-full blur-[140px] opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary rounded-full blur-[140px] opacity-25 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-cyan to-primary rounded-full blur-[160px] opacity-10 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border shadow-lg hover:shadow-glow transition-all duration-300">
            <div className="relative">
              <Sparkles className="w-4 h-4 text-accent-cyan animate-pulse" />
              <div className="absolute inset-0 bg-accent-cyan blur-md opacity-50" />
            </div>
            <span className="text-sm font-medium bg-gradient-to-r from-accent-cyan to-primary bg-clip-text text-transparent">Powered by Advanced AI</span>
          </div>

          {/* Enhanced Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="block mb-2">Write Better, Faster</span>
            <span className="gradient-text text-6xl sm:text-7xl lg:text-8xl block">With AI Assistance</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Transform your writing with intelligent suggestions, grammar checks, and style improvements.
            Create professional content in seconds with our AI-powered writing assistant.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-primary shadow-glow-primary hover-lift text-base px-10 h-14 rounded-xl group relative overflow-hidden"
              onClick={() => window.location.href = '/editor'}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Writing Free
              </span>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-10 h-14 rounded-xl border-2 hover:border-accent-cyan hover:text-accent-cyan transition-all">
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            {[
              { icon: Mic, title: "Voice Input", desc: "Dictate your ideas with speech recognition", color: "text-accent-cyan" },
              { icon: Globe, title: "Multi-Language", desc: "Write and translate in 50+ languages", color: "text-primary" },
              { icon: Zap, title: "Real-Time AI", desc: "Get instant suggestions as you type", color: "text-accent-cyan" }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card p-8 rounded-2xl border hover-lift group cursor-pointer transition-all duration-300 hover:shadow-glow-primary"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="relative mb-4">
                    <Icon className={`w-10 h-10 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`absolute inset-0 ${feature.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-cyan transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
