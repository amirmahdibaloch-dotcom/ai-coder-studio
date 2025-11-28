export interface Theme {
  name: string;
  displayName: string;
  colors: {
    chromeBg: string;
    chromeCard: string;
    primary: string;
    primaryForeground: string;
    foreground: string;
    textDim: string;
    textMuted: string;
    hoverBg: string;
    activeBg: string;
    border: string;
  };
}

export const themes: Theme[] = [
  {
    name: "midnight",
    displayName: "🌙 Midnight",
    colors: {
      chromeBg: "215 45% 4%",
      chromeCard: "215 40% 6%",
      primary: "78 100% 60%",
      primaryForeground: "215 45% 4%",
      foreground: "0 0% 90%",
      textDim: "0 0% 50%",
      textMuted: "0 0% 70%",
      hoverBg: "215 30% 12%",
      activeBg: "215 30% 15%",
      border: "0 0% 100%"
    }
  },
  {
    name: "ocean",
    displayName: "🌊 Ocean Breeze",
    colors: {
      chromeBg: "200 70% 8%",
      chromeCard: "200 65% 10%",
      primary: "180 100% 50%",
      primaryForeground: "200 70% 8%",
      foreground: "180 10% 95%",
      textDim: "180 5% 50%",
      textMuted: "180 8% 70%",
      hoverBg: "200 50% 15%",
      activeBg: "200 50% 18%",
      border: "180 20% 100%"
    }
  },
  {
    name: "sunset",
    displayName: "🌅 Sunset Glow",
    colors: {
      chromeBg: "15 60% 6%",
      chromeCard: "15 55% 8%",
      primary: "25 100% 55%",
      primaryForeground: "15 60% 6%",
      foreground: "25 10% 92%",
      textDim: "25 5% 48%",
      textMuted: "25 8% 68%",
      hoverBg: "15 45% 12%",
      activeBg: "15 45% 16%",
      border: "25 10% 100%"
    }
  },
  {
    name: "forest",
    displayName: "🌲 Forest Deep",
    colors: {
      chromeBg: "150 50% 5%",
      chromeCard: "150 45% 7%",
      primary: "140 80% 45%",
      primaryForeground: "150 50% 5%",
      foreground: "140 5% 90%",
      textDim: "140 5% 48%",
      textMuted: "140 8% 68%",
      hoverBg: "150 40% 12%",
      activeBg: "150 40% 15%",
      border: "140 10% 100%"
    }
  },
  {
    name: "lavender",
    displayName: "💜 Lavender Dream",
    colors: {
      chromeBg: "270 50% 6%",
      chromeCard: "270 45% 8%",
      primary: "280 85% 65%",
      primaryForeground: "270 50% 6%",
      foreground: "280 5% 92%",
      textDim: "280 5% 50%",
      textMuted: "280 8% 70%",
      hoverBg: "270 40% 13%",
      activeBg: "270 40% 16%",
      border: "280 10% 100%"
    }
  },
  {
    name: "cherry",
    displayName: "🍒 Cherry Blossom",
    colors: {
      chromeBg: "340 45% 7%",
      chromeCard: "340 40% 9%",
      primary: "330 100% 60%",
      primaryForeground: "340 45% 7%",
      foreground: "330 5% 93%",
      textDim: "330 5% 51%",
      textMuted: "330 8% 71%",
      hoverBg: "340 35% 14%",
      activeBg: "340 35% 17%",
      border: "330 10% 100%"
    }
  },
  {
    name: "amber",
    displayName: "🔥 Amber Fire",
    colors: {
      chromeBg: "35 55% 6%",
      chromeCard: "35 50% 8%",
      primary: "40 100% 50%",
      primaryForeground: "35 55% 6%",
      foreground: "40 5% 91%",
      textDim: "40 5% 49%",
      textMuted: "40 8% 69%",
      hoverBg: "35 45% 13%",
      activeBg: "35 45% 16%",
      border: "40 10% 100%"
    }
  },
  {
    name: "arctic",
    displayName: "❄️ Arctic Ice",
    colors: {
      chromeBg: "195 60% 6%",
      chromeCard: "195 55% 8%",
      primary: "185 90% 55%",
      primaryForeground: "195 60% 6%",
      foreground: "185 5% 93%",
      textDim: "185 5% 51%",
      textMuted: "185 8% 71%",
      hoverBg: "195 50% 13%",
      activeBg: "195 50% 16%",
      border: "185 10% 100%"
    }
  },
  {
    name: "rose",
    displayName: "🌹 Rose Garden",
    colors: {
      chromeBg: "350 50% 6%",
      chromeCard: "350 45% 8%",
      primary: "345 85% 60%",
      primaryForeground: "350 50% 6%",
      foreground: "345 5% 92%",
      textDim: "345 5% 50%",
      textMuted: "345 8% 70%",
      hoverBg: "350 40% 13%",
      activeBg: "350 40% 16%",
      border: "345 10% 100%"
    }
  },
  {
    name: "neon",
    displayName: "⚡ Neon Cyber",
    colors: {
      chromeBg: "290 70% 4%",
      chromeCard: "290 65% 6%",
      primary: "300 100% 60%",
      primaryForeground: "290 70% 4%",
      foreground: "300 5% 94%",
      textDim: "300 5% 52%",
      textMuted: "300 8% 72%",
      hoverBg: "290 60% 11%",
      activeBg: "290 60% 14%",
      border: "300 10% 100%"
    }
  },
  {
    name: "emerald",
    displayName: "💚 Emerald City",
    colors: {
      chromeBg: "160 55% 5%",
      chromeCard: "160 50% 7%",
      primary: "155 85% 50%",
      primaryForeground: "160 55% 5%",
      foreground: "155 5% 91%",
      textDim: "155 5% 49%",
      textMuted: "155 8% 69%",
      hoverBg: "160 45% 12%",
      activeBg: "160 45% 15%",
      border: "155 10% 100%"
    }
  },
  {
    name: "sapphire",
    displayName: "💎 Sapphire Blue",
    colors: {
      chromeBg: "220 65% 5%",
      chromeCard: "220 60% 7%",
      primary: "215 95% 55%",
      primaryForeground: "220 65% 5%",
      foreground: "215 5% 92%",
      textDim: "215 5% 50%",
      textMuted: "215 8% 70%",
      hoverBg: "220 55% 12%",
      activeBg: "220 55% 15%",
      border: "215 10% 100%"
    }
  },
  {
    name: "gold",
    displayName: "✨ Golden Hour",
    colors: {
      chromeBg: "45 50% 6%",
      chromeCard: "45 45% 8%",
      primary: "50 100% 55%",
      primaryForeground: "45 50% 6%",
      foreground: "50 5% 91%",
      textDim: "50 5% 49%",
      textMuted: "50 8% 69%",
      hoverBg: "45 40% 13%",
      activeBg: "45 40% 16%",
      border: "50 10% 100%"
    }
  },
  {
    name: "indigo",
    displayName: "🔮 Indigo Night",
    colors: {
      chromeBg: "240 60% 5%",
      chromeCard: "240 55% 7%",
      primary: "245 90% 60%",
      primaryForeground: "240 60% 5%",
      foreground: "245 5% 92%",
      textDim: "245 5% 50%",
      textMuted: "245 8% 70%",
      hoverBg: "240 50% 12%",
      activeBg: "240 50% 15%",
      border: "245 10% 100%"
    }
  },
  {
    name: "coral",
    displayName: "🪸 Coral Reef",
    colors: {
      chromeBg: "10 55% 6%",
      chromeCard: "10 50% 8%",
      primary: "15 100% 60%",
      primaryForeground: "10 55% 6%",
      foreground: "15 5% 91%",
      textDim: "15 5% 49%",
      textMuted: "15 8% 69%",
      hoverBg: "10 45% 13%",
      activeBg: "10 45% 16%",
      border: "15 10% 100%"
    }
  },
  {
    name: "mint",
    displayName: "🌿 Mint Fresh",
    colors: {
      chromeBg: "165 50% 6%",
      chromeCard: "165 45% 8%",
      primary: "170 80% 50%",
      primaryForeground: "165 50% 6%",
      foreground: "170 5% 91%",
      textDim: "170 5% 49%",
      textMuted: "170 8% 69%",
      hoverBg: "165 40% 13%",
      activeBg: "165 40% 16%",
      border: "170 10% 100%"
    }
  },
  {
    name: "crimson",
    displayName: "🎯 Crimson Pulse",
    colors: {
      chromeBg: "355 60% 5%",
      chromeCard: "355 55% 7%",
      primary: "0 90% 55%",
      primaryForeground: "355 60% 5%",
      foreground: "0 5% 92%",
      textDim: "0 5% 50%",
      textMuted: "0 8% 70%",
      hoverBg: "355 50% 12%",
      activeBg: "355 50% 15%",
      border: "0 10% 100%"
    }
  },
  {
    name: "slate",
    displayName: "🗿 Slate Storm",
    colors: {
      chromeBg: "210 40% 5%",
      chromeCard: "210 35% 7%",
      primary: "200 75% 50%",
      primaryForeground: "210 40% 5%",
      foreground: "200 5% 90%",
      textDim: "200 5% 48%",
      textMuted: "200 8% 68%",
      hoverBg: "210 30% 12%",
      activeBg: "210 30% 15%",
      border: "200 10% 100%"
    }
  },
  {
    name: "tangerine",
    displayName: "🍊 Tangerine Pop",
    colors: {
      chromeBg: "30 60% 6%",
      chromeCard: "30 55% 8%",
      primary: "35 100% 55%",
      primaryForeground: "30 60% 6%",
      foreground: "35 5% 91%",
      textDim: "35 5% 49%",
      textMuted: "35 8% 69%",
      hoverBg: "30 50% 13%",
      activeBg: "30 50% 16%",
      border: "35 10% 100%"
    }
  },
  {
    name: "galaxy",
    displayName: "🌌 Galaxy Edge",
    colors: {
      chromeBg: "265 55% 4%",
      chromeCard: "265 50% 6%",
      primary: "270 100% 65%",
      primaryForeground: "265 55% 4%",
      foreground: "270 5% 93%",
      textDim: "270 5% 51%",
      textMuted: "270 8% 71%",
      hoverBg: "265 45% 11%",
      activeBg: "265 45% 14%",
      border: "270 10% 100%"
    }
  }
];
