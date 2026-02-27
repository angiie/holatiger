import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  root: '.',
  
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'svg-studio': resolve(__dirname, 'svg-studio.html'),
        'webdavy': resolve(__dirname, 'webdavy.html'),
        'tinypass': resolve(__dirname, 'tinypass.html'),
        'text-to-png': resolve(__dirname, 'text-to-png.html'),
        'lexa': resolve(__dirname, 'lexa.html'),
        'handytulip': resolve(__dirname, 'handytulip.html'),
        'faq': resolve(__dirname, 'faq.html'),
        'blog': resolve(__dirname, 'blog.html'),
        'blog-svg-to-png-workflow': resolve(__dirname, 'blog-svg-to-png-workflow.html'),
        'blog-tinypass-password-guide': resolve(__dirname, 'blog-tinypass-password-guide.html'),
        'blog-webdav-chrome-setup': resolve(__dirname, 'blog-webdav-chrome-setup.html'),
        'blog-handy-tulip-implementation': resolve(__dirname, 'blog-handy-tulip-implementation.html'),
        'blog-lexa-launch': resolve(__dirname, 'blog-lexa-launch.html'),
        'blog-gemini-watermark-remover': resolve(__dirname, 'blog-gemini-watermark-remover.html'),
        'blog-tinypic-wasm-principle': resolve(__dirname, 'blog-tinypic-wasm-principle.html'),
        'banana': resolve(__dirname, 'banana/index.html'),
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/\.(css)$/i.test(assetInfo.name || '')) {
            return `assets/css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
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
  
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'i18next', 'react-i18next'],
  },
})
