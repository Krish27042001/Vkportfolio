import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../../styles/experience.css";

const performanceData = [
  { month: "Jan", leads: 45,  cost: 85 },
  { month: "Feb", leads: 52,  cost: 82 },
  { month: "Mar", leads: 68,  cost: 75 },
  { month: "Apr", leads: 85,  cost: 65 },
  { month: "May", leads: 120, cost: 55 },
  { month: "Jun", leads: 156, cost: 48 },
  { month: "Jul", leads: 198, cost: 41 },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="experience-header"
        >
          <div className="experience-badge">Case Study</div>
          <h2 className="experience-title">
            PPC Campaign Expert at <span className="experience-title-accent">Tevatel</span>
          </h2>
          <p className="experience-subtitle">
            Transforming a stagnant lead generation pipeline into a predictable, scalable revenue engine.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="experience-grid">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="experience-left"
          >
            <div className="experience-challenge">
              <h3 className="experience-challenge-title">The Challenge & Strategy</h3>
              <p className="experience-challenge-text">
                Tevatel needed to scale high-quality B2B leads while reducing the overall cost per acquisition. The existing campaigns were broad and suffering from low conversion rates.
              </p>
              <p className="experience-challenge-text">
                I implemented a full-funnel strategy across Google, Meta, and LinkedIn Ads. By refining audience targeting, deploying dynamic retargeting strategies, and rigorously A/B testing ad creatives and landing pages, we achieved unprecedented growth in just 7 months.
              </p>
            </div>

            <div className="experience-stats">
              <div className="experience-stat-card">
                <span className="experience-stat-value green">340%</span>
                <span className="experience-stat-label">Lead Vol Growth</span>
              </div>
              <div className="experience-stat-card">
                <span className="experience-stat-value blue">52%</span>
                <span className="experience-stat-label">CPL Reduction</span>
              </div>
              <div className="experience-stat-card">
                <span className="experience-stat-value purple">4.2x</span>
                <span className="experience-stat-label">CVR Improvement</span>
              </div>
            </div>
          </motion.div>

          {/* Chart Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="experience-chart-card"
          >
            <div className="experience-chart-header">
              <h4 className="experience-chart-title">Performance Trajectory (7 Months)</h4>
              <div className="experience-chart-legend">
                <div className="experience-legend-item">
                  <div className="experience-legend-dot leads" />
                  Leads
                </div>
                <div className="experience-legend-item">
                  <div className="experience-legend-dot cost" />
                  Cost/Lead
                </div>
              </div>
            </div>

            <div className="experience-chart-body">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "rgba(10, 15, 30, 0.9)", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px" }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Area type="monotone" dataKey="leads" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
                  <Area type="monotone" dataKey="cost"  stroke="#f87171" strokeWidth={2} fill="none" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}