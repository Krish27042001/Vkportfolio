import { Github, Linkedin, Twitter} from "lucide-react";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <p className="footer-brand-name">Vamsi Krishna M</p>
          <p className="footer-brand-tagline">Digital Marketing Expert & Performance Marketing Specialist</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/vamsi-krishna-167193238/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Twitter"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            <Github />
          </a>
        </div>

        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Vamsi Krishna. All Rights reserved</p>
          {/* <p className="footer-copy-text">© 2026 Vamsi Krishna. All rights reserved.</p> */}
        </div>

      </div>
    </footer>
  );
}