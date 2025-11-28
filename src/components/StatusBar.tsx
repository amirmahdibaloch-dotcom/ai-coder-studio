import { Circle, Zap } from "lucide-react";

export const StatusBar = () => {
  return (
    <footer className="h-6 bg-chrome-card border-t border-chrome-border flex items-center justify-between px-3 text-[11px] text-text-muted">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Circle className="w-2 h-2 fill-primary text-primary" />
          <span>main</span>
        </div>
        <span>UTF-8</span>
        <span>LF</span>
      </div>

      <div className="flex items-center gap-4">
        <span>app.swift</span>
        <span>Swift</span>
        <div className="flex items-center gap-1 text-primary">
          <Zap className="w-3 h-3" />
          <span>Live AI</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span>Ln 15, Col 20</span>
        <span>Spaces: 2</span>
      </div>
    </footer>
  );
};
