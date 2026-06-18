import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import "../../styles/testimonial.css";

const testimonials = [
  {
    quote: "Vamsi completely transformed our approach to paid search. Before he joined, we were bleeding budget on broad matches. Within three months, our cost-per-lead dropped by over 50% while volume tripled. He's arguably the sharpest PPC mind I've worked with.",
    author: "Sarah Jenkins",
    role: "VP of Marketing, Tevatel",
  },
  {
    quote: "Finding someone who understands both the granular technical details of Meta Ads and the broader strategic business goals is rare. Vamsi brings both to the table. His campaigns drove our highest ROI quarter in company history.",
    author: "Marcus Chen",
    role: "Founder, Elevate B2B",
  },
  {
    quote: "Data-driven, proactive, and incredibly transparent. Vamsi doesn't just launch campaigns; he builds entire conversion engines. His insights into our analytics changed how our entire sales team approached lead follow-up.",
    author: "Elena Rodriguez",
    role: "Director of Growth, Nexus SaaS",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="testimonials-header"
        >
          <h2 className="testimonials-title">
            Client <span className="testimonials-title-accent">Impact</span>
          </h2>
          <p className="testimonials-subtitle">Don't just take my word for it.</p>
        </motion.div>

        {/* Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="testimonials-card"
            >
              <Quote className="testimonials-quote-icon" />

              <p className="testimonials-quote">"{testimonial.quote}"</p>

              <div className="testimonials-author">
                <div className="testimonials-author-avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="testimonials-author-name">{testimonial.author}</h4>
                  <p className="testimonials-author-role">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}