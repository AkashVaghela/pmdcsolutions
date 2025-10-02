"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function UiUxDesignPage() {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <>
      <main className="main" role="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.pmdc.solutions/"},{"@type":"ListItem","position":2,"name":"UI/UX Design","item":"https://www.pmdc.solutions/services/ui-ux-design"}] }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "UI/UX Design", "provider": {"@type":"Organization","name":"PMDC Solutions"}, "serviceType": "User interface and user experience design", "areaServed": "Global", "url": "https://www.pmdc.solutions/services/ui-ux-design" }) }} />
        <div className="page-title dark-background" data-aos="fade">
          <div className="container position-relative">
            <h1>UI/UX Design</h1>
            <p>Human-centered interfaces that are accessible, fast, and delightful across devices.</p>
            {/* <nav className="breadcrumbs">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li className="current">UI/UX Design</li>
              </ol>
            </nav> */}
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                <div className="service-header" data-aos="fade-up">
                    <h1>User Experience That Converts</h1>
                    <p className="lead">
                      We design accessible, conversion‑focused interfaces backed by research. From discovery and wireframes
                      to scalable design systems, our UX team builds products that rank, retain, and convert.
                    </p>
                  </div>

                  <div className="service-tabs" data-aos="fade-up" data-aos-delay="200">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')} type="button" role="tab" aria-selected={activeTab === 'overview'}>
                          <i className="bi bi-info-circle"></i> Overview
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'process' ? 'active' : ''}`} onClick={() => setActiveTab('process')} type="button" role="tab" aria-selected={activeTab === 'process'}>
                          <i className="bi bi-diagram-3"></i> Process
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'benefits' ? 'active' : ''}`} onClick={() => setActiveTab('benefits')} type="button" role="tab" aria-selected={activeTab === 'benefits'}>
                          <i className="bi bi-graph-up-arrow"></i> Benefits
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => setActiveTab('tools')} type="button" role="tab" aria-selected={activeTab === 'tools'}>
                          <i className="bi bi-hammer"></i> Tools & Technologies
                        </button>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className={`tab-pane fade ${activeTab === 'overview' ? 'show active' : ''}`} id="tab-overview" role="tabpanel">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Research-led Design</h3>
                              <p>Turn insights into interfaces. We map journeys, validate flows, and prototype to reduce risk.</p>
                              <p>Accessibility, motion, and performance are first-class to drive retention and SEO.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <img src="/assets/img/services/services-2.webp" alt="UI and UX Design" className="img-fluid rounded" loading="lazy" />
                          </div>
                        </div>
                      </div>

                      <div className={`tab-pane fade ${activeTab === 'process' ? 'show active' : ''}`} id="tab-process" role="tabpanel">
                        <div className="process-timeline">
                          <div className="timeline-item"><div className="timeline-marker">01</div><div className="timeline-content"><h4>Discovery &amp; Research</h4><p>Stakeholder interviews, user research, and journey mapping.</p></div></div>
                          <div className="timeline-item"><div className="timeline-marker">02</div><div className="timeline-content"><h4>Wireframes</h4><p>Low-fidelity flows to validate structure and information hierarchy.</p></div></div>
                          <div className="timeline-item"><div className="timeline-marker">03</div><div className="timeline-content"><h4>Visual Design</h4><p>Design system, components, and responsive layouts.</p></div></div>
                          <div className="timeline-item"><div className="timeline-marker">04</div><div className="timeline-content"><h4>Prototype &amp; Test</h4><p>Interactive prototypes and usability testing to refine UX.</p></div></div>
                        </div>
                      </div>

                      <div className={`tab-pane fade ${activeTab === 'benefits' ? 'show active' : ''}`} id="tab-benefits" role="tabpanel">
                        <div className="row g-4">
                          <div className="col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="bi bi-emoji-smile"></i></div><h4>Happier Users</h4><p>Reduce friction and improve satisfaction.</p></div></div>
                          <div className="col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="bi bi-bar-chart-line"></i></div><h4>Higher Conversions</h4><p>Design aligned to business KPIs.</p></div></div>
                        </div>
                      </div>
                      <div className={`tab-pane fade ${activeTab === 'tools' ? 'show active' : ''}`} id="tab-tools" role="tabpanel">
                        <div className="row g-4" role="list" aria-label="Design tools and technologies">
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Design</h3>
                              <ul role="list">
                                <li role="listitem">Figma · FigJam · Adobe CC</li>
                                <li role="listitem">Design Systems · Tokens · Auto‑layout</li>
                                <li role="listitem">WCAG 2.2 Accessibility</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Research & Analytics</h3>
                              <ul role="list">
                                <li role="listitem">Usability testing · Interviews · Surveys</li>
                                <li role="listitem">Hotjar · GA4 · Mixpanel</li>
                                <li role="listitem">Prototyping · Developer handoff</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 order-lg-2 order-1">
                <div className="service-sidebar" data-aos="fade-left">
                  <div className="action-card" data-aos="zoom-in" data-aos-delay="100">
                    <h3>Start Your Project</h3>
                    <p>Get a free consultation with our design team.</p>
                    <Link href="/#contact-form" className="btn-primary">Schedule Consultation</Link>
                    <span className="guarantee"><i className="bi bi-shield-check"></i> 100% Satisfaction Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


