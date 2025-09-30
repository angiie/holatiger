import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      // 启用 React 快速刷新
      fastRefresh: true,
      // 启用 JSX 运行时
      jsxRuntime: 'automatic',
    }),
  ],
  root: '.',
  
  // 构建配置
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'svg-studio': resolve(__dirname, 'svg-studio.html'),
        'webdavy': resolve(__dirname, 'webdavy.html'),
        'tinypass': resolve(__dirname, 'tinypass.html'),
        'test-i18n': resolve(__dirname, 'test-i18n.html'),
        'faq-test': resolve(__dirname, 'faq-test.html'),
        'layout-test': resolve(__dirname, 'layout-test.html'),
        'component-test': resolve(__dirname, 'component-test.html'),
      },
      output: {
        // 代码分割
        manualChunks: {
          vendor: ['react', 'react-dom'],
          i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
        },
        // 资源文件命名
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
    // 压缩配置
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  
  // 开发服务器配置
  server: {
    port: 3000,
    open: true,
    cors: true,
    // 代理配置（如果需要）
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  
  // 预览服务器配置
  preview: {
    port: 4173,
    open: true,
  },
  
  // 路径别名
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
  
  // CSS 配置
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  
  // 环境变量配置
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  
  // 优化配置
  optimizeDeps: {
    include: ['react', 'react-dom', 'i18next', 'react-i18next'],
  },
})
