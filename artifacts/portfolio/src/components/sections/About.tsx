import { motion } from "framer-motion";
import headshotImg from "@/assets/headshot.png";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6 lg:px-12 bg-background/50 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Digital Marketing <span className="text-primary">Expert</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Results-driven strategist focused on B2B lead generation, performance marketing, and ROI-optimized campaigns.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card p-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
              <img 
                src={headshotImg} 
                alt="Vamsi Krishna - Digital Marketing Expert" 
                className="w-full h-full object-cover rounded-xl filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="glass-card rounded-xl p-4 border border-white/10 backdrop-blur-md bg-black/40">
                  <p className="text-sm font-medium text-white">Vamsi Krishna</p>
                  <p className="text-xs text-primary mt-1">Performance Marketing Specialist</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px] -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold">Turning Clicks Into Revenue</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a seasoned Digital Marketing Specialist with hands-on experience in building and scaling profitable campaigns across Google Ads, Meta Ads, and LinkedIn Ads. With over 3 years of deep technical experience, I don't just chase metrics—I chase measurable business outcomes.
              </p>
              <p>
                My expertise lies in full-funnel B2B lead generation, precision targeting, and conversion rate optimization (CRO). I leverage data analytics and behavioral insights to continuously refine strategies, lower acquisition costs, and maximize ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "Google & Meta Ads Master",
                "B2B Lead Generation Pro",
                "Conversion Rate Optimization",
                "Data-Driven Strategy",
                "Marketing Analytics",
                "SEO & SEM Expertise"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 mt-8">
              <p className="text-xl italic font-serif text-white/80">"Good marketing makes the company look smart. Great marketing makes the customer feel smart."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
