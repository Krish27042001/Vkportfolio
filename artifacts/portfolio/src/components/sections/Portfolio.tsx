import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp } from "lucide-react";
import "../../styles/portfolio.css";

const campaigns = [
  {
    title: "B2B SaaS Lead Generation",
    platform: "LinkedIn + Google Ads",
    objective: "Scale qualified demos for enterprise software targeting CTOs.",
    strategy: "Created high-intent search campaigns paired with LinkedIn account-based marketing (ABM) targeting specific decision-makers with gated whitepapers.",
    result: "6x pipeline growth with a 45% decrease in cost per SQL.",
    metrics: ["6x Pipeline", "-45% Cost/SQL"],
  },
  {
    title: "E-commerce Performance",
    platform: "Meta Ads + Google Shopping",
    objective: "Increase direct-to-consumer sales during peak Q4 season.",
    strategy: "Deployed dynamic product ads with personalized retargeting based on cart abandonment behavior. Scaled budget intelligently using automated bidding.",
    result: "Meta Ads ROAS of 4.8x and 320% overall revenue growth YoY.",
    metrics: ["4.8x ROAS", "+320% Revenue"],
  },
  {
    title: "Brand Awareness & Retargeting",
    platform: "Programmatic + YouTube",
    objective: "Build mindshare in a crowded market prior to a major product launch.",
    strategy: "Orchestrated a sequential video ad strategy to tell the brand story, followed by high-frequency display retargeting to maintain presence.",
    result: "Reached 2.1M targeted impressions while reducing blended CPM by 40%.",
    metrics: ["2.1M Impressions", "-40% CPM"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="portfolio-header"
        >
          <h2 className="portfolio-title">
            Campaign <span className="portfolio-title-accent">Showcase</span>
          </h2>
          <p className="portfolio-subtitle">Real campaigns. Real strategies. Real revenue impact.</p>
        </motion.div>

        {/* Grid */}
        <div className="portfolio-grid">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="portfolio-card"
            >
              <div className="portfolio-card-inner">

                <div className="portfolio-card-platform">{campaign.platform}</div>
                <h3 className="portfolio-card-title">{campaign.title}</h3>

                <div className="portfolio-card-sections">
                  <div>
                    <div className="portfolio-card-section-label">
                      <Target className="portfolio-section-icon icon-blue" />
                      <h4>Objective</h4>
                    </div>
                    <p className="portfolio-card-section-text">{campaign.objective}</p>
                  </div>

                  <div>
                    <div className="portfolio-card-section-label">
                      <Lightbulb className="portfolio-section-icon icon-amber" />
                      <h4>Strategy</h4>
                    </div>
                    <p className="portfolio-card-section-text">{campaign.strategy}</p>
                  </div>

                  <div>
                    <div className="portfolio-card-section-label">
                      <TrendingUp className="portfolio-section-icon icon-emerald" />
                      <h4>Result</h4>
                    </div>
                    <p className="portfolio-card-section-text">{campaign.result}</p>
                  </div>
                </div>

                <div className="portfolio-card-metrics">
                  {campaign.metrics.map((metric) => (
                    <span key={metric} className="portfolio-metric-tag">
                      {metric}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}