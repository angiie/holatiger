import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import ProductPage from './ProductPage'

const TinyPassPage: React.FC = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: '🔒',
      titleKey: 'feature1.title',
      descriptionKey: 'feature1.desc'
    },
    {
      icon: '🏠',
      titleKey: 'feature2.title',
      descriptionKey: 'feature2.desc'
    },
    {
      icon: '📝',
      titleKey: 'feature3.title',
      descriptionKey: 'feature3.desc'
    },
    {
      icon: '📋',
      titleKey: 'feature4.title',
      descriptionKey: 'feature4.desc'
    },
    {
      icon: '🗑️',
      titleKey: 'feature5.title',
      descriptionKey: 'feature5.desc'
    },
    {
      icon: '✨',
      titleKey: 'feature6.title',
      descriptionKey: 'feature6.desc'
    }
  ]

  const screenshots = [
    {
      src: '/assets/images/tinypass/screenshot/zh/store-screenshot-1280x800-generator.png',
      alt: 'TinyPass 密码生成器界面'
    },
    {
      src: '/assets/images/tinypass/screenshot/zh/store-screenshot-1280x800-history.png',
      alt: 'TinyPass 历史记录界面'
    },
    {
      src: '/assets/images/tinypass/screenshot/zh/store-screenshot-1280x800-trash.png',
      alt: 'TinyPass 回收站界面'
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('title.tinypass', 'TinyPass 密码生成器 - Chrome扩展 | 本地安全随机强密码 - 虎啦')}</title>
        <meta name="description" content={t('tinypass.description', 'TinyPass 是一款专为Chrome浏览器设计的随机密码生成工具，完全在本地运行。')} />
        <link rel="canonical" href="https://holatiger.com/tinypass" />
        <meta property="og:title" content={t('seo.og.tinypass.title', 'TinyPass 密码生成器 - Chrome扩展 | 本地安全随机强密码')} />
        <meta property="og:description" content={t('seo.og.tinypass.description', 'TinyPass 是一款专为Chrome浏览器设计的随机密码生成工具。')} />
        <meta property="og:url" content="https://holatiger.com/tinypass" />
        <meta property="og:image" content="https://holatiger.com/assets/images/social/tinypass-1200x630.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ProductPage
        productKey="tinypass"
        icon="/assets/images/tinypass/svg-export-40x40.png"
        iconBg="from-blue-100 to-indigo-100"
        installUrl="https://chromewebstore.google.com/detail/tinypass/jjfmaihmmbclkonnkkipbplhklepopne"
        moreUrl="https://holatiger.com/#extensions"
        features={features}
        screenshots={screenshots}
      />
    </>
  )
}

export default TinyPassPage
