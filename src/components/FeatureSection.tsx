import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from './ui/Section'
import FeatureCard from './ui/FeatureCard'

interface Feature {
  icon: string
  titleKey: string
  descriptionKey: string
}

interface FeatureSectionProps {
  productKey: string
  features: Feature[]
  className?: string
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  productKey,
  features,
  className = ''
}) => {
  const { t } = useTranslation()

  return (
    <Section className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in-up">
          {t(`${productKey}.features.title`)}
        </h2>
        <p className="text-gray-600 text-lg fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t(`${productKey}.features.subtitle`)}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={t(`${productKey}.${feature.titleKey}`)}
            description={t(`${productKey}.${feature.descriptionKey}`)}
            animationDelay={`${0.1 * (index + 1)}s`}
          />
        ))}
      </div>
    </Section>
  )
}

export default FeatureSection
