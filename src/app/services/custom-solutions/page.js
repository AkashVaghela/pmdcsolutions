"use client";

import Link from "next/link";
import { useState } from "react";


export default function CustomSolutionsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <>
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
                  name: "Custom Solutions",
                  item: "https://www.pmdc.solutions/services/custom-solutions",
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
              name: "Custom Solutions",
              provider: { "@type": "Organization", name: "PMDC Solutions" },
              serviceType: "Custom software development",
              areaServed: "Global",
              url: "https://www.pmdc.solutions/services/custom-solutions",
            }),
          }}
        />
        <div className="page-title dark-background" data-aos="fade">
          <div className="container position-relative">
            <h1>Custom Solutions</h1>
            <p>
              Tailored systems to automate workflows and solve complex problems.
            </p>
            {/* <nav className="breadcrumbs"><ol><li><Link href="/">Home</Link></li><li className="current">Custom Solutions</li></ol></nav> */}
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                  <div className="service-header" data-aos="fade-up">
                    <h1>Built Around Your Business</h1>
                    <p className="lead">
                      We design custom software that automates workflows,
                      integrates your tools, and scales with your growth—all
                      with SEO, security, and accessibility in mind.
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
                              <h3>Systems that Fit</h3>
                              <p>
                                We design software around your operations—not
                                the other way around.
                              </p>
                              <p>
                                APIs, integrations, and data pipelines included.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <img
                              src="/assets/img/services/services-4.webp"
                              alt="Custom Solutions"
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
                              <h4>Discovery</h4>
                              <p>Process mapping and requirements.</p>
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-marker">02</div>
                            <div className="timeline-content">
                              <h4>Design</h4>
                              <p>Solution architecture and UX.</p>
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-marker">03</div>
                            <div className="timeline-content">
                              <h4>Build</h4>
                              <p>Iterative delivery with demos.</p>
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-marker">04</div>
                            <div className="timeline-content">
                              <h4>Adopt</h4>
                              <p>Training, rollout, and support.</p>
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
                                <i className="bi bi-puzzle"></i>
                              </div>
                              <h4>Perfect Fit</h4>
                              <p>Optimized for your workflows.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="benefit-card">
                              <div className="benefit-icon">
                                <i className="bi bi-diagram-2"></i>
                              </div>
                              <h4>Integrated</h4>
                              <p>Connect tools you already use.</p>
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
                          aria-label="Custom solutions tools and technologies"
                        >
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Tech Stack</h3>
                              <ul role="list">
                                <li role="listitem">
                                  Next.js · React · TypeScript
                                </li>
                                <li role="listitem">Node.js · Python · Go</li>
                                <li role="listitem">
                                  PostgreSQL · Redis · Kafka
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>Integrations</h3>
                              <ul role="list">
                                <li role="listitem">
                                  Salesforce · HubSpot · Slack
                                </li>
                                <li role="listitem">Stripe · PayPal · Plaid</li>
                                <li role="listitem">Auth0 · Okta · SSO</li>
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
                    <h3>Let’s Architect It</h3>
                    <p>Talk to our solutions team.</p>
                    <Link href="/#contact-form" className="btn-primary">
                      Plan a solution
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
    </>
  );
}
