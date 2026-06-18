import { motion } from "framer-motion";
import headshotImg from "@/assets/Vamsi krishna.png";
import { CheckCircle2 } from "lucide-react";
import "../../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="about-header"
        >
          <h1 className="about-title">
            Digital Marketing <span className="text-gradient">Expert</span>
          </h1>
          <p className="about-subtitle">
            Results-driven strategist focused on B2B lead generation, performance marketing, and ROI-optimized campaigns.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-image-col"
          >
            <div className="about-image-wrapper">
              <div className="about-image-overlay" />
              {/* <img
                src={headshotImg}
                alt="Vamsi Krishna - Digital Marketing Expert"
                className="about-photo"
                loading="lazy"
              /> */}
              <div className="about-image-badge">
                <p className="about-badge-name">Vamsi Krishna</p>
                <p className="about-badge-role">Performance Marketing Specialist</p>
              </div>
            </div>
            <div className="about-blur-bottom" />
            <div className="about-blur-top" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content-col"
          >
            <h3 className="about-content-heading">Turning Clicks Into Revenue</h3>
            <div className="about-content-body">
              <p>
                I am a seasoned Digital Marketing Specialist with hands-on experience in building and scaling profitable campaigns across Google Ads, Meta Ads, and LinkedIn Ads. With over 3 years of deep technical experience, I don't just chase metrics—I chase measurable business outcomes.
              </p>
              <p>
                My expertise lies in full-funnel B2B lead generation, precision targeting, and conversion rate optimization (CRO). I leverage data analytics and behavioral insights to continuously refine strategies, lower acquisition costs, and maximize ROI.
              </p>
            </div>

            <div className="about-skills-grid">
              {[
                "Google & Meta Ads Master",
                "B2B Lead Generation Pro",
                "Conversion Rate Optimization",
                "Data-Driven Strategy",
                "Marketing Analytics",
                "SEO & SEM Expertise",
              ].map((item, i) => (
                <div key={i} className="about-skill-item">
                  <CheckCircle2 className="about-skill-icon" />
                  <span className="about-skill-label">{item}</span>
                </div>
              ))}
            </div>

            <div className="about-quote-wrapper">
              <p className="about-quote">
                "Good marketing makes the company look smart. Great marketing makes the customer feel smart."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}