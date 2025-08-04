import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Shield, 
  CheckCircle2, 
  Download, 
  ExternalLink,
  Eye,
  FileText,
  Globe,
  Lock,
  Zap
} from "lucide-react";

const complianceFrameworks = [
  {
    framework: "ISO 27001",
    status: "certified",
    description: "Information Security Management",
    badge: "🔒"
  },
  {
    framework: "UNESCO Ethics",
    status: "aligned", 
    description: "AI Ethics Recommendation",
    badge: "🌍"
  },
  {
    framework: "WIPO Protocol",
    status: "compliant",
    description: "Intellectual Property Rights",
    badge: "⚖️"
  },
  {
    framework: "GDPR",
    status: "certified",
    description: "Data Protection Regulation",
    badge: "🛡️"
  }
];

const legalDocuments = [
  {
    title: "GILC Foundational Charter",
    version: "v2.3.1",
    type: "charter",
    status: "ratified",
    hash: "0x7a3f9b2e4d8c1a5f",
    size: "847 KB"
  },
  {
    title: "Legal Compliance Protocols",
    version: "v1.9.2", 
    type: "protocols",
    status: "active",
    hash: "0x2b4e7f9a1c5d8e3f",
    size: "234 KB"
  },
  {
    title: "Ethical AI Guidelines",
    version: "v3.1.0",
    type: "guidelines",
    status: "ratified",
    hash: "0x9f2c5a8d1e4b7c3f",
    size: "567 KB"
  }
];

export const LegalEthicsSection = () => {
  return (
    <section className="py-24 bg-card/10" id="legal">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-quantum-fade">
            <h2 className="font-literata text-4xl md:text-6xl font-bold heading-academic mb-6">
              Legal & Ethical Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on transparent governance, international compliance, and zk-verified ethical protocols
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* ScrollCourt & DAO Preview */}
            <div className="space-y-8">
              <Card className="quantum-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-golden" />
                    ScrollCourt & ScrollDAO
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div>
                        <div className="font-medium">ScrollCourt</div>
                        <div className="text-sm text-muted-foreground">Dispute resolution & governance</div>
                      </div>
                      <Badge className="bg-success/10 text-success border-success/20">
                        Active
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div>
                        <div className="font-medium">ScrollDAO</div>
                        <div className="text-sm text-muted-foreground">Decentralized decision making</div>
                      </div>
                      <Badge className="bg-golden/10 text-golden border-golden/20">
                        Epoch ΣΩΩ.1
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Current Proposals</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Ethics Protocol v4.0</span>
                        <Badge variant="outline" className="text-xs">Voting</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Global Node Expansion</span>
                        <Badge variant="outline" className="text-xs">Draft</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Claude Integration v2</span>
                        <Badge variant="outline" className="text-xs">Review</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <Button className="btn-scroll w-full">
                      <Scale className="w-4 h-4 mr-2" />
                      Participate in DAO
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* zk-Verification */}
              <Card className="quantum-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-scroll-violet" />
                    Zero-Knowledge Verification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-scroll-violet/10 to-golden/10 rounded-lg p-4 border border-scroll-violet/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-scroll-violet/20 rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-scroll-violet animate-pulse-glow" />
                      </div>
                      <div>
                        <div className="font-medium">zk-GILC Protocol</div>
                        <div className="text-sm text-muted-foreground">Live verification system</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="text-center">
                        <div className="font-mono text-lg text-scroll-violet">99.7%</div>
                        <div className="text-muted-foreground">Verification rate</div>
                      </div>
                      <div className="text-center">
                        <div className="font-mono text-lg text-golden">2,847</div>
                        <div className="text-muted-foreground">Proofs generated</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="scroll-hash text-xs">
                    Latest proof: 0x8f4a2c9e1d7b3f6a8c2e9f1d4b7c3f6a9e2d5f8b1c4e7a3f6c9e2d5f8a1b4c7e
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    Verify Proof
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Legal Documents & Compliance */}
            <div className="space-y-8">
              
              {/* Compliance Badges */}
              <Card className="quantum-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-success" />
                    International Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {complianceFrameworks.map((framework) => (
                      <div 
                        key={framework.framework}
                        className="border border-border/50 rounded-lg p-3 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg">{framework.badge}</span>
                          <Badge 
                            variant="outline"
                            className={`text-xs ${
                              framework.status === 'certified' 
                                ? 'bg-success/10 text-success border-success/20'
                                : framework.status === 'aligned'
                                ? 'bg-golden/10 text-golden border-golden/20'  
                                : 'bg-scroll-violet/10 text-scroll-violet border-scroll-violet/20'
                            }`}
                          >
                            {framework.status}
                          </Badge>
                        </div>
                        <div>
                          <div className="font-medium text-sm">{framework.framework}</div>
                          <div className="text-xs text-muted-foreground">{framework.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-success/5 border border-success/20 rounded-lg">
                    <div className="flex items-center gap-2 text-success mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="font-medium text-sm">Full Compliance Achieved</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      GILC operates under the highest international standards for data protection, 
                      intellectual property, and AI ethics.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Legal Documents */}
              <Card className="quantum-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-golden" />
                    Legal Documents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {legalDocuments.map((doc) => (
                    <div 
                      key={doc.title}
                      className="border border-border/50 rounded-lg p-4 space-y-3"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="font-medium">{doc.title}</div>
                          <div className="text-sm text-muted-foreground">{doc.version}</div>
                        </div>
                        <Badge 
                          variant="outline"
                          className={`text-xs ${
                            doc.status === 'ratified' 
                              ? 'bg-success/10 text-success border-success/20'
                              : 'bg-golden/10 text-golden border-golden/20'
                          }`}
                        >
                          {doc.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="scroll-hash text-xs">
                          {doc.hash}...
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{doc.size}</span>
                          <span>PDF • IPFS anchored</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <Button className="btn-logic w-full">
                    <Globe className="w-4 h-4 mr-2" />
                    View All Legal Documents
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Ethical Commitment Statement */}
          <div className="text-center space-y-6">
            <Card className="quantum-card max-w-4xl mx-auto">
              <CardContent className="pt-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-literata text-2xl font-semibold heading-academic">
                    Ethical Commitment
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    GILC operates under the principle that all knowledge, technology, and governance 
                    must serve human dignity and collective flourishing. Our zk-verified protocols 
                    ensure transparency, accountability, and ethical alignment in every scroll.
                  </p>
                </div>
                
                <div className="flex justify-center items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span>Transparency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span>Accountability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span>Human Dignity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span>Collective Good</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">
                    Licensed under MIT ∩ CC-BY 4.0 ∩ Creative Commons Scholar
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};