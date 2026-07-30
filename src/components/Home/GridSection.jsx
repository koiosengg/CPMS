import { useRef, useState } from 'react';
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
  const gridRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!gridRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - gridRef.current.offsetLeft);
    setScrollLeft(gridRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown || !gridRef.current) return;
    e.preventDefault();
    const x = e.pageX - gridRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    gridRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="product-preview" id={id}>
      <div className="product-preview-inner">
        <div className="product-preview-heading">
          {pill && <p>{pill}</p>}
          {title && <h2>{title}</h2>}
          {subtitle && <span>{subtitle}</span>}
        </div>

        <div
          ref={gridRef}
          className={`solutions-grid cols-${columns} ${
            isMouseDown ? 'dragging' : ''
          }`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {items.map((item) => (
            <div className="solution-card" key={item.title}>
              <div className="solution-image">
                <img src={item.image} alt={item.title} draggable={false} />
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
