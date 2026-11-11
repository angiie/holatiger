import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Mail, Type, Sparkles } from 'lucide-react'
import Layout from '@/components/Layout'
import ProductCard from '@/components/ui/ProductCard'

const HomePage: React.FC = () => {
  const { t } = useTranslation()
  const canonicalUrl = new URLSearchParams(window.location.search).get('lang') === 'en'
    ? 'https://holatiger.com/?lang=en'
    : 'https://holatiger.com/'

  const extensions = [
    {
      href: '/tinypass',
      icon: <img src="/assets/images/tinypass/svg-export-40x40.png" alt="TinyPass" />,
      name: t('tinypass.name', 'TinyPass'),
      badge: t('extensions.badge', 'Chrome扩展'),
      description: t('tinypass.desc', '一个简单而强大的密码生成工具。'),
      statusLabel: t('status.published', '已发布'),
      statusTone: 'success' as const,
      actionLabel: t('btn.install', '安装扩展'),
    },
    {
      href: '/webdavy',
      icon: <img src="/assets/images/webdavy/svg-export-40x40.png" alt="WebDavy" />,
      name: t('webdavy.name', 'WebDavy'),
      badge: t('extensions.badge', 'Chrome扩展'),
      description: t('webdavy.desc', '轻量化的WebDAV连接工具。'),
      statusLabel: t('status.published', '已发布'),
      statusTone: 'success' as const,
      actionLabel: t('btn.details', '查看详情'),
    },
    {
      href: '/makerworldmate',
      icon: <img src="/assets/images/makerworldmate/icon-128.png" alt="MakerWorldMate" />,
      name: t('makerworldmate.name', 'MakerWorldMate'),
      badge: t('extensions.badge', 'Chrome扩展'),
      description: t('makerworldmate.desc', '在 MakerWorld 模型列表页直接看到打印耗材与兼容机型。'),
      statusLabel: t('status.published', '已发布'),
      statusTone: 'success' as const,
      actionLabel: t('btn.details', '查看详情'),
    },
  ]

  const apps = [
    {
      href: '/battery-killer',
      icon: <img src="/assets/images/battery-killer/logo-40x40.png" alt="BatteryKiller" />,
      name: t('battery-killer.name', 'BatteryKiller'),
      badge: t('apps.badge', 'macOS 应用'),
      description: t('battery-killer.desc', 'macOS 菜单栏工具，让电池在指定区间自动充放电循环，避免电量长期顶在 100%。'),
      statusLabel: t('status.published', '已发布'),
      statusTone: 'success' as const,
      actionLabel: t('btn.details', '查看详情'),
    },
  ]

  const tools = [
    {
      href: '/ezpixy',
      icon: <img src="/assets/images/ezpixy/logo-header.png" alt="ezpixy" />,
      name: t('ezpixy.name', 'ezpixy'),
      badge: t('tools.badge', 'Web工具'),
      description: t('ezpixy.desc', 'AI 电商图片工作台：生成模特图、虚拟试衣、白底图和商品场景图。'),
      statusLabel: t('status.available', '可用'),
      statusTone: 'success' as const,
      actionLabel: t('btn.details', '查看详情'),
      isNew: true,
    },
    {
      href: '/tinypic',
      icon: <img src="/tinypic/logo.svg" alt="Tiny Pic" />,
      name: t('tinypic.name', 'Tiny Pic'),
      badge: t('tools.badge', 'Web工具'),
      description: t('tinypic.desc', '纯本地运行的智能图片压缩工具。'),
      statusLabel: t('status.available', '可用'),
      statusTone: 'success' as const,
      actionLabel: t('btn.try-tool', '试用工具'),
    },
    {
      href: '/banana',
      icon: <Sparkles aria-hidden="true" />,
      name: t('gemini.name', 'Gemini Watermark Remover'),
      badge: t('tools.badge', 'Web工具'),
      description: t('gemini.desc', '快速移除 Gemini AI 水印。'),
      statusLabel: t('status.available', '可用'),
      statusTone: 'success' as const,
      actionLabel: t('btn.try-tool', '试用工具'),
    },
    {
      href: '/svg-studio',
      icon: (
        <picture>
          <source srcSet="/assets/images/svg-studio/edited_image_1_(1).webp" type="image/webp" />
          <img src="/assets/images/svg-studio/edited_image_1 (1).png" alt="SVG Studio Pro Logo" />
        </picture>
      ),
      name: t('svg-studio.name', 'SVG Studio'),
      badge: t('tools.badge', 'Web工具'),
      description: t('svg-studio.desc', '简单易用的SVG转换工具。'),
      statusLabel: t('status.available', '可用'),
      statusTone: 'success' as const,
      actionLabel: t('btn.try-tool', '试用工具'),
    },
    {
      href: '/text-to-png',
      icon: <Type aria-hidden="true" />,
      name: t('text-to-png.name', 'Text to PNG'),
      badge: t('tools.badge', 'Web工具'),
      description: t('text-to-png.desc', '快速将文本转换为PNG图片。'),
      statusLabel: t('status.available', '可用'),
      statusTone: 'success' as const,
      actionLabel: t('btn.try-tool', '试用工具'),
    },
  ]

  return (
    <Layout variant="default">
      <Helmet>
        <title>{t('title', 'HolaTiger 虎啦 - 个人工具集合')}</title>
        <meta name="description" content={t('home.description', '虎啦（HolaTiger）：轻量、实用、开箱即用的浏览器扩展与在线工具集合，为你的工作流程增添便利。')} />
        <meta property="og:title" content={t('seo.og.home.title', 'HolaTiger 虎啦 - 个人工具集合')} />
        <meta property="og:description" content={t('home.description', '轻量、实用、开箱即用的浏览器扩展与在线工具集合。')} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://holatiger.com/assets/images/social/holatiger-svg-studio-1200x630.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <section id="home" className="hero-interactive relative overflow-hidden px-6 py-16">
        <div className="particles" aria-hidden="true">
          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((left, index) => (
            <div key={left} className="particle" style={{ left: `${left}%`, animationDelay: `${index * 0.75}s` }} />
          ))}
        </div>
        <div className="hero-glow" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="ui-badge ui-badge-large fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="ui-badge-dot" />
            <span>{t('hero.badge', '🚀 持续更新中')}</span>
          </div>

          <h1 className="fade-in-up mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">{t('hero.title', '小工具，大能量。')}</span>
          </h1>

          <p className="fade-in-up mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl" style={{ animationDelay: '0.3s' }}>
            <span>{t('hero.subtitle1', '轻量、实用、开箱即用的浏览器扩展与在线工具集合')}</span><br />
            <span className="font-semibold text-orange-700">{t('hero.subtitle2', '为你的工作流程增添便利')}</span>
          </p>

          <div className="fade-in-up flex flex-col justify-center gap-3 sm:flex-row" style={{ animationDelay: '0.4s' }}>
            <a href="/#extensions" className="ui-button ui-button-primary ui-button-large">
              {t('hero.btn1', '🔧 查看扩展')}
            </a>
            <a href="/#tools" className="ui-button ui-button-secondary ui-button-large">
              {t('hero.btn2', '🛠️ 探索工具')}
            </a>
          </div>
        </div>
      </section>

      <section id="extensions" className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="ui-badge mb-4">🧩 Chrome Extensions</div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{t('extensions.title', '浏览器扩展')}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{t('extensions.subtitle', '增强你的浏览器功能，让日常操作更加高效便捷')}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {extensions.map((product) => <ProductCard key={product.href} {...product} />)}
          </div>
        </div>
      </section>

      <section id="apps" className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="ui-badge mb-4">🖥️ Desktop Apps</div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{t('apps.title', '桌面应用')}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{t('apps.subtitle', '先做好一件事的原生小工具，装完就安静待在菜单栏里')}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((product) => <ProductCard key={product.href} {...product} />)}
          </div>
        </div>
      </section>

      <section id="tools" className="bg-gradient-to-br from-orange-50/50 to-red-50/50 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="ui-badge mb-4">🛠️ Web Tools</div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{t('tools.title', '在线工具')}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{t('tools.subtitle', '无需安装，打开即用的在线工具集合')}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((product) => <ProductCard key={product.href} {...product} />)}
          </div>
        </div>
      </section>

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
            <p dangerouslySetInnerHTML={{ __html: t('about.desc', '我是 <strong>angiie</strong>。我的女儿是虎年出生，我们全家都很喜欢老虎的图腾，甚至我们的狗也叫"老虎"。hola 是因为我刚好也在学西班牙语，这是西班牙的问候语。这里会持续更新 Chrome 扩展与 Web 工具，欢迎收藏与反馈。') }} />
            <div className="social-links-v1">
              <a href="https://github.com/angiie" target="_blank" rel="noreferrer" className="ui-button ui-button-secondary ui-button-small">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://x.com/angiie_inside" target="_blank" rel="noreferrer" className="ui-button ui-button-secondary ui-button-small">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Twitter/X
              </a>
              <a href="https://instagram.com/angiie_inside" target="_blank" rel="noreferrer" className="ui-button ui-button-secondary ui-button-small">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
              <a href="#" id="email-link" data-email="onlyangiie#gmail.com" className="ui-button ui-button-secondary ui-button-small">
                <Mail className="h-4 w-4" aria-hidden="true" />
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
