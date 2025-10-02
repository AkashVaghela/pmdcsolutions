"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import NavBar from "@/components/navbar.component";
import { useState } from "react";

const ThemeInitializer = dynamic(
  () => import("@/components/theme-initializer.component"),
  { ssr: false }
);

export default function MvpDevelopmentPage() {
  const [activeTab, setActiveTab] = useState("overview");
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
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.pmdc.solutions/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "MVP Development",
                  item: "https://www.pmdc.solutions/services/mvp-development",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "MVP Development",
              provider: { "@type": "Organization", name: "PMDC Solutions" },
              serviceType: "Minimum viable product development",
              areaServed: "Global",
              url: "https://www.pmdc.solutions/services/mvp-development",
            }),
          }}
        />
        <div className="page-title dark-background" data-aos="fade">
          <div className="container position-relative">
            <h1>MVP Development</h1>
            <p>
              Validate ideas quickly with production-grade MVPs that can scale.
            </p>
            {/* <nav className="breadcrumbs"><ol><li><Link href="/">Home</Link></li><li className="current">MVP Development</li></ol></nav> */}
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                  <div className="service-header" data-aos="fade-up">
                    <h1>Launch Faster, Learn Sooner</h1>
                    <p className="lead">
                      Validate your idea with a production‑grade MVP. We
                      prioritize the smallest lovable feature set, ship quickly
                      with quality, and set up analytics to learn from real
                      users and iterate with confidence.
                    </p>
                  </div>

                  <div
                    className="service-tabs"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab === "overview" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("overview")}
                          type="button"
                          role="tab"
                        >
                          <i className="bi bi-info-circle"></i> Overview
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab === "process" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("process")}
                          type="button"
                          role="tab"
                        >
                          <i className="bi bi-diagram-3"></i> Process
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab === "benefits" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("benefits")}
                          type="button"
                          role="tab"
                        >
                          <i className="bi bi-graph-up-arrow"></i> Benefits
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab === "tools" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("tools")}
                          type="button"
                          role="tab"
                        >
                          <i className="bi bi-hammer"></i> Tools & Technologies
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className={`tab-pane fade ${
                          activeTab === "overview" ? "show active" : ""
                        }`}
                        id="tab-overview"
                        role="tabpanel"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Right-Sized Scope</h3>
                              <p>
                                Smallest lovable product to validate demand
                                fast.
                              </p>
                              <p>
                                Architecture that scales post‑PMF without
                                re‑writes.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <img
                              src="/assets/img/services/services-7.webp"
                              alt="MVP Development"
                              className="img-fluid rounded"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane fade ${
                          activeTab === "process" ? "show active" : ""
                        }`}
                        id="tab-process"
                        role="tabpanel"
                      >
                        <div className="process-timeline">
                          <div className="timeline-item">
                            <div className="timeline-marker">01</div>
                            <div className="timeline-content">
                              <h4>Define</h4>
                              <p>Hypotheses, metrics, and roadmap.</p>
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-marker">02</div>
                            <div className="timeline-content">
                              <h4>Build</h4>
                              <p>Lean implementation with speed.</p>
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-marker">03</div>
                            <div className="timeline-content">
                              <h4>Measure</h4>
                              <p>Track real usage and feedback.</p>
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-marker">04</div>
                            <div className="timeline-content">
                              <h4>Iterate</h4>
                              <p>Refine and expand as needed.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane fade ${
                          activeTab === "benefits" ? "show active" : ""
                        }`}
                        id="tab-benefits"
                        role="tabpanel"
                      >
                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="benefit-card">
                              <div className="benefit-icon">
                                <i className="bi bi-rocket-takeoff"></i>
                              </div>
                              <h4>Speed to Market</h4>
                              <p>Get to users quickly.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="benefit-card">
                              <div className="benefit-icon">
                                <i className="bi bi-cash-coin"></i>
                              </div>
                              <h4>Capital Efficient</h4>
                              <p>Invest where it matters.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane fade ${
                          activeTab === "tools" ? "show active" : ""
                        }`}
                        id="tab-tools"
                        role="tabpanel"
                      >
                        <div
                          className="row g-4"
                          role="list"
                          aria-label="MVP development tools and technologies"
                        >
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Stack</h3>
                              <ul role="list">
                                <li role="listitem">
                                  Next.js · React · TypeScript
                                </li>
                                <li role="listitem">
                                  Node.js · PostgreSQL · Prisma
                                </li>
                                <li role="listitem">
                                  Auth · Payments · File storage
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Ops & Learning</h3>
                              <ul role="list">
                                <li role="listitem">
                                  Vercel/AWS · Docker · CI/CD
                                </li>
                                <li role="listitem">
                                  Analytics: GA4 · PostHog
                                </li>
                                <li role="listitem">
                                  Feature flags · A/B testing
                                </li>
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
                  <div
                    className="action-card"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <h3>Validate Faster</h3>
                    <p>Speak with our MVP team today.</p>
                    <Link href="/#contact-form" className="btn-primary">
                      Start now
                    </Link>
                    <span className="guarantee">
                      <i className="bi bi-shield-check"></i> 100% Satisfaction
                      Guarantee
                    </span>
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
