import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const epochs = [
  {
    id: "ΣΩΩ.1",
    title: "Foundation Era",
    description: "Establishing the ethical framework for cybernetic civilization. Building the first ScrollDNA protocols and zk-verified knowledge systems.",
    status: "Active",
    progress: 85
  },
  {
    id: "ΣΩΩ.2", 
    title: "Global Federation",
    description: "Expanding ScrollNode networks across continents. Integrating AI governance with human ethics through distributed consensus.",
    status: "Planning",
    progress: 25
  },
  {
    id: "ΣΩΩ.3",
    title: "Multiversal Science",
    description: "Advanced research into Realica, consciousness mapping, and post-human knowledge architectures.",
    status: "Future",
    progress: 5
  }
];

export const ScrollMission = () => {
  const [currentEpoch, setCurrentEpoch] = useState(0);

  const nextEpoch = () => {
    setCurrentEpoch((prev) => (prev + 1) % epochs.length);
  };

  const prevEpoch = () => {
    setCurrentEpoch((prev) => (prev - 1 + epochs.length) % epochs.length);
  };

  const epoch = epochs[currentEpoch];

  return (
    <section className="py-24 relative overflow-hidden" id="mission">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--scroll-violet) / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 70% 50%, hsl(var(--accent) / 0.2) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-quantum-fade">
            <h2 className="font-literata text-4xl md:text-6xl font-bold heading-academic mb-6">
              Institute Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Federating science, logic, ethics, and AI under public law — evolving through epochs of enlightenment
            </p>
          </div>
          
          {/* Epoch Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4 bg-card/50 backdrop-blur-sm rounded-xl p-2 border border-border/50">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevEpoch}
                className="w-8 h-8 p-0 hover:bg-scroll-violet/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {epochs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentEpoch(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentEpoch 
                        ? 'bg-scroll-violet shadow-glow' 
                        : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextEpoch}
                className="w-8 h-8 p-0 hover:bg-scroll-violet/10"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Current Epoch Display */}
          <div className="quantum-card max-w-4xl mx-auto animate-quantum-fade">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              {/* Epoch Info */}
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-mono text-scroll-violet font-bold">
                      {epoch.id}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      epoch.status === 'Active' ? 'bg-success/10 text-success border border-success/20' :
                      epoch.status === 'Planning' ? 'bg-warning/10 text-warning border border-warning/20' :
                      'bg-muted/10 text-muted-foreground border border-muted-foreground/20'
                    }`}>
                      {epoch.status}
                    </div>
                  </div>
                  
                  <h3 className="font-literata text-3xl font-semibold">
                    {epoch.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {epoch.description}
                  </p>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{epoch.progress}%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div 
                      className="bg-gradient-logic h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${epoch.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Claude Integration */}
                <div className="flex gap-4 pt-4">
                  <Button className="btn-scroll group">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ask Claude about {epoch.id}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="md:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-cybernetic rounded-full opacity-20 animate-pulse-glow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl scroll-glyph animate-float">
                      {currentEpoch === 0 ? 'Σ' : currentEpoch === 1 ? 'Ω' : 'Ψ'}
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-golden rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-golden-foreground font-bold text-sm">
                      {currentEpoch + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vision Statement */}
          <div className="text-center mt-16 space-y-4">
            <p className="text-lg text-scroll-violet font-medium">
              "Every scroll validates truth. Every truth builds civilization."
            </p>
            <p className="text-sm text-muted-foreground">
              — GILC Foundational Principle, Epoch ΣΩΩ.1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};