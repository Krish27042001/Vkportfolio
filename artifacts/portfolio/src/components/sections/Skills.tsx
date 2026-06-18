import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Target, Users, TrendingUp, Bot, Database,
  Mail, Layout, BarChart3, Tags, PieChart, GitCompare,
  Filter, Repeat, Briefcase, PenTool, LineChart,
  ChevronDown, ChevronUp, Rocket,
} from "lucide-react";
import "../../styles/skills.css";
import { SiGoogleanalytics, SiMeta } from "react-icons/si";

/* ── Brand SVG icons (inline) ── */
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="brand-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const MetaIcon = () => (
  <svg viewBox="0 0 24 24" className="brand-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.004 12C2.004 6.477 6.479 2 12 2s9.996 4.477 9.996 10S17.521 22 12 22 2.004 17.523 2.004 12z" fill="#1877F2"/>
    <path d="M8.5 9.5C8.5 8.12 9.5 7 10.75 7c1.17 0 1.93.7 2.83 2.1l.82 1.3.82-1.3C16.12 7.7 16.88 7 18.13 7c1.25 0 2.25 1.12 2.25 2.5 0 .56-.16 1.1-.44 1.58L15.5 18H13l-4.06-6.92A2.97 2.97 0 018.5 9.5z" fill="white"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="brand-svg" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GA4Icon = () => (
  <svg viewBox="0 0 24 24" className="brand-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#E37400"/>
    <rect x="11" y="5" width="4" height="14" rx="2" fill="white"/>
    <rect x="5" y="11" width="4" height="8" rx="2" fill="white" opacity="0.7"/>
    <circle cx="19" cy="17" r="2" fill="white"/>
  </svg>
);

const GTMIcon = () => (
  <svg viewBox="0 0 24 24" className="brand-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#8AB4F8"/>
    <path d="M12 4L20 8V16L12 20L4 16V8L12 4Z" fill="white" opacity="0.9"/>
    <path d="M12 8L16 10V14L12 16L8 14V10L12 8Z" fill="#4285F4"/>
  </svg>
);

const LookerIcon = () => (
  <svg viewBox="0 0 24 24" className="brand-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#4285F4"/>
    <circle cx="12" cy="10" r="4" fill="white" opacity="0.9"/>
    <circle cx="12" cy="10" r="2" fill="#4285F4"/>
    <path d="M10 14l-3 5h10l-3-5" fill="white" opacity="0.7"/>
  </svg>
);

