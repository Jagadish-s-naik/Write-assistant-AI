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
    <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Ready-Made <span className="gradient-text">Templates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jump-start your writing with professionally crafted templates for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <TemplateCard {...template} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
