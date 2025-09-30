import React from 'react'
import ProductPage from './ProductPage'

const TinyPassPage: React.FC = () => {
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
    <ProductPage
      productKey="tinypass"
      icon="/assets/images/tinypass/svg-export-40x40.png"
      iconBg="from-blue-100 to-indigo-100"
      installUrl="https://chromewebstore.google.com/detail/tinypass/jjfmaihmmbclkonnkkipbplhklepopne"
      moreUrl="https://holatiger.com/#extensions"
      features={features}
      screenshots={screenshots}
    />
  )
}

export default TinyPassPage
