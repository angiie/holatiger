import React from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from './ProductCard'

const ExtensionsSection: React.FC = () => {
  const { t } = useTranslation()

  const extensions = [
    {
      id: 'tinypass',
      name: t('tinypass.name', 'TinyPass'),
      description: t('tinypass.desc', '一个简单而强大的密码生成工具，支持多种复杂度设置和自定义规则。'),
      icon: '/assets/images/tinypass/svg-export-40x40.png',
      href: '/tinypass',
      status: 'published',
      statusText: t('status.published', '已发布')
    },
    {
      id: 'webdavy',
      name: t('webdavy.name', 'WebDavy'),
      description: t('webdavy.desc', '轻量化的WebDAV连接工具，简化文件同步和管理流程。'),
      icon: '/assets/images/webdavy/svg-export-40x40.png',
      href: '/webdavy',
      status: 'published',
      statusText: t('status.published', '已发布')
    }
  ]

  return (
    <section id="extensions" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            🧩 Chrome Extensions
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('extensions.title', '浏览器扩展')}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('extensions.subtitle', '增强你的浏览器功能，让日常操作更加高效便捷')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {extensions.map((extension) => (
            <ProductCard
              key={extension.id}
              product={extension}
              type="extension"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExtensionsSection