"use client";

import Link from "next/link";
import { useState } from "react";

const PROCESS = [
  {
    id: 1,
    title: "Discovery & Analysis",
    description: "Understand your workflows, pain points, and business goals.",
  },
  {
    id: 2,
    title: "Solution Architecture",
    description: "Design scalable, modular, and maintainable systems.",
  },
  {
    id: 3,
    title: "Development & Integration",
    description: "Build custom software, connect APIs, and automate processes.",
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description: "Ensure reliability, security, and seamless functionality.",
  },
  {
    id: 5,
    title: "Deployment & Support",
    description:
      "Launch with confidence and provide ongoing maintenance and enhancements.",
  },
  {
    id: 6,
    title: "Optimization & Scaling",
    description: "Continuously improve and scale as your business grows.",
  },
];

const BENEFITS = [
  {
    id: 1,
    icon: "bi bi-tools",
    title: "Tailored to Your Business",
    description: "Solutions match your exact needs, no one-size-fits-all.",
  },
  {
    id: 2,
    icon: "bi bi-speedometer2",
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and reduce operational overhead.",
  },
  {
    id: 3,
    icon: "bi bi-plug",
    title: "Seamless Integration",
    description: "Connect multiple platforms and tools for a unified system.",
  },
  {
    id: 4,
    icon: "bi bi-arrow-repeat",
    title: "Scalable & Future-Proof",
    description: "Built to grow with your evolving business.",
  },
  {
    id: 5,
    icon: "bi bi-bar-chart-line",
    title: "Actionable Insights",
    description: "Track metrics and make informed decisions.",
  },
  {
    id: 6,
    icon: "bi bi-award",
    title: "Competitive Advantage",
    description: "Unique solutions that set you apart from competitors.",
  },
];

const SERVICES = [
  {
    id: 1,
    icon: "bi bi-phone",
    title: "Custom Web & Mobile Applications",
    description: "Build tools specific to your workflows.",
  },
  {
    id: 2,
    icon: "bi bi-plug",
    title: "API Development & Integration",
    description: "Connect third-party platforms for efficiency.",
  },
  {
    id: 3,
    icon: "bi bi-lightning",
    title: "Automation Solutions",
    description: "Streamline repetitive tasks to save time and costs.",
  },
  {
    id: 4,
    icon: "bi bi-building",
    title: "Enterprise Systems",
    description: "Large-scale solutions for complex business operations.",
  },
  {
    id: 5,
    icon: "bi bi-bar-chart-line",
    title: "Dashboards & Analytics",
    description: "Monitor KPIs and make data-driven decisions.",
  },
  {
    id: 6,
    icon: "bi bi-gear",
    title: "Maintenance & Support",
    description: "Continuous updates, improvements, and troubleshooting.",
  },
];

export default function CustomSolutionsPage() {
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
            <h1>Custom Software Solutions</h1>
            <p>
              ailored software solutions that solve your unique business
              challenges. From automation and integrations to enterprise
              systems, <br /> we build tools that streamline operations and
              accelerate growth.
            </p>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                  <div className="service-header" data-aos="fade-up">
                    <h1>Solutions Built Around Your Needs</h1>
                    <p className="lead">
                      Our custom solutions are designed to fit your exact
                      requirements — no compromises. We listen, analyze, and
                      craft software that automates processes, integrates
                      systems, and provides actionable insights, helping your
                      business operate smarter, faster, and more efficiently.
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
