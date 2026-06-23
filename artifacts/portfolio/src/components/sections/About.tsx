import { useRef, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import "../../styles/about.css";

const skills = [
  "Google & Meta Ads Master",
  "B2B Lead Generation Pro",
  "Conversion Rate Optimization",
  "Data-Driven Strategy",
  "Marketing Analytics",
  "SEO & SEM Expertise",
];

export default function About() {
  const trackRef = useRef<HTMLDivElement>(null);
  const railRef  = useRef<HTMLDivElement>(null);
  const targetX  = useRef(0);
  const currentX = useRef(0);
  const rafId    = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    const rail  = railRef.current;
    if (!track || !rail) return;

    const computeTarget = () => {
      const rect       = track.getBoundingClientRect();
      const trackH     = track.offsetHeight;
      const vh         = window.innerHeight;
      const scrollable = trackH - vh;
      const scrolled   = Math.max(0, -rect.top);
      const progress   = Math.min(1, scrolled / scrollable);
      const maxShift   = rail.scrollWidth - window.innerWidth;
      targetX.current  = progress * maxShift;
    };

    const animate = () => {
      currentX.current += (targetX.current - currentX.current) * 0.085;
      if (Math.abs(targetX.current - currentX.current) < 0.05) {
        currentX.current = targetX.current;
      }
      rail.style.transform = `translateX(-${currentX.current}px)`;
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", computeTarget, { passive: true });
    window.addEventListener("resize", computeTarget);
    computeTarget();
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", computeTarget);
      window.removeEventListener("resize", computeTarget);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div id="about" className="about-track" ref={trackRef}>
      <div className="about-sticky">
        <div className="about-rail" ref={railRef}>

          <div className="about-panel about-panel--title">
            <div className="about-big-label">ABOUT</div>
            <div className="about-big-label about-big-label--outline">ME</div>
            <p className="about-panel-sub">
              Digital Marketing Specialist · Performance Marketer
            </p>
            <p className="about-scroll-cue">scroll down to explore →</p>
          </div>

          <div className="about-panel about-panel--text">
            <span className="about-panel-eyebrow">Who I Am</span>
            <h2 className="about-panel-heading">
              Turning Clicks Into {" "}
              <span className="text-gradient">Revenue</span>
            </h2>
            <div className="about-panel-body">
              <p>
                I am a seasoned Digital Marketing Specialist with hands-on
                experience building and scaling profitable campaigns across
                Google Ads, Meta Ads, and LinkedIn Ads.
              </p>
              <p>
                With over 3 years of deep technical experience, I don't just
                chase metrics — I chase measurable business outcomes.
              </p>
            </div>
          </div>

          <div className="about-panel about-panel--skills">
            <span className="about-panel-eyebrow">Expertise</span>
            <h2 className="about-panel-heading">
              What I {" "}
              <span className="text-gradient">Bring</span>
            </h2>
            <div className="about-skills-list">
              {skills.map((item, i) => (
                <div key={i} className="about-skill-item">
                  <CheckCircle2 className="about-skill-icon" />
                  <span className="about-skill-label">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-panel about-panel--stats">
            <span className="about-panel-eyebrow">By The Numbers</span>
            <div className="about-stats-grid">
              {[
                { value: "3+",   label: "Years Experience"   },
                { value: "340%", label: "Lead Volume Growth" },
                { value: "$2M+", label: "Ad Spend Managed"   },
                { value: "4.8x", label: "Average ROAS"       },
              ].map((s, i) => (
                <div key={i} className="about-stat">
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <blockquote className="about-quote">
              "Good marketing makes the company look smart. Great marketing
              makes the customer feel smart."
            </blockquote>
          </div>

        </div>
      </div>
    </div>
  );
}