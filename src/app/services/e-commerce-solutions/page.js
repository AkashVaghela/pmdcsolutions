"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import NavBar from '@/components/navbar.component';
import { useState } from 'react';

const ThemeInitializer = dynamic(() => import('@/components/theme-initializer.component'), { ssr: false });

export default function EcommerceSolutionsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <>
      <NavBar />
      <main className="main" role="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.pmdc.solutions/"},{"@type":"ListItem","position":2,"name":"E‑Commerce Solutions","item":"https://www.pmdc.solutions/services/e-commerce-solutions"}] }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "E‑Commerce Solutions", "provider": {"@type":"Organization","name":"PMDC Solutions"}, "serviceType": "E‑commerce development and optimization", "areaServed": "Global", "url": "https://www.pmdc.solutions/services/e-commerce-solutions" }) }} />
        <div className="page-title dark-background" data-aos="fade">
          <div className="container position-relative">
            <h1>E‑Commerce Solutions</h1>
            <p>Fast storefronts, secure payments, and operational efficiency from cart to fulfillment.</p>
            {/* <nav className="breadcrumbs"><ol><li><Link href="/">Home</Link></li><li className="current">E‑Commerce Solutions</li></ol></nav> */}
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                <div className="service-header" data-aos="fade-up">
                    <h1>Sell Smarter, Scale Faster</h1>
                    <p className="lead">We build lightning‑fast storefronts with secure checkout, reliable inventory, and seamless integrations. From Shopify and WooCommerce to headless with Next.js, we optimize SEO, performance, and conversion rate to increase revenue.</p>
                  </div>
                  <div className="service-tabs" data-aos="fade-up" data-aos-delay="200">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')} type="button" role="tab"><i className="bi bi-info-circle"></i> Overview</button></li>
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'process' ? 'active' : ''}`} onClick={() => setActiveTab('process')} type="button" role="tab"><i className="bi bi-diagram-3"></i> Process</button></li>
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'benefits' ? 'active' : ''}`} onClick={() => setActiveTab('benefits')} type="button" role="tab"><i className="bi bi-graph-up-arrow"></i> Benefits</button></li>
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => setActiveTab('tools')} type="button" role="tab"><i className="bi bi-hammer"></i> Tools & Technologies</button></li>
                    </ul>
                    <div className="tab-content">
                      <div className={`tab-pane fade ${activeTab === 'overview' ? 'show active' : ''}`} id="tab-overview" role="tabpanel"><div className="row"><div className="col-md-6"><div className="content-block"><h3>Headless or Monolithic</h3><p>Choose Shopify/Plus, WooCommerce, or headless Next.js to match goals and scale.</p><p>SEO‑ready architecture, clean IA, and fast UX that converts.</p></div></div><div className="col-md-6"><img src="/assets/img/services/services-2.webp" alt="E‑commerce Solutions" className="img-fluid rounded" loading="lazy" /></div></div></div>
                      <div className={`tab-pane fade ${activeTab === 'process' ? 'show active' : ''}`} id="tab-process" role="tabpanel"><div className="process-timeline"><div className="timeline-item"><div className="timeline-marker">01</div><div className="timeline-content"><h4>Plan</h4><p>Catalog, promotions, and fulfillment flows.</p></div></div><div className="timeline-item"><div className="timeline-marker">02</div><div className="timeline-content"><h4>Build</h4><p>Storefront + checkout + integrations.</p></div></div><div className="timeline-item"><div className="timeline-marker">03</div><div className="timeline-content"><h4>Optimize</h4><p>Performance, SEO, and CRO.</p></div></div><div className="timeline-item"><div className="timeline-marker">04</div><div className="timeline-content"><h4>Launch</h4><p>Go-live with monitoring & analytics.</p></div></div></div></div>
                      <div className={`tab-pane fade ${activeTab === 'benefits' ? 'show active' : ''}`} id="tab-benefits" role="tabpanel"><div className="row g-4"><div className="col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="bi bi-bag"></i></div><h4>Higher Conversion</h4><p>Fast UX boosts revenue.</p></div></div><div className="col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="bi bi-truck"></i></div><h4>Operational Efficiency</h4><p>Automate fulfillment and returns.</p></div></div></div></div>
                      <div className={`tab-pane fade ${activeTab === 'tools' ? 'show active' : ''}`} id="tab-tools" role="tabpanel">
                        <div className="row g-4" role="list" aria-label="E-commerce tools and technologies">
                          <div className="col-md-6"><div className="content-block"><h3>Platforms</h3><ul role="list"><li role="listitem">Shopify/Plus · WooCommerce</li><li role="listitem">Headless: Next.js · Commerce APIs</li><li role="listitem">PIM · OMS integrations</li></ul></div></div>
                          <div className="col-md-6"><div className="content-block"><h3>Checkout & Ops</h3><ul role="list"><li role="listitem">Stripe · Adyen · PayPal</li><li role="listitem">TaxJar/Avalara · Shippo/ShipStation</li><li role="listitem">SEO · CRO · Analytics (GA4)</li></ul></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-lg-2 order-1"><div className="service-sidebar" data-aos="fade-left"><div className="action-card" data-aos="zoom-in" data-aos-delay="100"><h3>Grow Your Store</h3><p>Let’s boost conversion and AOV.</p><Link href="#contact" className="btn-primary">Talk to ecommerce</Link><span className="guarantee"><i className="bi bi-shield-check"></i> 100% Satisfaction Guarantee</span></div></div></div>
            </div>
          </div>
        </section>
      </main>
      <ThemeInitializer />
    </>
  );
}


