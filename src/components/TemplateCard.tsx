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
    <Card className="glass-card border hover-lift cursor-pointer group overflow-hidden">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-lg ${gradient} flex items-center justify-center mb-4 shadow-md group-hover:shadow-glow transition-all duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
