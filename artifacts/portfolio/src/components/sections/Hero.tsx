import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import profileImg   from "@/assets/Vamsi-hero section.png";
import signatureImg from "@/assets/Vamsi_krishna_Signature_website.png";
import "../../styles/hero.css";

/*
  Two-phase hero scroll:

  PHASE 1 — SHRINK (shrinkProgress 0 → 1)
    Photo shrinks from full-screen to a centred card.
    Signature fades IN mid-shrink (shrinkP 0.55 → 0.8).

  PHASE 2 — REVEAL (revealProgress 0 → 1)
    Photo holds its shrunk position — no further movement.
    Signature fades fully OUT over the first slice of this phase
    (revealP 0 → 0.12), and only once that's done does the
    "PORTFOLIO" watermark + info text start fading in
    (revealP 0.12 → 1). Everything is driven per-frame off scroll
    position, not timers, so pacing always matches REVEAL_VH.
*/

const SHRINK_VH = 180;    // scroll distance (vh) for the shrink phase
const REVEAL_VH = 480;    // scroll distance (vh) for the reveal phase — extended again
const TOTAL_VH  = SHRINK_VH + REVEAL_VH;

// re-map a 0–1 progress value into a narrower window
const remap = (v: number, start: number, end: number) => {
  if (end <= start) return v >= end ? 1 : 0;
  return Math.min(Math.max((v - start) / (end - start), 0), 1);
};

export default function Hero() {
  const trackRef      = useRef<HTMLDivElement>(null);
  const photoRef       = useRef<HTMLDivElement>(null);
  const fixedWrapRef   = useRef<HTMLDivElement>(null);
  const signatureRef   = useRef<HTMLImageElement>(null);
  const infoStackRef   = useRef<HTMLDivElement>(null);
  const eyebrowRef     = useRef<HTMLDivElement>(null);
  const roleRef        = useRef<HTMLHeadingElement>(null);
  const descRef        = useRef<HTMLParagraphElement>(null);

  // raw scroll-derived targets
  const targetShrink = useRef(0);
  const targetReveal = useRef(0);
  // smoothed values actually applied to styles
  const smoothShrink = useRef(0);
  const smoothReveal = useRef(0);
  const rafId = useRef<number | null>(null);

  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      const vh   = window.innerHeight;

      const scrolled = Math.max(0, -rect.top);

      const shrinkScrollable = (SHRINK_VH / 200) * vh;
      targetShrink.current = Math.min(scrolled / shrinkScrollable, 1);

      const revealScrolled   = Math.max(0, scrolled - shrinkScrollable);
      const revealScrollable = Math.max((REVEAL_VH / 100) * vh, 1);
      targetReveal.current = Math.min(revealScrolled / revealScrollable, 1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    // lower factor = softer, smoother easing on both shrink and reveal
    const LERP = 0.065;

    const tick = () => {
      const dShrink = targetShrink.current - smoothShrink.current;
      smoothShrink.current += Math.abs(dShrink) > 0.0005 ? dShrink * LERP : dShrink;

      const dReveal = targetReveal.current - smoothReveal.current;
      smoothReveal.current += Math.abs(dReveal) > 0.0005 ? dReveal * LERP : dReveal;

      const shrinkP = smoothShrink.current;
      const revealP = smoothReveal.current;

      const photo = photoRef.current;
      if (photo) {
        if (shrinkP < 0.01) {
          photo.style.width        = "100%";
          photo.style.height       = "100%";
          photo.style.borderRadius = "0px";
          photo.style.boxShadow    = "none";
          setShrunk(false);
        } else if (shrinkP < 0.985) {
          const w = 100 - shrinkP * 72;
          const h = 100 - shrinkP * 38;
          const r = shrinkP * 20;
          photo.style.width        = `${w}%`;
          photo.style.height       = `${h}%`;
          photo.style.borderRadius = `${r}px`;
          photo.style.boxShadow    = `0 0 ${shrinkP * 60}px rgba(139,92,246,${shrinkP * 0.4})`;
          setShrunk(false);
        } else {
          // fully shrunk — locked in place, no further movement
          photo.style.width        = "28%";
          photo.style.height       = "62%";
          photo.style.borderRadius = "20px";
          photo.style.boxShadow    = "0 0 60px rgba(139,92,246,0.4)";
          setShrunk(true);
        }
      }

      // Signature: fade in mid-shrink, fade fully out early in the reveal phase —
      // always finishes disappearing before the info stack starts appearing.
      if (signatureRef.current) {
        const fadeIn  = remap(shrinkP, 0.55, 0.8);
        const fadeOut = 1 - remap(revealP, 0, 0.12);
        const sigOpacity = fadeIn * fadeOut;
        signatureRef.current.style.opacity   = `${sigOpacity}`;
        signatureRef.current.style.transform = `scale(${0.88 + 0.12 * fadeIn})`;
      }

      // Info stack: only starts once the signature has finished fading out
      const stackP = remap(revealP, 0.12, 1);
      if (infoStackRef.current) {
        infoStackRef.current.style.opacity = `${stackP}`;
      }
      if (eyebrowRef.current) {
        const p = remap(stackP, 0, 0.4);
        eyebrowRef.current.style.opacity   = `${p}`;
        eyebrowRef.current.style.transform = `translateY(${(1 - p) * -24}px)`;
      }
      if (roleRef.current) {
        const p = remap(stackP, 0.2, 0.65);
        roleRef.current.style.opacity   = `${p}`;
        roleRef.current.style.transform = `translateY(${(1 - p) * -24}px)`;
      }
      if (descRef.current) {
        const p = remap(stackP, 0.4, 0.9);
        descRef.current.style.opacity   = `${p}`;
        descRef.current.style.transform = `translateY(${(1 - p) * -24}px)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    // TOTAL_VH covers shrink phase + extended reveal phase before About kicks in
    <div className="hero-track" ref={trackRef} style={{ height: `${TOTAL_VH}vh` }}>
      <div className="hero-sticky">

        {/* Info stack — behind the photo, opacity/position driven per-frame by scroll */}
        <div className="hero-info-stack" ref={infoStackRef} aria-hidden="true">
          <div className="hero-bg-word">PORTFOLIO</div>

          <div className="hero-info-row hero-info-row--eyebrow" ref={eyebrowRef}>
            <span className="tag tag--accent">PERFORMANCE MARKETER</span>
            <span className="tag">DIGITAL MARKETING SPECIALIST</span>
          </div>

          <h2 className="hero-info-role" ref={roleRef}>
            Vamsi Krishna M.
          </h2>

          <p className="hero-info-desc" ref={descRef}>
            I build performance-driven campaigns and conversion-focused
            funnels that turn clicks into customers.
          </p>
        </div>

        {/* Fixed wrapper — photo + signature. Once shrink completes,
            this no longer moves for the rest of the scroll. */}
        <div className="hero-slide-wrap" ref={fixedWrapRef}>

          <div className="hero-photo-frame" ref={photoRef}>
            <img
              src={profileImg}
              alt="Vamsi Krishna"
              className={`hero-photo${shrunk ? " hero-photo--shrunk" : ""}`}
              loading="lazy"
            />
            {!shrunk && <div className="hero-photo-vignette" />}

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

          {/* Signature — always mounted, opacity/scale fully scroll-driven above */}
          <img
            ref={signatureRef}
            src={signatureImg}
            alt="Vamsi Krishna signature"
            className="hero-signature"
          />

        </div>
      </div>
    </div>
  );
}