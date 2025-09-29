"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import NavBar from '@/components/navbar.component';
import { useState } from 'react';

const ThemeInitializer = dynamic(() => import('@/components/theme-initializer.component'), { ssr: false });

export default function ProductManagementPage() {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <>
      <NavBar />
      <main className="main" role="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.pmdc.solutions/"},{"@type":"ListItem","position":2,"name":"Product Management","item":"https://www.pmdc.solutions/services/product-management"}] }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Product Management", "provider": {"@type":"Organization","name":"PMDC Solutions"}, "serviceType": "Product strategy and delivery", "areaServed": "Global", "url": "https://www.pmdc.solutions/services/product-management" }) }} />
        <div className="page-title dark-background" data-aos="fade">
          <div className="container position-relative">
            <h1>Product Management</h1>
            <p>From strategy to execution—owning the roadmap and outcomes.</p>
            <nav className="breadcrumbs"><ol><li><Link href="/">Home</Link></li><li className="current">Product Management</li></ol></nav>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                <div className="service-header" data-aos="fade-up">
                    <h1>Deliver the Right Thing</h1>
                    <p className="lead">We turn strategy into shipped outcomes. From discovery and OKRs to roadmaps and release management, our product leaders drive focus, prioritize ROI, and validate with data to grow retention and revenue.</p>
                  </div>
                  <div className="service-tabs" data-aos="fade-up" data-aos-delay="200">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')} type="button" role="tab"><i className="bi bi-info-circle"></i> Overview</button></li>
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'process' ? 'active' : ''}`} onClick={() => setActiveTab('process')} type="button" role="tab"><i className="bi bi-diagram-3"></i> Process</button></li>
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'benefits' ? 'active' : ''}`} onClick={() => setActiveTab('benefits')} type="button" role="tab"><i className="bi bi-graph-up-arrow"></i> Benefits</button></li>
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => setActiveTab('tools')} type="button" role="tab"><i className="bi bi-hammer"></i> Tools & Technologies</button></li>
                    </ul>
                    <div className="tab-content">
                      <div className={`tab-pane fade ${activeTab === 'overview' ? 'show active' : ''}`} id="tab-overview" role="tabpanel"><div className="row"><div className="col-md-6"><div className="content-block"><h3>Strategy to Delivery</h3><p>Customer discovery, market fit, and clear prioritization frameworks.</p><p>Roadmaps that balance impact, risk, and speed across teams.</p></div></div><div className="col-md-6"><img src="/assets/img/services/services-4.webp" alt="Product Management" className="img-fluid rounded" loading="lazy" /></div></div></div>
                      <div className={`tab-pane fade ${activeTab === 'process' ? 'show active' : ''}`} id="tab-process" role="tabpanel"><div className="process-timeline"><div className="timeline-item"><div className="timeline-marker">01</div><div className="timeline-content"><h4>Define</h4><p>Objectives and key results.</p></div></div><div className="timeline-item"><div className="timeline-marker">02</div><div className="timeline-content"><h4>Plan</h4><p>Roadmap and milestones.</p></div></div><div className="timeline-item"><div className="timeline-marker">03</div><div className="timeline-content"><h4>Deliver</h4><p>Agile execution and reviews.</p></div></div><div className="timeline-item"><div className="timeline-marker">04</div><div className="timeline-content"><h4>Measure</h4><p>KPIs and iteration.</p></div></div></div></div>
                      <div className={`tab-pane fade ${activeTab === 'benefits' ? 'show active' : ''}`} id="tab-benefits" role="tabpanel"><div className="row g-4"><div className="col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="bi bi-kanban"></i></div><h4>Clarity</h4><p>Everyone aligned on what matters.</p></div></div><div className="col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="bi bi-bullseye"></i></div><h4>Outcomes</h4><p>Measurable business impact.</p></div></div></div></div>
                      <div className={`tab-pane fade ${activeTab === 'tools' ? 'show active' : ''}`} id="tab-tools" role="tabpanel">
                        <div className="row g-4" role="list" aria-label="Product management tools and technologies">
                          <div className="col-md-6"><div className="content-block"><h3>Product & Discovery</h3><ul className="tech-badges" role="list"><li className="badge" role="listitem">Jira · Linear · Notion</li><li className="badge" role="listitem">OKRs · Roadmaps · RICE</li><li className="badge" role="listitem">User research · JTBD · A/B testing</li></ul></div></div>
                          <div className="col-md-6"><div className="content-block"><h3>Analytics & Delivery</h3><ul className="tech-badges" role="list"><li className="badge" role="listitem">GA4 · Mixpanel · Amplitude</li><li className="badge" role="listitem">Looker · Metabase</li><li className="badge" role="listitem">Agile · Scrum · Release management</li></ul></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-lg-2 order-1"><div className="service-sidebar" data-aos="fade-left"><div className="action-card" data-aos="zoom-in" data-aos-delay="100"><h3>Need a Product Lead?</h3><p>We can own roadmap and delivery.</p><Link href="#contact" className="btn-primary">Let’s talk</Link><span className="guarantee"><i className="bi bi-shield-check"></i> 100% Satisfaction Guarantee</span></div></div></div>
            </div>
          </div>
        </section>
      </main>
      <ThemeInitializer />
    </>
  );
}


