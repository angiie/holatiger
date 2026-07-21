import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Mail, Type, Sparkles } from 'lucide-react'
import Layout from '@/components/Layout'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Layout variant="default">
      <Helmet>
        <title>{t('title', 'HolaTiger 虎啦 - 个人工具集合')}</title>
        <meta name="description" content={t('home.description', '虎啦（HolaTiger）：轻量、实用、开箱即用的浏览器扩展与在线工具集合，为你的工作流程增添便利。')} />
        <meta property="og:title" content={t('seo.og.home.title', 'HolaTiger 虎啦 - 个人工具集合')} />
        <meta property="og:description" content={t('home.description', '轻量、实用、开箱即用的浏览器扩展与在线工具集合。')} />
        <meta property="og:url" content="https://holatiger.com/" />
        <meta property="og:image" content="https://holatiger.com/assets/images/social/holatiger-svg-studio-1200x630.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://holatiger.com/" />
      </Helmet>

      {/* Hero Section */}
      <section id="home" className="hero-interactive relative py-16 px-6 overflow-hidden">
        <div className="particles">
          <div className="particle" style={{ left: '10%', animationDelay: '0s' }} />
          <div className="particle" style={{ left: '20%', animationDelay: '1s' }} />
          <div className="particle" style={{ left: '30%', animationDelay: '2s' }} />
          <div className="particle" style={{ left: '40%', animationDelay: '3s' }} />
          <div className="particle" style={{ left: '50%', animationDelay: '4s' }} />
          <div className="particle" style={{ left: '60%', animationDelay: '5s' }} />
          <div className="particle" style={{ left: '70%', animationDelay: '0.5s' }} />
          <div className="particle" style={{ left: '80%', animationDelay: '1.5s' }} />
          <div className="particle" style={{ left: '90%', animationDelay: '2.5s' }} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-red-100/20 rounded-full blur-3xl transform -translate-y-1/2 scale-150" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-8 shadow-lg border border-orange-200 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            <span>{t('hero.badge', '🚀 持续更新中')}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="gradient-text">{t('hero.title', '小工具，大能量。')}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: '0.6s' }}>
            <span>{t('hero.subtitle1', '轻量、实用、开箱即用的浏览器扩展与在线工具集合')}</span><br />
            <span className="text-orange-600 font-semibold">{t('hero.subtitle2', '为你的工作流程增添便利')}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a href="/#extensions" className="px-8 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md border border-orange-500" style={{ textDecoration: 'none !important' }}>
              {t('hero.btn1', '🔧 查看扩展')}
            </a>
            <a href="/#tools" className="px-8 py-3 border-2 border-orange-500 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 hover:border-orange-600 transition-all duration-300 shadow-md" style={{ textDecoration: 'none !important' }}>
              {t('hero.btn2', '🛠️ 探索工具')}
            </a>
          </div>
        </div>
      </section>

      {/* Extensions Section */}
      <section id="extensions" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              🧩 Chrome Extensions
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('extensions.title', '浏览器扩展')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('extensions.subtitle', '增强你的浏览器功能，让日常操作更加高效便捷')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* TinyPass Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <a href="/tinypass" className="flex items-center gap-4 mb-5 no-underline" style={{ textDecoration: 'none !important', color: 'inherit' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-sm">
                  <img src="/assets/images/tinypass/svg-export-40x40.png" alt="TinyPass" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{t('tinypass.name', 'TinyPass')}</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-medium">{t('extensions.badge', 'Chrome扩展')}</span>
                </div>
              </a>
              <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3">{t('tinypass.desc', '一个简单而强大的密码生成工具。')}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>{t('status.published', '已发布')}</span>
                </div>
                <a href="/tinypass" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm no-underline" style={{ backgroundColor: '#2563eb !important', color: 'white !important', textDecoration: 'none !important' }}>
                  {t('btn.install', '安装扩展')}
                </a>
              </div>
            </div>

            {/* WebDavy Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <a href="/webdavy" className="flex items-center gap-4 mb-5 no-underline" style={{ textDecoration: 'none !important', color: 'inherit' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-sm">
                  <img src="/assets/images/webdavy/svg-export-40x40.png" alt="WebDavy" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{t('webdavy.name', 'WebDavy')}</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-medium">{t('extensions.badge', 'Chrome扩展')}</span>
                </div>
              </a>
              <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3">{t('webdavy.desc', '轻量化的WebDAV连接工具。')}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>{t('status.published', '已发布')}</span>
                </div>
                <a href="/webdavy" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm no-underline" style={{ backgroundColor: '#2563eb !important', color: 'white !important', textDecoration: 'none !important' }}>
                  {t('btn.details', '查看详情')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-12 px-6 bg-gradient-to-br from-orange-50/50 to-red-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              🛠️ Web Tools
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('tools.title', '在线工具')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('tools.subtitle', '无需安装，打开即用的在线工具集合')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* ezpixy */}
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <a href="/ezpixy.html" className="flex items-center gap-4 mb-5 no-underline" style={{ textDecoration: 'none !important', color: 'inherit' }}>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <img src="/assets/images/ezpixy/logo-header.png" alt="ezpixy" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 text-lg">{t('ezpixy.name', 'ezpixy')}</h3>
                    <span className="ezpixy-new-badge inline-flex items-center rounded-full bg-pink-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white">New</span>
                  </div>
                  <span className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full font-medium">{t('tools.badge', 'Web工具')}</span>
                </div>
              </a>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('ezpixy.desc', 'AI 电商图片工作台：生成模特图、虚拟试衣、白底图和商品场景图。')}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>{t('status.available', '可用')}</span>
                </div>
                <a href="/ezpixy.html" className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium text-sm shadow-sm no-underline" style={{ backgroundColor: '#6366f1 !important', color: 'white !important', textDecoration: 'none !important' }}>
                  {t('btn.details', '查看详情')}
                </a>
              </div>
            </div>

            {/* Tiny Pic */}
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <a href="/tinypic" className="flex items-center gap-4 mb-5 no-underline" style={{ textDecoration: 'none !important', color: 'inherit' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center shadow-sm">
                  <img src="/tinypic/logo.svg" alt="Tiny Pic" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{t('tinypic.name', 'Tiny Pic')}</h3>
                  <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full font-medium">{t('tools.badge', 'Web工具')}</span>
                </div>
              </a>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('tinypic.desc', '纯本地运行的智能图片压缩工具。')}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>{t('status.available', '可用')}</span>
                </div>
                <a href="/tinypic" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm shadow-sm no-underline" style={{ backgroundColor: '#16a34a !important', color: 'white !important', textDecoration: 'none !important' }}>
                  {t('btn.try-tool', '试用工具')}
                </a>
              </div>
            </div>

            {/* Lexa */}
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <a href="/lexa.html" className="flex items-center gap-4 mb-5 no-underline" style={{ textDecoration: 'none !important', color: 'inherit' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center shadow-sm">
                  <picture>
                    <source srcSet="/assets/images/lexa/logo.webp" type="image/webp" />
                    <img src="/assets/images/lexa/logo.png" alt="Lexa" className="w-8 h-8 object-contain" />
                  </picture>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{t('lexa.name', 'Lexa')}</h3>
                  <span className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full font-medium">{t('tools.badge', 'Web工具')}</span>
                </div>
              </a>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('lexa.desc', '一键生成精美纵版词汇卡。')}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>{t('status.available', '可用')}</span>
                </div>
                <a href="/lexa.html" className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium text-sm shadow-sm no-underline" style={{ backgroundColor: '#ea580c !important', color: 'white !important', textDecoration: 'none !important' }}>
                  {t('btn.try-tool', '试用工具')}
                </a>
              </div>
            </div>

            {/* Gemini Watermark Remover */}
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <a href="/banana" className="flex items-center gap-4 mb-5 no-underline" style={{ textDecoration: 'none !important', color: 'inherit' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-sm">
                  <Sparkles className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{t('gemini.name', 'Gemini Watermark Remover')}</h3>
                  <span className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full font-medium">{t('tools.badge', 'Web工具')}</span>
                </div>
              </a>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('gemini.desc', '快速移除 Gemini AI 水印。')}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>{t('status.available', '可用')}</span>
                </div>
                <a href="/banana" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm shadow-sm no-underline" style={{ backgroundColor: '#4f46e5 !important', color: 'white !important', textDecoration: 'none !important' }}>
                  {t('btn.try-tool', '试用工具')}
                </a>
              </div>
            </div>

            {/* SVG Studio */}
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <a href="/svg-studio.html" className="flex items-center gap-4 mb-5 no-underline" style={{ textDecoration: 'none !important', color: 'inherit' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-sm">
                  <picture>
                    <source srcSet="/assets/images/svg-studio/edited_image_1_(1).webp" type="image/webp" />
                    <img src="/assets/images/svg-studio/edited_image_1 (1).png" alt="SVG Studio Pro Logo" className="w-8 h-8 object-contain" />
                  </picture>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{t('svg-studio.name', 'SVG Studio')}</h3>
                  <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full font-medium">{t('tools.badge', 'Web工具')}</span>
                </div>
              </a>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('svg-studio.desc', '简单易用的SVG转换工具。')}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>{t('status.available', '可用')}</span>
                </div>
                <a href="/svg-studio.html" className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm shadow-sm no-underline" style={{ backgroundColor: '#9333ea !important', color: 'white !important', textDecoration: 'none !important' }}>
                  {t('btn.try-tool', '试用工具')}
                </a>
              </div>
            </div>

            {/* Text to PNG */}
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <a href="/text-to-png.html" className="flex items-center gap-4 mb-5 no-underline" style={{ textDecoration: 'none !important', color: 'inherit' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center shadow-sm">
                  <Type className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{t('text-to-png.name', 'Text to PNG')}</h3>
                  <span className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full font-medium">{t('tools.badge', 'Web工具')}</span>
                </div>
              </a>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('text-to-png.desc', '快速将文本转换为PNG图片。')}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>{t('status.available', '可用')}</span>
                </div>
                <a href="/text-to-png.html" className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium text-sm shadow-sm no-underline" style={{ backgroundColor: '#ea580c !important', color: 'white !important', textDecoration: 'none !important' }}>
                  {t('btn.try-tool', '试用工具')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-v1">
        <div className="about-container-v1">
          <div className="about-avatar-v1">
            <picture>
              <source srcSet="/assets/images/icons/avatar.webp" type="image/webp" />
              <img src="/assets/images/icons/avatar.jpeg" alt="angiie" width={100} height={100} />
            </picture>
          </div>
          <div className="about-text-v1">
            <h2>{t('about.title', 'About Me')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('about.desc', '我是 <strong class="text-orange-600">angiie</strong>。我的女儿是虎年出生，我们全家都很喜欢老虎的图腾，甚至我们的狗也叫"老虎"。hola 是因为我刚好也在学西班牙语，这是西班牙的问候语。这里会持续更新 Chrome 扩展与 Web 工具，欢迎收藏与反馈。') }} />
            <div className="social-links-v1">
              <a href="https://github.com/angiie" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm shadow-sm" style={{ textDecoration: 'none !important' }}>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://x.com/angiie_smart" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm shadow-sm" style={{ textDecoration: 'none !important' }}>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Twitter/X
              </a>
              <a href="https://instagram.com/angiie_inside" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium text-sm shadow-sm" style={{ textDecoration: 'none !important' }}>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
              <a href="#" id="email-link" data-email="onlyangiie#gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm shadow-sm" style={{ textDecoration: 'none !important' }}>
                <Mail className="w-4 h-4" />
                <span>{t('btn.email', '邮箱')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
