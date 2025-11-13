import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import TemplatesSection from "@/components/TemplatesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturesSection />
      <TemplatesSection />
      
      {/* Enhanced Footer */}
      <footer className="relative glass-card border-t py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white text-xl">✨</span>
              </div>
              <span className="text-lg font-bold gradient-text">WriteFlow AI</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Empowering writers with cutting-edge AI technology. Write smarter, not harder.
            </p>
            <div className="flex items-center justify-center gap-6 pt-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-accent-cyan transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-accent-cyan transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-accent-cyan transition-colors">Contact</a>
            </div>
            <p className="text-xs text-muted-foreground pt-4">
              © 2025 WriteFlow AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
