import { useState, useCallback, useEffect, useRef } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  MarkerType,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Network, 
  Zap, 
  Search,
  Filter,
  Maximize2,
  Minimize2,
  GitBranch,
  Cpu,
  Bot
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Knowledge Node Types
interface KnowledgeNode extends Node {
  data: {
    title: string;
    type: 'scroll' | 'concept' | 'agent' | 'synthesis';
    content?: string;
    confidence: number;
    connections: number;
    lastUpdated: string;
    ethicsScore: number;
    citations?: string[];
  };
}

// Custom Node Components
const ScrollNode = ({ data, selected }: { data: any; selected: boolean }) => (
  <div className={`quantum-node scroll-node ${selected ? 'selected' : ''}`}>
    <div className="node-header">
      <div className="w-3 h-3 bg-scroll-violet rounded-full"></div>
      <span className="text-xs font-medium">{data.title}</span>
    </div>
    <div className="node-content">
      <Badge variant="outline" className="text-xs">
        Confidence: {(data.confidence * 100).toFixed(0)}%
      </Badge>
      <div className="text-xs text-muted-foreground mt-1">
        {data.connections} connections
      </div>
    </div>
    <div className="absolute top-1 right-1">
      <div className={`w-2 h-2 rounded-full ${
        data.ethicsScore > 0.8 ? 'bg-success' : 
        data.ethicsScore > 0.6 ? 'bg-warning' : 'bg-destructive'
      }`}></div>
    </div>
  </div>
);

const ConceptNode = ({ data, selected }: { data: any; selected: boolean }) => (
  <div className={`quantum-node concept-node ${selected ? 'selected' : ''}`}>
    <div className="node-header">
      <Brain className="w-3 h-3 text-golden" />
      <span className="text-xs font-medium">{data.title}</span>
    </div>
    <div className="node-content">
      <div className="text-xs text-muted-foreground">
        Emergent concept from {data.connections} scrolls
      </div>
    </div>
  </div>
);

const AgentNode = ({ data, selected }: { data: any; selected: boolean }) => (
  <div className={`quantum-node agent-node ${selected ? 'selected' : ''}`}>
    <div className="node-header">
      <Bot className="w-3 h-3 text-cyber-green" />
      <span className="text-xs font-medium">{data.title}</span>
    </div>
    <div className="node-content">
      <Badge variant="outline" className="text-xs">
        Active
      </Badge>
    </div>
  </div>
);

const SynthesisNode = ({ data, selected }: { data: any; selected: boolean }) => (
  <div className={`quantum-node synthesis-node ${selected ? 'selected' : ''}`}>
    <div className="node-header">
      <Zap className="w-3 h-3 text-quantum-blue" />
      <span className="text-xs font-medium">{data.title}</span>
    </div>
    <div className="node-content">
      <div className="text-xs text-muted-foreground">
        Generated insight
      </div>
    </div>
  </div>
);

const nodeTypes = {
  scroll: ScrollNode,
  concept: ConceptNode,
  agent: AgentNode,
  synthesis: SynthesisNode,
};

// Initial Knowledge Graph Data
const initialNodes: KnowledgeNode[] = [
  {
    id: '1',
    type: 'scroll',
    position: { x: 100, y: 100 },
    data: {
      title: 'Ethics Framework v1.0',
      type: 'scroll',
      confidence: 0.95,
      connections: 12,
      lastUpdated: '2h ago',
      ethicsScore: 0.92,
      citations: ['Kant', 'Mill', 'Rawls']
    }
  },
  {
    id: '2',
    type: 'scroll',
    position: { x: 300, y: 50 },
    data: {
      title: 'Cybernetic Governance',
      type: 'scroll',
      confidence: 0.88,
      connections: 8,
      lastUpdated: '4h ago',
      ethicsScore: 0.85
    }
  },
  {
    id: '3',
    type: 'concept',
    position: { x: 200, y: 200 },
    data: {
      title: 'Ethical AI Systems',
      type: 'concept',
      confidence: 0.76,
      connections: 5,
      lastUpdated: '1h ago',
      ethicsScore: 0.91
    }
  },
  {
    id: '4',
    type: 'agent',
    position: { x: 50, y: 250 },
    data: {
      title: 'Claude Ethics Validator',
      type: 'agent',
      confidence: 0.92,
      connections: 15,
      lastUpdated: 'now',
      ethicsScore: 0.98
    }
  },
  {
    id: '5',
    type: 'synthesis',
    position: { x: 350, y: 200 },
    data: {
      title: 'Quantum Governance Model',
      type: 'synthesis',
      confidence: 0.67,
      connections: 3,
      lastUpdated: '30m ago',
      ethicsScore: 0.79
    }
  }
];

const initialEdges: Edge[] = [
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: 'hsl(var(--scroll-violet))' }
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: 'hsl(var(--scroll-violet))' }
  },
  {
    id: 'e4-1',
    source: '4',
    target: '1',
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: 'hsl(var(--cyber-green))' }
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { stroke: 'hsl(var(--golden))' }
  }
];

