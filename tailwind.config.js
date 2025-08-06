import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        script: ["var(--font-script)"],
        secondary: ["var(--font-secondary)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        // Paleta profesional basada en la imagen
        'clinic': {
          'gold': {
            50: '#FFFBEB',
            100: '#FEF3C7',
            200: '#FDE68A',
            300: '#FCD34D',
            400: '#FBBF24',
            500: '#D4AF37',  // Oro principal
            600: '#B8860B',  // Dorado elegante
            700: '#8B6914',  // Dorado oscuro
            800: '#6B5B0F',
            900: '#4A3F0A',
          },
          'slate': {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#708090',  // Gris azulado
            600: '#2F4F4F',  // Azul grisáceo principal
            700: '#1C3333',  // Azul oscuro
            800: '#1E293B',
            900: '#0F172A',
          },
          'blue': {
            50: '#F0F9FF',
            100: '#E0F2FE',
            200: '#BAE6FD',
            300: '#87CEEB',  // Azul cielo suave
            400: '#38BDF8',
            500: '#4682B4',  // Azul acero
            600: '#0284C7',
            700: '#0369A1',
            800: '#075985',
            900: '#0C4A6E',
          },
          'neutral': {
            50: '#F8F8FF',   // Blanco fantasma
            100: '#F5F5F5',  // Blanco hueso
            200: '#E8E8E8',  // Gris muy claro
            300: '#D3D3D3',  // Gris claro
            500: '#9CA3AF',
            700: '#4A5568',  // Gris texto
            800: '#2D3748',  // Gris oscuro
            900: '#1A202C',  // Casi negro
          },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, var(--color-primary-light), var(--color-primary))',
        'gradient-slate': 'linear-gradient(135deg, var(--color-secondary-light), var(--color-secondary))',
        'gradient-neutral': 'linear-gradient(135deg, var(--color-neutral), var(--color-neutral-100))',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(184, 134, 11, 0.1)',
        'medium': '0 4px 25px rgba(47, 79, 79, 0.15)',
        'strong': '0 8px 35px rgba(47, 79, 79, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  darkMode: "media",
  plugins: [heroui()],
}

module.exports = config;