import { motion } from "framer-motion";
import { SiGoogle, SiMeta } from "react-icons/si";
import { Search, MousePointerClick, Target, Linkedin } from "lucide-react";

const skills = [
  { name: "Google Ads", icon: SiGoogle, level: 95, color: "text-blue-500", bg: "bg-blue-500" },
  { name: "Meta Ads", icon: SiMeta, level: 90, color: "text-blue-600", bg: "bg-blue-600" },
  { name: "LinkedIn Ads", icon: Linkedin, level: 88, color: "text-sky-600", bg: "bg-sky-600" },
  { name: "SEO & SEM", icon: Search, level: 85, color: "text-emerald-500", bg: "bg-emerald-500" },
  { name: "B2B Lead Gen", icon: Target, level: 92, color: "text-purple-500", bg: "bg-purple-500" },
  { name: "CRO", icon: MousePointerClick, level: 80, color: "text-orange-500", bg: "bg-orange-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="text-primary">Competencies</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The technical stack and strategic skills I use to build growth engines.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-white/5 ${skill.color}`}>
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  className={`h-full ${skill.bg} shadow-[0_0_10px_currentColor]`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
