import React from 'react'
import ProductPage from './ProductPage'

const WebDavyPage: React.FC = () => {
  const features = [
    {
      icon: '🌐',
      titleKey: 'feature1.title',
      descriptionKey: 'feature1.desc'
    },
    {
      icon: '📁',
      titleKey: 'feature2.title',
      descriptionKey: 'feature2.desc'
    }
  ]

  const screenshots = [
    {
      src: '/assets/images/webdavy/screenshot/zh/store-screenshot-1280x800-main.png',
      alt: 'WebDavy 主界面'
    },
    {
      src: '/assets/images/webdavy/screenshot/zh/store-screenshot-1280x800-files.png',
      alt: 'WebDavy 文件管理'
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
