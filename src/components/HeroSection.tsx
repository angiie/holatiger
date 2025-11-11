import React from 'react'
import { useTranslation } from 'react-i18next'

const HeroSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="hero-interactive relative py-16 px-6 overflow-hidden">
      {/* 粒子背景 */}
      <div className="particles">
        <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ left: '20%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ left: '30%', animationDelay: '2s' }}></div>
        <div className="particle" style={{ left: '40%', animationDelay: '3s' }}></div>
        <div className="particle" style={{ left: '50%', animationDelay: '4s' }}></div>
        <div className="particle" style={{ left: '60%', animationDelay: '5s' }}></div>
        <div className="particle" style={{ left: '70%', animationDelay: '0.5s' }}></div>
        <div className="particle" style={{ left: '80%', animationDelay: '1.5s' }}></div>
        <div className="particle" style={{ left: '90%', animationDelay: '2.5s' }}></div>
      </div>
      
      {/* 浮动装饰元素 */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-orange-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-red-200/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-yellow-200/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-red-50/20 to-yellow-50/30"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-red-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-yellow-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* 状态徽章 */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-8 shadow-lg border border-orange-200 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          <span>{t('hero.badge', '🚀 持续更新中')}</span>
        </div>

        {/* 主标题 - 打字机效果 */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="gradient-text typewriter">{t('hero.title', '小工具，大能量。')}</span>
        </h1>

        {/* 副标题 */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: '0.6s' }}>
          <span>{t('hero.subtitle1', '轻量、实用、开箱即用的浏览器扩展与在线工具集合')}</span><br />
          <span className="text-orange-600 font-semibold">{t('hero.subtitle2', '为你的工作流程增添便利')}</span>
        </p>

        {/* 按钮组 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a href="#extensions" className="px-8 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md border border-orange-500">
            <span>{t('hero.btn1', '🔧 查看扩展')}</span>
          </a>
          <a href="#tools" className="px-8 py-3 border-2 border-orange-500 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 hover:border-orange-600 transition-all duration-300 shadow-md">
            <span>{t('hero.btn2', '🛠️ 探索工具')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection