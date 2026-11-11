import React from 'react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
  animationDelay?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
  animationDelay = '0s'
}) => {
  return (
    <div 
      className={`feature-card fade-in-up ${className}`}
      style={{ animationDelay }}
    >
      <div className="flex items-start gap-4">
        <div className="ui-feature-icon">
          <span className="text-xl">{icon}</span>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
