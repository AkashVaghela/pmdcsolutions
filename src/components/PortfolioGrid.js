"use client";

import { useMemo, useState } from 'react';

const ITEMS = [
  { id: 1, img: '/assets/img/portfolio/portfolio-1.webp', cat: 'ui', title: 'Mobile Banking App' },
  { id: 2, img: '/assets/img/portfolio/portfolio-10.webp', cat: 'development', title: 'E-Learning Platform' },
  { id: 3, img: '/assets/img/portfolio/portfolio-7.webp', cat: 'photography', title: 'Urban Architecture' },
  { id: 4, img: '/assets/img/portfolio/portfolio-4.webp', cat: 'marketing', title: 'Social Media Campaign' },
  { id: 5, img: '/assets/img/portfolio/portfolio-2.webp', cat: 'ui', title: 'Smart Home Interface' },
  { id: 6, img: '/assets/img/portfolio/portfolio-11.webp', cat: 'development', title: 'Cloud Management System' },
  { id: 7, img: '/assets/img/portfolio/portfolio-8.webp', cat: 'photography', title: 'Nature Collection' },
  { id: 8, img: '/assets/img/portfolio/portfolio-5.webp', cat: 'marketing', title: 'Brand Strategy' },
];

const FILTERS = [
  { key: 'all', label: 'All Projects', icon: 'bi-grid-3x3' },
  { key: 'ui', label: 'UI/UX', icon: 'bi-phone' },
  { key: 'development', label: 'Web Apps', icon: 'bi-code-slash' },
  { key: 'photography', label: 'Mobile Apps', icon: 'bi-camera' },
  // { key: 'marketing', label: 'Marketing', icon: 'bi-graph-up' },
];

const PortfolioGrid = () => {
  const [active, setActive] = useState('all');

  const filtered = useMemo(() => {
    if (active === 'all') return ITEMS;
    return ITEMS.filter(i => i.cat === active);
  }, [active]);

  return (
    <div className="isotope-layout">
      <ul className="portfolio-filters isotope-filters">
        {FILTERS.map(f => (
          <li key={f.key} className={active === f.key ? 'filter-active' : ''} onClick={() => setActive(f.key)}>
            <i className={`bi ${f.icon}`}></i> {f.label}
          </li>
        ))}
      </ul>

      <div className="row g-4 isotope-container">
        {filtered.map(item => (
          <div key={item.id} className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.cat}`}>
            <article className="portfolio-entry">
              <figure className="entry-image">
                <img src={item.img} className="img-fluid" alt="" loading="lazy" />
                <div className="entry-overlay">
                  <div className="overlay-content">
                    <div className="entry-meta">{item.cat === 'ui' ? 'UI/UX Design' : item.cat === 'development' ? 'Development' : item.cat === 'photography' ? 'Photography' : 'Marketing'}</div>
                    <h3 className="entry-title">{item.title}</h3>
                    <div className="entry-links">
                      <a href={item.img} className="glightbox" data-gallery={`portfolio-gallery-${item.cat}`}>
                        <i className="bi bi-arrows-angle-expand"></i>
                      </a>
                      <a href="/portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </figure>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;


