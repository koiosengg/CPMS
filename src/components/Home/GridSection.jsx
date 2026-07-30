import { ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function GridSection({
  id,
  pill,
  title,
  subtitle,
  items,
  columns = 4,
}) {
  return (
    <section className="product-preview" id={id}>
      <div className="product-preview-inner">
        <div className="product-preview-heading">
          {pill && <p>{pill}</p>}
          {title && <h2>{title}</h2>}
          {subtitle && <span>{subtitle}</span>}
        </div>

        <div className={`solutions-grid cols-${columns}`}>
          {items.map((item) => (
            <div className="solution-card" key={item.title}>
              <div className="solution-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="solution-content">
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
                {item.linkText && (
                  <NavLink to={item.linkUrl || '#'} className="read-more-link">
                    <span>{item.linkText}</span>
                    <ChevronRight size={16} />
                  </NavLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
