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
  installUrl,
  moreUrl,
  className = ''
}) => {
  const { t } = useTranslation()

  return (
    <Section variant="product-hero" className={`product-hero ${className}`}>
      <div className="fade-in-up mb-8 flex items-center gap-6">
        <div className="ui-product-icon ui-product-icon-large">
          <img src={icon} alt={t(`${productKey}.title`)} />
        </div>

        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
            {t(`${productKey}.title`)}
          </h1>
          <span className="ui-badge">{t(`${productKey}.version`)}</span>
        </div>
      </div>

      <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          {t(`${productKey}.description`)}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
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
            <a href={moreUrl} className="inline-block">
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
