import { useState, useRef, useEffect, useMemo, Suspense } from "react";
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { OrbitControls, Text, Sphere, Line } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Atom, 
  Activity, 
  Zap, 
  Brain, 
  Network, 
  Minimize2,
  Maximize2,
  Settings,
  Eye,
  Layers,
  GitBranch
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import * as THREE from 'three';

// Quantum State Data Structures
interface QuantumNode {
  id: string;
  position: [number, number, number];
  type: 'scroll' | 'dao' | 'agent' | 'synthesis' | 'user';
  energy: number;
  connections: string[];
  activity: number;
  data: any;
}

interface QuantumConnection {
  from: string;
  to: string;
  strength: number;
  type: 'data' | 'consensus' | 'synthesis' | 'verification';
  active: boolean;
}

interface InstitutionalMetrics {
  consciousnessLevel: number;
  knowledgeEntropy: number;
  ethicsAlignment: number;
  systemCoherence: number;
  evolutionRate: number;
  neuralActivity: number;
}

// Temporarily disabled Three.js components while dependencies resolve
/*
const QuantumNodeMesh = ({ node, selected, onClick }: { 
  node: QuantumNode; 
  selected: boolean; 
  onClick: () => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Quantum oscillation based on energy
      meshRef.current.rotation.x += node.energy * 0.01;
      meshRef.current.rotation.y += node.energy * 0.008;
      
      // Pulsing based on activity
      const scale = 1 + Math.sin(state.clock.elapsedTime * node.activity * 2) * 0.2;
      meshRef.current.scale.setScalar(scale * (selected ? 1.5 : 1));
    }
  });

  const getNodeColor = () => {
    switch (node.type) {
      case 'scroll': return '#8B5FE6';
      case 'dao': return '#10B981';
      case 'agent': return '#F59E0B';
      case 'synthesis': return '#3B82F6';
      case 'user': return '#EF4444';
      default: return '#6B7280';
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={node.position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {node.type === 'scroll' ? (
        <octahedronGeometry args={[0.5]} />
      ) : node.type === 'dao' ? (
        <icosahedronGeometry args={[0.5]} />
      ) : (
        <sphereGeometry args={[0.5]} />
      )}
      <meshStandardMaterial 
        color={getNodeColor()}
        transparent
        opacity={hovered || selected ? 0.9 : 0.7}
        emissive={getNodeColor()}
        emissiveIntensity={selected ? 0.3 : 0.1}
      />
      
      {(hovered || selected) && (
        <Text
          position={[0, 1, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {node.id}
        </Text>
      )}
    </mesh>
  );
};

const QuantumConnection3D = ({ connection, nodes }: { 
  connection: QuantumConnection; 
  nodes: QuantumNode[];
}) => {
  const fromNode = nodes.find(n => n.id === connection.from);
  const toNode = nodes.find(n => n.id === connection.to);
  
  if (!fromNode || !toNode) return null;

  const points = [
    new THREE.Vector3(...fromNode.position),
    new THREE.Vector3(...toNode.position)
  ];

  const getConnectionColor = () => {
    switch (connection.type) {
      case 'data': return '#8B5FE6';
      case 'consensus': return '#10B981';
      case 'synthesis': return '#F59E0B';
      case 'verification': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  return (
    <Line
      points={points}
      color={getConnectionColor()}
      lineWidth={connection.strength * 3}
      transparent
      opacity={connection.active ? 0.8 : 0.3}
    />
  );
};

const QuantumScene = ({ 
  nodes, 
  connections, 
  selectedNode, 
  onNodeSelect 
}: { 
  nodes: QuantumNode[];
  connections: QuantumConnection[];
  selectedNode: string | null;
  onNodeSelect: (nodeId: string) => void;
}) => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(5, 5, 5);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5FE6" />
      
      <Sphere args={[20]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#000020" 
          transparent 
          opacity={0.1} 
          side={THREE.BackSide}
        />
      </Sphere>
      
      {nodes.map((node) => (
        <QuantumNodeMesh
          key={node.id}
          node={node}
          selected={selectedNode === node.id}
          onClick={() => onNodeSelect(node.id)}
        />
      ))}
      
      {connections.map((connection, index) => (
        <QuantumConnection3D
          key={`${connection.from}-${connection.to}-${index}`}
          connection={connection}
          nodes={nodes}
        />
      ))}
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
};
*/

// Generate sample quantum data
const generateQuantumData = (): { nodes: QuantumNode[]; connections: QuantumConnection[] } => {
  const nodes: QuantumNode[] = [
    {
      id: 'Ethics-Core',
      position: [0, 0, 0],
      type: 'scroll',
      energy: 0.9,
      connections: ['DAO-Governance', 'Claude-Agent'],
      activity: 0.8,
      data: { scrollId: 'ethics-v1', version: '1.0' }
    },
    {
      id: 'DAO-Governance',
      position: [3, 2, -1],
      type: 'dao',
      energy: 0.7,
      connections: ['Ethics-Core', 'Consensus-Node'],
      activity: 0.6,
      data: { proposalCount: 15, activeVotes: 3 }
    },
    {
      id: 'Claude-Agent',
      position: [-2, -1, 2],
      type: 'agent',
      energy: 0.85,
      connections: ['Ethics-Core', 'Knowledge-Synthesis'],
      activity: 0.9,
      data: { conversations: 1247, ethicsScore: 0.94 }
    },
    {
      id: 'Knowledge-Synthesis',
      position: [1, -3, 1],
      type: 'synthesis',
      energy: 0.6,
      connections: ['Claude-Agent', 'User-Collective'],
      activity: 0.4,
      data: { synthesisCount: 89, confidenceLevel: 0.76 }
    },
    {
      id: 'User-Collective',
      position: [-3, 1, -2],
      type: 'user',
      energy: 0.5,
      connections: ['Knowledge-Synthesis', 'DAO-Governance'],
      activity: 0.7,
      data: { activeUsers: 2847, contributionRate: 0.23 }
    },
    {
      id: 'Consensus-Node',
      position: [2, 3, 2],
      type: 'dao',
      energy: 0.8,
      connections: ['DAO-Governance'],
      activity: 0.5,
      data: { consensusLevel: 0.87, blockHeight: 15847 }
    }
  ];

  const connections: QuantumConnection[] = [
    { from: 'Ethics-Core', to: 'DAO-Governance', strength: 0.9, type: 'consensus', active: true },
    { from: 'Ethics-Core', to: 'Claude-Agent', strength: 0.8, type: 'verification', active: true },
    { from: 'Claude-Agent', to: 'Knowledge-Synthesis', strength: 0.7, type: 'synthesis', active: true },
    { from: 'DAO-Governance', to: 'User-Collective', strength: 0.6, type: 'data', active: false },
    { from: 'Knowledge-Synthesis', to: 'User-Collective', strength: 0.5, type: 'data', active: true },
    { from: 'DAO-Governance', to: 'Consensus-Node', strength: 0.9, type: 'consensus', active: true }
  ];

  return { nodes, connections };
};

