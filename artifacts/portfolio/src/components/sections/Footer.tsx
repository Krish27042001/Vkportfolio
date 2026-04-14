import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 lg:px-12 border-t border-white/10 bg-background relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg text-foreground">Vamsi Krishna</p>
          <p className="text-sm text-muted-foreground mt-1">Digital Marketing Expert & Performance Marketing Specialist</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground">© 2024 Vamsi Krishna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
