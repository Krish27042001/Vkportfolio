import { motion } from "framer-motion";
import { Send } from "lucide-react";
import "../../styles/contact.css";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted! In a real app, this would send an email.");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* <p className="contact-top-label">Contact</p> */}
          <h2 className="contact-heading">
            Ready to Scale Your{" "}
            <span className="text-gradient">Growth</span>?
            
          </h2>
          <p className="contact-subtext">
            Whether you need a fractional growth lead, a campaign audit, or
            full-service media buying — let's talk about hitting your revenue targets.
          </p>
        </motion.div>

        {/* Center Image Section */}
<div className="contact-image-section">
  <p className="contact-signature">~ Vamsi Krishna M ~</p>
  <div className="contact-avatar">
    {/* Replace src below with your actual photo path */}
    {/* <img src="/your-photo.jpg" alt="Vamsi Krishna" /> */}
    <span className="contact-avatar-initials">VK</span>
  </div>
  <p className="contact-avatar-caption">Digital Marketing Expert</p>
</div>

        <div className="contact-divider" />

        <div className="contact-grid">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-left"
          >
            <p className="contact-section-label">Get in Touch</p>

            <div className="contact-item">
              <p className="contact-item-type">Email Me</p>
              <a
                href="mailto:vamsikrishna27.m@gmail.com"
                className="contact-item-link"
              >
                vamsikrishna27.m@<span className="text-gradient">gmail.com</span>
              </a>
            </div>

            <div className="contact-item">
              <p className="contact-item-type">Connect on LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/vamsi-krishna-167193238/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item-link"
              >
                LinkedIn
              </a>
              <span className="contact-item-sub">
                {/* linkedin.com/in/vamsi-krishna-167193238 */}
              </span>
            </div>

            <div className="contact-item">
              <p className="contact-item-type">Follow On</p>
              <div className="contact-socials-row">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-link contact-item-link--sm"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-link contact-item-link--sm"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/vamsi_krishna._27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-link contact-item-link--sm contact-item-link--accent"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <p className="contact-section-label">Send a Message</p>

              <div className="contact-form-field">
                <label htmlFor="name" className="contact-form-label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="email" className="contact-form-label">
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="message" className="contact-form-label">
                  How can I help?
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="Tell me about your growth goals, target audience, and current challenges..."
                  className="contact-form-textarea"
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                <span>Let's Grow Your Business</span>
                <Send size={16} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}