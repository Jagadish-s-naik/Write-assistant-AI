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
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-cyan rounded-full blur-[140px] opacity-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary rounded-full blur-[140px] opacity-10" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium">
              Everything You Need
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">AI Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Advanced tools designed to enhance your writing experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group glass-card p-8 rounded-2xl border hover-lift animate-scale-in cursor-pointer transition-all duration-300 hover:shadow-glow-primary"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 w-14 h-14 bg-gradient-primary rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-xl mb-3 group-hover:text-accent-cyan transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
