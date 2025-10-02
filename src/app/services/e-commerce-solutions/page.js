"use client";

import Link from "next/link";
import { useState } from "react";

const PROCESS = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description:
      "Understand business goals, target customers, and product offerings.",
  },
  {
    id: 2,
    title: "Wireframing & UI/UX Design",
    description: "Plan intuitive layouts and engaging shopping experiences.",
  },
  {
    id: 3,
    title: "Platform Development",
    description:
      "Build scalable, secure, and responsive e-commerce websites or apps.",
  },
  {
    id: 4,
    title: "Payment & Integration",
    description:
      "Integrate secure payment gateways, inventory, and third-party services.",
  },
  {
    id: 5,
    title: "Testing & Quality Assurance",
    description: "Ensure flawless functionality, security, and performance.",
  },
  {
    id: 6,
    title: "Launch & Optimization",
    description:
      "Deploy the store and continuously optimize for conversions and sales.",
  },
];

const BENEFITS = [
  {
    id: 1,
    icon: "bi bi-cart-check",
    title: "Boost Online Sales",
    description: "Streamlined shopping journeys that encourage purchases.",
  },
  {
    id: 2,
    icon: "bi bi-shield-lock",
    title: "Secure & Reliable",
    description: "PCI-compliant payment systems and secure data handling.",
  },
  {
    id: 3,
    icon: "bi bi-phone-landscape",
    title: "Responsive & Mobile-Friendly",
    description: "Seamless shopping across devices.",
  },
  {
    id: 4,
    icon: "bi bi-arrow-repeat",
    title: "Customizable & Scalable",
    description: "Tailored solutions to match your business needs.",
  },
  {
    id: 5,
    icon: "bi bi-people",
    title: "Enhanced Customer Experience",
    description: "Smooth navigation and fast checkout reduce cart abandonment.",
  },
  {
    id: 6,
    icon: "bi bi-bar-chart-line",
    title: "Analytics & Insights",
    description:
      "Track performance, sales, and customer behavior to improve strategies.",
  },
];

const SERVICES = [
  {
    id: 1,
    icon: "bi bi-code-slash",
    title: "Custom E-Commerce Development",
    description: "Tailored stores for any business size.",
  },
  {
    id: 2,
    icon: "bi bi-cart-check",
    title: "Shopping Cart & Checkout Integration",
    description: "Secure and user-friendly transaction flows.",
  },
  {
    id: 3,
    icon: "bi bi-credit-card",
    title: "Payment Gateway Integration",
    description: "Support for multiple payment methods.",
  },
  {
    id: 4,
    icon: "bi bi-box-seam",
    title: "Inventory & Order Management",
    description: "Automated tools to manage products and orders efficiently.",
  },
  {
    id: 5,
    icon: "bi bi-phone-landscape",
    title: "Mobile Commerce Solutions",
    description: "Optimized shopping experience for mobile users.",
  },
  {
    id: 6,
    icon: "bi bi-gear",
    title: "Maintenance & Support",
    description: "Continuous updates, security checks, and enhancements.",
  },
];

export default function ECommerceSolutionsPage() {
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
            <h1>E-Commerce Solutions</h1>
            <p>
              Launch powerful, user-friendly online stores that drive sales and
              enhance customer experience. From product catalogues to secure
              checkout, <br /> we create e-commerce platforms that convert
              visitors into loyal customers.
            </p>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8 order-lg-1 order-2">
                <div className="service-main-content">
                  <div className="service-header" data-aos="fade-up">
                    <h1>Online Stores That Sell and Delight</h1>
                    <p className="lead">
                      Our e-commerce solutions go beyond transactions. We craft
                      seamless shopping experiences that engage your audience,
                      build trust, and boost conversions. Every feature, from
                      browsing to checkout, is designed to maximize sales and
                      customer satisfaction.
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
