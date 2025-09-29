"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import NavBar from '@/components/navbar.component';
import { useState } from 'react';

const ThemeInitializer = dynamic(() => import('@/components/theme-initializer.component'), { ssr: false });

export default function MobileDevelopmentPage() {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <>
      <NavBar />
      <main className="main" role="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.pmdc.solutions/"},{"@type":"ListItem","position":2,"name":"Mobile Development","item":"https://www.pmdc.solutions/services/mobile-development"}] }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Mobile Development", "provider": {"@type":"Organization","name":"PMDC Solutions"}, "serviceType": "iOS and Android app development", "areaServed": "Global", "url": "https://www.pmdc.solutions/services/mobile-development" }) }} />
        <div className="page-title dark-background" data-aos="fade">
          <div className="container position-relative">
            <h1>Mobile Development</h1>
            <p>Native and cross-platform apps with smooth performance and exceptional UX.</p>
            {/* <nav className="breadcrumbs">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li className="current">Mobile Development</li>
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
                    <h1>High-Quality Mobile Experiences</h1>
                    <p className="lead">We craft App Store and Play Store–ready apps with native performance, accessibility, and strong analytics. Our Swift, Kotlin, and cross‑platform teams ship secure, scalable apps that users love and that rank in search.</p>
                  </div>

                  <div className="service-tabs" data-aos="fade-up" data-aos-delay="200">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')} type="button" role="tab"><i className="bi bi-info-circle"></i> Overview</button></li>
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'process' ? 'active' : ''}`} onClick={() => setActiveTab('process')} type="button" role="tab"><i className="bi bi-diagram-3"></i> Process</button></li>
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'benefits' ? 'active' : ''}`} onClick={() => setActiveTab('benefits')} type="button" role="tab"><i className="bi bi-graph-up-arrow"></i> Benefits</button></li>
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => setActiveTab('tools')} type="button" role="tab"><i className="bi bi-hammer"></i> Tools & Technologies</button></li>
                    </ul>
                    <div className="tab-content">
                      <div className={`tab-pane fade ${activeTab === 'overview' ? 'show active' : ''}`} id="tab-overview" role="tabpanel">
                        <div className="row">
                          <div className="col-md-6"><div className="content-block"><h3>Right Tech, Right Outcome</h3><p>Swift/Kotlin for fully native; React Native/Flutter for cross‑platform speed.</p><p>Offline‑first, secure auth, analytics, and crash monitoring included.</p></div></div>
                          <div className="col-md-6"><img src="/assets/img/services/services-10.webp" alt="Mobile Development" className="img-fluid rounded" loading="lazy" /></div>
                        </div>
                      </div>
                      <div className={`tab-pane fade ${activeTab === 'process' ? 'show active' : ''}`} id="tab-process" role="tabpanel">
                        <div className="process-timeline">
                          <div className="timeline-item"><div className="timeline-marker">01</div><div className="timeline-content"><h4>Scope</h4><p>Define MVP scope and success metrics.</p></div></div>
                          <div className="timeline-item"><div className="timeline-marker">02</div><div className="timeline-content"><h4>Build</h4><p>Iterative development with frequent test builds.</p></div></div>
                          <div className="timeline-item"><div className="timeline-marker">03</div><div className="timeline-content"><h4>QA</h4><p>Automated and manual testing across devices.</p></div></div>
                          <div className="timeline-item"><div className="timeline-marker">04</div><div className="timeline-content"><h4>Publish</h4><p>Store submission and release strategy.</p></div></div>
                        </div>
                      </div>
                      <div className={`tab-pane fade ${activeTab === 'benefits' ? 'show active' : ''}`} id="tab-benefits" role="tabpanel">
                        <div className="row g-4">
                          <div className="col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="bi bi-phone"></i></div><h4>Great UX</h4><p>Native-feel across platforms.</p></div></div>
                          <div className="col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="bi bi-cloud-arrow-up"></i></div><h4>Scalable</h4><p>Cloud-backed for growth.</p></div></div>
                        </div>
                      </div>
                      <div className={`tab-pane fade ${activeTab === 'tools' ? 'show active' : ''}`} id="tab-tools" role="tabpanel">
                        <div className="row g-4" role="list" aria-label="Mobile development tools and technologies">
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Platforms</h3>
                              <ul role="list">
                                  <li role="listitem">iOS (Swift/SwiftUI)</li>
                                <li role="listitem">Android (Kotlin)</li>
                                <li role="listitem">React Native · Flutter</li>
                                <li role="listitem">App Store Connect · Play Console</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Backend & QA</h3>
                              <ul role="list">
                                <li role="listitem">Firebase · Supabase · GraphQL/REST</li>
                                <li role="listitem">CI/CD · Fastlane · Detox/XCUI/Espresso</li>
                                <li role="listitem">Analytics (GA4/Segment) · Crashlytics</li>
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
                    <h3>Discuss Your App</h3>
                    <p>Cut time-to-market with our mobile experts.</p>
                    <Link href="#contact" className="btn-primary">Get in touch</Link>
                    <span className="guarantee"><i className="bi bi-shield-check"></i> 100% Satisfaction Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ThemeInitializer />
    </>
  );
}


