import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQProps {
  productKey: string // 如 'webdavy', 'tinypass'
  className?: string
}

const FAQ: React.FC<FAQProps> = ({ productKey, className = '' }) => {
  const { t } = useTranslation()
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  // 获取 FAQ 数据
  const getFAQItems = (): FAQItem[] => {
    const items: FAQItem[] = []
    let index = 1
    
    // 尝试获取 FAQ 项目，最多支持 10 个
    while (index <= 10) {
      const questionKey = `${productKey}.faq${index}.question`
      const answerKey = `${productKey}.faq${index}.answer`
      
      const question = t(questionKey)
      const answer = t(answerKey)
      
      // 如果翻译键不存在，i18next 会返回键名本身
      if (question === questionKey || answer === answerKey) {
        break
      }
      
      items.push({
        id: `${productKey}-faq-${index}`,
        question,
        answer
      })
      
      index++
    }
    
    return items
  }

  const faqItems = getFAQItems()

  if (faqItems.length === 0) {
    return null
  }

  return (
    <section className={`py-16 px-6 bg-gray-50 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in-up">
            {t(`${productKey}.faq.title`, '常见问题')}
          </h2>
          <p className="text-gray-600 text-lg fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t(`${productKey}.faq.subtitle`, '解答您可能遇到的问题')}
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(item.id)}
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openItems.has(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openItems.has(item.id) && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