export const QuantumVisualizationDashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('quantum');
  const [metrics, setMetrics] = useState<InstitutionalMetrics>({
    consciousnessLevel: 0.78,
    knowledgeEntropy: 0.65,
    ethicsAlignment: 0.92,
    systemCoherence: 0.84,
    evolutionRate: 0.56,
    neuralActivity: 0.73
  });

  const { nodes, connections } = useMemo(() => generateQuantumData(), []);

  // Simulate real-time metrics updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        consciousnessLevel: Math.max(0.5, Math.min(1, prev.consciousnessLevel + (Math.random() - 0.5) * 0.1)),
        knowledgeEntropy: Math.max(0.3, Math.min(1, prev.knowledgeEntropy + (Math.random() - 0.5) * 0.1)),
        ethicsAlignment: Math.max(0.7, Math.min(1, prev.ethicsAlignment + (Math.random() - 0.5) * 0.05)),
        systemCoherence: Math.max(0.6, Math.min(1, prev.systemCoherence + (Math.random() - 0.5) * 0.08)),
        evolutionRate: Math.max(0.2, Math.min(1, prev.evolutionRate + (Math.random() - 0.5) * 0.12)),
        neuralActivity: Math.max(0.4, Math.min(1, prev.neuralActivity + (Math.random() - 0.5) * 0.15))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isExpanded) {
    return (
      <motion.div 
        className="fixed bottom-20 right-72 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.4 }}
      >
        <Button
          onClick={() => setIsExpanded(true)}
          className="btn-quantum rounded-full w-16 h-16 shadow-quantum hover:scale-110 transition-all duration-300"
        >
          <Atom className="w-6 h-6" />
        </Button>
        
        <div className="absolute top-0 left-0 w-4 h-4 bg-quantum-blue rounded-full animate-pulse-glow">
          <div className="absolute inset-0 bg-quantum-blue rounded-full animate-ping"></div>
        </div>
        
        <div className="absolute bottom-full mb-4 right-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-card border border-border rounded-lg p-3 shadow-quantum whitespace-nowrap">
            <div className="text-sm font-medium">Quantum Dashboard</div>
            <div className="text-xs text-muted-foreground">Institutional consciousness active</div>
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
              <div className="w-8 h-8 bg-gradient-quantum rounded-lg flex items-center justify-center">
                <Atom className="w-4 h-4 text-background" />
              </div>
              Quantum Visualization Dashboard
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                <Activity className="w-3 h-3 mr-1" />
                Neural Activity: {(metrics.neuralActivity * 100).toFixed(0)}%
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
        </CardHeader>
        
        <CardContent className="p-0 h-[calc(100%-5rem)]">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
            <TabsList className="grid w-full grid-cols-3 mx-4">
              <TabsTrigger value="quantum">Quantum Field</TabsTrigger>
              <TabsTrigger value="metrics">Consciousness Metrics</TabsTrigger>
              <TabsTrigger value="neural">Neural Pathways</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quantum" className="h-[calc(100%-3rem)] m-4 mt-0">
              <div className="h-full relative border border-border rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-muted/10">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-scroll-violet border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <div className="text-sm text-muted-foreground">Quantum Field Initializing...</div>
                    <div className="text-xs text-muted-foreground mt-2">3D visualization loading</div>
                  </div>
                </div>
                {/* Temporarily disabled Three.js Canvas while dependencies resolve */}
                {/* <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center bg-muted/10">
                    <div className="text-center">
                      <div className="w-8 h-8 border-2 border-scroll-violet border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <div className="text-sm text-muted-foreground">Initializing Quantum Field...</div>
                    </div>
                  </div>
                }>
                  <Canvas 
                    camera={{ fov: 75, near: 0.1, far: 1000 }}
                    onError={(error) => console.error('Canvas error:', error)}
                  >
                    <QuantumScene
                      nodes={nodes}
                      connections={connections}
                      selectedNode={selectedNode}
                      onNodeSelect={setSelectedNode}
                    />
                  </Canvas>
                </Suspense> */}
                
                {/* Node Information Overlay */}
                <AnimatePresence>
                  {selectedNode && (
                    <motion.div
                      className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 max-w-xs"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      {(() => {
                        const node = nodes.find(n => n.id === selectedNode);
                        if (!node) return null;
                        
                        return (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium text-sm">{node.id}</h3>
                              <Badge variant="outline" className="text-xs capitalize">
                                {node.type}
                              </Badge>
                            </div>
                            
                            <div className="space-y-1 text-xs">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Energy:</span>
                                <span>{(node.energy * 100).toFixed(0)}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Activity:</span>
                                <span>{(node.activity * 100).toFixed(0)}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Connections:</span>
                                <span>{node.connections.length}</span>
                              </div>
                            </div>
                            
                            {Object.keys(node.data).length > 0 && (
                              <div className="pt-2 border-t border-border">
                                <div className="text-xs text-muted-foreground mb-1">Node Data:</div>
                                {Object.entries(node.data).map(([key, value]) => (
                                  <div key={key} className="flex justify-between text-xs">
                                    <span className="text-muted-foreground capitalize">
                                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                                    </span>
                                    <span>{String(value)}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Controls Overlay */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="text-xs">
                    <Eye className="w-3 h-3 mr-1" />
                    Reset View
                  </Button>
                  <Button size="sm" variant="secondary" className="text-xs">
                    <Settings className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="metrics" className="h-[calc(100%-3rem)] m-4 mt-0 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4 h-full">
                {Object.entries(metrics).map(([key, value]) => {
                  const getMetricColor = (val: number) => {
                    if (val > 0.8) return 'hsl(var(--success))';
                    if (val > 0.6) return 'hsl(var(--warning))';
                    return 'hsl(var(--destructive))';
                  };

                  const getMetricIcon = (metricKey: string) => {
                    switch (metricKey) {
                      case 'consciousnessLevel': return Brain;
                      case 'knowledgeEntropy': return Network;
                      case 'ethicsAlignment': return Activity;
                      case 'systemCoherence': return Layers;
                      case 'evolutionRate': return GitBranch;
                      case 'neuralActivity': return Zap;
                      default: return Activity;
                    }
                  };

                  const Icon = getMetricIcon(key);
                  const displayName = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

                  return (
                    <motion.div
                      key={key}
                      className="p-4 rounded-lg border border-border"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" style={{ color: getMetricColor(value) }} />
                          <span className="text-sm font-medium">{displayName}</span>
                        </div>
                        <span 
                          className="text-lg font-bold"
                          style={{ color: getMetricColor(value) }}
                        >
                          {(value * 100).toFixed(0)}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: getMetricColor(value) }}
                          initial={{ width: 0 }}
                          animate={{ width: `${value * 100}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                      
                      <div className="mt-2 text-xs text-muted-foreground">
                        {key === 'consciousnessLevel' && 'Institutional self-awareness level'}
                        {key === 'knowledgeEntropy' && 'Information diversity and complexity'}
                        {key === 'ethicsAlignment' && 'Alignment with ethical principles'}
                        {key === 'systemCoherence' && 'Overall system integration'}
                        {key === 'evolutionRate' && 'Rate of institutional learning'}
                        {key === 'neuralActivity' && 'AI agent interaction intensity'}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="neural" className="h-[calc(100%-3rem)] m-4 mt-0">
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center space-y-4">
                  <Brain className="w-16 h-16 mx-auto opacity-50" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Neural Pathway Visualization</h3>
                    <p className="text-sm">
                      Real-time visualization of institutional neural pathways and<br />
                      cognitive processes will be displayed here.
                    </p>
                  </div>
                  <Badge variant="outline">Coming Soon</Badge>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
};