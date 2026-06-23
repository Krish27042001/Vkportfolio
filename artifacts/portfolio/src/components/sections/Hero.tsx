import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg   from "@/assets/Vamsi-hero section.png";
import signatureImg from "@/assets/Vamsi_krishna_Signature_website.png";
import "../../styles/hero.css";

export default function Hero() {
  const photoRef  = useRef<HTMLDivElement>(null);
  const sigRef    = useRef<HTMLImageElement>(null);
  const [shrunk,  setShrunk]  = useState(false);
  const [showSig, setShowSig] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const vh       = window.innerHeight;
      const scrollY  = window.scrollY;
      const progress = Math.min(scrollY / vh, 1); // 0 → 1 over 1 viewport

      const photo = photoRef.current;
      if (!photo) return;

      if (progress < 0.01) {
        // Full screen
        photo.style.width        = "100%";
        photo.style.height       = "100%";
        photo.style.borderRadius = "0px";
        photo.style.boxShadow    = "none";
        setShrunk(false);
        setShowSig(false);
      } else if (progress < 1) {
        // Shrinking phase
        const w = 100 - progress * 72;          // 100% → 28%
        const h = 100 - progress * 38;          // 100% → 62%
        const r = progress * 20;                // 0 → 20px radius
        photo.style.width        = `${w}%`;
        photo.style.height       = `${h}%`;
        photo.style.borderRadius = `${r}px`;
        photo.style.boxShadow    = `0 0 ${progress * 60}px rgba(139,92,246,${progress * 0.4})`;
        setShrunk(false);
        setShowSig(false);
      } else {
        // Fully shrunk
        photo.style.width        = "28%";
        photo.style.height       = "62%";
        photo.style.borderRadius = "20px";
        photo.style.boxShadow    = "0 0 60px rgba(139,92,246,0.4)";
        setShrunk(true);
        // Delay signature slightly after shrink
        setTimeout(() => setShowSig(true), 300);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // 240vh scroll track so animation has room + a hold pause before About kicks in
    <div className="hero-track">
      <div className="hero-sticky">

        {/* Ticker rows — only visible when shrunk */}
        <AnimatePresence>
          {shrunk && (
            <>
              <motion.div
                className="hero-ticker-wrap hero-ticker-wrap--top"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                aria-hidden="true"
              >
                <div className="hero-ticker">
                  {Array(8).fill(null).map((_, i) => (
                    <span key={i} className="hero-ticker-item">
                      PERFORMANCE MARKETER <span className="hero-ticker-dot">✦</span>&nbsp;
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="hero-ticker-wrap hero-ticker-wrap--bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                aria-hidden="true"
              >
                <div className="hero-ticker hero-ticker--reverse">
                  {Array(8).fill(null).map((_, i) => (
                    <span key={i} className="hero-ticker-item">
                      DIGITAL MARKETING SPECIALIST <span className="hero-ticker-dot">✦</span>&nbsp;
                    </span>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Photo — starts full screen, JS shrinks it */}
        <div className="hero-photo-frame" ref={photoRef}>
          <img
            src={profileImg}
            alt="Vamsi Krishna"
            className="hero-photo"
            loading="lazy"
          />
          {/* Vignette only when full screen */}
          {!shrunk && <div className="hero-photo-vignette" />}

          {/* Scroll hint on full screen image */}
          {!shrunk && (
            <motion.p
              className="hero-scroll-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.9 }} 
            >
              scroll to explore ↓
            </motion.p>
          )}
        </div>

        {/* Signature — appears over everything once image is shrunk */}
        <AnimatePresence>
          {showSig && (
            <motion.img
              ref={sigRef}
              src={signatureImg}
              alt="Vamsi Krishna signature"
              className="hero-signature"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}