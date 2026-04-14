import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ResponsiveContainerProps } from 'recharts';
import { Card, CardContent } from "@/components/ui/card";

const performanceData = [
  { month: 'Jan', leads: 45, cost: 85 },
  { month: 'Feb', leads: 52, cost: 82 },
  { month: 'Mar', leads: 68, cost: 75 },
  { month: 'Apr', leads: 85, cost: 65 },
  { month: 'May', leads: 120, cost: 55 },
  { month: 'Jun', leads: 156, cost: 48 },
  { month: 'Jul', leads: 198, cost: 41 },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 px-6 lg:px-12 bg-background/50 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Case Study
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">PPC Campaign Expert at <span className="text-primary">Tevatel</span></h2>
          <p className="text-muted-foreground max-w-2xl">Transforming a stagnant lead generation pipeline into a predictable, scalable revenue engine.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">The Challenge & Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tevatel needed to scale high-quality B2B leads while reducing the overall cost per acquisition. The existing campaigns were broad and suffering from low conversion rates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I implemented a full-funnel strategy across Google, Meta, and LinkedIn Ads. By refining audience targeting, deploying dynamic retargeting strategies, and rigorously A/B testing ad creatives and landing pages, we achieved unprecedented growth in just 7 months.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="glass-card border-white/5 bg-white/5">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-extrabold text-emerald-400 mb-2">340%</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Lead Vol Growth</span>
                </CardContent>
              </Card>
              <Card className="glass-card border-white/5 bg-white/5">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-extrabold text-blue-400 mb-2">52%</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">CPL Reduction</span>
                </CardContent>
              </Card>
              <Card className="glass-card border-white/5 bg-white/5">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-extrabold text-purple-400 mb-2">4.2x</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">CVR Improvement</span>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 h-[400px] w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-semibold">Performance Trajectory (7 Months)</h4>
              <div className="flex gap-4 text-xs font-medium">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary" /> Leads</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-400" /> Cost/Lead</div>
              </div>
            </div>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(10, 15, 30, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="leads" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
                  <Area type="monotone" dataKey="cost" stroke="#f87171" strokeWidth={2} fill="none" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
