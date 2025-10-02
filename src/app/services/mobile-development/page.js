"use client";

import Link from "next/link";
import { useState } from "react";

const PROCESS = [
  {
    id: 1,
    title: "Discovery & Research",
    description:
      "Understand target audience, business objectives, and app requirements.",
  },
  {
    id: 2,
    title: "Wireframing & Prototyping",
    description:
      "Visualize app flows with interactive prototypes to validate ideas.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Create intuitive and visually engaging interfaces tailored for mobile users.",
  },
  {
    id: 4,
    title: "Development & Coding",
    description:
      "Build scalable, native, or cross-platform apps with optimized performance.",
  },
  {
    id: 5,
    title: "Testing & QA",
    description:
      "Rigorous testing for functionality, usability, security, and device compatibility.",
  },
  {
    id: 6,
    title: "Launch & Maintenance",
    description:
      "Deploy apps smoothly and provide ongoing updates, enhancements, and support.",
  },
];

const BENEFITS = [
  {
    id: 1,
    icon: "bi bi-people",
    title: "Enhanced User Engagement",
    description: "Intuitive design keeps users coming back.",
  },
  {
    id: 2,
    icon: "bi bi-phone",
    title: "Cross-Platform Flexibility",
    description: "Reach users on iOS, Android, or both.",
  },
  {
    id: 3,
    icon: "bi bi-speedometer2",
    title: "High Performance & Speed",
    description: "Fast-loading apps for smooth user experience.",
  },
  {
    id: 4,
    icon: "bi bi-arrow-repeat",
    title: "Scalable & Future-Proof",
    description: "Apps that grow with your business needs.",
  },
  {
    id: 5,
    icon: "bi bi-bar-chart-line",
    title: "Data-Driven Insights",
    description: "Analytics integration to measure and improve engagement.",
  },
  {
    id: 6,
    icon: "bi bi-life-preserver",
    title: "End-to-End Support",
    description: "From ideation to post-launch maintenance.",
  },
];

const SERVICES = [
  {
    id: 1,
    icon: "bi bi-phone",
    title: "Native App Development",
    description: "Optimized apps for iOS and Android platforms.",
  },
  {
    id: 2,
    icon: "bi bi-phone-landscape",
    title: "Cross-Platform Development",
    description: "Build one app that works across multiple devices.",
  },
  {
    id: 3,
    icon: "bi bi-palette",
    title: "App UI/UX Design",
    description: "Engaging interfaces designed for mobile users.",
  },
  {
    id: 4,
    icon: "bi bi-plug",
    title: "API Integration",
    description:
      "Connect your app with third-party services for enhanced functionality.",
  },
  {
    id: 5,
    icon: "bi bi-gear",
    title: "App Maintenance & Support",
    description: "Regular updates, bug fixes, and performance improvements.",
  },
  {
    id: 6,
    icon: "bi bi-lightning",
    title: "App Performance Optimization",
    description: "Ensure smooth, fast, and reliable app operation.",
  },
];

export default function MobileDevelopmentPage() {
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
            <h1>Mobile Development</h1>
            <p>
              Create seamless, high-performing mobile applications that engage
              users and drive business growth. <br /> From iOS to Android, we
              develop apps that delight users and deliver measurable results.
            </p>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                  <div className="service-header" data-aos="fade-up">
                    <h1>Apps That Connect and Convert</h1>
                    <p className="lead">
                      We build mobile experiences that are fast, intuitive, and
                      designed to captivate. Every tap, swipe, and interaction
                      is crafted to delight your users while helping your
                      business achieve its goals — from increasing engagement to
                      driving conversions.
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
