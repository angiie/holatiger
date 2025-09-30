import React from 'react'
import { useI18n } from '@/hooks/useI18n'
import LanguageSelector from '@/components/LanguageSelector'

const TestI18n: React.FC = () => {
  const { t, getCurrentLanguageInfo } = useI18n()
  const currentLang = getCurrentLanguageInfo()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {t('title')}
            </h1>
            <LanguageSelector />
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">当前语言: {currentLang.nativeName}</h2>
              <p className="text-gray-600">语言代码: {currentLang.code}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">页面信息</h3>
                <p><strong>标题:</strong> {t('title')}</p>
                <p><strong>描述:</strong> {t('description')}</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">界面文本</h3>
                <p><strong>上传文本:</strong> {t('uploadText')}</p>
                <p><strong>上传链接:</strong> {t('uploadLink')}</p>
                <p><strong>预览:</strong> {t('preview')}</p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">按钮文本</h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  {t('exportPNG')}
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  {t('exportICO')}
                </button>
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                  {t('selectExport')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestI18n
