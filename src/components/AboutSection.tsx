import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutSection: React.FC = () => {
  const { t } = useTranslation()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/holatiger',
      icon: '🐙'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/holatiger',
      icon: '🐦'
    },
    {
      name: 'Email',
      href: 'mailto:hi@holatiger.com',
      icon: '📧'
    }
  ]

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            👤 About Me
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.title', '关于我')}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('about.subtitle', '分享我的创作和学习过程')}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.heading', '你好，我是虎啦！')}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('about.description1', '一个热爱技术和设计的开发者，专注于创建简单实用的工具。')}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.description2', '我相信好的工具应该简单易用，能够真正解决用户的问题。')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.description3', '来自西班牙语的学习，Chrome扩展的灵感。')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">🐯</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {t('about.connect', '联系我')}
              </h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-orange-100 hover:text-orange-700 transition-colors"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection