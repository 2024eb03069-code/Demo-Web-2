import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: PricingFeature[];
  isPopular?: boolean;
  onSelect: () => void;
  delay?: number;
}

export function PricingCard({ 
  title, 
  price, 
  period, 
  features, 
  isPopular = false, 
  onSelect,
  delay = 0 
}: PricingCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`relative rounded-2xl p-8 border ${
        isPopular 
          ? "bg-secondary border-primary shadow-2xl shadow-primary/10 scale-105 z-10" 
          : "bg-secondary/30 border-white/10 hover:border-white/20"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-bold uppercase text-muted-foreground mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <div className={`mt-0.5 rounded-full p-0.5 ${feature.included ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
              <Check className="w-3 h-3" />
            </div>
            <span className={feature.included ? 'text-gray-300' : 'text-muted-foreground line-through'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Button 
        onClick={onSelect}
        className={`w-full font-bold uppercase tracking-wider py-6 ${
          isPopular 
            ? "bg-primary hover:bg-primary/90 text-white" 
            : "bg-white/10 hover:bg-white/20 text-white"
        }`}
      >
        Choose Plan
      </Button>
    </motion.div>
  );
}
