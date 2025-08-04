import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { 
  Brain, 
  BookOpen, 
  Users, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Activity,
  Scroll,
  Globe,
  Shield,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useLocalStorage } from "react-use";

interface NavigationItem {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  section: string;
  contextualInfo?: string;
  badge?: string;
}

interface DAOActivity {
  id: string;
  type: "proposal" | "vote" | "scroll_added";
  title: string;
  timestamp: Date;
  status: "active" | "passed" | "pending";
}

export const AdaptiveSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useLocalStorage("sidebar-collapsed", false);
  const [activeSection, setActiveSection] = useState("hero");
  const [contextualItems, setContextualItems] = useState<NavigationItem[]>([]);
  const [recentActivity, setRecentActivity] = useState<DAOActivity[]>([]);
  const location = useLocation();

  const baseNavigation: NavigationItem[] = [
    { id: "hero", title: "Welcome", icon: Globe, section: "hero" },
    { id: "mission", title: "Our Mission", icon: BookOpen, section: "mission" },
    { id: "pillars", title: "Knowledge Pillars", icon: Scroll, section: "pillars" },
    { id: "scrolldna", title: "ScrollDNA Engine", icon: Brain, section: "scrolldna" },
    { id: "global", title: "Global Network", icon: Users, section: "global" },
    { id: "legal", title: "Ethics & Law", icon: Shield, section: "legal" },
  ];

  // Simulate contextual recommendations based on current section
  useEffect(() => {
    const generateContextualItems = () => {
      const contextMap: Record<string, NavigationItem[]> = {
        hero: [
          { id: "charter", title: "GILC Charter", icon: Scroll, section: "documents", contextualInfo: "Core document" },
          { id: "join", title: "Join Initiative", icon: Users, section: "onboarding", badge: "New" }
        ],
        mission: [
          { id: "epochs", title: "Development Epochs", icon: Activity, section: "timeline" },
          { id: "principles", title: "Core Principles", icon: BookOpen, section: "philosophy" }
        ],
        scrolldna: [
          { id: "latest-scrolls", title: "Latest Scrolls", icon: Scroll, section: "recent", badge: "3 new" },
          { id: "ai-insights", title: "AI Insights", icon: Brain, section: "analysis" }
        ]
      };
      
      setContextualItems(contextMap[activeSection] || []);
    };

    generateContextualItems();
  }, [activeSection]);

  // Simulate DAO activity feed
  useEffect(() => {
    const mockActivity: DAOActivity[] = [
      {
        id: "1",
        type: "proposal",
        title: "Ethics Framework Update",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        status: "active"
      },
      {
        id: "2", 
        type: "scroll_added",
        title: "Cybernetic Governance v2.1",
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        status: "passed"
      },
      {
        id: "3",
        type: "vote",
        title: "Node Verification Protocol",
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
        status: "pending"
      }
    ];
    
    setRecentActivity(mockActivity);
  }, []);

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "mission", "pillars", "scrolldna", "global", "legal"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getActivityIcon = (type: DAOActivity["type"]) => {
    switch (type) {
      case "proposal": return Settings;
      case "vote": return Users;
      case "scroll_added": return Scroll;
      default: return Activity;
    }
  };

  const getActivityBadgeColor = (status: DAOActivity["status"]) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "passed": return "bg-scroll-violet text-scroll-violet-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <motion.aside
      initial={false}
      animate={{ 
        width: isCollapsed ? "4rem" : "20rem",
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      className="fixed left-0 top-0 h-screen bg-card border-r border-border/40 backdrop-blur-sm z-50"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/40">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-lg bg-scroll-violet flex items-center justify-center">
                <Scroll className="w-4 h-4 text-scroll-violet-foreground" />
              </div>
              <span className="font-literata font-semibold text-foreground">GILC</span>
            </motion.div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto"
          >
            {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </Button>
        </div>

        <ScrollArea className="flex-1">
          {/* Main Navigation */}
          <div className="p-2">
            {!isCollapsed && (
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-2 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider"
              >
                Navigation
              </motion.h3>
            )}
            
            <nav className="space-y-1">
              {baseNavigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.section)}
                    className={`w-full flex items-center px-2 py-2 text-sm rounded-md transition-colors ${
                      isActive 
                        ? "bg-scroll-violet text-scroll-violet-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-3 truncate"
                      >
                        {item.title}
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </nav>
          </div>

          {/* Contextual Recommendations */}
          <AnimatePresence>
            {!isCollapsed && contextualItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-2 mt-4"
              >
                <Separator className="mb-3" />
                <h3 className="px-2 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Related
                </h3>
                
                <div className="space-y-1">
                  {contextualItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        className="w-full flex items-center justify-between px-2 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center">
                          <Icon className="w-3 h-3 flex-shrink-0" />
                          <span className="ml-2 truncate text-xs">{item.title}</span>
                        </div>
                        {item.badge && (
                          <Badge variant="secondary" className="text-xs py-0 px-1">
                            {item.badge}
                          </Badge>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* DAO Activity Feed */}
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-2 mt-4"
              >
                <Separator className="mb-3" />
                <h3 className="px-2 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  DAO Activity
                </h3>
                
                <div className="space-y-2">
                  {recentActivity.slice(0, 3).map((activity) => {
                    const Icon = getActivityIcon(activity.type);
                    return (
                      <motion.div
                        key={activity.id}
                        className="px-2 py-2 text-xs border border-border/40 rounded-md bg-muted/20"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center">
                            <Icon className="w-3 h-3 text-muted-foreground" />
                            <span className="ml-1 font-medium text-foreground truncate">
                              {activity.title}
                            </span>
                          </div>
                          <Badge className={`text-xs py-0 px-1 ${getActivityBadgeColor(activity.status)}`}>
                            {activity.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-xs">
                          {activity.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollArea>
      </div>
    </motion.aside>
  );
};