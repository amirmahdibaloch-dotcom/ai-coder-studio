import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { themes, Theme } from "@/lib/themes";

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("aiide-theme");
    return themes.find(t => t.name === saved) || themes[0];
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply theme colors with smooth transition
    root.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    
    root.style.setProperty("--chrome-bg", currentTheme.colors.chromeBg);
    root.style.setProperty("--chrome-card", currentTheme.colors.chromeCard);
    root.style.setProperty("--primary", currentTheme.colors.primary);
    root.style.setProperty("--primary-foreground", currentTheme.colors.primaryForeground);
    root.style.setProperty("--foreground", currentTheme.colors.foreground);
    root.style.setProperty("--text-dim", currentTheme.colors.textDim);
    root.style.setProperty("--text-muted", currentTheme.colors.textMuted);
    root.style.setProperty("--hover-bg", currentTheme.colors.hoverBg);
    root.style.setProperty("--active-bg", currentTheme.colors.activeBg);
    root.style.setProperty("--background", currentTheme.colors.chromeBg);
    
    // Also update derived colors
    root.style.setProperty("--card", currentTheme.colors.chromeCard);
    root.style.setProperty("--card-foreground", currentTheme.colors.foreground);
    root.style.setProperty("--popover", currentTheme.colors.chromeCard);
    root.style.setProperty("--popover-foreground", currentTheme.colors.foreground);
    
    localStorage.setItem("aiide-theme", currentTheme.name);
  }, [currentTheme]);

  const setTheme = (themeName: string) => {
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      setCurrentTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
