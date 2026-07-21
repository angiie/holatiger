/** @type {import('tailwindcss').Config} */
// Tailwind 配置：扫描所有静态 HTML 与 React src 目录的 className，
// JIT 模式仅生成用到的工具类，体积远小于 124KB 的 CDN 版本。
// 合并 banana 子应用的自定义主题（dark mode、扩展色板、动画）。
module.exports = {
  content: [
    './*.html',
    './banana/**/*.html',
    './tinypic/**/*.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',         // Indigo 600
        'primary-hover': '#4338CA', // Indigo 700
        secondary: '#8B5CF6',       // Violet 500
        dark: '#0F172A',            // Slate 900
        surface: '#ffffff',
        background: '#F8FAFC',      // Slate 50
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(79, 70, 229, 0.15)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  // 与 cdn.tailwindcss.com 默认配置对齐
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
