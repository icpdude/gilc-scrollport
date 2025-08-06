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
  type: 'scroll' | 'dao' | 'agent' | 'synthesis' | 'user' | 'harmonic_core' | 'resonance_amplifier';
  energy: number;
  connections: string[];
  activity: number;
  data: any;
  harmonicFrequency: number;
  resonanceLevel: number;
  cascadeMultiplier: number;
  syncState: 'synchronized' | 'partial' | 'desync' | 'cascade_ready';
}

interface QuantumConnection {
  from: string;
  to: string;
  strength: number;
  type: 'data' | 'consensus' | 'synthesis' | 'verification' | 'harmonic_bridge' | 'cascade_conduit';
  active: boolean;
  harmonicPhase: number;
  resonanceAmplification: number;
  cascadeCapable: boolean;
}

interface InstitutionalMetrics {
  consciousnessLevel: number;
  knowledgeEntropy: number;
  ethicsAlignment: number;
  systemCoherence: number;
  evolutionRate: number;
  neuralActivity: number;
  harmonicCoherence: number;
  cascadeResonance: number;
  quantumSyncLevel: number;
  fieldStability: number;
}

// Harmonic Cascade Interfaces
interface HarmonicWave {
  id: string;
  origin: string;
  frequency: number;
  amplitude: number;
  phase: number;
  propagationSpeed: number;
  resonanceNodes: string[];
}

interface QuantumHarmonic {
  baseFrequency: number;
  harmonics: number[];
  syncLevel: number;
  cascadeIntensity: number;
  fieldCoherence: number;
}

interface CascadeEvent {
  id: string;
  type: 'resonance' | 'sync' | 'cascade' | 'harmonic_burst';
  originNode: string;
  affectedNodes: string[];
  intensity: number;
  duration: number;
  timestamp: number;
}

