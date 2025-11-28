import { useState } from "react";
import { FileCode, Settings, Command, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SettingsDialog } from "./SettingsDialog";

const menuItems = [
  "File", "Edit", "Selection", "View", "Run", "Terminal", "Help"
];

export const TopMenu = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <header className="h-12 bg-chrome-card border-b border-chrome-border flex items-center justify-between px-3 text-xs">
        {/* Logo and Menu */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 group">
            <div className="w-5 h-5 bg-primary rounded flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 animate-pulse">
              <FileCode className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="font-semibold text-sm">AiIDE</span>
          </div>
          
          <nav className="flex items-center gap-1 ml-4">
            {menuItems.map((item, index) => (
              <Button
                key={item}
                variant="ghost"
                size="sm"
                className="h-7 px-3 text-text-muted hover:text-foreground hover:bg-hover-bg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </Button>
            ))}
          </nav>
        </div>

        {/* Center - Project Info */}
        <div className="flex items-center gap-2 text-text-muted animate-fade-in">
          <span>No project opened</span>
          <ChevronRight className="w-3 h-3 animate-pulse" />
        </div>

        {/* Right - Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSettingsOpen(true)}
            className="h-7 px-3 text-text-muted hover:text-foreground hover:bg-hover-bg transition-all duration-300 hover:scale-110 group"
          >
            <Settings className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-3 text-text-muted hover:text-foreground hover:bg-hover-bg transition-all duration-300 hover:scale-105"
          >
            Live AI
          </Button>
          <div className="flex items-center gap-1 text-text-dim text-[11px] animate-fade-in">
            <Command className="w-3 h-3 animate-pulse" />
            <span>+Shift+P for palette</span>
          </div>
        </div>
      </header>

      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </>
  );
};
