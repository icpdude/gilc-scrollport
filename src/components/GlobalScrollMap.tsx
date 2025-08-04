import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Users, 
  Building, 
  GraduationCap,
  ArrowRight,
  Globe,
  Zap,
  CheckCircle2
} from "lucide-react";

const scrollNodes = [
  {
    id: "node-bg-001",
    location: "Sofia, Bulgaria",
    type: "Founding Node",
    status: "active",
    contributors: 15,
    scrolls: 23,
    specialization: "Logic Systems & Ethics",
    verified: true,
    coordinates: { x: 52, y: 35 }
  },
  {
    id: "node-ch-001", 
    location: "Zurich, Switzerland",
    type: "Academic Partner",
    status: "active",
    contributors: 12,
    scrolls: 18,
    specialization: "Cybernetics Research",
    verified: true,
    coordinates: { x: 48, y: 32 }
  },
  {
    id: "node-us-001",
    location: "MIT, Boston",
    type: "Research Hub",
    status: "active",
    contributors: 28,
    scrolls: 34,
    specialization: "AI Governance",
    verified: true,
    coordinates: { x: 15, y: 28 }
  },
  {
    id: "node-jp-001",
    location: "Tokyo, Japan", 
    type: "Innovation Lab",
    status: "pending",
    contributors: 8,
    scrolls: 12,
    specialization: "Human-AI Interface",
    verified: false,
    coordinates: { x: 85, y: 40 }
  },
  {
    id: "node-br-001",
    location: "São Paulo, Brazil",
    type: "Global South Hub",
    status: "active",
    contributors: 19,
    scrolls: 21,
    specialization: "Digital Rights",
    verified: true,
    coordinates: { x: 25, y: 70 }
  },
  {
    id: "node-za-001",
    location: "Cape Town, South Africa",
    type: "Emerging Node",
    status: "pending",
    contributors: 6,
    scrolls: 9,
    specialization: "Knowledge Infrastructure",
    verified: false,
    coordinates: { x: 55, y: 80 }
  }
];

const membershipTiers = [
  {
    tier: "Founder",
    description: "Early institutional architects",
    benefits: ["Charter voting rights", "Core protocol design", "Revenue sharing"],
    badge: "∑",
    color: "golden",
    count: 12
  },
  {
    tier: "Contributor", 
    description: "Active knowledge builders",
    benefits: ["Scroll submission", "Peer review access", "DAO participation"],
    badge: "Ω",
    color: "scroll-violet", 
    count: 47
  },
  {
    tier: "Researcher",
    description: "Academic collaborators",
    benefits: ["Research access", "Citation tracking", "Claude premium"],
    badge: "ψ",
    color: "accent",
    count: 126
  },
  {
    tier: "Supporter",
    description: "Community advocates",
    benefits: ["Public access", "Newsletter", "Event invites"],
    badge: "σ",
    color: "success",
    count: 284
  }
];

