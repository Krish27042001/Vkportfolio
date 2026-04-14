import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button 
        size="lg" 
        className="rounded-full shadow-[0_0_20px_rgba(100,100,255,0.4)] bg-primary hover:bg-primary/90 border border-primary-foreground/20"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Mail className="mr-2 h-4 w-4" />
        Hire Me
      </Button>
    </motion.div>
  );
}