export const QuantumKnowledgeEngine = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedNode, setSelectedNode] = useState<KnowledgeNode | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  
  const synthesisTriggerRef = useRef<NodeJS.Timeout>();

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Auto-synthesis based on node interactions
  const triggerKnowledgeSynthesis = useCallback(() => {
    if (synthesisTriggerRef.current) {
      clearTimeout(synthesisTriggerRef.current);
    }
    
    synthesisTriggerRef.current = setTimeout(() => {
      // Simulate AI-driven knowledge synthesis
      const newSynthesisId = `synthesis-${Date.now()}`;
      const synthesisConcepts = [
        'Emergent Governance Pattern',
        'AI Ethics Convergence',
        'Quantum Decision Framework',
        'Cybernetic Wisdom Loop'
      ];
      
      const newSynthesis: KnowledgeNode = {
        id: newSynthesisId,
        type: 'synthesis',
        position: { 
          x: Math.random() * 400 + 100, 
          y: Math.random() * 300 + 100 
        },
        data: {
          title: synthesisConcepts[Math.floor(Math.random() * synthesisConcepts.length)],
          type: 'synthesis',
          confidence: 0.6 + Math.random() * 0.3,
          connections: 1,
          lastUpdated: 'just now',
          ethicsScore: 0.7 + Math.random() * 0.2
        }
      };

      setNodes((nds) => [...nds, newSynthesis]);
    }, 2000);
  }, [setNodes]);

  // Trigger synthesis on node changes
  useEffect(() => {
    triggerKnowledgeSynthesis();
  }, [nodes.length, triggerKnowledgeSynthesis]);

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node as KnowledgeNode);
  }, []);

  const filteredNodes = nodes.filter(node => {
    const matchesSearch = node.data.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || node.data.type === filterType;
    return matchesSearch && matchesFilter;
  });

  if (!isExpanded) {
    return (
      <motion.div 
        className="fixed bottom-20 left-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <Button
          onClick={() => setIsExpanded(true)}
          className="btn-quantum rounded-full w-16 h-16 shadow-quantum hover:scale-110 transition-all duration-300"
        >
          <Network className="w-6 h-6" />
        </Button>
        
        <div className="absolute top-0 right-0 w-4 h-4 bg-cyber-green rounded-full animate-pulse-glow">
          <div className="absolute inset-0 bg-cyber-green rounded-full animate-ping"></div>
        </div>
        
        <div className="absolute bottom-full mb-4 left-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-card border border-border rounded-lg p-3 shadow-quantum whitespace-nowrap">
            <div className="text-sm font-medium">Knowledge Engine</div>
            <div className="text-xs text-muted-foreground">Neural synthesis active</div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="fixed inset-4 z-40 bg-card/95 backdrop-blur-lg border border-border rounded-lg shadow-quantum"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <Card className="w-full h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-knowledge rounded-lg flex items-center justify-center">
                <Network className="w-4 h-4 text-background" />
              </div>
              Quantum Knowledge Engine
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                <Cpu className="w-3 h-3 mr-1" />
                Neural Synthesis Active
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="w-8 h-8 p-0"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search knowledge graph..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-muted/20 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-scroll-violet/50"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'scroll', 'concept', 'agent', 'synthesis'].map((type) => (
                <Button
                  key={type}
                  variant={filterType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterType(type)}
                  className="text-xs capitalize"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 h-[calc(100%-8rem)]">
          <div className="w-full h-full relative">
            <ReactFlow
              nodes={filteredNodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              nodeTypes={nodeTypes}
              fitView
              className="quantum-flow"
            >
              <MiniMap 
                nodeColor={(node) => {
                  switch (node.type) {
                    case 'scroll': return 'hsl(var(--scroll-violet))';
                    case 'concept': return 'hsl(var(--golden))';
                    case 'agent': return 'hsl(var(--cyber-green))';
                    case 'synthesis': return 'hsl(var(--quantum-blue))';
                    default: return 'hsl(var(--muted))';
                  }
                }}
                maskColor="hsl(var(--background)/0.8)"
              />
              <Controls />
              <Background gap={20} size={1} color="hsl(var(--border))" />
            </ReactFlow>
            
            {/* Node Details Panel */}
            <AnimatePresence>
              {selectedNode && (
                <motion.div
                  className="absolute top-4 right-4 w-80 bg-card border border-border rounded-lg p-4 shadow-quantum"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-sm">{selectedNode.data.title}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedNode(null)}
                      className="w-6 h-6 p-0"
                    >
                      ×
                    </Button>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <Badge variant="outline" className="text-xs capitalize">
                        {selectedNode.data.type}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Confidence:</span>
                      <span>{(selectedNode.data.confidence * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ethics Score:</span>
                      <span className={
                        selectedNode.data.ethicsScore > 0.8 ? 'text-success' :
                        selectedNode.data.ethicsScore > 0.6 ? 'text-warning' : 'text-destructive'
                      }>
                        {(selectedNode.data.ethicsScore * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Connections:</span>
                      <span>{selectedNode.data.connections}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Updated:</span>
                      <span>{selectedNode.data.lastUpdated}</span>
                    </div>
                    
                    {selectedNode.data.citations && (
                      <div>
                        <span className="text-muted-foreground">Citations:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedNode.data.citations.map((citation, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {citation}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};