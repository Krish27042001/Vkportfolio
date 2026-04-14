import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Vamsi completely transformed our approach to paid search. Before he joined, we were bleeding budget on broad matches. Within three months, our cost-per-lead dropped by over 50% while volume tripled. He's arguably the sharpest PPC mind I've worked with.",
    author: "Sarah Jenkins",
    role: "VP of Marketing, Tevatel"
  },
  {
    quote: "Finding someone who understands both the granular technical details of Meta Ads and the broader strategic business goals is rare. Vamsi brings both to the table. His campaigns drove our highest ROI quarter in company history.",
    author: "Marcus Chen",
    role: "Founder, Elevate B2B"
  },
  {
    quote: "Data-driven, proactive, and incredibly transparent. Vamsi doesn't just launch campaigns; he builds entire conversion engines. His insights into our analytics changed how our entire sales team approached lead follow-up.",
    author: "Elena Rodriguez",
    role: "Director of Growth, Nexus SaaS"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client <span className="text-primary">Impact</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Don't just take my word for it.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 left-6" />
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10 pt-4 mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{testimonial.author}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
