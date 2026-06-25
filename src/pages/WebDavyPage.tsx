import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import ProductPage from './ProductPage'

const WebDavyPage: React.FC = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: '🔒',
      titleKey: 'feature1.title',
      descriptionKey: 'feature1.desc'
    },
    {
      icon: '⚙️',
      titleKey: 'feature2.title',
      descriptionKey: 'feature2.desc'
    },
    {
      icon: '📌',
      titleKey: 'feature3.title',
      descriptionKey: 'feature3.desc'
    },
    {
      icon: '📦',
      titleKey: 'feature4.title',
      descriptionKey: 'feature4.desc'
    }
  ]

  const screenshots = [
    {
      src: '/assets/images/webdavy/screenshot/zh/login-page.png',
      alt: 'WebDavy 连接配置界面'
    },
    {
      src: '/assets/images/webdavy/screenshot/zh/detail-page.png',
      alt: 'WebDavy 文件管理界面'
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('title.webdavy', 'WebDavy WebDAV客户端 - 浏览器文件同步 | 连接云存储 - 虎啦')}</title>
        <meta name="description" content={t('webdavy.description', 'WebDavy 是一个基于WebDAV协议的Chrome浏览器扩展。')} />
        <link rel="canonical" href="https://holatiger.com/webdavy" />
        <meta property="og:title" content={t('seo.og.webdavy.title', 'WebDavy WebDAV客户端 - 浏览器文件同步 | 连接云存储')} />
        <meta property="og:description" content={t('seo.og.webdavy.description', 'WebDavy 是一个基于WebDAV协议的Chrome浏览器扩展。')} />
        <meta property="og:url" content="https://holatiger.com/webdavy" />
        <meta property="og:image" content="https://holatiger.com/assets/images/social/webdavy-1200x630.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ProductPage
        productKey="webdavy"
        icon="/assets/images/webdavy/svg-export-40x40.png"
        iconBg="from-gray-100 to-gray-200"
        installUrl="https://chromewebstore.google.com/detail/webdavy/inaeglkgfmnkncalphgpkendfjndjmid"
        moreUrl="https://holatiger.com/#extensions"
        features={features}
        screenshots={screenshots}
      />
    </>
  )
}

export default WebDavyPage