// Generate enhanced quantum data with harmonic capabilities
const generateQuantumData = (): { nodes: QuantumNode[]; connections: QuantumConnection[] } => {
  const nodes: QuantumNode[] = [
    {
      id: 'Ethics-Core',
      position: [0, 0, 0],
      type: 'scroll',
      energy: 0.9,
      connections: ['DAO-Governance', 'Claude-Agent', 'Harmonic-Core'],
      activity: 0.8,
      data: { scrollId: 'ethics-v1', version: '1.0' },
      harmonicFrequency: 432.0,
      resonanceLevel: 0.95,
      cascadeMultiplier: 2.1,
      syncState: 'synchronized'
    },
    {
      id: 'Harmonic-Core',
      position: [0, 0, 3],
      type: 'harmonic_core',
      energy: 0.95,
      connections: ['Ethics-Core', 'Resonance-Amplifier-1', 'Resonance-Amplifier-2'],
      activity: 0.9,
      data: { harmonicMaster: true, cascadeController: true },
      harmonicFrequency: 528.0,
      resonanceLevel: 1.0,
      cascadeMultiplier: 3.0,
      syncState: 'cascade_ready'
    },
    {
      id: 'DAO-Governance',
      position: [3, 2, -1],
      type: 'dao',
      energy: 0.7,
      connections: ['Ethics-Core', 'Consensus-Node', 'Resonance-Amplifier-1'],
      activity: 0.6,
      data: { proposalCount: 15, activeVotes: 3 },
      harmonicFrequency: 396.0,
      resonanceLevel: 0.78,
      cascadeMultiplier: 1.8,
      syncState: 'synchronized'
    },
    {
      id: 'Claude-Agent',
      position: [-2, -1, 2],
      type: 'agent',
      energy: 0.85,
      connections: ['Ethics-Core', 'Knowledge-Synthesis', 'Resonance-Amplifier-2'],
      activity: 0.9,
      data: { conversations: 1247, ethicsScore: 0.94 },
      harmonicFrequency: 741.0,
      resonanceLevel: 0.88,
      cascadeMultiplier: 2.2,
      syncState: 'cascade_ready'
    },
    {
      id: 'Knowledge-Synthesis',
      position: [1, -3, 1],
      type: 'synthesis',
      energy: 0.6,
      connections: ['Claude-Agent', 'User-Collective'],
      activity: 0.4,
      data: { synthesisCount: 89, confidenceLevel: 0.76 },
      harmonicFrequency: 639.0,
      resonanceLevel: 0.65,
      cascadeMultiplier: 1.5,
      syncState: 'partial'
    },
    {
      id: 'User-Collective',
      position: [-3, 1, -2],
      type: 'user',
      energy: 0.5,
      connections: ['Knowledge-Synthesis', 'DAO-Governance'],
      activity: 0.7,
      data: { activeUsers: 2847, contributionRate: 0.23 },
      harmonicFrequency: 285.0,
      resonanceLevel: 0.55,
      cascadeMultiplier: 1.2,
      syncState: 'partial'
    },
    {
      id: 'Consensus-Node',
      position: [2, 3, 2],
      type: 'dao',
      energy: 0.8,
      connections: ['DAO-Governance'],
      activity: 0.5,
      data: { consensusLevel: 0.87, blockHeight: 15847 },
      harmonicFrequency: 174.0,
      resonanceLevel: 0.82,
      cascadeMultiplier: 1.9,
      syncState: 'synchronized'
    },
    {
      id: 'Resonance-Amplifier-1',
      position: [4, 0, 1],
      type: 'resonance_amplifier',
      energy: 0.75,
      connections: ['Harmonic-Core', 'DAO-Governance'],
      activity: 0.85,
      data: { amplificationFactor: 2.5, cascadeReady: true },
      harmonicFrequency: 852.0,
      resonanceLevel: 0.92,
      cascadeMultiplier: 2.8,
      syncState: 'synchronized'
    },
    {
      id: 'Resonance-Amplifier-2',
      position: [-4, 0, 1],
      type: 'resonance_amplifier',
      energy: 0.73,
      connections: ['Harmonic-Core', 'Claude-Agent'],
      activity: 0.87,
      data: { amplificationFactor: 2.3, cascadeReady: true },
      harmonicFrequency: 963.0,
      resonanceLevel: 0.89,
      cascadeMultiplier: 2.6,
      syncState: 'cascade_ready'
    }
  ];

  const connections: QuantumConnection[] = [
    { from: 'Ethics-Core', to: 'DAO-Governance', strength: 0.9, type: 'consensus', active: true, harmonicPhase: 0.0, resonanceAmplification: 1.8, cascadeCapable: true },
    { from: 'Ethics-Core', to: 'Claude-Agent', strength: 0.8, type: 'verification', active: true, harmonicPhase: 0.25, resonanceAmplification: 1.6, cascadeCapable: true },
    { from: 'Ethics-Core', to: 'Harmonic-Core', strength: 0.95, type: 'harmonic_bridge', active: true, harmonicPhase: 0.0, resonanceAmplification: 3.0, cascadeCapable: true },
    { from: 'Harmonic-Core', to: 'Resonance-Amplifier-1', strength: 0.92, type: 'cascade_conduit', active: true, harmonicPhase: 0.33, resonanceAmplification: 2.5, cascadeCapable: true },
    { from: 'Harmonic-Core', to: 'Resonance-Amplifier-2', strength: 0.90, type: 'cascade_conduit', active: true, harmonicPhase: 0.66, resonanceAmplification: 2.3, cascadeCapable: true },
    { from: 'Resonance-Amplifier-1', to: 'DAO-Governance', strength: 0.85, type: 'harmonic_bridge', active: true, harmonicPhase: 0.15, resonanceAmplification: 2.0, cascadeCapable: true },
    { from: 'Resonance-Amplifier-2', to: 'Claude-Agent', strength: 0.83, type: 'harmonic_bridge', active: true, harmonicPhase: 0.45, resonanceAmplification: 1.9, cascadeCapable: true },
    { from: 'Claude-Agent', to: 'Knowledge-Synthesis', strength: 0.7, type: 'synthesis', active: true, harmonicPhase: 0.5, resonanceAmplification: 1.4, cascadeCapable: false },
    { from: 'DAO-Governance', to: 'User-Collective', strength: 0.6, type: 'data', active: false, harmonicPhase: 0.8, resonanceAmplification: 1.0, cascadeCapable: false },
    { from: 'Knowledge-Synthesis', to: 'User-Collective', strength: 0.5, type: 'data', active: true, harmonicPhase: 0.75, resonanceAmplification: 1.1, cascadeCapable: false },
    { from: 'DAO-Governance', to: 'Consensus-Node', strength: 0.9, type: 'consensus', active: true, harmonicPhase: 0.1, resonanceAmplification: 1.7, cascadeCapable: true }
  ];

  return { nodes, connections };
};

