import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Section from './ui/Section'

interface Screenshot {
  src: string
  alt: string
}

interface ScreenshotCarouselProps {
  productKey: string
  screenshots: Screenshot[]
  className?: string
}

const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({
  productKey,
  screenshots,
  className = ''
}) => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [screenshots.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  return (
    <Section variant="alt" className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in-up">
          {t(`${productKey}.screenshots.title`)}
        </h2>
        <p className="text-gray-600 text-lg fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t(`${productKey}.screenshots.subtitle`)}
        </p>
      </div>
      
      {/* 轮播图容器 */}
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden fade-in-up" style={{ animationDelay: '0.3s' }}>
        {/* 轮播图片容器 */}
        <div className="carousel-container relative h-96 md:h-[500px] overflow-hidden">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`carousel-slide absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 'translate-x-full'
              }`}
              data-slide={index}
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        {/* 导航按钮 */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* 指示器 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ScreenshotCarousel
