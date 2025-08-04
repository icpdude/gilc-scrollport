import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Globe, 
  Github, 
  FileText, 
  Users, 
  ExternalLink,
  Hash,
  CheckCircle2
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            {/* GILC Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-scroll rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold text-sm">G</span>
                </div>
                <span className="font-literata font-semibold text-lg">GILC</span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                Global Institute for Logic & Cybernetics — Advancing ethical AI and 
                cybernetic civilization through verified knowledge systems.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Hash className="w-3 h-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Epoch ΣΩΩ.1</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-3 h-3 text-success" />
                  <span className="text-success">zk-verified</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-medium">Institute</h4>
              <nav className="space-y-2">
                <a href="#mission" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Mission & Vision
                </a>
                <a href="#pillars" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Six Pillars
                </a>
                <a href="#knowledge" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Knowledge Engine
                </a>
                <a href="#participation" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Global Participation
                </a>
                <a href="#legal" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Legal & Ethics
                </a>
              </nav>
            </div>
            
            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-medium">Resources</h4>
              <nav className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <FileText className="w-3 h-3" />
                  Charter & Whitepaper
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Users className="w-3 h-3" />
                  ScrollDAO
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-3 h-3" />
                  GitHub Repository
                  <ExternalLink className="w-2 h-2" />
                </a>
                <a href="#claude" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <span className="scroll-glyph text-xs">ψ</span>
                  Claude Agent Portal
                </a>
              </nav>
            </div>
            
            {/* Contact & Links */}
            <div className="space-y-4">
              <h4 className="font-medium">Connect</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:contact@g-i-l-c.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  contact@g-i-l-c.com
                </a>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-3 h-3 text-muted-foreground" />
                    <span className="text-muted-foreground">ENS:</span>
                  </div>
                  <div className="pl-5">
                    <Badge variant="outline" className="text-xs font-mono">
                      gilc.eth
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Hash className="w-3 h-3 text-muted-foreground" />
                    <span className="text-muted-foreground">zkLink:</span>
                  </div>
                  <div className="pl-5">
                    <Badge variant="outline" className="text-xs font-mono">
                      gilc.ipns.link
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* IPFS & Blockchain Info */}
          <div className="border-t border-border/50 pt-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h5 className="font-medium text-sm">IPFS & Chain Sync</h5>
                <div className="space-y-2">
                  <div className="scroll-hash text-xs">
                    IPFS CID: QmY4nX3j2K1mZ8vR7wQ2fH9bN3cE5pL6tS8uI1dV4gF2h7kJ9
                  </div>
                  <div className="scroll-hash text-xs">
                    Chain Hash: 0x9f2c5a8d1e4b7c3f6a9d2e5f8b1c4e7a3f6c9e2d5f8a1b4c7e3f6a9d2e5f8b1c
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-sm">Last Updated</h5>
                <div className="text-sm text-muted-foreground">
                  December 4, 2024 • 14:32 UTC
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
                  <span className="text-xs text-success">Synchronized</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright & License */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                © 2024 Global Institute for Logic & Cybernetics
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Badge variant="outline" className="text-xs">MIT</Badge>
                <span>∩</span>
                <Badge variant="outline" className="text-xs">CC-BY 4.0</Badge>
                <span>∩</span>
                <Badge variant="outline" className="text-xs">Creative Commons Scholar</Badge>
              </div>
            </div>
            
            <div className="text-center mt-6 pt-6 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                "Every scroll validates truth. Every truth builds civilization." — GILC Foundational Principle
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};