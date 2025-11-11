import React from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from './ProductCard'

const ToolsSection: React.FC = () => {
  const { t } = useTranslation()

  const tools = [
    {
      id: 'svg-studio',
      name: 'SVG Studio',
      description: t('tools.svg-studio.desc', '专业的SVG编辑和转换工具，支持多种格式转换和优化。'),
      icon: '🎨',
      href: '/svg-studio',
      status: 'published',
      statusText: t('status.published', '已发布')
    },
    {
      id: 'text-to-png',
      name: 'Text to PNG',
      description: t('tools.text-to-png.desc', '将文本内容快速转换为PNG图片，支持自定义样式和字体。'),
      icon: '📝',
      href: '/text-to-png',
      status: 'published',
      statusText: t('status.published', '已发布')
    },
    {
      id: 'handytulip',
      name: 'HandyTulip',
      description: t('tools.handytulip.desc', '便捷的在线工具集合，提供多种实用的小工具。'),
      icon: '🌷',
      href: '/handytulip',
      status: 'published',
      statusText: t('status.published', '已发布')
    }
  ]

  return (
    <section id="tools" className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            🛠️ Web Tools
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('tools.title', '在线工具')}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('tools.subtitle', '简单易用的在线工具，无需安装即可使用')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <ProductCard
              key={tool.id}
              product={tool}
              type="tool"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection