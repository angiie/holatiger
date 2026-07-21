import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// 注入未走 vite 资源图的 CSS link（Vite 默认会从 src/index.html 中剥离所有不识别的绝对路径 link）。
// 只注入第 1 个，剩余 2 个由 build-static.mjs 在 vite build 后追加到 dist/index.html。
// asset 文件由 build-static.mjs 从 assets/css/ 拷到 dist/assets/css/。
function injectStaticCssLinks() {
  return {
    name: 'inject-static-css-links',
    transformIndexHtml: {
      order: 'pre' as const,
      handler() {
        return [
          { tag: 'link', attrs: { rel: 'stylesheet', href: '/assets/css/tailwind-built.css' }, injectTo: 'head' },
        ]
      },
    },
  }
}

export default defineConfig({
  plugins: [
    injectStaticCssLinks(),
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  root: '.',

  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: true,
    target: 'es2020',
    chunkSizeWarningLimit: 250,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        // 拆出独立 vendor chunk：react / react-dom / react-router-dom / i18next 各自独立
        // 长期缓存命中率高，主 chunk 变更不导致 vendor 失效。
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('/react-dom/')) return 'react-dom'
            if (id.includes('react-router')) return 'react-router'
            if (id.includes('i18next') || id.includes('react-i18next')) return 'i18n'
            if (id.includes('react')) return 'react'
            if (id.includes('lucide-react')) return 'lucide'
            return 'vendor'
          }
        },
      },
    },
  },

  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  preview: {
    port: 4173,
    open: true,
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@types': resolve(__dirname, 'src/types'),
    },
  },
})
