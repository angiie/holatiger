import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import './i18n'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<div>博客页面</div>} />
            <Route path="/faq" element={<div>FAQ页面</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App