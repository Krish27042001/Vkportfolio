import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2 } from "lucide-react";
import dashboardImg from "@/assets/dashboard.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center pt-20 pb-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Driving <span className="text-gradient">High-Quality Leads</span> & Scalable Growth Through Data-Driven Digital Marketing
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-xl font-light leading-relaxed">
            I turn ad spend into measurable pipeline. Specializing in PPC, B2B lead generation, and conversion optimization for high-growth companies.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold shadow-[0_0_20px_rgba(100,100,255,0.4)] transition-all hover:shadow-[0_0_30px_rgba(100,100,255,0.6)]" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full font-semibold border-white/10 hover:bg-white/5 backdrop-blur-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Hire Me
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10 w-full">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">340%</span>
              <span className="text-sm text-muted-foreground">Lead Volume Growth</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">$2M+</span>
              <span className="text-sm text-muted-foreground">Ad Spend Managed</span>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="flex flex-col hidden sm:flex">
              <span className="text-3xl font-bold text-foreground">4.8x</span>
              <span className="text-sm text-muted-foreground">Average ROAS</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative perspective-[1000px] hidden lg:block"
        >
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden glass-card p-2 transform-gpu rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />
            <img 
              src={dashboardImg} 
              alt="High-performance marketing dashboard visualization showing growth metrics" 
              className="w-full h-full object-cover rounded-xl opacity-90"
              loading="lazy"
            />
            {/* Overlay UI elements */}
            <div className="absolute bottom-6 right-6 z-20 glass-card rounded-xl p-4 flex items-center gap-4 animate-bounce duration-[3000ms]">
              <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <BarChart2 className="text-emerald-500 h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Conversion Rate</p>
                <p className="text-lg font-bold text-emerald-400">+4.2x Growth</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
