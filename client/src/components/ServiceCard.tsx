import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group bg-secondary/50 border border-white/5 p-6 rounded-2xl hover:bg-secondary hover:border-primary/50 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold mb-3 uppercase">{title}</h3>
      <p className="text-muted-foreground mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors">
        {description}
      </p>
      <div className="flex items-center text-primary font-semibold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
        Start Journey <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </motion.div>
  );
}
