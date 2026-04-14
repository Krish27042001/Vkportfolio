import { motion } from "framer-motion";
import { SiGoogleanalytics, SiHotjar, SiHubspot, SiGoogle, SiMeta } from "react-icons/si";
import { Linkedin } from "lucide-react";

const tools = [
  { name: "Google Analytics 4", icon: SiGoogleanalytics, color: "text-[#E37400]" },
  { name: "Google Search Console", icon: SiGoogle, color: "text-[#4285F4]" },
  { name: "Meta Business Suite", icon: SiMeta, color: "text-[#0668E1]" },
  { name: "LinkedIn Campaign Manager", icon: Linkedin, color: "text-[#0A66C2]" },
  { name: "Hotjar", icon: SiHotjar, color: "text-[#FD3A5C]" },
  { name: "HubSpot", icon: SiHubspot, color: "text-[#FF7A59]" },
];

export default function Analytics() {
  return (
    <section id="analytics" className="w-full py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Analytics & <span className="text-primary">Tools</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Mastery of the platforms that track, measure, and optimize every interaction.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`p-4 rounded-xl bg-white/5 mb-3 group-hover:scale-110 transition-transform duration-300 ${tool.color}`}>
                <tool.icon className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
