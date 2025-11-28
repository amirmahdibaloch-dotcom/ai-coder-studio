import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const AiPanel = () => {
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="w-80 bg-chrome-card border-l border-chrome-border flex flex-col">
      {/* Header */}
      <div className="h-10 px-4 border-b border-chrome-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold">AI Assistant</h3>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="w-full h-9 bg-transparent border-b border-chrome-border rounded-none p-0 justify-start">
          <TabsTrigger
            value="chat"
            className={cn(
              "rounded-none border-b-2 border-transparent data-[state=active]:border-primary",
              "data-[state=active]:bg-transparent data-[state=active]:text-primary",
              "text-xs px-4 h-9"
            )}
          >
            Chat
          </TabsTrigger>
          <TabsTrigger
            value="planning"
            className={cn(
              "rounded-none border-b-2 border-transparent data-[state=active]:border-primary",
              "data-[state=active]:bg-transparent data-[state=active]:text-primary",
              "text-xs px-4 h-9"
            )}
          >
            Planning
          </TabsTrigger>
          <TabsTrigger
            value="agent"
            className={cn(
              "rounded-none border-b-2 border-transparent data-[state=active]:border-primary",
              "data-[state=active]:bg-transparent data-[state=active]:text-primary",
              "text-xs px-4 h-9"
            )}
          >
            Agent
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-y-auto p-4">
          <TabsContent value="chat" className="mt-0">
            <div className="text-xs text-text-muted space-y-3">
              <p>Welcome to AI Assistant! Ask me anything about your code.</p>
              <div className="bg-chrome-bg p-3 rounded-lg border border-chrome-border">
                <p className="text-foreground mb-1">Suggestions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Explain this code</li>
                  <li>Find bugs</li>
                  <li>Optimize performance</li>
                  <li>Add comments</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="planning" className="mt-0">
            <div className="text-xs text-text-muted space-y-3">
              <p>AI Planning helps you structure your project and break down complex tasks.</p>
              <div className="bg-chrome-bg p-3 rounded-lg border border-chrome-border">
                <p className="text-foreground mb-1">Try:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Plan a new feature</li>
                  <li>Refactor suggestions</li>
                  <li>Architecture review</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="agent" className="mt-0">
            <div className="text-xs text-text-muted space-y-3">
              <p>Agent mode allows AI to make autonomous changes to your code.</p>
              <div className="bg-primary/10 border border-primary/20 p-3 rounded-lg">
                <p className="text-primary">⚠️ Agent mode will modify your files</p>
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="sm"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Run Agent
              </Button>
            </div>
          </TabsContent>
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-chrome-border">
          <div className="relative">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask AI anything..."
              className="min-h-[80px] pr-10 bg-chrome-bg border-chrome-border text-xs resize-none"
            />
            <Button
              size="sm"
              className="absolute bottom-2 right-2 h-7 w-7 p-0 bg-primary hover:bg-primary/90"
            >
              <Send className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </Tabs>
    </div>
  );
};
