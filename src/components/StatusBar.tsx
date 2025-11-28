import { Circle, Zap } from "lucide-react";

export const StatusBar = () => {
  return (
    <footer className="h-6 bg-chrome-card border-t border-chrome-border flex items-center justify-between px-3 text-[11px] text-text-muted transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 group cursor-pointer hover:text-primary transition-colors duration-300">
          <Circle className="w-2 h-2 fill-primary text-primary animate-pulse group-hover:scale-125 transition-transform duration-300" />
          <span>main</span>
        </div>
        <span className="hover:text-foreground transition-colors duration-300 cursor-pointer">UTF-8</span>
        <span className="hover:text-foreground transition-colors duration-300 cursor-pointer">LF</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="hover:text-foreground transition-colors duration-300 cursor-pointer">app.swift</span>
        <span className="hover:text-foreground transition-colors duration-300 cursor-pointer">Swift</span>
        <div className="flex items-center gap-1 text-primary group cursor-pointer hover:scale-105 transition-transform duration-300">
          <Zap className="w-3 h-3 group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
          <span>Live AI</span>
        </div>
      </div>

      <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-300 cursor-pointer">
        <span>Ln 15, Col 20</span>
        <span>Spaces: 2</span>
      </div>
    </footer>
  );
};
