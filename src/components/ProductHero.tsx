import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from './ui/Button'
import Section from './ui/Section'

interface ProductHeroProps {
  productKey: string
  icon: string
  iconBg?: string
  installUrl: string
  moreUrl?: string
  className?: string
}

const ProductHero: React.FC<ProductHeroProps> = ({
  productKey,
  icon,
  iconBg = 'from-gray-100 to-gray-200',
  installUrl,
  moreUrl,
  className = ''
}) => {
  const { t } = useTranslation()

  return (
    <Section variant="product-hero" className={`product-hero ${className}`}>
      <div className="flex items-center gap-6 mb-8 fade-in-up">
        {/* 产品图标 */}
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center shadow-md flex-shrink-0`}>
          <img src={icon} alt={t(`${productKey}.title`)} className="w-10 h-10" />
        </div>
        
        {/* 产品标题和版本 */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="gradient-text">{t(`${productKey}.title`)}</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            {t(`${productKey}.version`)}
          </div>
        </div>
      </div>
      
      {/* 产品简介 */}
      <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {t(`${productKey}.description`)}
        </p>
        
        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href={installUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="primary" size="large" className="w-full sm:w-auto">
              {t(`${productKey}.button.install`)}
            </Button>
          </a>
          
          {moreUrl && (
            <a 
              href={moreUrl} 
              className="inline-block"
            >
              <Button variant="secondary" size="large" className="w-full sm:w-auto">
                {t(`${productKey}.button.more`)}
              </Button>
            </a>
          )}
        </div>
      </div>
    </Section>
  )
}

export default ProductHero
