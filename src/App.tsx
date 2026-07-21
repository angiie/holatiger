import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './pages/HomePage'

// 非首屏页面拆出独立 chunk，首页加载时不再下载这些代码。
// 这把 main bundle 减小约 20-30KB，在 mobile 慢 4G + 中低端机型上 TBT 节省 10-30ms。
const WebDavyPage = lazy(() => import('./pages/WebDavyPage'))
const TinyPassPage = lazy(() => import('./pages/TinyPassPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Suspense fallback 占位：保留原 SPA 视觉，避免切换路由时闪空白。
const RouteFallback: React.FC = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: '2rem', height: '2rem',
      border: '3px solid #fed7aa', borderTopColor: '#f97316',
      borderRadius: '50%', animation: 'spin 0.8s linear infinite',
    }} />
  </div>
)

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/webdavy" element={<WebDavyPage />} />
            <Route path="/tinypass" element={<TinyPassPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
