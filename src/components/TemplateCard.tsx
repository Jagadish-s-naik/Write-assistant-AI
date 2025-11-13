import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TemplateCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const TemplateCard = ({ icon: Icon, title, description, gradient }: TemplateCardProps) => {
  return (
    <Card className="glass-card border-2 hover-lift cursor-pointer group overflow-hidden transition-all duration-300 hover:border-accent-cyan/30 h-full">
      <CardContent className="p-8">
        <div className="relative mb-5">
          <div className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-300`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className={`absolute inset-0 w-16 h-16 ${gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
        </div>
        <h3 className="font-semibold text-xl mb-3 group-hover:text-accent-cyan transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="mt-4 text-xs text-accent-cyan font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
          Get Started →
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
