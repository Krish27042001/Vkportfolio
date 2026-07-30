import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Funnelandcasestudies.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FunnelStage {
  label: string;
  value: string;
  sub: string;
  pct: number;
  color: string;
  textColor: string;
}

interface Metric {
  num: string;
  label: string;
}

interface CaseStudy {
  industry: string;
  tagClass: string;
  title: string;
  sub: string;
  metrics: Metric[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const funnelStages: FunnelStage[] = [
  {
    label: "Impressions",
    value: "500K / month",
    sub: "",
    pct: 100,
    color: "#534AB7",
    textColor: "#EEEDFE",
  },
  {
    label: "Clicks",
    value: "18,000 clicks",
    sub: "CTR 3.6%",
    pct: 72,
    color: "#3C3489",
    textColor: "#CECBF6",
  },
  {
    label: "Landing page",
    value: "9,000 sessions",
    sub: "CVR 12%",
    pct: 50,
    color: "#26215C",
    textColor: "#AFA9EC",
  },
  {
    label: "Leads",
    value: "1,080 leads",
    sub: "",
    pct: 30,
    color: "#534AB7",
    textColor: "#fff",
  },
  {
    label: "MQLs",
    value: "324 MQLs",
    sub: "",
    pct: 16,
    color: "#7F77DD",
    textColor: "#26215C",
  },
  {
    label: "Closed",
    value: "65 deals · 6%",
    sub: "",
    pct: 6,
    color: "#1D9E75",
    textColor: "#04342C",
  },
];

const funnelStats = [
  { num: "3.6%", label: "Avg. CTR", highlight: false },
  { num: "12%", label: "LP conv. rate", highlight: false },
  { num: "30%", label: "Lead-to-MQL", highlight: false },
  { num: "6%", label: "Close rate", highlight: true },
];

const caseStudies: CaseStudy[] = [
  {
    industry: "B2B SaaS",
    tagClass: "tagPurple",
    title: "Lead gen overhaul for a project management SaaS",
    sub: "Google Ads + landing page CRO · 6-month engagement",
    metrics: [
      { num: "↓ 58%", label: "Cost per lead" },
      { num: "3.8x", label: "Qualified leads" },
      { num: "12%", label: "LP conv. rate" },
      { num: "₹12L", label: "Budget managed" },
    ],
  },
  {
    industry: "E-commerce · D2C",
    tagClass: "tagCoral",
    title: "ROAS recovery for a D2C fashion brand",
    sub: "Meta + Google Shopping · 3-month sprint",
    metrics: [
      { num: "4.7x", label: "ROAS" },
      { num: "↑ 220%", label: "Revenue" },
      { num: "↓ 34%", label: "CAC" },
      { num: "₹30L", label: "Ad spend" },
    ],
  },
  {
    industry: "Healthcare",
    tagClass: "tagTeal",
    title: "Patient acquisition for a multi-specialty clinic chain",
    sub: "Google Search + Local SEO · Ongoing retainer",
    metrics: [
      { num: "↑ 3.1x", label: "Appt. bookings" },
      { num: "↓ 41%", label: "Cost per appt." },
      { num: "#1", label: "Local rank · 6 cities" },
      { num: "92%", label: "Impression share" },
    ],
  },
  {
    industry: "Ed-tech",
    tagClass: "tagBlue",
    title: "Course enrolment scale-up for an online skills platform",
    sub: "YouTube + Meta funnel + email nurture · 4 months",
    metrics: [
      { num: "↑ 5.2x", label: "Enrolments" },
      { num: "₹380", label: "Cost per enrol." },
      { num: "28%", label: "Email open rate" },
      { num: "↑ 190%", label: "Retargeting CVR" },
    ],
  },
  {
    industry: "Real estate",
    tagClass: "tagAmber",
    title: "High-intent buyer leads for a luxury property developer",
    sub: "Google Ads + Meta lead forms + WhatsApp follow-up · 5 months",
    metrics: [
      { num: "↓ 63%", label: "Cost per lead" },
      { num: "↑ 4.4x", label: "Site visits booked" },
      { num: "18%", label: "Lead-to-visit rate" },
      { num: "₹45L", label: "Budget managed" },
    ],
  },
  {
    industry: "Fintech",
    tagClass: "tagGreen",
    title: "App installs and KYC completions for a digital lending app",
    sub: "UAC + Meta App Ads + ASO · 3 months",
    metrics: [
      { num: "↑ 6.8x", label: "App installs" },
      { num: "₹22", label: "Cost per install" },
      { num: "44%", label: "Install-to-KYC" },
      { num: "↑ 310%", label: "Organic rank" },
    ],
  },
  {
    industry: "Hospitality",
    tagClass: "tagPink",
    title: "Direct booking uplift for a boutique hotel group",
    sub: "Google Hotel Ads + remarketing + SEO · 8 months",
    metrics: [
      { num: "↑ 2.9x", label: "Direct bookings" },
      { num: "↓ 22%", label: "OTA dependency" },
      { num: "5.1x", label: "ROAS" },
      { num: "↑ 78%", label: "Organic traffic" },
    ],
  },
];

// ─── Hook: intersection observer ─────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FunnelBar({
  stage,
  index,
  triggered,
}: {
  stage: FunnelStage;
  index: number;
  triggered: boolean;
}) {
  return (
    <div
      className={styles.funnelRow}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className={styles.funnelLabel}>{stage.label}</span>

      <div className={styles.funnelTrack}>
        <div
          className={styles.funnelFill}
          style={{
            width: triggered ? `${stage.pct}%` : "0%",
            background: stage.color,
            transitionDelay: `${index * 80 + 100}ms`,
          }}
        >
          <span
            className={styles.funnelFillText}
            style={{ color: stage.textColor }}
          >
            {stage.value}
            {stage.sub && (
              <span className={styles.funnelSub}>&nbsp;· {stage.sub}</span>
            )}
          </span>
        </div>
      </div>

      <span
        className={styles.funnelPct}
        style={{ color: stage.color === "#1D9E75" ? "#1D9E75" : "#534AB7" }}
      >
        {stage.pct}%
      </span>
    </div>
  );
}

