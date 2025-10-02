"use client";

import Link from "next/link";
import { useState } from "react";

const PROCESS = [
  {
    id: 1,
    title: "Discovery & Research",
    description:
      "Stakeholder interviews, user research, and journey mapping to understand the audience and goals.",
  },
  {
    id: 2,
    title: "Wireframing & Prototyping",
    description:
      "Create low and high-fidelity prototypes to validate structure, functionality, and flows.",
  },
  {
    id: 3,
    title: "Visual Design & Branding",
    description:
      "Develop responsive designs, cohesive brand elements, and visually engaging layouts.",
  },
  {
    id: 4,
    title: "Usability Testing & Refinement",
    description:
      "Test with real users to identify pain points, iterate, and improve the experience.",
  },
  {
    id: 5,
    title: "Design Systems & Handoff",
    description:
      "Build scalable component libraries and handoff detailed specifications to development teams.",
  },
];

const BENEFITS = [
  {
    id: 1,
    icon: "bi-people",
    title: "Enhanced User Engagement",
    description: "Designs that keep users interacting and reduce drop-offs.",
  },
  {
    id: 2,
    icon: "bi-graph-up",
    title: "Higher Conversion Rates",
    description: "UX optimized to guide users toward desired actions.",
  },
  {
    id: 3,
    icon: "bi-layout-text-sidebar-reverse",
    title: "Scalable Design Systems",
    description: "Consistency across products and faster development cycles.",
  },
  {
    id: 4,
    icon: "bi-universal-access",
    title: "Improved Accessibility",
    description:
      "Inclusive design for all users, boosting reach and compliance.",
  },
  {
    id: 5,
    icon: "bi-bar-chart-line",
    title: "Data-Driven Decisions",
    description:
      "Insights from testing and analytics shape every design choice.",
  },
  {
    id: 6,
    icon: "bi-award",
    title: "Brand Consistency & Impact",
    description: "Visuals that tell your brand story and build trust.",
  },
];

const SERVICES = [
  {
    id: 1,
    icon: "bi-people",
    title: "User Research & Personas",
    description:
      "Deep understanding of your target audience for tailored experiences.",
  },
  {
    id: 2,
    icon: "bi-pencil-square",
    title: "Wireframing & Prototyping",
    description:
      "Interactive low-fidelity and high-fidelity prototypes for early validation.",
  },
  {
    id: 3,
    icon: "bi-phone-landscape",
    title: "Responsive Web & Mobile Design",
    description:
      "Designs that adapt seamlessly across all devices and screen sizes.",
  },
  {
    id: 4,
    icon: "bi-palette",
    title: "Visual Design & Branding",
    description:
      "Captivating UI with consistent branding and visual storytelling.",
  },
  {
    id: 5,
    icon: "bi-layout-text-sidebar-reverse",
    title: "Design Systems & Components",
    description:
      "Scalable design systems for consistency, speed, and maintainability.",
  },
];

export default function UiUxPage() {
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
            <h1>UI/UX Design</h1>
            <p>
              Transform ideas into intuitive, visually stunning experiences. Our
              UI/UX designs delight users, <br/> boost engagement, and drive
              conversions across web and mobile platforms.
            </p>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                  <div className="service-header" data-aos="fade-up">
                    <h1>User Experiences That Truly Engage</h1>
                    <p className="lead">
                      We craft interfaces that are not only beautiful but
                      intuitive, accessible, and conversion‑focused. From
                      initial discovery to scalable design systems, our UX team
                      ensures your users stay engaged and your business goals
                      are met.
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
