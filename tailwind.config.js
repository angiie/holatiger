/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./svg-studio/index.html",
    "./src/**/*.{ts,tsx,js,jsx,html}",
    "./**/*.{html,js}",
    "!./node_modules/**"
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // 禁用预设样式，避免影响现有CSS
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light",
      {
        v2dark: {
          "primary": "#661AE6",
          "secondary": "#D926A9",
          "accent": "#1FB2A6",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
    darkTheme: "v2dark",
  },
}

