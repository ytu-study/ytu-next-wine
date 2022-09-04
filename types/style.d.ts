type ThemeKey = "light" | "dark";

type ThemeColorKeys = "major" | "text" | "background" | "border";

interface ThemeColors {
  [key: ThemeColorKeys]: Record<string, string>;
}
