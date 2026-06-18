import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import "../../styles/floatingCTA.css";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="floating-cta"
    >
      <button
        className="floating-cta-btn"
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        <Mail className="floating-cta-icon" />
        Hire Me
      </button>
    </motion.div>
  );
}
