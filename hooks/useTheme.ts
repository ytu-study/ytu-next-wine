import { useState, useEffect } from "react";

type ThemeKey = "light" | "dark";

type ReturnType = {
  theme: ThemeKey;
  isDarkMode: boolean;
  setTheme: (theme: ThemeKey) => void;
  toggleTheme: () => void;
};

const useTheme = (): ReturnType => {
  const [theme, setTheme] = useState<ThemeKey>("light");
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const preferDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initalTheme = preferDarkMode
      ? "dark"
      : ((localStorage?.getItem("theme") || "light") as ThemeKey);
    setTheme(initalTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, isDarkMode, setTheme, toggleTheme };
};

export default useTheme;
