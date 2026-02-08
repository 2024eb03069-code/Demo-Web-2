import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export function TestimonialCard({ name, role, content, rating }: TestimonialProps) {
  return (
    <Card className="bg-secondary/40 border-white/5 h-full">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted"}`} 
            />
          ))}
        </div>
        <p className="text-gray-300 mb-6 italic leading-relaxed">"{content}"</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-gray-400">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase">{name}</h4>
            <span className="text-xs text-muted-foreground">{role}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
