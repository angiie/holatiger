import React from 'react'
import Layout from '@/components/Layout'
import ProductHero from '@/components/ProductHero'
import FeatureSection from '@/components/FeatureSection'
import ScreenshotCarousel from '@/components/ScreenshotCarousel'
import FAQ from '@/components/FAQ'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import FeatureCard from '@/components/ui/FeatureCard'

const ComponentTest: React.FC = () => {
  const testFeatures = [
    {
      icon: '🎨',
      titleKey: 'feature1.title',
      descriptionKey: 'feature1.desc'
    },
    {
      icon: '⚡',
      titleKey: 'feature2.title',
      descriptionKey: 'feature2.desc'
    }
  ]

  const testScreenshots = [
    {
      src: '/assets/images/webdavy/screenshot/zh/store-screenshot-1280x800-main.png',
      alt: '测试截图 1'
    },
    {
      src: '/assets/images/tinypass/screenshot/zh/store-screenshot-1280x800-generator.png',
      alt: '测试截图 2'
    }
  ]

  return (
    <Layout variant="default">
      <div className="space-y-12">
        {/* 按钮组件测试 */}
        <Section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">按钮组件测试</h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary">主要按钮</Button>
            <Button variant="secondary">次要按钮</Button>
            <Button variant="accent">强调按钮</Button>
            <Button variant="outline">轮廓按钮</Button>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button size="small">小按钮</Button>
            <Button size="medium">中按钮</Button>
            <Button size="large">大按钮</Button>
          </div>
        </Section>

        {/* 特性卡片测试 */}
        <Section variant="alt">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">特性卡片测试</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon="🚀"
              title="快速启动"
              description="一键启动，无需复杂配置，让您快速开始工作"
            />
            <FeatureCard
              icon="🔒"
              title="安全可靠"
              description="采用最新的安全技术，保护您的数据安全"
            />
          </div>
        </Section>

        {/* 产品 Hero 测试 */}
        <ProductHero
          productKey="webdavy"
          icon="/assets/images/webdavy/svg-export-40x40.png"
          installUrl="https://chromewebstore.google.com/detail/webdavy/inaeglkgfmnkncalphgpkendfjndjmid"
          moreUrl="https://holatiger.com/#extensions"
        />

        {/* 特性区域测试 */}
        <FeatureSection
          productKey="webdavy"
          features={testFeatures}
        />

        {/* 轮播图测试 */}
        <ScreenshotCarousel
          productKey="webdavy"
          screenshots={testScreenshots}
        />

        {/* FAQ 测试 */}
        <FAQ productKey="webdavy" />
      </div>
    </Layout>
  )
}

export default ComponentTest
