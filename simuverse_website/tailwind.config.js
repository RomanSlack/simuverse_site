/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mars-red': '#f9a08c',
        'mars-orange': '#ffd07b',
        'mars-dust': '#e1c7a4',
        'mars-surface': '#b17864',
        'mars-shadow': '#7a4f3e',
        'space-blue': '#1d2b53',
        'space-dark': '#0c1220',
        'space-light': '#344d7f',
      },
      fontFamily: {
        'sans': ['var(--font-geist-sans)', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}