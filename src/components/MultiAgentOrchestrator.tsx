import { useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Languages, 
  FileText, 
  Bot, 
  Zap,
  Clock,
  Users,
  Workflow,
  Cpu,
  GitBranch,
  Activity
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Agent {
  id: string;
  name: string;
  type: 'ethics' | 'logic' | 'citation' | 'translation' | 'coordinator';
  status: 'idle' | 'active' | 'processing' | 'completed' | 'error';
  progress: number;
  currentTask: string;
  completedTasks: number;
  totalTasks: number;
  performance: number;
  lastActivity: string;
  icon: typeof Shield;
  color: string;
}

interface WorkflowTask {
  id: string;
  scrollId: string;
  scrollTitle: string;
  phase: 'validation' | 'processing' | 'synthesis' | 'completed';
  assignedAgents: string[];
  progress: number;
  startTime: string;
  estimatedCompletion: string;
  results: {
    ethicsScore?: number;
    logicScore?: number;
    citationCount?: number;
    translationProgress?: number;
  };
}

const initialAgents: Agent[] = [
  {
    id: 'ethics-validator',
    name: 'Ethics Validator',
    type: 'ethics',
    status: 'active',
    progress: 75,
    currentTask: 'Analyzing moral implications of AI governance scroll',
    completedTasks: 12,
    totalTasks: 15,
    performance: 0.94,
    lastActivity: '2m ago',
    icon: Shield,
    color: 'hsl(var(--success))'
  },
  {
    id: 'logic-checker',
    name: 'Logic Checker',
    type: 'logic',
    status: 'processing',
    progress: 45,
    currentTask: 'Verifying logical consistency in cybernetic principles',
    completedTasks: 8,
    totalTasks: 12,
    performance: 0.89,
    lastActivity: '1m ago',
    icon: CheckCircle,
    color: 'hsl(var(--quantum-blue))'
  },
  {
    id: 'citation-assistant',
    name: 'Citation Assistant',
    type: 'citation',
    status: 'active',
    progress: 88,
    currentTask: 'Cross-referencing academic sources and ScrollDNA',
    completedTasks: 22,
    totalTasks: 25,
    performance: 0.96,
    lastActivity: '30s ago',
    icon: FileText,
    color: 'hsl(var(--scroll-violet))'
  },
  {
    id: 'translation-agent',
    name: 'Translation Agent',
    type: 'translation',
    status: 'idle',
    progress: 0,
    currentTask: 'Awaiting multilingual optimization task',
    completedTasks: 45,
    totalTasks: 45,
    performance: 0.92,
    lastActivity: '15m ago',
    icon: Languages,
    color: 'hsl(var(--golden))'
  },
  {
    id: 'coordinator',
    name: 'Workflow Coordinator',
    type: 'coordinator',
    status: 'active',
    progress: 60,
    currentTask: 'Orchestrating multi-agent collaboration patterns',
    completedTasks: 8,
    totalTasks: 10,
    performance: 0.91,
    lastActivity: 'now',
    icon: Workflow,
    color: 'hsl(var(--cyber-green))'
  }
];

const initialWorkflows: WorkflowTask[] = [
  {
    id: 'workflow-1',
    scrollId: 'scroll-ethics-v2',
    scrollTitle: 'AI Ethics Framework v2.0',
    phase: 'processing',
    assignedAgents: ['ethics-validator', 'logic-checker', 'citation-assistant'],
    progress: 65,
    startTime: '2h ago',
    estimatedCompletion: '45m',
    results: {
      ethicsScore: 0.89,
      logicScore: 0.92,
      citationCount: 47
    }
  },
  {
    id: 'workflow-2',
    scrollId: 'scroll-governance',
    scrollTitle: 'Cybernetic Governance Principles',
    phase: 'validation',
    assignedAgents: ['ethics-validator', 'coordinator'],
    progress: 25,
    startTime: '30m ago',
    estimatedCompletion: '2h 15m',
    results: {
      ethicsScore: 0.76
    }
  },
  {
    id: 'workflow-3',
    scrollId: 'scroll-quantum-law',
    scrollTitle: 'Quantum Legal Framework',
    phase: 'completed',
    assignedAgents: ['ethics-validator', 'logic-checker', 'citation-assistant', 'translation-agent'],
    progress: 100,
    startTime: '6h ago',
    estimatedCompletion: 'completed',
    results: {
      ethicsScore: 0.95,
      logicScore: 0.88,
      citationCount: 63,
      translationProgress: 100
    }
  }
];

export const MultiAgentOrchestrator = () => {
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
  const [workflows, setWorkflows] = useState<WorkflowTask[]>(initialWorkflows);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [systemLoad, setSystemLoad] = useState(72);

  // Simulate agent activity
  useEffect(() => {
    const interval = setInterval(() => {
      setAgents(prev => prev.map(agent => {
        if (agent.status === 'active' || agent.status === 'processing') {
          const progressIncrement = Math.random() * 5;
          const newProgress = Math.min(agent.progress + progressIncrement, 100);
          
          if (newProgress >= 100) {
            return {
              ...agent,
              progress: 0,
              status: 'idle' as const,
              completedTasks: agent.completedTasks + 1,
              currentTask: 'Task completed - awaiting new assignment',
              lastActivity: 'just now'
            };
          }
          
          return {
            ...agent,
            progress: newProgress,
            lastActivity: 'now'
          };
        }
        return agent;
      }));

      // Update system load
      setSystemLoad(prev => {
        const change = (Math.random() - 0.5) * 10;
        return Math.max(30, Math.min(95, prev + change));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'active': return 'hsl(var(--success))';
      case 'processing': return 'hsl(var(--quantum-blue))';
      case 'completed': return 'hsl(var(--cyber-green))';
      case 'error': return 'hsl(var(--destructive))';
      default: return 'hsl(var(--muted-foreground))';
    }
  };

  const getPhaseColor = (phase: WorkflowTask['phase']) => {
    switch (phase) {
      case 'validation': return 'hsl(var(--warning))';
      case 'processing': return 'hsl(var(--quantum-blue))';
      case 'synthesis': return 'hsl(var(--scroll-violet))';
      case 'completed': return 'hsl(var(--success))';
      default: return 'hsl(var(--muted-foreground))';
    }
  };

  const startNewWorkflow = useCallback(() => {
    const newWorkflow: WorkflowTask = {
      id: `workflow-${Date.now()}`,
      scrollId: `scroll-${Date.now()}`,
      scrollTitle: 'New Scroll Analysis',
      phase: 'validation',
      assignedAgents: ['ethics-validator', 'coordinator'],
      progress: 0,
      startTime: 'now',
      estimatedCompletion: '2h 30m',
      results: {}
    };

    setWorkflows(prev => [newWorkflow, ...prev]);
  }, []);

  if (!isExpanded) {
    return (
      <motion.div 
        className="fixed bottom-20 right-20 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
      >
        <Button
          onClick={() => setIsExpanded(true)}
          className="btn-quantum rounded-full w-16 h-16 shadow-quantum hover:scale-110 transition-all duration-300"
        >
          <Users className="w-6 h-6" />
        </Button>
        
        <div className="absolute -top-1 -right-1">
          <div className="flex space-x-1">
            {agents.filter(a => a.status === 'active').map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 bg-success rounded-full animate-pulse-glow"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-full mb-4 right-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-card border border-border rounded-lg p-3 shadow-quantum whitespace-nowrap">
            <div className="text-sm font-medium">Multi-Agent System</div>
            <div className="text-xs text-muted-foreground">
              {agents.filter(a => a.status === 'active').length} agents active
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="fixed top-20 right-4 bottom-4 w-96 z-40"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <Card className="h-full flex flex-col quantum-card shadow-quantum">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="w-8 h-8 bg-gradient-agents rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-background" />
              </div>
              Multi-Agent System
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="w-8 h-8 p-0"
            >
              ×
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">System Load</span>
              <span className="font-medium">{systemLoad.toFixed(0)}%</span>
            </div>
            <Progress value={systemLoad} className="h-2" />
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 space-y-4 overflow-y-auto">
          {/* Agent Status Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Active Agents</h3>
              <Badge variant="outline" className="text-xs">
                <Activity className="w-3 h-3 mr-1" />
                {agents.filter(a => a.status === 'active' || a.status === 'processing').length} online
              </Badge>
            </div>
            
            {agents.map((agent) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedAgent?.id === agent.id 
                      ? 'border-scroll-violet bg-scroll-violet/5' 
                      : 'border-border hover:border-border/80'
                  }`}
                  onClick={() => setSelectedAgent(selectedAgent?.id === agent.id ? null : agent)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${agent.color}20` }}
                      >
                        <Icon className="w-3 h-3" style={{ color: agent.color }} />
                      </div>
                      <span className="text-sm font-medium">{agent.name}</span>
                    </div>
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: getStatusColor(agent.status) }}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">
                      {agent.currentTask}
                    </div>
                    
                    {agent.status === 'active' || agent.status === 'processing' ? (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{agent.progress.toFixed(0)}%</span>
                        </div>
                        <Progress value={agent.progress} className="h-1" />
                      </div>
                    ) : null}
                    
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Performance: {(agent.performance * 100).toFixed(0)}%</span>
                      <span>{agent.lastActivity}</span>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {selectedAgent?.id === agent.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-3 border-t border-border space-y-2"
                      >
                        <div className="flex justify-between text-xs">
                          <span>Completed Tasks:</span>
                          <span>{agent.completedTasks}/{agent.totalTasks}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Success Rate:</span>
                          <span>{(agent.performance * 100).toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Agent Type:</span>
                          <Badge variant="secondary" className="text-xs capitalize">
                            {agent.type}
                          </Badge>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
          
          <Separator />
          
          {/* Active Workflows */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Active Workflows</h3>
              <Button 
                size="sm" 
                onClick={startNewWorkflow}
                className="text-xs h-7"
              >
                <Zap className="w-3 h-3 mr-1" />
                New Workflow
              </Button>
            </div>
            
            {workflows.map((workflow) => (
              <motion.div
                key={workflow.id}
                className="p-3 rounded-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm">{workflow.scrollTitle}</div>
                  <Badge 
                    variant="outline" 
                    className="text-xs capitalize"
                    style={{ 
                      borderColor: getPhaseColor(workflow.phase),
                      color: getPhaseColor(workflow.phase)
                    }}
                  >
                    {workflow.phase}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Overall Progress</span>
                    <span>{workflow.progress}%</span>
                  </div>
                  <Progress value={workflow.progress} className="h-1" />
                  
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Started: {workflow.startTime}</span>
                    <span>ETA: {workflow.estimatedCompletion}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {workflow.assignedAgents.map((agentId) => {
                      const agent = agents.find(a => a.id === agentId);
                      if (!agent) return null;
                      const Icon = agent.icon;
                      return (
                        <div 
                          key={agentId}
                          className="flex items-center gap-1 px-2 py-1 bg-muted/20 rounded text-xs"
                        >
                          <Icon className="w-3 h-3" style={{ color: agent.color }} />
                          <span>{agent.name.split(' ')[0]}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  {Object.keys(workflow.results).length > 0 && (
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {workflow.results.ethicsScore && (
                        <div className="flex justify-between">
                          <span>Ethics:</span>
                          <span className="text-success">{(workflow.results.ethicsScore * 100).toFixed(0)}%</span>
                        </div>
                      )}
                      {workflow.results.logicScore && (
                        <div className="flex justify-between">
                          <span>Logic:</span>
                          <span className="text-quantum-blue">{(workflow.results.logicScore * 100).toFixed(0)}%</span>
                        </div>
                      )}
                      {workflow.results.citationCount && (
                        <div className="flex justify-between">
                          <span>Citations:</span>
                          <span>{workflow.results.citationCount}</span>
                        </div>
                      )}
                      {workflow.results.translationProgress && (
                        <div className="flex justify-between">
                          <span>Translation:</span>
                          <span className="text-golden">{workflow.results.translationProgress}%</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};