"use client";

import Link from "next/link";
import { useState } from "react";

const PROCESS = [
  {
    id: 1,
    title: "Ideation & Discovery",
    description: "Understand your vision, target audience, and market needs.",
  },
  {
    id: 2,
    title: "Feature Prioritization",
    description: "Identify core features that deliver maximum value.",
  },
  {
    id: 3,
    title: "Wireframing & Prototyping",
    description: "Design interactive prototypes to validate ideas early.",
  },
  {
    id: 4,
    title: "MVP Development",
    description:
      "Build functional, scalable, and efficient MVPs with rapid iterations.",
  },
  {
    id: 5,
    title: "Testing & Feedback",
    description:
      "Conduct QA and gather user insights for continuous improvement.",
  },
  {
    id: 6,
    title: "Launch & Iteration",
    description:
      "Deploy MVP quickly, collect data, and refine based on real user feedback.",
  },
];

const BENEFITS = [
  {
    id: 1,
    icon: "bi bi-speedometer2",
    title: "Faster Time-to-Market",
    description: "Validate ideas quickly with a functional MVP.",
  },
  {
    id: 2,
    icon: "bi bi-cash-stack",
    title: "Cost-Effective Development",
    description: "Focus on core features to reduce unnecessary spending.",
  },
  {
    id: 3,
    icon: "bi bi-people",
    title: "User-Centric Design",
    description: "Build solutions based on real user feedback.",
  },
  {
    id: 4,
    icon: "bi bi-graph-up",
    title: "Investor-Ready Product",
    description: "Demonstrate tangible value to attract funding.",
  },
  {
    id: 5,
    icon: "bi bi-arrow-repeat",
    title: "Scalable Architecture",
    description: "Designed to grow with your product roadmap.",
  },
  {
    id: 6,
    icon: "bi bi-bar-chart-line",
    title: "Data-Driven Decisions",
    description: "Insights from MVP usage guide future iterations.",
  },
];

const SERVICES = [
  {
    id: 1,
    icon: "bi bi-clipboard-data",
    title: "MVP Strategy & Planning",
    description: "Define scope, features, and roadmap for your MVP.",
  },
  {
    id: 2,
    icon: "bi bi-pencil-square",
    title: "Rapid Prototyping",
    description: "Interactive prototypes to visualize and validate your idea.",
  },
  {
    id: 3,
    icon: "bi bi-code-slash",
    title: "Core Feature Development",
    description: "Build essential functionality with speed and quality.",
  },
  {
    id: 4,
    icon: "bi bi-phone-landscape",
    title: "Cross-Platform Development",
    description: "iOS, Android, and web-ready MVPs.",
  },
  {
    id: 5,
    icon: "bi bi-check2-circle",
    title: "Testing & QA",
    description: "Ensure reliability, usability, and performance.",
  },
  {
    id: 6,
    icon: "bi bi-life-preserver",
    title: "Post-Launch Support",
    description: "Gather feedback, optimize features, and plan next phases.",
  },
];

export default function MvpSolutionsPage() {
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
            <h1>MVP Development</h1>
            <p>
              Bring your startup ideas to life quickly with a Minimum Viable
              Product. We help you validate concepts, <br /> attract investors,
              and launch faster with scalable, functional MVPs.
            </p>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                  <div className="service-header" data-aos="fade-up">
                    <h1>From Idea to Impact, Faster</h1>
                    <p className="lead">
                      Our MVP development service turns your vision into a
                      working product quickly and efficiently. We focus on the
                      core features your users need most, helping you test,
                      learn, and grow with minimal risk while maximizing early
                      market traction.
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
