import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "../../styles/header.css";

const navItems = [
  { label: "About",      href: "about"      },
  { label: "Skills",     href: "skills"     },
  { label: "Experience", href: "experience" },
  { label: "Portfolio",  href: "portfolio"  },
  { label: "Contact Me", href: "contact"    },
];

interface HeaderProps {
  showNav?: boolean;
}

function TypedLabel({ text, startDelay }: { text: string; startDelay: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started,   setStarted]   = useState(false);

  useEffect(() => {
    setDisplayed(""); setStarted(false);
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || displayed.length >= text.length) return;
    const t = setTimeout(() =>
      setDisplayed(text.slice(0, displayed.length + 1)), 38);
    return () => clearTimeout(t);
  }, [started, displayed, text]);

  return (
    <span className="header-nav-typed">
      {displayed}
      {displayed.length < text.length && (
        <span className="header-nav-cursor">|</span>
      )}
    </span>
  );
}

export default function Header({ showNav = true }: HeaderProps) {
  const [pastHero, setPastHero] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      const track = document.querySelector(".hero-track") as HTMLElement | null;
      if (!track) return;
      setPastHero(track.getBoundingClientRect().bottom <= 64);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getDelay = (index: number) => {
    let delay = 0;
    for (let i = 0; i < index; i++)
      delay += navItems[i].label.length * 38 + 120;
    return delay;
  };

  return (
    <header
      className={`header${showNav ? " header--with-nav" : ""}${pastHero ? " header--scrolled" : ""}`}
      data-testid="site-header"
    >
      <div className="header-inner">

        {/* Name — only visible after hero is scrolled past */}
        <AnimatePresence>
          {pastHero && (
            <motion.a
              key="logo"
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="header-logo"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span>VAMSI<span className="header-logo-accent"> KRISHNA</span></span>
            </motion.a>
          )}
        </AnimatePresence>

        {/* Nav */}
        <nav className="header-nav">
          <AnimatePresence>
            {showNav && navItems.map((item, i) => (
              <motion.button
                key={item.href}
                className="header-nav-link"
                onClick={() => scrollTo(item.href)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, delay: getDelay(i) / 1000 }}
              >
                <TypedLabel text={item.label} startDelay={getDelay(i)} />
                <span className="header-nav-arrow">▼</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </nav>

      </div>
    </header>
  );
}