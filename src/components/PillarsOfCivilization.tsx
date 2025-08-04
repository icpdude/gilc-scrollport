import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Network, 
  Shield, 
  Scale, 
  Atom, 
  Users, 
  ArrowRight,
  ExternalLink 
} from "lucide-react";

const pillars = [
  {
    id: "logic",
    icon: Brain,
    title: "Logic Systems",
    subtitle: "Formal, Computational, Applied",
    description: "Advanced reasoning architectures, proof systems, and computational logic frameworks for ethical decision-making.",
    tags: ["Formal Logic", "Proof Theory", "Computational Reasoning"],
    color: "scroll-violet",
    scrollCount: 47
  },
  {
    id: "cybernetics", 
    icon: Network,
    title: "Cybernetics",
    subtitle: "Systemic, Recursive, Regulatory",
    description: "Feedback systems, regulatory mechanisms, and self-organizing networks for sustainable civilization.",
    tags: ["Systems Theory", "Feedback Loops", "Emergence"],
    color: "accent",
    scrollCount: 32
  },
  {
    id: "ethics",
    icon: Shield,
    title: "Ethical AI & Law",
    subtitle: "Governance, Rights, Responsibility",
    description: "AI governance frameworks, digital rights, and ethical protocols for human-AI collaboration.",
    tags: ["AI Ethics", "Digital Rights", "Governance"],
    color: "success",
    scrollCount: 58
  },
  {
    id: "knowledge",
    icon: Scale,
    title: "Knowledge Civil Engineering",
    subtitle: "Architecture, Infrastructure, Access",
    description: "Designing knowledge infrastructures, information architectures, and democratic access systems.",
    tags: ["Information Architecture", "Knowledge Systems", "Public Access"],
    color: "golden",
    scrollCount: 29
  },
  {
    id: "realica",
    icon: Atom,
    title: "Multiversal Science",
    subtitle: "Realica, AI+HCI, Multiscale",
    description: "Exploring consciousness, reality mapping, and post-human knowledge architectures across scales.",
    tags: ["Consciousness Studies", "Reality Mapping", "Multiscale Systems"],
    color: "warning",
    scrollCount: 15
  },
  {
    id: "governance",
    icon: Users,
    title: "Decentralized Governance",
    subtitle: "DAO, zk-Compliance, Consensus",
    description: "Distributed decision-making, zero-knowledge compliance, and consensus mechanisms for global coordination.",
    tags: ["DAO", "zk-SNARK", "Consensus"],
    color: "destructive",
    scrollCount: 23
  }
];

export const PillarsOfCivilization = () => {
  return (
    <section className="py-24 relative" id="pillars">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-quantum-fade">
            <h2 className="font-literata text-4xl md:text-6xl font-bold heading-academic mb-6">
              Pillars of Civilization
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six foundational domains shaping the future of human-AI collaboration and ethical cybernetic society
            </p>
          </div>
          
          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              
              return (
                <Card 
                  key={pillar.id}
                  className="quantum-card group cursor-pointer hover:scale-105 transform transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl bg-${pillar.color}/10 border border-${pillar.color}/20`}>
                        <Icon className={`w-8 h-8 text-${pillar.color}`} />
                      </div>
                      
                      <Badge variant="outline" className="text-xs">
                        {pillar.scrollCount} scrolls
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <CardTitle className="font-literata text-xl font-semibold">
                        {pillar.title}
                      </CardTitle>
                      <p className={`text-sm font-medium text-${pillar.color}`}>
                        {pillar.subtitle}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {pillar.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="pt-4 flex items-center justify-between">
                      <Button variant="ghost" className="p-0 h-auto text-sm group/btn">
                        Explore scrolls
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="p-2 h-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Interconnection Visualization */}
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <h3 className="font-literata text-2xl font-semibold mb-4">
                Synergistic Integration
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each pillar reinforces and enhances the others, creating a holistic framework for 
                ethical technological advancement and human flourishing.
              </p>
            </div>
            
            {/* Integration Symbols */}
            <div className="flex justify-center items-center gap-8 text-2xl">
              <span className="scroll-glyph">∴</span>
              <span className="text-muted-foreground">→</span>
              <span className="scroll-glyph">σ</span>
              <span className="text-muted-foreground">→</span>
              <span className="scroll-glyph">ψ</span>
              <span className="text-muted-foreground">→</span>
              <span className="scroll-glyph">Ω</span>
            </div>
            
            <Button className="btn-logic">
              View Integration Framework
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};