import { Check, Sparkles, Shield, Cloud, Languages, TrendingUp, FileSearch } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Smart AI Suggestions",
      description: "Real-time writing assistance with context-aware recommendations"
    },
    {
      icon: Check,
      title: "Grammar & Spell Check",
      description: "Advanced error detection and correction in 50+ languages"
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Write and translate content across multiple languages instantly"
    },
    {
      icon: FileSearch,
      title: "Plagiarism Detection",
      description: "Ensure originality with comprehensive plagiarism scanning"
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description: "Get real-time SEO tips to improve content visibility"
    },
    {
      icon: Cloud,
      title: "Cloud Sync",
      description: "Access your work anywhere with automatic cloud synchronization"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is encrypted and never shared with third parties"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to write better content, faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl border hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-glow-primary">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
