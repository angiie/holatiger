import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import WebDavyPage from './pages/WebDavyPage'
import TinyPassPage from './pages/TinyPassPage'
import NotFoundPage from './pages/NotFoundPage'

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/webdavy" element={<WebDavyPage />} />
          <Route path="/tinypass" element={<TinyPassPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