const competencies = [
  /* ── First 9 (default visible) ── */
  { title: "Google Ads",                   IconComp: GoogleIcon,  level: 95, barColor: "#4285F4", iconBg: "#1a1a2e" },
  { title: "Meta Ads",                     IconComp: SiMeta,    level: 93, barColor: "#1877F2", iconBg: "#1a1a2e" },
  { title: "LinkedIn Ads",                 IconComp: LinkedInIcon,level: 88, barColor: "#0A66C2", iconBg: "#1a1a2e" },
  { title: "SEO & SEM",                    IconComp: Search,      level: 85, barColor: "#10b981", iconBg: "#0d2018", iconColor: "#10b981" },
  { title: "B2B Lead Generation",          IconComp: Users,       level: 92, barColor: "#a855f7", iconBg: "#1e0d2e", iconColor: "#a855f7" },
  { title: "Conversion Rate Optimization", IconComp: TrendingUp,  level: 80, barColor: "#f97316", iconBg: "#2e1a0d", iconColor: "#f97316" },
  { title: "Performance Marketing",        IconComp: Rocket,      level: 96, barColor: "#3b82f6", iconBg: "#0d1a2e", iconColor: "#3b82f6" },
  { title: "Marketing Automation",         IconComp: Bot,         level: 94, barColor: "#ec4899", iconBg: "#2e0d1e", iconColor: "#ec4899" },
  { title: "Email Marketing",              IconComp: Mail,        level: 92, barColor: "#06b6d4", iconBg: "#0d2430", iconColor: "#06b6d4" },
  /* ── Remaining 12 (hidden initially) ── */
  { title: "CRM Management",               IconComp: Database,    level: 89, barColor: "#8b5cf6", iconBg: "#1a0d2e", iconColor: "#8b5cf6" },
  { title: "Landing Page Optimization",    IconComp: Layout,      level: 91, barColor: "#14b8a6", iconBg: "#0d2420", iconColor: "#14b8a6" },
  { title: "Google Analytics 4 (GA4)",     IconComp: SiGoogleanalytics,     level: 94, barColor: "#e37400", iconBg: "#e37400" },
  { title: "Google Tag Manager (GTM)",     IconComp: GoogleIcon,     level: 92, barColor: "#8ab4f8", iconBg: "#1a1a1a" },
  // { title: "Looker Studio Reporting",      IconComp: LookerIcon,  level: 90, barColor: "#4285F4", iconBg: "#1a1a1a" },
  { title: "A/B Testing",                  IconComp: GitCompare,  level: 91, barColor: "#f43f5e", iconBg: "#2e0d14", iconColor: "#f43f5e" },
  // { title: "Funnel Strategy",              IconComp: Filter,      level: 95, barColor: "#6366f1", iconBg: "#0d0d2e", iconColor: "#6366f1" },
  { title: "Retargeting & Remarketing",    IconComp: Repeat,      level: 93, barColor: "#7c3aed", iconBg: "#1a0d2e", iconColor: "#7c3aed" },
  // { title: "Sales Enablement",             IconComp: Briefcase,   level: 88, barColor: "#0ea5e9", iconBg: "#0d1e2e", iconColor: "#0ea5e9" },
  { title: "Copywriting",                  IconComp: PenTool,     level: 90, barColor: "#d946ef", iconBg: "#2e0d2e", iconColor: "#d946ef" },
  { title: "Growth Strategy",              IconComp: LineChart,   level: 96, barColor: "#22c55e", iconBg: "#0d2014", iconColor: "#22c55e" },
  { title: "Target & Audience Segmentation",IconComp: Target,     level: 91, barColor: "#f59e0b", iconBg: "#2e200d", iconColor: "#f59e0b" },
];

export default function Skills() {
  const [showAll, setShowAll] = useState(false);
  const visibleCompetencies = showAll ? competencies : competencies.slice(0, 9);

  const handleShowLess = () => {
    setShowAll(false);
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2 className="skills-title">
            Core <span className="skills-title-accent">Competencies</span>
          </h2>
          <p className="skills-subtitle">
            The technical stack and strategic skills I use to build scalable growth engines.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="skills-grid">
          <AnimatePresence>
            {visibleCompetencies.map((skill, index) => {
              const IconComp = skill.IconComp;
              const isBrandSvg = [GoogleIcon, MetaIcon, LinkedInIcon, GA4Icon, GTMIcon, LookerIcon].includes(IconComp as any);

              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (index % 9) * 0.07, ease: "easeOut" }}
                  className="skills-card"
                  aria-label={`${skill.title} — ${skill.level}%`}
                >
                  {/* Card Row */}
                  <div className="skills-card-row">
                    {/* Icon */}
                    <div
                      className="skills-icon-box"
                      style={{ backgroundColor: skill.iconBg }}
                    >
                      {isBrandSvg ? (
                        <IconComp />
                      ) : (
                        <IconComp
                          size={22}
                          color={skill.iconColor || "#ffffff"}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Title */}
                    <span className="skills-card-name">{skill.title}</span>

                    {/* Percentage */}
                    <span className="skills-card-pct">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="skills-bar-track">
                    <motion.div
                      className="skills-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.15 + (index % 9) * 0.07, ease: "easeOut" }}
                      style={{ backgroundColor: skill.barColor }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View More / Show Less */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="skills-btn-wrapper"
        >
          <button
            className="skills-view-btn"
            onClick={showAll ? handleShowLess : () => setShowAll(true)}
            aria-expanded={showAll}
          >
            <span>{showAll ? "Show Less" : "View More Competencies"}</span>
            {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </motion.div>

      </div>
    </section>
  );
}