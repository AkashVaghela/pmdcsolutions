"use client";

import Link from "next/link";
import { useState } from "react";

const PROCESS = [
  {
    id: 1,
    title: "Discovery & Planning",
    description:
      "Understand goals, audience, and technical requirements to shape the project roadmap.",
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description:
      "Collaborate on UI/UX designs and functional prototypes to validate structure.",
  },
  {
    id: 3,
    title: "Development & Coding",
    description:
      "Write clean, modular, and optimized code for web applications or websites.",
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive testing for performance, security, and cross-device functionality.",
  },
  {
    id: 5,
    title: "Launch & Deployment",
    description:
      "Seamless deployment with full configuration and post-launch support.",
  },
  {
    id: 6,
    title: "Maintenance & Updates",
    description:
      "Ongoing improvements, security updates, and performance optimization.",
  },
];

const BENEFITS = [
  {
    id: 1,
    icon: "bi bi-bar-chart-line",
    title: "Scalable & Flexible Solutions",
    description: "Grow your web platform as your business expands.",
  },
  {
    id: 2,
    icon: "bi bi-people",
    title: "Enhanced User Experience",
    description: "Smooth, responsive, and intuitive web interactions.",
  },
  {
    id: 3,
    icon: "bi bi-speedometer2",
    title: "High Performance & Speed",
    description: "Fast-loading pages to reduce bounce rates.",
  },
  {
    id: 4,
    icon: "bi bi-shield-lock",
    title: "Secure & Reliable Systems",
    description: "Protect your data and your users’ trust.",
  },
  {
    id: 5,
    icon: "bi bi-search",
    title: "SEO-Friendly Development",
    description: "Optimized to rank higher and attract more visitors.",
  },
  {
    id: 6,
    icon: "bi bi-life-preserver",
    title: "End-to-End Support",
    description: "From planning to maintenance, we handle everything.",
  },
];

const SERVICES = [
  {
    id: 1,
    icon: "bi bi-code-slash",
    title: "Custom Web Development",
    description:
      "Tailored websites and applications to meet your unique business needs.",
  },
  {
    id: 2,
    icon: "bi bi-phone-landscape",
    title: "Responsive Design & Development",
    description:
      "Web experiences that look and perform perfectly on any device.",
  },
  {
    id: 3,
    icon: "bi bi-plug",
    title: "API Development & Integration",
    description:
      "Seamless integration with third-party services for enhanced functionality.",
  },
  {
    id: 4,
    icon: "bi bi-lightning",
    title: "Performance Optimization",
    description:
      "Fast-loading, SEO-friendly, and scalable websites for peak performance.",
  },
  {
    id: 5,
    icon: "bi bi-gear",
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring, and improvements to keep your web presence strong.",
  },
];

export default function WebDevelopmentPage() {
  const [activeTab, setActiveTab] = useState("process");
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
                  name: "Mobile Development",
                  item: "https://www.pmdc.solutions/services/mobile-development",
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
              name: "Mobile Development",
              provider: { "@type": "Organization", name: "PMDC Solutions" },
              serviceType: "iOS and Android app development",
              areaServed: "Global",
              url: "https://www.pmdc.solutions/services/mobile-development",
            }),
          }}
        />
        <div className="page-title dark-background" data-aos="fade">
          <div className="container position-relative">
            <h1>Web Development</h1>
            <p>
              Build fast, reliable, and scalable web solutions that power your
              business. From dynamic websites to complex web applications,{" "}
              <br /> we turn your vision into reality with clean,
              high-performing code.
            </p>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                  <div className="service-header" data-aos="fade-up">
                    <h1>High-Quality Mobile Experiences</h1>
                    <p className="lead">
                      We craft App Store and Play Store–ready apps with native
                      performance, accessibility, and strong analytics. Our
                      Swift, Kotlin, and cross‑platform teams ship secure,
                      scalable apps that users love and that rank in search.
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
                    </ul>
                    <div className="tab-content">
                      <div
                        className={`tab-pane fade ${
                          activeTab === "process" ? "show active" : ""
                        }`}
                        id="tab-process"
                        role="tabpanel"
                      >
                        <div className="process-timeline">
                          {PROCESS.map((process, index) => {
                            return (
                              <div className="timeline-item" key={process.id}>
                                <div className="timeline-marker">
                                  0{index + 1}
                                </div>
                                <div className="timeline-content">
                                  <h4>{process.title}</h4>
                                  <p>{process.description}</p>
                                </div>
                              </div>
                            );
                          })}
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
                          {BENEFITS.map((benefit) => {
                            return (
                              <div className="col-md-6" key={benefit.id}>
                                <div className="benefit-card">
                                  <div className="benefit-icon">
                                    <i className={`bi ${benefit.icon}`}></i>
                                  </div>
                                  <h4>{benefit.title}</h4>
                                  <p>{benefit.description}</p>
                                </div>
                              </div>
                            );
                          })}
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
                    <h3>Discuss Your App</h3>
                    <p>Cut time-to-market with our mobile experts.</p>
                    <Link href="/#contact-form" className="btn-primary">
                      Get in touch
                    </Link>
                    <span className="guarantee">
                      <i className="bi bi-shield-check"></i> 100% Satisfaction
                      Guarantee
                    </span>
                  </div>

                  <div
                    className="service-features-list"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h4>What We Offer</h4>
                    <ul>
                      {SERVICES.map((service) => {
                        return (
                          <li key={service.id}>
                            <i className={`bi ${service.icon}`}></i>
                            <div>
                              <h5>{service.title}</h5>
                              <p>{service.description}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
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
