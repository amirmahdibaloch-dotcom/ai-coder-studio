import { FileCode, Settings, Search, Command, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  "File", "Edit", "Selection", "View", "Run", "Terminal", "Help"
];

export const TopMenu = () => {
  return (
    <header className="h-12 bg-chrome-card border-b border-chrome-border flex items-center justify-between px-3 text-xs">
      {/* Logo and Menu */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
            <FileCode className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="font-semibold text-sm">AiIDE</span>
        </div>
        
        <nav className="flex items-center gap-1 ml-4">
          {menuItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              size="sm"
              className="h-7 px-3 text-text-muted hover:text-foreground hover:bg-hover-bg"
            >
              {item}
            </Button>
          ))}
        </nav>
      </div>

      {/* Center - Project Info */}
      <div className="flex items-center gap-2 text-text-muted">
        <span>No project opened</span>
        <ChevronRight className="w-3 h-3" />
      </div>

      {/* Right - Controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="h-7 px-3 text-text-muted hover:text-foreground hover:bg-hover-bg"
        >
          <Settings className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 px-3 text-text-muted hover:text-foreground hover:bg-hover-bg"
        >
          Live AI
        </Button>
        <div className="flex items-center gap-1 text-text-dim text-[11px]">
          <Command className="w-3 h-3" />
          <span>+Shift+P for palette</span>
        </div>
      </div>
    </header>
  );
};
