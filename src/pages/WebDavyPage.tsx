import React from 'react'
import ProductPage from './ProductPage'

const WebDavyPage: React.FC = () => {
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
      src: '/assets/images/webdavy/screenshot/zh/login-page.jpg',
      alt: 'WebDavy 连接配置界面'
    },
    {
      src: '/assets/images/webdavy/screenshot/zh/detail-page.png',
      alt: 'WebDavy 文件管理界面'
    }
  ]

  return (
    <ProductPage
      productKey="webdavy"
      icon="/assets/images/webdavy/svg-export-40x40.png"
      iconBg="from-gray-100 to-gray-200"
      installUrl="https://chromewebstore.google.com/detail/webdavy/inaeglkgfmnkncalphgpkendfjndjmid"
      moreUrl="https://holatiger.com/#extensions"
      features={features}
      screenshots={screenshots}
    />
  )
}

export default WebDavyPage
