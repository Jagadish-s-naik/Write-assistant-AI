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
      
      {/* Footer */}
      <footer className="glass-card border-t py-8 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 WriteFlow AI. Powered by advanced AI technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