export const GlobalScrollMap = () => {
  return (
    <section className="py-24 bg-card/20" id="participation">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-quantum-fade">
            <h2 className="font-literata text-4xl md:text-6xl font-bold heading-academic mb-6">
              Global Participation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a worldwide network of ScrollNodes contributing to ethical cybernetic civilization
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* World Map Visualization */}
            <div className="lg:col-span-2">
              <Card className="quantum-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-scroll-violet" />
                    Active ScrollNodes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-muted/10 rounded-xl p-8 min-h-[400px] overflow-hidden">
                    {/* Simplified World Map Background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 100 60" className="w-full h-full">
                        {/* Continents simplified paths */}
                        <path d="M10,20 Q20,15 30,25 L35,30 Q25,35 15,30 Z" fill="currentColor" opacity="0.3" />
                        <path d="M45,15 Q60,10 75,20 L80,35 Q70,40 50,35 L45,25 Z" fill="currentColor" opacity="0.3" />
                        <path d="M15,45 Q30,40 35,50 L30,55 Q20,55 15,50 Z" fill="currentColor" opacity="0.3" />
                        <path d="M75,45 Q85,40 90,50 L85,55 Q80,55 75,50 Z" fill="currentColor" opacity="0.3" />
                      </svg>
                    </div>
                    
                    {/* ScrollNode Markers */}
                    {scrollNodes.map((node) => (
                      <div
                        key={node.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                        style={{ 
                          left: `${node.coordinates.x}%`, 
                          top: `${node.coordinates.y}%` 
                        }}
                      >
                        <div className={`relative w-4 h-4 rounded-full ${
                          node.status === 'active' 
                            ? 'bg-success shadow-glow animate-pulse-glow' 
                            : 'bg-warning'
                        }`}>
                          {node.verified && (
                            <CheckCircle2 className="absolute -top-1 -right-1 w-3 h-3 text-success bg-background rounded-full" />
                          )}
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-card border border-border rounded-lg p-3 shadow-quantum min-w-[200px]">
                            <div className="font-medium text-sm">{node.location}</div>
                            <div className="text-xs text-muted-foreground">{node.type}</div>
                            <div className="text-xs text-scroll-violet mt-1">{node.specialization}</div>
                            <div className="flex gap-4 text-xs text-muted-foreground mt-2">
                              <span>{node.contributors} contributors</span>
                              <span>{node.scrolls} scrolls</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: 'hsl(var(--scroll-violet))', stopOpacity: 0.3}} />
                          <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.1}} />
                        </linearGradient>
                      </defs>
                      
                      {scrollNodes.filter(n => n.status === 'active').map((node, index) => 
                        scrollNodes.filter(n => n.status === 'active').slice(index + 1).map((targetNode) => (
                          <line
                            key={`${node.id}-${targetNode.id}`}
                            x1={`${node.coordinates.x}%`}
                            y1={`${node.coordinates.y}%`}
                            x2={`${targetNode.coordinates.x}%`}
                            y2={`${targetNode.coordinates.y}%`}
                            stroke="url(#connectionGradient)"
                            strokeWidth="1"
                            opacity="0.6"
                          />
                        ))
                      )}
                    </svg>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow"></div>
                        <span>Active ({scrollNodes.filter(n => n.status === 'active').length})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-warning rounded-full"></div>
                        <span>Pending ({scrollNodes.filter(n => n.status === 'pending').length})</span>
                      </div>
                    </div>
                    
                    <Button className="btn-scroll">
                      <MapPin className="w-4 h-4 mr-2" />
                      Become a Node
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Membership Tiers */}
            <div className="space-y-6">
              <Card className="quantum-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-golden" />
                    Membership Tiers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {membershipTiers.map((tier) => (
                    <div key={tier.tier} className="border border-border/50 rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 bg-${tier.color}/10 border border-${tier.color}/20 rounded-lg flex items-center justify-center`}>
                            <span className={`text-${tier.color} font-bold`}>{tier.badge}</span>
                          </div>
                          <div>
                            <div className="font-medium">{tier.tier}</div>
                            <div className="text-xs text-muted-foreground">{tier.description}</div>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {tier.count}
                        </Badge>
                      </div>
                      
                      <div className="space-y-1">
                        {tier.benefits.slice(0, 2).map((benefit) => (
                          <div key={benefit} className="text-xs text-muted-foreground flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-success" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <Button className="btn-quantum w-full">
                    <Zap className="w-4 h-4 mr-2" />
                    Join GILC
                  </Button>
                </CardContent>
              </Card>
              
              {/* Quick Stats */}
              <Card className="quantum-card">
                <CardHeader>
                  <CardTitle className="text-lg">Network Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-scroll-violet">
                        {scrollNodes.reduce((sum, node) => sum + node.contributors, 0)}
                      </div>
                      <div className="text-xs text-muted-foreground">Contributors</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-golden">
                        {scrollNodes.reduce((sum, node) => sum + node.scrolls, 0)}
                      </div>
                      <div className="text-xs text-muted-foreground">Scrolls</div>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-border/50">
                    <div className="dao-status">
                      <Zap className="w-4 h-4" />
                      DAO Active
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center space-y-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="quantum-card text-center">
                <CardContent className="pt-6">
                  <Building className="w-8 h-8 mx-auto text-scroll-violet mb-3" />
                  <h3 className="font-semibold mb-2">Institutional Partners</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Universities, research labs, and organizations
                  </p>
                  <Button variant="outline" className="w-full">
                    Partner with GILC
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="quantum-card text-center">
                <CardContent className="pt-6">
                  <GraduationCap className="w-8 h-8 mx-auto text-golden mb-3" />
                  <h3 className="font-semibold mb-2">Individual Researchers</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Scholars, practitioners, and thought leaders
                  </p>
                  <Button variant="outline" className="w-full">
                    Join as Researcher
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="quantum-card text-center">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 mx-auto text-accent mb-3" />
                  <h3 className="font-semibold mb-2">DAO Contributors</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Governance participants and scroll validators
                  </p>
                  <Button variant="outline" className="w-full">
                    Join DAO
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};