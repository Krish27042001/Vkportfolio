import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Form submission simulation. In a real app, this would send an email or store in a database.");
  };

  return (
    <section id="contact" className="w-full py-24 px-6 lg:px-12 bg-background/50 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to scale your <span className="text-primary">growth?</span></h2>
              <p className="text-muted-foreground text-lg">Whether you need a fractional growth lead, a campaign audit, or full-service media buying, let's talk about hitting your revenue targets.</p>
            </div>

            <div className="space-y-6">
              <a href="mailto:vamsikrishna27.m@gmail.com" className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/5 transition-colors group">
                <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email Me</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">vamsikrishna27.m@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/vamsi-krishna-167193238/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/5 transition-colors group">
                <div className="p-3 bg-[#0A66C2]/10 text-[#0A66C2] rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Connect on LinkedIn</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-[#0A66C2] transition-colors">linkedin.com/in/vamsi-krishna-167193238</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                  <Input id="name" required placeholder="John Doe" className="bg-background/50 border-white/10 h-12 focus-visible:ring-primary" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Work Email</label>
                  <Input id="email" type="email" required placeholder="john@company.com" className="bg-background/50 border-white/10 h-12 focus-visible:ring-primary" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">How can I help?</label>
                  <Textarea id="message" required placeholder="Tell me about your growth goals, target audience, and current challenges..." className="bg-background/50 border-white/10 min-h-[120px] resize-none focus-visible:ring-primary" />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary/90">
                Let's Grow Your Business 🚀
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
