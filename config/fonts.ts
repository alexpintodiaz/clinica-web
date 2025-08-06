import { Alex_Brush, Cormorant_Garamond, Inter, Lato, Fira_Code as FontMono } from "next/font/google";

// Fuente cursiva elegante para el nombre de la doctora (similar al logo)
// Alex Brush tiene la característica específica de la 'a' con círculo y palito
export const fontScript = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400"],
});

// Fuente serif elegante para títulos principales
export const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
});

// Fuente moderna para texto general
export const fontSans = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "700", "900"],
});

// Fuente secundaria para elementos destacados
export const fontSecondary = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["400", "500", "600", "700"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
