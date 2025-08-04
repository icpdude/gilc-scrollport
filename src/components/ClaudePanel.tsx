import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Brain, 
  Zap, 
  CheckCircle2, 
  Send,
  Minimize2,
  Maximize2,
  Sparkles,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Settings
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { useConversation } from "@11labs/react";
import { useLocalStorage } from "react-use";

interface ClaudeMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const ClaudePanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ClaudeMessage[]>([
    {
      role: 'assistant',
      content: "Hello! I'm Claude, GILC's ethical AI assistant. I can help you understand our mission, explore scrolls, or answer questions about cybernetic civilization. What would you like to know?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volume, setVolume] = useLocalStorage("claude-volume", 0.7);
  const [apiKey, setApiKey] = useLocalStorage<string>("elevenlabs-api-key", "");
  const [showSettings, setShowSettings] = useState(false);

  const conversation = useConversation({
    onConnect: () => console.log("Connected to ElevenLabs"),
    onDisconnect: () => setIsListening(false),
    onMessage: (message) => {
      console.log("ElevenLabs message:", message);
      setIsSpeaking(true);
    },
    onError: (error) => console.error("ElevenLabs error:", error)
  });

  const quickPrompts = [
    "What is GILC's mission?",
    "Explain ScrollDNA protocol",
    "How does the DAO work?",
    "Tell me about ethics verification",
    "What are the membership tiers?",
    "How to contribute a scroll?"
  ];

  const handleSendMessage = useCallback(async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage: ClaudeMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // If we have ElevenLabs API key and voice is enabled, use voice
    if (apiKey && conversation) {
      try {
        // Send message to voice conversation
        await conversation.startSession({ 
          // This would need a signed URL in production
          agentId: "demo-agent-id" 
        });
      } catch (error) {
        console.error("Voice conversation error:", error);
      }
    }
    
    // Simulate Claude response
    const responses = [
      "The Global Institute for Logic & Cybernetics (GILC) is a sovereign, decentralized institution dedicated to advancing ethical AI and cybernetic civilization through verified knowledge systems.",
      "ScrollDNA is our immutable knowledge verification protocol that uses cryptographic hashing and zero-knowledge proofs to ensure the integrity and provenance of academic scrolls.",
      "Our DAO operates through distributed consensus mechanisms, allowing global contributors to participate in governance, scroll validation, and institutional evolution.",
      "Ethics verification ensures all AI systems and knowledge contributions align with GILC's foundational principles of human dignity, transparency, and collective flourishing."
    ];
    
    const assistantMessage: ClaudeMessage = {
      role: 'assistant',
      content: responses[Math.floor(Math.random() * responses.length)],
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prev => [...prev, assistantMessage]);
    
    // Speak the response if voice is enabled
    if ('speechSynthesis' in window && isSpeaking) {
      const utterance = new SpeechSynthesisUtterance(assistantMessage.content);
      utterance.volume = volume || 0.7;
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
    
    setInputMessage('');
  }, [inputMessage, apiKey, conversation, volume, isSpeaking]);

  const toggleVoiceListening = useCallback(async () => {
    if (!isListening) {
      if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        alert("Speech recognition not supported in this browser");
        return;
      }

      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.start();
    } else {
      setIsListening(false);
    }
  }, [isListening]);

  const handleQuickPrompt = (prompt: string) => {
    setInputMessage(prompt);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isExpanded) {
    // Floating Assistant Button
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsExpanded(true)}
          className="btn-quantum rounded-full w-16 h-16 shadow-quantum hover:scale-110 transition-all duration-300"
        >
          <Brain className="w-6 h-6" />
        </Button>
        
        {/* Pulse indicator */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-success rounded-full animate-pulse-glow">
          <div className="absolute inset-0 bg-success rounded-full animate-ping"></div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full mb-4 right-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-card border border-border rounded-lg p-3 shadow-quantum whitespace-nowrap">
            <div className="text-sm font-medium">Claude Assistant</div>
            <div className="text-xs text-muted-foreground">Ask me anything about GILC</div>
          </div>
        </div>
      </div>
    );
  }

  // Expanded Chat Interface
  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]" id="claude">
      <Card className="quantum-card shadow-quantum">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="w-8 h-8 bg-gradient-scroll rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-background" />
              </div>
              Claude Assistant
            </CardTitle>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="ethics-badge text-xs">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Ethics-Verified
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
          
          <div className="text-xs text-muted-foreground flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
            Public Reasoning Assistant v1.0
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Chat Messages */}
          <div className="max-h-80 overflow-y-auto space-y-3 bg-muted/10 rounded-lg p-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-6 h-6 bg-scroll-violet/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-3 h-3 text-scroll-violet" />
                  </div>
                )}
                
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user' 
                    ? 'bg-scroll-violet text-scroll-violet-foreground' 
                    : 'bg-card border border-border/50'
                }`}>
                  <div className="text-sm leading-relaxed">{message.content}</div>
                  <div className="text-xs opacity-70 mt-1">{message.timestamp}</div>
                </div>
                
                {message.role === 'user' && (
                  <div className="w-6 h-6 bg-golden/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs text-golden font-bold">U</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Quick Prompts */}
          {messages.length === 1 && (
            <div className="space-y-2">
              <div className="text-xs font-medium text-muted-foreground">Quick questions:</div>
              <div className="grid grid-cols-2 gap-2">
                {quickPrompts.slice(0, 4).map((prompt) => (
                  <Button
                    key={prompt}
                    variant="ghost"
                    onClick={() => handleQuickPrompt(prompt)}
                    className="text-xs h-auto p-2 justify-start hover:bg-scroll-violet/5"
                  >
                    <Sparkles className="w-3 h-3 mr-1 text-scroll-violet" />
                    {prompt}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input Area */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about GILC, scrolls, or ethics..."
                  className={`w-full px-3 py-2 bg-muted/20 border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-scroll-violet/50 focus:border-scroll-violet ${isListening ? 'voice-listening' : ''}`}
                />
              </div>
              <Button 
                onClick={toggleVoiceListening} 
                size="sm"
                variant={isListening ? "destructive" : "outline"}
                className="px-3"
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="btn-scroll px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSpeaking(!isSpeaking)}
                  className="h-6 px-2"
                >
                  {isSpeaking ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
                </Button>
                {isSpeaking && (
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-16 h-1 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(!showSettings)}
                className="h-6 px-2"
              >
                <Settings className="w-3 h-3" />
              </Button>
            </div>
          </div>
          
          {/* Agent Capabilities */}
          <div className="border-t border-border/50 pt-3 space-y-2">
            <div className="text-xs font-medium text-muted-foreground">Agent Capabilities:</div>
            <div className="flex flex-wrap gap-1">
              {['Ask', 'Audit', 'Edit', 'Contribute'].map((capability) => (
                <Badge key={capability} variant="outline" className="text-xs">
                  {capability}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};