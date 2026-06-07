export type Theme = "dark" | "light";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: (x: number, y: number) => void;
}
