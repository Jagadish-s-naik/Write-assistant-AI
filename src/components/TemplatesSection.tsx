import { Mail, FileText, MessageSquare, Briefcase, BookOpen, Share2 } from "lucide-react";
import TemplateCard from "./TemplateCard";

const TemplatesSection = () => {
  const templates = [
    {
      icon: Mail,
      title: "Email Templates",
      description: "Professional emails for any occasion",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Blog Posts",
      description: "SEO-optimized articles and posts",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Social Media",
      description: "Engaging posts for all platforms",
      gradient: "bg-gradient-to-br from-green-500 to-teal-500"
    },
    {
      icon: Briefcase,
      title: "Business Letters",
      description: "Formal correspondence templates",
      gradient: "bg-gradient-to-br from-orange-500 to-red-500"
    },
    {
      icon: BookOpen,
      title: "Marketing Copy",
      description: "Compelling sales and ad copy",
      gradient: "bg-gradient-to-br from-indigo-500 to-blue-500"
    },
    {
      icon: Share2,
      title: "Content Ideas",
      description: "Brainstorm and outline creation",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="templates" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary to-accent-cyan rounded-full blur-[180px] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Quick Start
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Ready-Made <span className="gradient-text">Templates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Jump-start your writing with professionally crafted AI-powered templates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.08}s` }}>
              <TemplateCard {...template} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
