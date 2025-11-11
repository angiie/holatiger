import React from 'react'
import HeroSection from '../components/HeroSection'
import ExtensionsSection from '../components/ExtensionsSection'
import ToolsSection from '../components/ToolsSection'
import AboutSection from '../components/AboutSection'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExtensionsSection />
      <ToolsSection />
      <AboutSection />
    </div>
  )
}

export default HomePage