import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";

const campaigns = [
  {
    title: "B2B SaaS Lead Generation",
    platform: "LinkedIn + Google Ads",
    objective: "Scale qualified demos for enterprise software targeting CTOs.",
    strategy: "Created high-intent search campaigns paired with LinkedIn account-based marketing (ABM) targeting specific decision-makers with gated whitepapers.",
    result: "6x pipeline growth with a 45% decrease in cost per SQL.",
    metrics: ["6x Pipeline", "-45% Cost/SQL"]
  },
  {
    title: "E-commerce Performance",
    platform: "Meta Ads + Google Shopping",
    objective: "Increase direct-to-consumer sales during peak Q4 season.",
    strategy: "Deployed dynamic product ads with personalized retargeting based on cart abandonment behavior. Scaled budget intelligently using automated bidding.",
    result: "Meta Ads ROAS of 4.8x and 320% overall revenue growth YoY.",
    metrics: ["4.8x ROAS", "+320% Revenue"]
  },
  {
    title: "Brand Awareness & Retargeting",
    platform: "Programmatic + YouTube",
    objective: "Build mindshare in a crowded market prior to a major product launch.",
    strategy: "Orchestrated a sequential video ad strategy to tell the brand story, followed by high-frequency display retargeting to maintain presence.",
    result: "Reached 2.1M targeted impressions while reducing blended CPM by 40%.",
    metrics: ["2.1M Impressions", "-40% CPM"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-24 px-6 lg:px-12 bg-background/50 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Campaign <span className="text-primary">Showcase</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Real campaigns. Real strategies. Real revenue impact.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50 transition-colors"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold tracking-wider text-primary uppercase mb-2">{campaign.platform}</div>
                <h3 className="text-xl font-bold mb-6">{campaign.title}</h3>
                
                <div className="space-y-6 flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-foreground/80">
                      <Target className="h-4 w-4 text-blue-400" />
                      <h4 className="text-sm font-semibold">Objective</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{campaign.objective}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-foreground/80">
                      <Lightbulb className="h-4 w-4 text-amber-400" />
                      <h4 className="text-sm font-semibold">Strategy</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{campaign.strategy}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-foreground/80">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                      <h4 className="text-sm font-semibold">Result</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{campaign.result}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex gap-3">
                  {campaign.metrics.map(metric => (
                    <span key={metric} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-primary-foreground border border-white/10">
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
