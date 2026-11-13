import React, { useState, useMemo, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Mail, Search } from 'lucide-react'
import Layout from '@/components/Layout'

interface TimelineProduct {
  id: string
  category: 'extension' | 'app' | 'tool'
  year: '2026' | '2025'
  date: string
  name: string
  href: string
  icon: React.ReactNode
  typeLabel: string
  typeClass: string
  statusLabel: string
  statusTone: 'success' | 'warning'
  description: string
  tags: string[]
  actionLabel: string
  actionHref: string
  detailHref: string
  secondaryLabel?: string
  secondaryHref?: string
  isNew?: boolean
  searchKeywords: string
}

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language.startsWith('en')

  const canonicalUrl = new URLSearchParams(window.location.search).get('lang') === 'en'
    ? 'https://holatiger.com/?lang=en'
    : 'https://holatiger.com/'

  const [activeFilter, setActiveFilter] = useState<'all' | 'extension' | 'app' | 'tool'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Listen to hash change for #extensions, #apps, #tools anchors
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === '#extensions') setActiveFilter('extension')
      else if (hash === '#apps') setActiveFilter('app')
      else if (hash === '#tools') setActiveFilter('tool')
      else if (hash === '#home' || hash === '') setActiveFilter('all')
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const products: TimelineProduct[] = useMemo(() => [
    {
      id: 'omnipotent-pocket',
      category: 'extension',
      year: '2026',
      date: '2026.11 · v1.0',
      name: t('omnipotent-pocket.name', 'Omnipotent-Pocket'),
      href: '/omnipotent-pocket',
      icon: <img src="/assets/images/omnipotent-pocket/icon.svg" alt="Omnipotent-Pocket" />,
      typeLabel: isEn ? 'Chrome Extension' : 'Chrome 扩展',
      typeClass: 'type-chip-extension',
      statusLabel: isEn ? 'New Release' : '最新上架',
      statusTone: 'success',
      description: t('omnipotent-pocket.desc', '把标签页收进口袋：一键收集、自动去重、中文优先 README 摘要、GitHub 搜索与可选 Gist 跨设备备份。'),
      tags: isEn ? ['Local First', 'Deduplication', 'README Summary', 'Gist Sync', 'Zero Tracking'] : ['本地优先', '自动去重', 'README 摘要', 'Gist 私有同步', '无埋点'],
      actionLabel: isEn ? 'Install on Chrome' : '安装扩展',
      actionHref: 'https://chromewebstore.google.com/detail/omnipotent-pocket/fegafpjecnmogggggafkdalcgccaojpo',
      detailHref: '/omnipotent-pocket',
      isNew: true,
      searchKeywords: 'omnipotent-pocket pocket tabs bookmarks chrome extension github gist'
    },
    {
      id: 'battery-killer',
      category: 'app',
      year: '2025',
      date: '2025.10 · v1.1.1',
      name: t('battery-killer.name', 'BatteryKiller'),
      href: '/battery-killer',
      icon: <img src="/assets/images/battery-killer/logo-40x40.png" alt="BatteryKiller" />,
      typeLabel: isEn ? 'macOS App' : 'macOS 应用',
      typeClass: 'type-chip-app',
      statusLabel: isEn ? 'Open Source' : '开源免费',
      statusTone: 'success',
      description: t('battery-killer.desc', 'macOS 菜单栏轻量级小工具。用底层软件方式控制电源适配器通断，让电池在指定区间真实充放电循环，消耗循环次数。'),
      tags: isEn ? ['Apple Silicon', 'SMC Control', 'Menu Bar', 'Offline'] : ['Apple Silicon', 'SMC 底层通断', '菜单栏驻留', '不联网'],
      actionLabel: isEn ? 'Details & Download' : '查看详情',
      actionHref: '/battery-killer',
      detailHref: '/battery-killer',
      secondaryLabel: 'GitHub →',
      secondaryHref: 'https://github.com/angiie/b-killer',
      searchKeywords: 'battery-killer battery macos macbook discharge cycle smc'
    },
    {
      id: 'ezpixy',
      category: 'tool',
      year: '2025',
      date: '2025.09 · Web',
      name: t('ezpixy.name', 'ezpixy'),
      href: '/ezpixy',
      icon: <img src="/assets/images/ezpixy/logo-header.png" alt="ezpixy" />,
      typeLabel: isEn ? 'Web AI Tool' : '在线 AI 工具',
      typeClass: 'type-chip-tool',
      statusLabel: isEn ? 'E-Commerce' : '电商专用',
      statusTone: 'success',
      description: t('ezpixy.desc', '面向独立站与跨境电商卖家的 AI 商品图工作台：模特图、虚拟试衣换装、智能商品抠图白底化与多风格场景商业图渲染。'),
      tags: isEn ? ['AI Fashion Model', 'White Background', 'Cross-border', 'Commercial Quality'] : ['AI 模特换装', '一键白底图', '电商出海', '商业级画质'],
      actionLabel: isEn ? 'Open Studio' : '打开工作台',
      actionHref: '/ezpixy',
      detailHref: '/ezpixy',
      secondaryLabel: isEn ? 'vs Midjourney →' : '对比 Midjourney →',
      secondaryHref: '/ezpixy-vs-midjourney',
      isNew: true,
      searchKeywords: 'ezpixy ai model fashion ecommerce product photos background'
    },
    {
      id: 'banana',
      category: 'tool',
      year: '2025',
      date: '2025.09 · Web',
      name: t('gemini.name', 'Gemini Watermark Remover'),
      href: '/banana',
      icon: <span style={{ fontSize: '20px' }}>🍌</span>,
      typeLabel: isEn ? 'Web Tool' : '在线工具',
      typeClass: 'type-chip-tool',
      statusLabel: isEn ? 'Lossless Alpha' : '反向 Alpha 混合',
      statusTone: 'success',
      description: t('gemini.desc', '基于反向 Alpha 混合数学算法，纯浏览器端离线运算，无模糊、无重采样、完全无损还原 Gemini AI 水印被遮挡的原图像素。'),
      tags: isEn ? ['Lossless Restore', 'Zero Uploads', 'Batch 50+ Images', 'Instant'] : ['数学无损还原', '0 次服务器上传', '支持 50+ 张批量', '即开即用'],
      actionLabel: isEn ? 'Try Banana' : '在线去水印',
      actionHref: '/banana/',
      detailHref: '/banana/',
      secondaryLabel: isEn ? 'Algorithm Guide →' : '阅读算法原理 →',
      secondaryHref: '/blog-gemini-watermark-remover',
      searchKeywords: 'banana gemini watermark remover google alpha blend wasm'
    },
    {
      id: 'makerworldmate',
      category: 'extension',
      year: '2025',
      date: '2025.08 · v1.0',
      name: t('makerworldmate.name', 'MakerWorldMate'),
      href: '/makerworldmate',
      icon: <img src="/assets/images/makerworldmate/icon-128.png" alt="MakerWorldMate" />,
      typeLabel: isEn ? 'Chrome Extension' : 'Chrome 扩展',
      typeClass: 'type-chip-extension',
      statusLabel: t('status.published', '已发布'),
      statusTone: 'success' as const,
      description: t('makerworldmate.desc', '拓竹 3D 打印社区辅助扩展。无需逐一点进模型详情页，在 MakerWorld 列表页与卡片上直接显示所需耗材重量、预计打印时长和兼容机型。'),
      tags: isEn ? ['MakerWorld Enhanced', 'Direct Comparison', 'Lightweight'] : ['MakerWorld 增强', '列表直接比价', '极简注入'],
      actionLabel: t('btn.details', '查看详情'),
      actionHref: '/makerworldmate',
      detailHref: '/makerworldmate',
      searchKeywords: 'makerworldmate bambu lab 3d printing filament makerworld'
    },
    {
      id: 'tinypic',
      category: 'tool',
      year: '2025',
      date: '2025.07 · Web WASM',
      name: t('tinypic.name', 'Tiny Pic'),
      href: '/tinypic',
      icon: <img src="/tinypic/logo.svg" alt="Tiny Pic" />,
      typeLabel: isEn ? 'Web Tool (WASM)' : '在线工具 (WASM)',
      typeClass: 'type-chip-tool',
      statusLabel: isEn ? 'WASM Engine' : 'WASM 引擎',
      statusTone: 'success',
      description: t('tinypic.desc', '浏览器端本地 WASM 智能图片压缩工具。支持 PNG、JPEG、WebP、AVIF，多线程并行压缩，文件不离开设备。'),
      tags: isEn ? ['WebAssembly', 'Pure Local', 'Batch ZIP Export', 'High Fidelity'] : ['WebAssembly', '纯本地运算', '批量打包 ZIP', '高保真压缩'],
      actionLabel: t('btn.try-tool', '试用工具'),
      actionHref: '/tinypic/',
      detailHref: '/tinypic/',
      secondaryLabel: isEn ? 'vs Squoosh →' : '对比 Squoosh →',
      secondaryHref: '/tinypic-vs-squoosh',
      searchKeywords: 'tinypic tiny pic image compression wasm png jpeg webp avif'
    },
    {
      id: 'tinypass',
      category: 'extension',
      year: '2025',
      date: '2025.07 · v1.2',
      name: t('tinypass.name', 'TinyPass'),
      href: '/tinypass',
      icon: <img src="/assets/images/tinypass/svg-export-40x40.png" alt="TinyPass" />,
      typeLabel: isEn ? 'Chrome Extension' : 'Chrome 扩展',
      typeClass: 'type-chip-extension',
      statusLabel: t('status.published', '已发布'),
      statusTone: 'success',
      description: t('tinypass.desc', '简单而强大的密码生成工具。支持自定义字符集、长度、批量生成、易读发音模式，一键复制，不申请联网权限。'),
      tags: isEn ? ['Crypto Random', 'Zero Network Permission', 'Readable Mode'] : ['密码学安全随机', '0 联网权限', '易读避混淆'],
      actionLabel: t('btn.install', '安装扩展'),
      actionHref: '/tinypass',
      detailHref: '/tinypass',
      secondaryLabel: isEn ? 'vs 1Password →' : '对比 1Password →',
      secondaryHref: '/tinypass-vs-1password',
      searchKeywords: 'tinypass password generator security random offline'
    },
    {
      id: 'svg-studio',
      category: 'tool',
      year: '2025',
      date: '2025.07 · Web',
      name: t('svg-studio.name', 'SVG Studio'),
      href: '/svg-studio',
      icon: (
        <picture>
          <source srcSet="/assets/images/svg-studio/edited_image_1_(1).webp" type="image/webp" />
          <img src="/assets/images/svg-studio/edited_image_1 (1).png" alt="SVG Studio Pro Logo" />
        </picture>
      ),
      typeLabel: isEn ? 'Web Tool' : '在线工具',
      typeClass: 'type-chip-tool',
      statusLabel: isEn ? 'Vector Studio' : '矢量转换',
      statusTone: 'success',
      description: t('svg-studio.desc', '轻量级在线 SVG 预览与格式转换工作台。支持实时编辑 SVG 代码、背景网格切换、高质量批量导出 PNG、PDF、ICO 图标包。'),
      tags: isEn ? ['Realtime Preview', 'ICO Pack', 'Vector to Raster'] : ['代码实时预览', 'ICO 图标生成', '矢量转位图'],
      actionLabel: t('btn.try-tool', '试用工具'),
      actionHref: '/svg-studio',
      detailHref: '/svg-studio',
      secondaryLabel: isEn ? 'vs Inkscape →' : '对比 Inkscape →',
      secondaryHref: '/svg-studio-vs-inkscape',
      searchKeywords: 'svg studio pro vector viewer export png pdf ico'
    },
    {
      id: 'text-to-png',
      category: 'tool',
      year: '2025',
      date: '2025.07 · Web',
      name: t('text-to-png.name', 'Text to PNG'),
      href: '/text-to-png',
      icon: <span style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 700 }}>Aa</span>,
      typeLabel: isEn ? 'Web Tool' : '在线工具',
      typeClass: 'type-chip-tool',
      statusLabel: isEn ? 'Typography' : '排版生成',
      statusTone: 'success',
      description: t('text-to-png.desc', '将文本段落一键渲染为高清晰度 PNG 图片。支持字体、行距、渐变背景、代码块语法高亮与多平台社交卡片预设。'),
      tags: isEn ? ['Social Card', 'Code Highlight', 'Multi-ratio'] : ['社交卡片排版', '代码高亮', '多比例预设'],
      actionLabel: t('btn.try-tool', '试用工具'),
      actionHref: '/text-to-png',
      detailHref: '/text-to-png',
      searchKeywords: 'text to png image typography card render'
    },
    {
      id: 'webdavy',
      category: 'extension',
      year: '2025',
      date: '2025.06 · v1.0',
      name: t('webdavy.name', 'WebDavy'),
      href: '/webdavy',
      icon: <img src="/assets/images/webdavy/svg-export-40x40.png" alt="WebDavy" />,
      typeLabel: isEn ? 'Chrome Extension' : 'Chrome 扩展',
      typeClass: 'type-chip-extension',
      statusLabel: t('status.published', '已发布'),
      statusTone: 'success',
      description: t('webdavy.desc', '轻量级 WebDAV 浏览器客户端扩展。无需桌面客户端，在 Chrome 内部直接挂载 Nextcloud、群晖、坚果云等私有云存储。'),
      tags: isEn ? ['WebDAV Protocol', 'Private Cloud', 'Encrypted Auth'] : ['WebDAV 协议', '自建 NAS 联动', '凭据加密留存'],
      actionLabel: t('btn.details', '查看详情'),
      actionHref: '/webdavy',
      detailHref: '/webdavy',
      secondaryLabel: isEn ? 'vs RaiDrive →' : '对比 RaiDrive →',
      secondaryHref: '/webdavy-vs-raidrive',
      searchKeywords: 'webdavy webdav nextcloud synology nas chrome extension'
    },
  ], [t, isEn])

  // Counts
  const counts = useMemo(() => ({
    all: products.length,
    extension: products.filter(p => p.category === 'extension').length,
    app: products.filter(p => p.category === 'app').length,
    tool: products.filter(p => p.category === 'tool').length,
  }), [products])

  // Filtered products
  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return products.filter(product => {
      const matchCat = activeFilter === 'all' || product.category === activeFilter
      const matchSearch = !q || product.name.toLowerCase().includes(q) || product.description.toLowerCase().includes(q) || product.searchKeywords.includes(q)
      return matchCat && matchSearch
    })
  }, [products, activeFilter, searchQuery])

  // Group by year
  const products2026 = useMemo(() => filteredProducts.filter(p => p.year === '2026'), [filteredProducts])
  const products2025 = useMemo(() => filteredProducts.filter(p => p.year === '2025'), [filteredProducts])

  return (
    <Layout variant="default">
      <Helmet>
        <title>{t('title', 'HolaTiger 虎啦 - 9 款隐私优先的个人工具集合')}</title>
        <meta name="description" content={t('home.description', '虎啦（HolaTiger）：轻量、实用、开箱即用的浏览器扩展与在线工具集合，为你的工作流程增添便利。')} />
        <meta property="og:title" content={t('seo.og.home.title', 'HolaTiger 虎啦 - 个人工具集合')} />
        <meta property="og:description" content={t('home.description', '轻量、实用、开箱即用的浏览器扩展与在线工具集合。')} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://holatiger.com/assets/images/social/holatiger-svg-studio-1200x630.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {/* Hero Section */}
      <section id="home" className="timeline-wrap" style={{ paddingTop: '3.75rem', paddingBottom: '2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p className="kicker" style={{ margin: '0 0 0.875rem', fontFamily: 'var(--mono)', fontSize: '0.6875rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>
              CRAFTED FOR PRIVACY & FOCUS · 本地优先独立工具集
            </p>
            <h1 style={{ margin: '0 0 1.125rem', fontFamily: 'var(--serif)', fontSize: 'clamp(2.125rem, 5vw, 3.25rem)', lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 500, color: 'var(--ink)' }}>
              做安静好用的工具，<br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>记录每一次创造</em>
            </h1>
            <p style={{ margin: '0 0 1.5rem', fontSize: '1rem', color: 'var(--muted)', maxWidth: '48ch', lineHeight: 1.75 }}>
              HolaTiger 是一组注重隐私、开箱即用的个人工具合集。所有浏览器扩展、在线工具与桌面应用默认在本地运行，无埋点、无需注册、不上传数据。用纵向时间轴探索我们的产品足迹。
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--ink)' }}>10 款</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>独立打磨工具</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--ink)' }}>100%</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>本地优先 / 保护隐私</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--ink)' }}>0 追踪</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>无账号 / 无三方埋点</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Highlights */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: '1rem', padding: '1.375rem', boxShadow: '0 4px 16px rgba(31, 26, 22, 0.04)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6875rem', letterSpacing: '0.14em', color: 'var(--accent)', marginBottom: '0.75rem', fontWeight: 600 }}>
              LATEST RELEASES · 最新动态
            </div>

            <a href="/omnipotent-pocket" style={{ background: 'var(--paper)', border: '1px solid var(--line-subtle)', borderRadius: '0.75rem', padding: '0.875rem 1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none', transition: 'transform 0.2s ease, border-color 0.2s ease' }}>
              <img src="/assets/images/omnipotent-pocket/icon.svg" alt="Omnipotent-Pocket" style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="type-chip type-chip-extension" style={{ fontSize: '0.625rem', padding: '0.0625rem 0.3125rem' }}>Extension</span>
                  Omnipotent-Pocket
                  <span className="status-tag status-tag-new" style={{ fontSize: '0.5625rem' }}>NEW</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.125rem' }}>一键收集、自动去重、README 摘要的标签页口袋</div>
              </div>
            </a>

            <a href="/battery-killer" style={{ background: 'var(--paper)', border: '1px solid var(--line-subtle)', borderRadius: '0.75rem', padding: '0.875rem 1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none', transition: 'transform 0.2s ease, border-color 0.2s ease' }}>
              <img src="/assets/images/battery-killer/logo-40x40.png" alt="BatteryKiller" style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="type-chip type-chip-app" style={{ fontSize: '0.625rem', padding: '0.0625rem 0.3125rem' }}>Desktop App</span>
                  BatteryKiller (macOS)
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.125rem' }}>主动控制电源适配器，让电池真实充放电循环</div>
              </div>
            </a>

            <a href="/ezpixy" style={{ background: 'var(--paper)', border: '1px solid var(--line-subtle)', borderRadius: '0.75rem', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none', transition: 'transform 0.2s ease, border-color 0.2s ease' }}>
              <img src="/assets/images/ezpixy/logo-header.png" alt="ezpixy" style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="type-chip type-chip-tool" style={{ fontSize: '0.625rem', padding: '0.0625rem 0.3125rem' }}>Web Tool</span>
                  ezpixy AI 电商工作台
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.125rem' }}>模特图、虚拟试衣与场景白底图一站式生成</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Target Anchors for Navigation Links */}
      <div id="extensions" style={{ scrollMarginTop: '5rem' }} />
      <div id="apps" style={{ scrollMarginTop: '5rem' }} />
      <div id="tools" style={{ scrollMarginTop: '5rem' }} />

      {/* Vertical Timeline & Category Filter */}
      <section id="timeline" className="timeline-wrap" style={{ paddingBottom: '4rem' }}>
        {/* Sticky Filter Bar */}
        <div className="filter-sticky-bar">
          <div className="filter-tabs">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
              type="button"
            >
              <span>{isEn ? 'All' : '全部'}</span>
              <span className="count">{counts.all}</span>
            </button>
            <button
              className={`filter-btn ${activeFilter === 'extension' ? 'active' : ''}`}
              onClick={() => setActiveFilter('extension')}
              type="button"
            >
              <span className="dot-ind" style={{ background: 'var(--accent)' }} />
              <span>{isEn ? 'Extensions' : 'Extensions 浏览器扩展'}</span>
              <span className="count">{counts.extension}</span>
            </button>
            <button
              className={`filter-btn ${activeFilter === 'app' ? 'active' : ''}`}
              onClick={() => setActiveFilter('app')}
              type="button"
            >
              <span className="dot-ind" style={{ background: 'var(--forest)' }} />
              <span>{isEn ? 'Desktop Apps' : 'Desktop Apps 桌面应用'}</span>
              <span className="count">{counts.app}</span>
            </button>
            <button
              className={`filter-btn ${activeFilter === 'tool' ? 'active' : ''}`}
              onClick={() => setActiveFilter('tool')}
              type="button"
            >
              <span className="dot-ind" style={{ background: 'var(--indigo)' }} />
              <span>{isEn ? 'Tools' : 'Tools 在线工具'}</span>
              <span className="count">{counts.tool}</span>
            </button>
          </div>

          <div className="timeline-search-box">
            <Search className="timeline-search-icon" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? 'Search tools...' : '搜索工具或关键词...'}
            />
          </div>
        </div>

        {/* Timeline Rail */}
        <div className="timeline-rail">
          {/* 2026 Milestone */}
          {products2026.length > 0 && (
            <>
              <div className="milestone-year">
                <div className="milestone-badge">{isEn ? '2026 · Latest' : '2026 · 最新发布'}</div>
                <div className="milestone-line" />
              </div>

              {products2026.map((product) => (
                <article key={product.id} className="timeline-item" data-category={product.category}>
                  <div className="timeline-node-dot" />
                  <div className="timeline-card">
                    <div className="card-main">
                      {/* Leading Category Badge in Front of Box */}
                      <div className="card-kicker-bar">
                        <span className={`type-chip ${product.typeClass}`}>{product.typeLabel}</span>
                        <span className="product-date">{product.date}</span>
                        <span className={`status-tag ${product.isNew ? 'status-tag-new' : ''}`}>{product.statusLabel}</span>
                      </div>

                      <div className="card-title-row">
                        <div className="product-icon">{product.icon}</div>
                        <h3 className="product-name">{product.name}</h3>
                      </div>

                      <p className="card-desc">{product.description}</p>

                      <div className="tag-list">
                        {product.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="card-actions">
                      <a className="btn-primary" href={product.actionHref} target={product.actionHref.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {product.actionLabel}
                      </a>
                      <a className="card-link-sec" href={product.detailHref}>
                        {isEn ? 'Learn more →' : '查看完整介绍 →'}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </>
          )}

          {/* 2025 Milestone */}
          {products2025.length > 0 && (
            <>
              <div className="milestone-year">
                <div className="milestone-badge">{isEn ? '2025 · Exploration' : '2025 · 实用工具与生态探索'}</div>
                <div className="milestone-line" />
              </div>

              {products2025.map((product) => (
                <article key={product.id} className="timeline-item" data-category={product.category}>
                  <div className="timeline-node-dot" />
                  <div className="timeline-card">
                    <div className="card-main">
                      {/* Leading Category Badge in Front of Box */}
                      <div className="card-kicker-bar">
                        <span className={`type-chip ${product.typeClass}`}>{product.typeLabel}</span>
                        <span className="product-date">{product.date}</span>
                        <span className={`status-tag ${product.isNew ? 'status-tag-new' : ''}`}>{product.statusLabel}</span>
                      </div>

                      <div className="card-title-row">
                        <div className="product-icon">{product.icon}</div>
                        <h3 className="product-name">{product.name}</h3>
                      </div>

                      <p className="card-desc">{product.description}</p>

                      <div className="tag-list">
                        {product.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="card-actions">
                      <a className="btn-primary" href={product.actionHref} target={product.actionHref.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {product.actionLabel}
                      </a>
                      {product.secondaryLabel && product.secondaryHref && (
                        <a className="card-link-sec" href={product.secondaryHref} target={product.secondaryHref.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                          {product.secondaryLabel}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </>
          )}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3.5rem 1rem', color: 'var(--muted)' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--ink)' }}>
              {isEn ? 'No tools matched your criteria' : '没有找到符合筛选条件的工具'}
            </p>
            <p style={{ fontSize: '0.875rem' }}>
              {isEn ? 'Try another category or clear your search query' : '请尝试其他分类或清空搜索关键词'}
            </p>
            <button
              className="filter-btn"
              onClick={() => { setActiveFilter('all'); setSearchQuery('') }}
              type="button"
              style={{ marginTop: '0.75rem' }}
            >
              {isEn ? 'Reset Filter' : '重置筛选'}
            </button>
          </div>
        )}
      </section>

      {/* Manifesto Section */}
      <section className="timeline-wrap manifesto-section">
        <h2 className="manifesto-title">{isEn ? 'Three Product Principles' : '三个坚持的产品底线'}</h2>
        <p className="manifesto-sub">{isEn ? 'Crafting quiet, useful tools without noise.' : '做小而美的独立工具，拒绝喧宾夺主。'}</p>
        <div className="manifesto-grid">
          <article className="card-manifesto">
            <span className="no">01</span>
            <h3>{isEn ? 'Local-First & Privacy' : '本地优先与隐私'}</h3>
            <p>{isEn ? 'All computing stays inside browser WASM or locally on device; zero user tracking.' : '所有计算能放在浏览器 WASM 或本机完成的，绝不上传云端；无用户追踪，不刺探数据。'}</p>
          </article>
          <article className="card-manifesto">
            <span className="no">02</span>
            <h3>{isEn ? 'Out-of-the-Box' : '开箱即用无套路'}</h3>
            <p>{isEn ? 'No forced login, no paywalls on basic tasks, no intrusive popups.' : '不强制注册登录，无会员锁扣，不弹骚扰评星，让工具只安静服务于当下任务，用完即走。'}</p>
          </article>
          <article className="card-manifesto">
            <span className="no">03</span>
            <h3>{isEn ? 'Craft & Open Source' : '手作打磨与开源'}</h3>
            <p>{isEn ? 'Transparent algorithms, careful typography, crafted like mechanical watches.' : '核心扩展与算法公开透明，关注每一个微小的交互细节与字体排版，像装配机械表一样对待代码。'}</p>
          </article>
        </div>
      </section>

      {/* ABOUT ME SECTION (Preserved at the bottom as requested) */}
      <section id="about" className="timeline-wrap about-me-section">
        <div className="about-me-box">
          <div className="about-avatar">
            <picture>
              <source srcSet="/assets/images/icons/avatar.webp" type="image/webp" />
              <img src="/assets/images/icons/avatar.jpeg" alt="angiie" width={100} height={100} />
            </picture>
          </div>

          <div className="about-content">
            <div className="about-handle">ABOUT THE CREATOR · 关于创作者</div>
            <h2>{t('about.title', 'About Me')}</h2>
            <p className="about-story" dangerouslySetInnerHTML={{
              __html: t('about.desc', '我是 <strong>angiie</strong>。我的女儿是虎年出生，我们全家都很喜欢老虎的图腾，甚至我们的狗也叫"老虎"。hola 是因为我刚好也在学西班牙语，这是西班牙的问候语。这里会持续更新 Chrome 扩展、macOS 应用与 Web 工具，坚持本地优先、保护隐私，欢迎收藏与交流反馈。')
            }} />

            <div className="about-social-links">
              <a href="https://github.com/angiie" target="_blank" rel="noreferrer" className="social-btn">
                <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
              <a href="https://x.com/angiie_inside" target="_blank" rel="noreferrer" className="social-btn">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>Twitter / X</span>
              </a>
              <a href="https://instagram.com/angiie_inside" target="_blank" rel="noreferrer" className="social-btn">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                <span>Instagram</span>
              </a>
              <a href="mailto:onlyangiie@gmail.com" className="social-btn">
                <Mail style={{ width: '0.9375rem', height: '0.9375rem' }} aria-hidden="true" />
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
