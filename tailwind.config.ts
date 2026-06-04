import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8eaf0',
          100: '#c5c9d9',
          200: '#9ea5bf',
          300: '#7780a5',
          400: '#5a6491',
          500: '#1B2A4A',
          600: '#16233d',
          700: '#111c30',
          800: '#0c1523',
          900: '#070e16',
        },
        secondary: {
          50: '#fdf4e6',
          100: '#f9e3bf',
          200: '#f4d095',
          300: '#efbd6b',
          400: '#ebae4d',
          500: '#C79A3E',
          600: '#b08834',
          700: '#96732a',
          800: '#7c5e22',
          900: '#5c4419',
        },
        accent: {
          50: '#fde8ea',
          100: '#f9c5ca',
          200: '#f59ea7',
          300: '#f17783',
          400: '#ed5a68',
          500: '#E63946',
          600: '#d32f3c',
          700: '#b92833',
          800: '#9f212b',
          900: '#7a1920',
        },
      },
      fontFamily: {
        heading: ['Tajawal', 'system-ui', 'sans-serif'],
        body: ['Cairo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
