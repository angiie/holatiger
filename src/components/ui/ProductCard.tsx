import React from 'react'

interface ProductCardProps {
  href: string
  icon: React.ReactNode
  name: string
  badge: string
  description: string
  statusLabel: string
  statusTone: 'success' | 'warning'
  actionLabel: string
  isNew?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  href,
  icon,
  name,
  badge,
  description,
  statusLabel,
  statusTone,
  actionLabel,
  isNew = false,
}) => (
  <article className="ui-product-card">
    <a href={href} className="ui-product-card-link">
      <div className="ui-product-icon">{icon}</div>
      <div className="ui-product-heading">
        <div className="ui-product-name-row">
          <h3>{name}</h3>
          {isNew && <span className="ui-new-badge">New</span>}
        </div>
        <span className="ui-badge">{badge}</span>
      </div>
    </a>
    <p className="ui-product-description">{description}</p>
    <div className="ui-product-footer">
      <span className={`ui-status ui-status-${statusTone}`}>{statusLabel}</span>
      <a href={href} className="ui-button ui-button-primary ui-button-small">{actionLabel}</a>
    </div>
  </article>
)

export default ProductCard
