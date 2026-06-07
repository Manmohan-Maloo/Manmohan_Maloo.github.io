import { createContext } from "react";
import type { ThemeContextType } from "../types/theme";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});