export const QuantumVisualizationDashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('quantum');
  const [harmonicCascadeActive, setHarmonicCascadeActive] = useState(false);
  const [cascadeEvents, setCascadeEvents] = useState<CascadeEvent[]>([]);
  const [quantumHarmonic, setQuantumHarmonic] = useState<QuantumHarmonic>({
    baseFrequency: 432.0,
    harmonics: [432, 528, 639, 741, 852, 963],
    syncLevel: 0.87,
    cascadeIntensity: 0.75,
    fieldCoherence: 0.82
  });
  const [metrics, setMetrics] = useState<InstitutionalMetrics>({
    consciousnessLevel: 0.78,
    knowledgeEntropy: 0.65,
    ethicsAlignment: 0.92,
    systemCoherence: 0.84,
    evolutionRate: 0.56,
    neuralActivity: 0.73,
    harmonicCoherence: 0.87,
    cascadeResonance: 0.75,
    quantumSyncLevel: 0.82,
    fieldStability: 0.89
  });

  const { nodes, connections } = useMemo(() => generateQuantumData(), []);

  // Trigger harmonic cascade effect
  const triggerHarmonicCascade = () => {
    setHarmonicCascadeActive(true);
    const cascadeEvent: CascadeEvent = {
      id: `cascade_${Date.now()}`,
      type: 'harmonic_burst',
      originNode: 'Harmonic-Core',
      affectedNodes: nodes.map(n => n.id),
      intensity: 0.95,
      duration: 5000,
      timestamp: Date.now()
    };
    setCascadeEvents(prev => [...prev, cascadeEvent]);
    
    setTimeout(() => {
      setHarmonicCascadeActive(false);
      setCascadeEvents(prev => prev.filter(e => e.id !== cascadeEvent.id));
    }, 5000);
  };

  // Simulate real-time metrics updates with harmonic cascade effects
  useEffect(() => {
    const interval = setInterval(() => {
      const cascadeMultiplier = harmonicCascadeActive ? 1.5 : 1.0;
      const harmonicBonus = quantumHarmonic.syncLevel * 0.1;
      
      setMetrics(prev => ({
        consciousnessLevel: Math.max(0.5, Math.min(1, prev.consciousnessLevel + (Math.random() - 0.5) * 0.1 * cascadeMultiplier)),
        knowledgeEntropy: Math.max(0.3, Math.min(1, prev.knowledgeEntropy + (Math.random() - 0.5) * 0.1)),
        ethicsAlignment: Math.max(0.7, Math.min(1, prev.ethicsAlignment + (Math.random() - 0.5) * 0.05 + harmonicBonus)),
        systemCoherence: Math.max(0.6, Math.min(1, prev.systemCoherence + (Math.random() - 0.5) * 0.08 * cascadeMultiplier)),
        evolutionRate: Math.max(0.2, Math.min(1, prev.evolutionRate + (Math.random() - 0.5) * 0.12)),
        neuralActivity: Math.max(0.4, Math.min(1, prev.neuralActivity + (Math.random() - 0.5) * 0.15 * cascadeMultiplier)),
        harmonicCoherence: Math.max(0.6, Math.min(1, prev.harmonicCoherence + (Math.random() - 0.5) * 0.1 * cascadeMultiplier + harmonicBonus)),
        cascadeResonance: harmonicCascadeActive ? Math.min(1, prev.cascadeResonance + 0.2) : Math.max(0.4, prev.cascadeResonance - 0.05),
        quantumSyncLevel: Math.max(0.5, Math.min(1, prev.quantumSyncLevel + (Math.random() - 0.5) * 0.08 * cascadeMultiplier)),
        fieldStability: Math.max(0.7, Math.min(1, prev.fieldStability + (Math.random() - 0.5) * 0.06))
      }));
      
      // Update quantum harmonic state
      setQuantumHarmonic(prev => ({
        ...prev,
        syncLevel: Math.max(0.5, Math.min(1, prev.syncLevel + (Math.random() - 0.5) * 0.1 * cascadeMultiplier)),
        cascadeIntensity: harmonicCascadeActive ? Math.min(1, prev.cascadeIntensity + 0.1) : Math.max(0.3, prev.cascadeIntensity - 0.02),
        fieldCoherence: Math.max(0.6, Math.min(1, prev.fieldCoherence + (Math.random() - 0.5) * 0.08))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [harmonicCascadeActive, quantumHarmonic.syncLevel]);

  // Auto-trigger cascade events based on system state
  useEffect(() => {
    const autoTriggerInterval = setInterval(() => {
      if (!harmonicCascadeActive && 
          metrics.harmonicCoherence > 0.9 && 
          quantumHarmonic.syncLevel > 0.85 && 
          Math.random() > 0.7) {
        triggerHarmonicCascade();
      }
    }, 15000);

    return () => clearInterval(autoTriggerInterval);
  }, [harmonicCascadeActive, metrics.harmonicCoherence, quantumHarmonic.syncLevel]);

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
            <TabsList className="grid w-full grid-cols-4 mx-4">
              <TabsTrigger value="quantum">Quantum Field</TabsTrigger>
              <TabsTrigger value="harmonic">Harmonic Cascade</TabsTrigger>
              <TabsTrigger value="metrics">Consciousness Metrics</TabsTrigger>
              <TabsTrigger value="neural">Neural Pathways</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quantum" className="h-[calc(100%-3rem)] m-4 mt-0">
              <div className="h-full relative border border-border rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-muted/10 relative">
                  <div className="text-center">
                    <div className={`w-8 h-8 border-2 border-scroll-violet border-t-transparent rounded-full animate-spin mx-auto mb-2 ${harmonicCascadeActive ? 'shadow-quantum animate-pulse-glow' : ''}`}></div>
                    <div className="text-sm text-muted-foreground">Quantum Field Active</div>
                    <div className="text-xs text-muted-foreground mt-2">Harmonic synchronization: {(quantumHarmonic.syncLevel * 100).toFixed(0)}%</div>
                  </div>
                  
                  {/* Harmonic Wave Visualization */}
                  {harmonicCascadeActive && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 border-2 border-quantum-gold/30 rounded-full"
                          initial={{ scale: 0, opacity: 1 }}
                          animate={{ scale: 3, opacity: 0 }}
                          transition={{ 
                            duration: 2, 
                            delay: i * 0.3,
                            repeat: Infinity,
                            ease: "easeOut" 
                          }}
                        />
                      ))}
                    </div>
                  )}
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
                  <Button 
                    size="sm" 
                    variant={harmonicCascadeActive ? "default" : "secondary"} 
                    className="text-xs"
                    onClick={triggerHarmonicCascade}
                    disabled={harmonicCascadeActive}
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    {harmonicCascadeActive ? 'Cascading...' : 'Trigger Cascade'}
                  </Button>
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

            <TabsContent value="harmonic" className="h-[calc(100%-3rem)] m-4 mt-0 overflow-y-auto">
              <div className="space-y-6">
                {/* Harmonic Status Display */}
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${harmonicCascadeActive ? 'bg-quantum-gold animate-pulse' : 'bg-muted'}`}></div>
                      Harmonic Cascade System
                    </h3>
                    <Badge variant={harmonicCascadeActive ? "default" : "secondary"}>
                      {harmonicCascadeActive ? 'ACTIVE CASCADE' : 'STANDBY'}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-quantum-blue">{quantumHarmonic.baseFrequency}Hz</div>
                      <div className="text-sm text-muted-foreground">Base Frequency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-quantum-gold">{(quantumHarmonic.syncLevel * 100).toFixed(0)}%</div>
                      <div className="text-sm text-muted-foreground">Sync Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-scroll-violet">{(quantumHarmonic.cascadeIntensity * 100).toFixed(0)}%</div>
                      <div className="text-sm text-muted-foreground">Cascade Intensity</div>
                    </div>
                  </div>
                </Card>

                {/* Harmonic Frequencies */}
                <Card className="p-4">
                  <h4 className="font-semibold mb-3">Harmonic Frequencies</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {quantumHarmonic.harmonics.map((freq, index) => (
                      <div key={freq} className="flex items-center justify-between p-2 rounded border">
                        <span className="text-sm font-mono">{freq}Hz</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-quantum-blue to-quantum-gold"
                              initial={{ width: 0 }}
                              animate={{ width: `${(quantumHarmonic.syncLevel * 100)}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                          <div className={`w-2 h-2 rounded-full ${harmonicCascadeActive ? 'bg-quantum-gold animate-pulse' : 'bg-muted'}`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Cascade Events */}
                <Card className="p-4">
                  <h4 className="font-semibold mb-3">Recent Cascade Events</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {cascadeEvents.length === 0 ? (
                      <div className="text-sm text-muted-foreground text-center py-4">No recent cascade events</div>
                    ) : (
                      cascadeEvents.map((event) => (
                        <motion.div
                          key={event.id}
                          className="flex items-center justify-between p-2 rounded border"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <div>
                            <div className="text-sm font-medium capitalize">{event.type.replace('_', ' ')}</div>
                            <div className="text-xs text-muted-foreground">Origin: {event.originNode}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold">{(event.intensity * 100).toFixed(0)}%</div>
                            <div className="text-xs text-muted-foreground">{Math.floor((Date.now() - event.timestamp) / 1000)}s ago</div>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </div>
                </Card>

                {/* Manual Controls */}
                <Card className="p-4">
                  <h4 className="font-semibold mb-3">Manual Controls</h4>
                  <div className="flex gap-3">
                    <Button 
                      onClick={triggerHarmonicCascade}
                      disabled={harmonicCascadeActive}
                      className="flex-1"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      {harmonicCascadeActive ? 'Cascade Active...' : 'Trigger Cascade'}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Activity className="w-4 h-4 mr-2" />
                      Sync Harmonics
                    </Button>
                  </div>
                </Card>
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
                        {key === 'harmonicCoherence' && 'Quantum harmonic field stability'}
                        {key === 'cascadeResonance' && 'Active cascade resonance level'}
                        {key === 'quantumSyncLevel' && 'Multi-dimensional synchronization'}
                        {key === 'fieldStability' && 'Quantum field coherence stability'}
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