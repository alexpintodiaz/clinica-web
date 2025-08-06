import { Playfair_Display, Inter, Lato, Fira_Code as FontMono } from "next/font/google";

// Fuente elegante para títulos (similar al logo)
export const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
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
