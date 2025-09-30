import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '@/components/LanguageSelector'
import FAQ from '@/components/FAQ'

const FAQTest: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">FAQ 组件测试</h1>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* WebDavy FAQ */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">WebDavy FAQ</h2>
            <p className="text-gray-600">测试 WebDavy 产品的常见问题组件</p>
          </div>
          <FAQ productKey="webdavy" />
        </div>

        {/* TinyPass FAQ */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">TinyPass FAQ</h2>
            <p className="text-gray-600">测试 TinyPass 产品的常见问题组件</p>
          </div>
          <FAQ productKey="tinypass" />
        </div>

        {/* 使用说明 */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">使用说明</h3>
          <div className="text-blue-700 space-y-2">
            <p>• FAQ 组件会自动从国际化文件中读取对应产品的常见问题</p>
            <p>• 支持多语言切换，问题内容会根据当前语言自动更新</p>
            <p>• 点击问题可以展开/收起答案</p>
            <p>• 组件支持动画效果，提升用户体验</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FAQTest
