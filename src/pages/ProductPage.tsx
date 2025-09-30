import React from 'react'
import Layout from '@/components/Layout'
import ProductHero from '@/components/ProductHero'
import FeatureSection from '@/components/FeatureSection'
import ScreenshotCarousel from '@/components/ScreenshotCarousel'
import FAQ from '@/components/FAQ'

interface ProductPageProps {
  productKey: string
  icon: string
  iconBg?: string
  installUrl: string
  moreUrl?: string
  features: Array<{
    icon: string
    titleKey: string
    descriptionKey: string
  }>
  screenshots: Array<{
    src: string
    alt: string
  }>
}

const ProductPage: React.FC<ProductPageProps> = ({
  productKey,
  icon,
  iconBg,
  installUrl,
  moreUrl,
  features,
  screenshots
}) => {
  return (
    <Layout variant="product">
      <ProductHero
        productKey={productKey}
        icon={icon}
        iconBg={iconBg}
        installUrl={installUrl}
        moreUrl={moreUrl}
      />
      
      <FeatureSection
        productKey={productKey}
        features={features}
      />
      
      <ScreenshotCarousel
        productKey={productKey}
        screenshots={screenshots}
      />
      
      <FAQ productKey={productKey} />
    </Layout>
  )
}

export default ProductPage
