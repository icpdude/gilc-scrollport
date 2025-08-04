import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Hash, 
  User, 
  Calendar, 
  MessageCircle, 
  Download,
  Eye,
  GitBranch,
  CheckCircle2,
  ArrowRight 
} from "lucide-react";
import { useState } from "react";

interface ScrollMetadata {
  scrollId: string;
  title: string;
  version: string;
  hash: string;
  author: string;
  category: string;
  status: 'draft' | 'peer-review' | 'ratified' | 'archived';
  createdAt: string;
  lastModified: string;
  contributors: number;
  citations: number;
  zkProof: boolean;
}

const sampleScrolls: ScrollMetadata[] = [
  {
    scrollId: "GILC-001",
    title: "Foundational Charter of the Global Institute for Logic & Cybernetics",
    version: "v2.3.1",
    hash: "0x7a3f9b2e4d8c1a5f6e9b2d4c7a1e3f8b9c2d5e7a4f1b8c6d9e2a5f7b1c4e8a3",
    author: "Founding Committee",
    category: "Governance",
    status: "ratified",
    createdAt: "2024-01-15",
    lastModified: "2024-12-01",
    contributors: 12,
    citations: 47,
    zkProof: true
  },
  {
    scrollId: "GILC-042",
    title: "Ethical Framework for AI-Human Collaborative Decision Making",
    version: "v1.8.0",
    hash: "0x2b4e7f9a1c5d8e3f7b2a6c9d4e8f1a5b7c2e9f4a6b1d8c5e7f2a9b4c6e1f3a8",
    author: "Dr. Elena Vasquez",
    category: "Ethics",
    status: "peer-review",
    createdAt: "2024-10-22",
    lastModified: "2024-11-28",
    contributors: 8,
    citations: 23,
    zkProof: true
  },
  {
    scrollId: "GILC-117",
    title: "ScrollDNA Protocol: Immutable Knowledge Verification System",
    version: "v0.9.2",
    hash: "0x9f2c5a8d1e4b7c3f6a9d2e5f8b1c4e7a3f6b9c2d5e8a1f4b7c6e9f2a5b8c1e4",
    author: "Technical Working Group",
    category: "Technology",
    status: "draft",
    createdAt: "2024-11-15",
    lastModified: "2024-12-03",
    contributors: 15,
    citations: 8,
    zkProof: false
  }
];

export const ScrollDNAViewer = () => {
  const [selectedScroll, setSelectedScroll] = useState<ScrollMetadata | null>(null);
  const [claudeExpanded, setClaudeExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ratified': return 'success';
      case 'peer-review': return 'warning';
      case 'draft': return 'muted';
      case 'archived': return 'destructive';
      default: return 'muted';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ratified': return CheckCircle2;
      case 'peer-review': return Eye;
      case 'draft': return FileText;
      case 'archived': return FileText;
      default: return FileText;
    }
  };

  return (
    <section className="py-24 bg-muted/5" id="knowledge">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-quantum-fade">
            <h2 className="font-literata text-4xl md:text-6xl font-bold heading-academic mb-6">
              Knowledge Engine
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse the living repository of verified knowledge scrolls, each with cryptographic proof and collaborative versioning
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Scroll List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-literata text-2xl font-semibold">
                  Recent Scrolls
                </h3>
                <Button className="btn-scroll">
                  <FileText className="w-4 h-4 mr-2" />
                  Submit New Scroll
                </Button>
              </div>
              
              {sampleScrolls.map((scroll) => {
                const StatusIcon = getStatusIcon(scroll.status);
                
                return (
                  <Card 
                    key={scroll.scrollId}
                    className={`quantum-card cursor-pointer transition-all ${
                      selectedScroll?.scrollId === scroll.scrollId 
                        ? 'border-scroll-violet shadow-logic' 
                        : ''
                    }`}
                    onClick={() => setSelectedScroll(scroll)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs font-mono">
                              {scroll.scrollId}
                            </Badge>
                            <Badge 
                              variant="outline" 
                              className={`text-xs bg-${getStatusColor(scroll.status)}/10 text-${getStatusColor(scroll.status)} border-${getStatusColor(scroll.status)}/20`}
                            >
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {scroll.status}
                            </Badge>
                            {scroll.zkProof && (
                              <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
                                zk-verified
                              </Badge>
                            )}
                          </div>
                          
                          <CardTitle className="text-lg leading-tight">
                            {scroll.title}
                          </CardTitle>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {scroll.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {scroll.lastModified}
                            </span>
                            <span className="flex items-center gap-1">
                              <GitBranch className="w-3 h-3" />
                              {scroll.version}
                            </span>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div className="scroll-hash text-xs">
                          {scroll.hash.slice(0, 32)}...
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex gap-4">
                            <span className="text-muted-foreground">
                              {scroll.contributors} contributors
                            </span>
                            <span className="text-muted-foreground">
                              {scroll.citations} citations
                            </span>
                          </div>
                          
                          <Badge variant="secondary" className="text-xs">
                            {scroll.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Scroll Details & Claude Panel */}
            <div className="space-y-6">
              
              {/* Selected Scroll Details */}
              {selectedScroll && (
                <Card className="quantum-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Scroll Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Title</div>
                        <div className="text-sm">{selectedScroll.title}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Full Hash</div>
                        <div className="scroll-hash text-xs break-all">
                          {selectedScroll.hash}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="font-medium text-muted-foreground">Version</div>
                          <div>{selectedScroll.version}</div>
                        </div>
                        <div>
                          <div className="font-medium text-muted-foreground">Status</div>
                          <div className="capitalize">{selectedScroll.status}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button size="sm" className="btn-scroll flex-1">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Claude Assistant Panel */}
              <Card className="quantum-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-scroll-violet" />
                    Claude Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!claudeExpanded ? (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Ask Claude about any scroll or concept in the knowledge base.
                      </p>
                      
                      <div className="space-y-2">
                        <Button 
                          className="btn-scroll w-full justify-start"
                          onClick={() => setClaudeExpanded(true)}
                        >
                          "What is ScrollDNA?"
                        </Button>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start text-sm"
                          onClick={() => setClaudeExpanded(true)}
                        >
                          "Summarize the Charter"
                        </Button>
                        {selectedScroll && (
                          <Button 
                            variant="ghost" 
                            className="w-full justify-start text-sm"
                            onClick={() => setClaudeExpanded(true)}
                          >
                            "Explain {selectedScroll.scrollId}"
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-scroll-violet/10 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 text-scroll-violet" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="text-sm font-medium">Claude</div>
                            <div className="text-sm text-muted-foreground">
                              ScrollDNA is GILC's immutable knowledge verification system that uses cryptographic hashing 
                              and zero-knowledge proofs to ensure the integrity and provenance of academic and institutional scrolls.
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="btn-scroll">
                          Ask Follow-up
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => setClaudeExpanded(false)}
                        >
                          Reset
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-border/50">
                    <div className="ethics-badge">
                      <CheckCircle2 className="w-3 h-3" />
                      Ethics-Verified AI
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};