"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import NavBar from '@/components/navbar.component';
import { useState } from 'react';

const ThemeInitializer = dynamic(() => import('@/components/theme-initializer.component'), { ssr: false });

export default function WebDevelopmentPage() {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <>
      <NavBar />
      <main className="main" role="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pmdc.solutions/"},
                {"@type": "ListItem", "position": 2, "name": "Web Development", "item": "https://www.pmdc.solutions/services/web-development"}
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Web Development",
              "provider": {"@type": "Organization", "name": "PMDC Solutions"},
              "serviceType": "Web application development",
              "areaServed": "Global",
              "url": "https://www.pmdc.solutions/services/web-development"
            })
          }}
        />
        <div className="page-title dark-background" data-aos="fade">
          <div className="container position-relative">
            <h1>Web Development</h1>
            <p>High-performance, SEO-friendly, and scalable web apps built with modern stacks.</p>
            {/* <nav className="breadcrumbs">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li className="current">Web Development</li>
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
                    <h1>Fast, Secure, and Maintainable</h1>
                    <p className="lead">We build SEO-first, Core Web Vitals–optimized web apps with clean architecture and accessible UX. From landing pages to enterprise SaaS, our Next.js and Node.js experts ship scalable, secure, and maintainable products that rank well and convert.</p>
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
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Modern, SEO-First Stack</h3>
                              <p>Next.js and React with TypeScript for performance, stability, and developer speed.</p>
                              <p>Server-side rendering, structured data, and accessibility to improve rankings.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <img src="/assets/img/services/services-4.webp" alt="Web Development" className="img-fluid rounded" loading="lazy" />
                          </div>
                        </div>
                      </div>
                      <div className={`tab-pane fade ${activeTab === 'process' ? 'show active' : ''}`} id="tab-process" role="tabpanel">
                        <div className="process-timeline">
                          <div className="timeline-item"><div className="timeline-marker">01</div><div className="timeline-content"><h4>Architecture</h4><p>Design for reliability, scale, and developer velocity.</p></div></div>
                          <div className="timeline-item"><div className="timeline-marker">02</div><div className="timeline-content"><h4>Implementation</h4><p>Clean, typed code with automated checks.</p></div></div>
                          <div className="timeline-item"><div className="timeline-marker">03</div><div className="timeline-content"><h4>Optimization</h4><p>Performance, security, and SEO audits.</p></div></div>
                          <div className="timeline-item"><div className="timeline-marker">04</div><div className="timeline-content"><h4>Launch</h4><p>Zero-downtime deploys and monitoring.</p></div></div>
                        </div>
                      </div>
                      <div className={`tab-pane fade ${activeTab === 'benefits' ? 'show active' : ''}`} id="tab-benefits" role="tabpanel">
                        <div className="row g-4">
                          <div className="col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="bi bi-speedometer"></i></div><h4>Blazing Fast</h4><p>Core Web Vitals optimized.</p></div></div>
                          <div className="col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="bi bi-shield-check"></i></div><h4>Secure</h4><p>Hardened against common threats.</p></div></div>
                        </div>
                      </div>
                      <div className={`tab-pane fade ${activeTab === 'tools' ? 'show active' : ''}`} id="tab-tools" role="tabpanel">
                        <div className="row g-4" role="list" aria-label="Web development tools and technologies">
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Frontend</h3>
                              <ul role="list">
                                <li role="listitem" aria-label="Next.js, React, TypeScript">Next.js · React · TypeScript</li>
                                <li role="listitem" aria-label="CSS Modules, Tailwind, Bootstrap">CSS Modules · Tailwind · Bootstrap</li>
                                <li role="listitem" aria-label="Accessibility, Lighthouse, Web Vitals">A11y · Lighthouse · Web Vitals</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Backend & DevOps</h3>
                              <ul role="list">
                                <li role="listitem" aria-label="Node.js, Express, PostgreSQL, Prisma">Node.js · Express · PostgreSQL · Prisma</li>
                                <li role="listitem" aria-label="AWS, Vercel, Docker, CI CD">AWS · Vercel · Docker · CI/CD</li>
                                <li role="listitem" aria-label="Authentication and monitoring">Auth · Sentry · Observability</li>
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
                    <h3>Build with Confidence</h3>
                    <p>Schedule a call with our engineering team.</p>
                    <Link href="/#contact-form" className="btn-primary">Talk to us</Link>
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


