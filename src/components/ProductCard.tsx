import React from 'react'
import { useTranslation } from 'react-i18next'

interface Product {
  id: string
  name: string
  description: string
  icon: string
  href: string
  status: string
  statusText: string
}

interface ProductCardProps {
  product: Product
  type: 'extension' | 'tool'
}

const ProductCard: React.FC<ProductCardProps> = ({ product, type }) => {
  const { t } = useTranslation()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-500'
      case 'development':
        return 'bg-yellow-500'
      case 'planned':
        return 'bg-gray-400'
      default:
        return 'bg-green-500'
    }
  }

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'extension':
        return 'text-blue-600 bg-blue-50'
      case 'tool':
        return 'text-green-600 bg-green-50'
      default:
        return 'text-blue-600 bg-blue-50'
    }
  }

  const getButtonColor = (type: string) => {
    switch (type) {
      case 'extension':
        return 'bg-blue-600 hover:bg-blue-700'
      case 'tool':
        return 'bg-green-600 hover:bg-green-700'
      default:
        return 'bg-blue-600 hover:bg-blue-700'
    }
  }

  const getButtonText = (type: string) => {
    switch (type) {
      case 'extension':
        return t('btn.install', '安装扩展')
      case 'tool':
        return t('btn.use', '使用工具')
      default:
        return t('btn.install', '安装扩展')
    }
  }

  return (
    <div className="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
      <a 
        href={product.href} 
        className="flex items-center gap-4 mb-5 no-underline"
        style={{ textDecoration: 'none !important', color: 'inherit' }}
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-sm">
          {product.icon.startsWith('/') ? (
            <img src={product.icon} alt={product.name} className="w-8 h-8" />
          ) : (
            <span className="text-2xl">{product.icon}</span>
          )}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
          <span className={`text-sm px-3 py-1 rounded-full font-medium ${getBadgeColor(type)}`}>
            {type === 'extension' ? t('extensions.badge', 'Chrome扩展') : t('tools.badge', '在线工具')}
          </span>
        </div>
      </a>
      
      <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3">
        {product.description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className={`w-3 h-3 rounded-full ${getStatusColor(product.status)}`}></span>
          <span>{product.statusText}</span>
        </div>
        <a 
          href={product.href}
          className={`inline-flex items-center px-4 py-2 text-white rounded-lg transition-colors font-medium text-sm shadow-sm no-underline ${getButtonColor(type)}`}
          style={{ textDecoration: 'none !important', color: 'white !important' }}
        >
          {getButtonText(type)}
        </a>
      </div>
    </div>
  )
}

export default ProductCard