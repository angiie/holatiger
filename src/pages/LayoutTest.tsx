import React from 'react'
import Layout from '@/components/Layout'
import FAQ from '@/components/FAQ'

const LayoutTest: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* 默认布局测试 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">默认布局 (Default Layout)</h2>
        <p className="text-gray-600 mb-4">适用于首页等通用页面</p>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-sm text-gray-500">使用 variant="default"</p>
        </div>
      </div>

      {/* 产品页面布局测试 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">产品页面布局 (Product Layout)</h2>
        <p className="text-gray-600 mb-4">适用于产品详情页，如 WebDavy、TinyPass</p>
        <div className="bg-orange-50 p-4 rounded">
          <p className="text-sm text-orange-700">使用 variant="product"</p>
        </div>
      </div>

      {/* 工具页面布局测试 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">工具页面布局 (Tool Layout)</h2>
        <p className="text-gray-600 mb-4">适用于在线工具页面，如 SVG Studio</p>
        <div className="bg-blue-50 p-4 rounded">
          <p className="text-sm text-blue-700">使用 variant="tool"</p>
        </div>
      </div>

      {/* FAQ 组件测试 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQ 组件测试</h2>
        <p className="text-gray-600 mb-4">展示 FAQ 组件在不同布局中的效果</p>
      </div>
      
      <FAQ productKey="webdavy" />
    </div>
  )
}

// 包装不同布局的组件
const DefaultLayoutTest: React.FC = () => (
  <Layout variant="default">
    <div className="max-w-6xl mx-auto px-6 py-8">
      <LayoutTest />
    </div>
  </Layout>
)

const ProductLayoutTest: React.FC = () => (
  <Layout variant="product">
    <div className="max-w-6xl mx-auto px-6 py-8">
      <LayoutTest />
    </div>
  </Layout>
)

const ToolLayoutTest: React.FC = () => (
  <Layout variant="tool">
    <div className="max-w-6xl mx-auto px-6 py-8">
      <LayoutTest />
    </div>
  </Layout>
)

// 导出不同的测试组件
export { DefaultLayoutTest, ProductLayoutTest, ToolLayoutTest }
export default DefaultLayoutTest
