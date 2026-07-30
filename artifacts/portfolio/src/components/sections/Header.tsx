import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "../../styles/header.css";
import logoVK from "../../assets/logo_VK.png";

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

export default function Header({ showNav = true }: HeaderProps) {
  const [pastHero, setPastHero] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // Fire once the hero-track bottom edge clears the header height (64px)
  useEffect(() => {
    const handleScroll = () => {
      const track = document.querySelector(".hero-track") as HTMLElement | null;
      if (!track) {
        // fallback: use viewport height if hero-track doesn't exist
        setPastHero(window.scrollY > window.innerHeight * 0.9);
        return;
      }
      setPastHero(track.getBoundingClientRect().bottom <= 64);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants
  const headerVariants = {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      y: -80,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const navContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.15,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const navItemVariants = {
    hidden: {
      opacity: 0,
      y: -12,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      filter: "blur(4px)",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const logoVariants = {
    hidden:  { opacity: 0, scale: 0.85, rotate: -6 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      rotate: -6,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence>
      {pastHero && (
        <motion.header
          key="site-header"
          className="header header--with-nav header--scrolled"
          data-testid="site-header"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="header-inner">

            {/* ── Logo ── */}
            <motion.a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="header-logo"
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={logoVK}
                alt="Vamsi Krishna M. logo"
                className="header-logo-img"
              />
            </motion.a>

            {/* ── Nav ── */}
            <nav className="header-nav" aria-label="Main navigation">
              <motion.div
                className="header-nav-items"
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    className="header-nav-link"
                    onClick={() => scrollTo(item.href)}
                    variants={navItemVariants}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {item.label}
                    <span className="header-nav-arrow" aria-hidden="true">▼</span>
                  </motion.button>
                ))}
              </motion.div>
            </nav>

          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}