function CaseCard({
  cs,
  index,
  triggered,
}: {
  cs: CaseStudy;
  index: number;
  triggered: boolean;
}) {
  return (
    <div
      className={`${styles.caseCard} ${triggered ? styles.caseCardVisible : ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className={styles.caseTop}>
        <span className={`${styles.tag} ${styles[cs.tagClass]}`}>
          {cs.industry}
        </span>
        <p className={styles.caseTitle}>{cs.title}</p>
        <p className={styles.caseSub}>{cs.sub}</p>
      </div>

      <hr className={styles.divider} />

      <div className={styles.metricsGrid}>
        {cs.metrics.map((m, i) => (
          <div key={i} className={styles.metricItem}>
            <span className={styles.metricNum}>{m.num}</span>
            <span className={styles.metricLabel}>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function FunnelAndCaseStudies() {
  const funnel = useInView(0.1);
  const cases = useInView(0.05);

  return (
    <section className={styles.wrapper}>

      {/* ── Conversion funnel ── */}
      <div ref={funnel.ref} className={styles.block}>
        <p className={styles.sectionLabel}>Conversion funnel expertise</p>

        <div className={styles.card}>
          <p className={styles.cardSub}>
            Full-funnel visibility — from first touch to closed revenue
          </p>

          <div className={styles.funnelStack}>
            {funnelStages.map((stage, i) => (
              <FunnelBar
                key={stage.label}
                stage={stage}
                index={i}
                triggered={funnel.inView}
              />
            ))}
          </div>

          <div className={styles.statsRow}>
            {funnelStats.map((s) => (
              <div
                key={s.label}
                className={`${styles.statChip} ${s.highlight ? styles.statChipGreen : ""}`}
              >
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Case studies ── */}
      <div ref={cases.ref} className={styles.block}>
        <p className={styles.sectionLabel}>Case studies · by industry</p>

        <div className={styles.caseGrid}>
          {caseStudies.map((cs, i) => (
            <CaseCard
              key={cs.industry}
              cs={cs}
              index={i}
              triggered={cases.inView}
            />
          ))}
        </div>
      </div>

    </section>
  );
}