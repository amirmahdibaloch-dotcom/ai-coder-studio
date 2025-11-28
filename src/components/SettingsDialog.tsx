import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { themes } from "@/lib/themes";
import { useTheme } from "@/hooks/useTheme";
import { Check, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SettingsDialog = ({ open, onOpenChange }: SettingsDialogProps) => {
  const { currentTheme, setTheme } = useTheme();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden bg-chrome-card border-chrome-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg">
            <Palette className="w-5 h-5 text-primary animate-pulse" />
            Theme Settings
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 overflow-y-auto max-h-[calc(80vh-100px)] pr-2">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {themes.map((theme) => {
              const isActive = currentTheme.name === theme.name;
              
              return (
                <button
                  key={theme.name}
                  onClick={() => setTheme(theme.name)}
                  className={cn(
                    "group relative p-4 rounded-lg border-2 transition-all duration-300",
                    "hover:scale-105 hover:shadow-xl animate-fade-in",
                    isActive
                      ? "border-primary shadow-lg shadow-primary/20 bg-primary/5"
                      : "border-chrome-border hover:border-primary/50 bg-chrome-bg"
                  )}
                  style={{
                    animationDelay: `${themes.indexOf(theme) * 50}ms`
                  }}
                >
                  {/* Color Preview */}
                  <div className="mb-3 space-y-2">
                    <div 
                      className="h-12 rounded-md transition-transform duration-300 group-hover:scale-105"
                      style={{ 
                        backgroundColor: `hsl(${theme.colors.chromeBg})`,
                        border: `2px solid hsl(${theme.colors.primary})`,
                        boxShadow: isActive ? `0 0 20px hsl(${theme.colors.primary} / 0.4)` : 'none'
                      }}
                    >
                      <div className="h-full flex items-center justify-center">
                        <div 
                          className="w-6 h-6 rounded-full animate-pulse"
                          style={{ backgroundColor: `hsl(${theme.colors.primary})` }}
                        />
                      </div>
                    </div>
                    
                    {/* Color Dots */}
                    <div className="flex gap-1">
                      <div 
                        className="w-4 h-4 rounded-full transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `hsl(${theme.colors.primary})` }}
                      />
                      <div 
                        className="w-4 h-4 rounded-full transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `hsl(${theme.colors.chromeCard})` }}
                      />
                      <div 
                        className="w-4 h-4 rounded-full transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `hsl(${theme.colors.hoverBg})` }}
                      />
                    </div>
                  </div>

                  {/* Theme Name */}
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {theme.displayName}
                    </p>
                    <p className="text-xs text-text-dim mt-1 capitalize">
                      {theme.name}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-scale-in shadow-lg shadow-primary/50">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}

                  {/* Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, hsl(${theme.colors.primary} / 0.1), transparent 70%)`
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-chrome-border">
          <p className="text-xs text-text-muted text-center">
            Choose from {themes.length} beautiful themes • Changes apply instantly
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
