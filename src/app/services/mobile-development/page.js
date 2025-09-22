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
        <div className="page-title dark-background" data-aos="fade">
          <div className="container position-relative">
            <h1>Mobile Development</h1>
            <p>Native and cross-platform apps with smooth performance and exceptional UX.</p>
            <nav className="breadcrumbs">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li className="current">Mobile Development</li>
              </ol>
            </nav>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                  <div className="service-header" data-aos="fade-up">
                    <h1>High-Quality Mobile Experiences</h1>
                    <div className="service-meta">
                      <span><i className="bi bi-award"></i> Premium Service</span>
                      <span><i className="bi bi-clock"></i> Since 2015</span>
                      <span><i className="bi bi-star-fill"></i> 4.9/5 Rating</span>
                    </div>
                    <p className="lead">From idea to App Store/Play Store, we ship reliable mobile apps with great performance and seamless UX.</p>
                  </div>

                  <div className="service-tabs" data-aos="fade-up" data-aos-delay="200">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')} type="button" role="tab"><i className="bi bi-info-circle"></i> Overview</button></li>
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'process' ? 'active' : ''}`} onClick={() => setActiveTab('process')} type="button" role="tab"><i className="bi bi-diagram-3"></i> Process</button></li>
                      <li className="nav-item"><button className={`nav-link ${activeTab === 'benefits' ? 'active' : ''}`} onClick={() => setActiveTab('benefits')} type="button" role="tab"><i className="bi bi-graph-up-arrow"></i> Benefits</button></li>
                    </ul>
                    <div className="tab-content">
                      <div className={`tab-pane fade ${activeTab === 'overview' ? 'show active' : ''}`} id="tab-overview" role="tabpanel">
                        <div className="row">
                          <div className="col-md-6"><div className="content-block"><h3>Tech Choices</h3><p>Swift/Kotlin and React Native/Flutter based on your needs, timeline, and budget.</p><p>We ensure offline support, analytics, and secure auth.</p></div></div>
                          <div className="col-md-6"><img src="/assets/img/services/services-10.webp" alt="Mobile" className="img-fluid rounded" /></div>
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


