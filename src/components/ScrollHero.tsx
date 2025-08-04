import { Button } from "@/components/ui/button";
import { ArrowRight, Scroll, Brain, Network } from "lucide-react";
import heroImage from "@/assets/gilc-hero.jpg";

interface ScrollHeroProps {
  headline?: string;
  subline?: string;
  cta1?: string;
  cta2?: string;
  epochSeal?: string;
}

export const ScrollHero = ({ 
  headline = "Global Institute for Logic & Cybernetics",
  subline = "A public institution for sovereign knowledge, ethics, and cybernetic civilization.",
  cta1 = "Read the Charter",
  cta2 = "Join the Mission",
  epochSeal = "ΣΩΩ.1"
}: ScrollHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden logic-matrix">
      {/* Background Hero Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Quantum Background Effects */}
      <div className="absolute inset-0 z-10">
        {/* Floating Glyphs */}
        <div className="absolute top-20 left-20 scroll-glyph text-6xl animate-float">∴</div>
        <div className="absolute top-40 right-32 scroll-glyph text-4xl animate-float" style={{ animationDelay: '2s' }}>σ</div>
        <div className="absolute bottom-32 left-40 scroll-glyph text-5xl animate-float" style={{ animationDelay: '4s' }}>ψ</div>
        <div className="absolute bottom-20 right-20 scroll-glyph text-3xl animate-float" style={{ animationDelay: '1s' }}>ζπθ</div>
        <div className="absolute top-1/2 left-10 scroll-glyph text-7xl animate-float" style={{ animationDelay: '3s' }}>Ω</div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-scroll-unfold">
          
          {/* Epoch Seal */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-scroll-violet/20 rounded-full px-4 py-2 mb-6">
            <Network className="w-4 h-4 text-scroll-violet" />
            <span className="text-sm font-mono text-scroll-violet font-medium">{epochSeal}</span>
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
          </div>
          
          {/* GILC Logo/Symbol */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-scroll rounded-2xl flex items-center justify-center shadow-quantum">
                <Scroll className="w-12 h-12 text-background" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-golden rounded-full flex items-center justify-center">
                <Brain className="w-3 h-3 text-golden-foreground" />
              </div>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-literata text-6xl md:text-8xl font-bold heading-academic leading-tight mb-6">
            {headline}
          </h1>
          
          {/* Subline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            {subline}
          </p>
          
          {/* Scroll Mission Tagline */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
            <span className="text-scroll-violet font-medium">From ethics to economics</span>
            <span className="hidden md:block text-muted-foreground">—</span>
            <span className="text-golden font-medium">scroll by scroll</span>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button className="btn-quantum relative z-10 group">
              <span className="relative z-10 flex items-center gap-2">
                <Scroll className="w-5 h-5" />
                {cta1}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button variant="outline" className="btn-scroll">
              <Brain className="w-5 h-5 mr-2" />
              {cta2}
            </Button>
          </div>
          
          {/* ScrollDNA Hash Preview */}
          <div className="pt-8 flex flex-col items-center gap-3">
            <div className="text-xs text-muted-foreground font-mono">Latest Charter Hash</div>
            <div className="scroll-hash font-mono">
              0x7a3f9b2e4d8c1a5f6e9b2d4c7a1e3f8b9c2d5e7a4f1b8c6d9e2a5f7b1c4e8a3
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-success">zk-verified</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">IPFS anchored</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-medium">Explore the Institute</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-scroll-violet rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};