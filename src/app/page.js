"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import NavBar from "@/components/navbar.component";
import ScrollTop from "@/components/scroll-top.component";
import Preloader from "@/components/preloader.component";
import FaqAccordion from "@/components/faq-accordian.component";
import PortfolioGrid from "@/components/portfolio-grid.component";
const ThemeInitializer = dynamic(
  () => import("@/components/theme-initializer.component"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <NavBar />

      <main id="main" className="main" role="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does a typical project take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Project timelines vary by scope. MVPs can ship in 4–8 weeks, while larger platforms may take 8–16+ weeks. We run agile sprints with weekly demos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you support SEO and accessibility?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We build SEO‑first, optimize Core Web Vitals, and follow WCAG 2.2 AA to ensure inclusive and high‑ranking experiences.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which technologies do you use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our core stack includes Next.js, React, TypeScript, Node.js, and PostgreSQL—augmented with platform‑specific tools for mobile and e‑commerce.",
                  },
                },
              ],
            }),
          }}
        />

        <section id="hero" className="hero section">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="content-col" data-aos="fade-up">
                <div className="content py-4">
                  <div className="agency-name">
                    <h5 className="text-uppercase">OUR AGENCY</h5>
                  </div>

                  <div className="main-heading">
                    <h1>
                      Transforming Ideas into <br /> Impactful{" "}
                      <span style={{ color: "var(--accent-color)" }}>
                        Digital Products
                      </span>
                    </h1>
                  </div>

                  <div className="description">
                    <p style={{ maxWidth: "42rem", margin: "0 auto" }}>
                      PMDC delivers powerful web, mobile, and eCommerce
                      solutions designed to rank on search, load instantly, and
                      convert seamlessly. We help businesses of all sizes create
                      digital experiences that attract customers, build trust,
                      and stay ahead in today’s fast-moving online market.
                    </p>
                  </div>

                  <div className="cta-button">
                    <a
                      href="/#services"
                      className="btn"
                      aria-label="Explore our services"
                    >
                      <span>EXPLORE SERVICES</span>
                      <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-5" data-aos="zoom-out">
                <div className="visual-content">
                  <div className="fluid-shape">
                    <img src="assets/img/abstract/abstract-1.webp" alt="Abstract Fluid Shape" className="fluid-img" />
                  </div>

                  <div className="stats-card">
                    <div className="stats-number">
                      <h2>50+</h2>
                    </div>
                    <div className="stats-label">
                      <p>Projects Delivered</p>
                    </div>
                    <div className="stats-arrow">
                      <Link href="/portfolio"><i className="bi bi-arrow-up-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <div>
              <span>Learn More</span>{" "}
              <span className="description-title">About Us</span>
            </div>
          </div>

          <div className="container">
            <div className="row gx-5 align-items-center">
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="about-image position-relative">
                  <img
                    src="assets/img/about/about-portrait-1.webp"
                    className="img-fluid rounded-4 shadow-sm"
                    alt="About Image"
                    loading="lazy"
                  />
                  <div className="experience-badge">
                    <span className="years">20+</span>
                    <span className="text">Years of Expertise</span>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 mt-4 mt-lg-0"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="about-content">
                  <h2>Elevating Business Performance Through Innovation</h2>
                  <p className="lead">
                    We focus on crafting bespoke strategies that navigate
                    complexity and deliver tangible results for our clients.
                  </p>
                  <p>
                    Through a blend of sophisticated analytics and creative
                    problem-solving, we empower organizations to thrive in
                    rapidly evolving markets.
                  </p>

                  <div className="row g-4 mt-3">
                    <div
                      className="col-md-6"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <h5>Dedicated Team Support</h5>
                        <p>
                          Our highly skilled professionals are committed to
                          providing personalized service and impactful solutions
                          on every engagement.
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="zoom-in"
                      data-aos-delay="450"
                    >
                      <div className="feature-item">
                        <i className="bi bi-lightbulb-fill"></i>
                        <h5>Forward-Thinking Approach</h5>
                        <p>
                          We embrace innovative methodologies to develop unique
                          strategies that drive lasting success.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/#services" className="btn btn-primary mt-4">
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="testimonial-section mt-5 pt-5" data-aos="fade-up" data-aos-delay="100">
              <div className="row">
                <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
                  <div className="testimonial-intro">
                    <h3>Our Clients Speak Highly</h3>
                    <p>Hear directly from those who have experienced the impact of our partnership and achieved their
                      strategic goals.</p>
                    <div className="swiper-nav-buttons mt-4">
                      <button className="slider-prev"><i className="bi bi-arrow-left"></i></button>
                      <button className="slider-next"><i className="bi bi-arrow-right"></i></button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8" data-aos="fade-left" data-aos-delay="300">
                  <div className="testimonial-slider swiper init-swiper">
                    <script type="application/json" className="swiper-config">
                      {
                        "loop": true,
                        "speed": 800,
                        "autoplay": {
                          "delay": 5000
                        },
                        "slidesPerView": 1,
                        "spaceBetween": 30,
                        "navigation": {
                          "nextEl": ".slider-next",
                          "prevEl": ".slider-prev"
                        },
                        "breakpoints": {
                          "768": {
                            "slidesPerView": 2
                          }
                        }
                      }
                    </script>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <p>"Their strategic vision and unwavering commitment to results provided exceptional value. Our
                            operational efficiency has signficantly improved."</p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <img src="assets/img/person/person-f-1.webp" className="client-img" alt="Client" loading="lazy" />
                            <div>
                              <h6 className="mb-0">Eleanor Vance</h6>
                              <span>Operations Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                          <p>"Collaborating with their team was a revelation. Their innovative strategies guided us toward
                            achieving our objectives with precision and speed."</p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <img src="assets/img/person/person-m-1.webp" className="client-img" alt="Client" loading="lazy" />
                            <div>
                              <h6 className="mb-0">David Kim</h6>
                              <span>Product Lead</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <p>"The depth of knowledge and unwavering dedication they bring to every project is exceptional.
                            They've become an essential ally in driving our expansion."</p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <img src="assets/img/person/person-f-2.webp" className="client-img" alt="Client" loading="lazy" />
                            <div>
                              <h6 className="mb-0">Isabella Diaz</h6>
                              <span>Research Analyst</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="rating mb-3">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                          <p>"Their dedication to delivering superior solutions and their meticulous attention to detail
                            have profoundly impacted our corporate growth trajectory."</p>
                          <div className="client-info d-flex align-items-center mt-4">
                            <img src="assets/img/person/person-f-3.webp" className="client-img" alt="Client" loading="lazy" />
                            <div>
                              <h6 className="mb-0">Olivia Chen</h6>
                              <span>Development Strategist</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section id="services" className="services section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Services</span>
            </div>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="service-header">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="service-intro">
                    <h2 className="service-heading">
                      <div>Building Digital Solutions </div>
                      <div>
                        <span>That Drive Growth</span>
                      </div>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="service-summary">
                    <p>
                      At PMDC, we design and develop scalable, secure, and
                      user-friendly web and mobile solutions tailored to your
                      business needs. From startups to established enterprises,
                      our services help clients build strong digital
                      foundations, accelerate growth, and stay competitive.
                    </p>
                    {/* <Link href="/services" className="service-btn">
                      View All Services
                      <i className="bi bi-arrow-right"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-palette2"></i>
                  </div>
                  <Link
                    href="/services/ui-ux-design"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                  <h3>
                    <Link href="/services/ui-ux-design">
                      UI/UX <span>Design</span>
                    </Link>
                  </h3>
                  <p>
                    Intuitive, modern, and user-focused interfaces that boost
                    engagement and create seamless digital experiences.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <Link
                    href="/services/web-development"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                  <h3>
                    <Link href="/services/web-development">
                      Web <span>Development</span>
                    </Link>
                  </h3>
                  <p>
                    Responsive, SEO-optimized websites and web apps built for
                    speed, scalability, and performance.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-phone"></i>
                  </div>
                  <Link
                    href="/services/mobile-development"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                  <h3>
                    <Link href="/services/mobile-development">
                      Mobile <span>Development</span>
                    </Link>
                  </h3>
                  <p>
                    Native and cross-platform apps for iOS and Android,
                    delivering smooth performance and usability.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-bag"></i>
                  </div>
                  <Link
                    href="/services/e-commerce-solutions"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                  <h3>
                    <Link href="/services/e-commerce-solutions">
                      E-Commerce <span>Solutions</span>
                    </Link>
                  </h3>
                  <p>
                    We deliver powerful online stores with smooth navigation,
                    secure payments, and customer-first shopping experiences.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-rocket-takeoff"></i>
                  </div>
                  <Link
                    href="/services/mvp-development"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                  <h3>
                    <Link href="/services/mvp-development">
                      MVP <span>Development</span>
                    </Link>
                  </h3>
                  <p>
                    Launch faster with lean, scalable MVPs designed to validate
                    ideas and attract early customers or investors.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className="bi bi-puzzle"></i>
                  </div>
                  <Link
                    href="/services/custom-solutions"
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                  <h3>
                    <Link href="/services/custom-solutions">
                      Custom <span>Solutions</span>
                    </Link>
                  </h3>
                  <p>
                    Tailored web and mobile solutions to automate workflows,
                    solve complex problems, and fuel business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Portfolio</span>
            </div>
          </div>

          <div
            className="container-fluid"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <PortfolioGrid />
            </div>
          </div>
        </section>

        <section id="steps" className="steps section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Steps</h2>
            <div>
              <span>How we</span>{" "}
              <span className="description-title">Work</span>
            </div>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="steps-wrapper">
              <div
                className="step-item"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-search"></i>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 01</span>
                    <h3>Discovery &amp; Consultation</h3>
                    <p>
                      We start by understanding your vision, business goals, and
                      challenges through a detailed consultation. This helps us
                      identify the best digital approach for your project.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="step-item"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-map"></i>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 02</span>
                    <h3>Planning &amp; Roadmap</h3>
                    <p>
                      Based on your requirements, we create a clear roadmap with
                      timelines, deliverables, and technology choices. Every
                      step is aligned with your business objectives.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="step-item"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 03</span>
                    <h3>Design &amp; Prototyping</h3>
                    <p>
                      Our team builds wireframes and UI/UX prototypes so you can
                      visualize the final product early. This ensures alignment
                      before development begins.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="step-item"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-lightning-charge"></i>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 04</span>
                    <h3>Agile Development</h3>
                    <p>
                      We follow agile sprints to deliver functional modules
                      quickly. You get regular updates, demos, and the
                      flexibility to refine features during the process.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="step-item"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-rocket-takeoff"></i>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 05</span>
                    <h3>Launch &amp; Quality Assurance</h3>
                    <p>
                      Before launch, we rigorously test for performance,
                      security, and usability. Once approved, we deploy your
                      solution seamlessly to production.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="step-item"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <div className="step-content">
                  <div className="step-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 06</span>
                    <h3>Ongoing Support &amp; Growth</h3>
                    <p>
                      We don’t stop at launch. Our team provides continuous
                      support, updates, and scaling strategies to help your
                      product grow with your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="call-to-action" className="call-to-action section">

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">

              <div className="content-left flex-grow-1" data-aos="fade-right" data-aos-delay="200">
                <span className="badge text-uppercase mb-2">Don't Miss!</span>
                <h2>Revolutionize Your Digital Experience Today</h2>
                <p className="my-4">Strategia accelerates your business growth through innovative solutions and cutting-edge
                  technology. Join thousands of satisfied customers who have transformed their operations.</p>

                <div className="features d-flex flex-wrap gap-3 mb-4">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Premium Support</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Cloud Integration</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Real-time Analytics</span>
                  </div>
                </div>

                <div className="cta-buttons d-flex flex-wrap gap-3">
                  <a href="#" className="btn btn-primary">Start Free Trial</a>
                  <a href="#" className="btn btn-outline">Learn More</a>
                </div>
              </div>

              <div className="content-right position-relative" data-aos="fade-left" data-aos-delay="300">
                <img src="assets/img/misc/misc-1.webp" alt="Digital Platform" className="img-fluid rounded-4" />
                <div className="floating-card">
                  <div className="card-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <div className="card-content">
                    <span className="stats-number">245%</span>
                    <span className="stats-text">Growth Rate</span>
                  </div>
                </div>
              </div>

              <div className="decoration">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
              </div>

            </div>

          </div>

        </section> */}

        {/* <section id="testimonials" className="testimonials section light-background">

          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <div><span>Check Our</span> <span className="description-title">Testimonials</span></div>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="testimonials-slider swiper init-swiper">
              <script type="application/json" className="swiper-config">
                {{
                  "slidesPerView": 1,
                  "loop": true,
                  "speed": 600,
                  "autoplay": {
                    "delay": 5000
                  },
                  "navigation": {
                    "nextEl": ".swiper-button-next",
                    "prevEl": ".swiper-button-prev"
                  }
                }}
              </script>

              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Sed ut perspiciatis unde omnis</h2>
                        <p>
                          Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                          Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        </p>
                        <p>
                          Beatae magnam dolore quia ipsum. Voluptatem totam et qui dolore dignissimos. Amet quia sapiente
                          laudantium nihil illo et assumenda sit cupiditate. Nam perspiciatis perferendis minus consequatur.
                          Enim ut eos quo.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img src="assets/img/person/person-m-7.webp" className="profile-img" alt="" />
                          <div className="profile-info">
                            <h3>Saul Goodman</h3>
                            <span>Client</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img src="assets/img/person/person-m-7.webp" className="featured-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Nemo enim ipsam voluptatem</h2>
                        <p>
                          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram
                          malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        </p>
                        <p>
                          Dolorem excepturi esse qui amet maxime quibusdam aut repellendus voluptatum. Corrupti enim a
                          repellat cumque est laborum fuga consequuntur. Dolorem nostrum deleniti quas voluptatem iure
                          dolorum rerum. Repudiandae doloribus ut repellat harum vero aut. Modi aut velit aperiam aspernatur
                          odit ut vitae.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img src="assets/img/person/person-f-8.webp" className="profile-img" alt="" />
                          <div className="profile-info">
                            <h3>Sara Wilsson</h3>
                            <span>Designer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img src="assets/img/person/person-f-8.webp" className="featured-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>
                          Labore nostrum eos impedit
                        </h2>
                        <p>
                          Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                          minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                        </p>
                        <p>
                          Itaque ut explicabo vero occaecati est quam rerum sed. Numquam tempora aut aut quaerat quia illum.
                          Nobis quia autem odit ipsam numquam. Doloribus sit sint corporis eius totam fuga. Hic nostrum
                          suscipit corrupti nam expedita adipisci aut optio.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img src="assets/img/person/person-m-9.webp" className="profile-img" alt="" />
                          <div className="profile-info">
                            <h3>Matt Brandon</h3>
                            <span>Freelancer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img src="assets/img/person/person-m-9.webp" className="featured-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Impedit dolor facilis nulla</h2>
                        <p>
                          Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                          tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        </p>
                        <p>
                          Omnis aspernatur accusantium qui delectus praesentium repellendus. Facilis sint odio aspernatur
                          voluptas commodi qui qui qui pariatur. Corrupti deleniti itaque quaerat ipsum deleniti culpa
                          tempora tempore. Et consequatur exercitationem hic aspernatur nobis est voluptatibus architecto
                          laborum.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img src="assets/img/person/person-f-10.webp" className="profile-img" alt="" />
                          <div className="profile-info">
                            <h3>Jena Karlis</h3>
                            <span>Store Owner</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img src="assets/img/person/person-f-10.webp" className="featured-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="swiper-navigation w-100 d-flex align-items-center justify-content-center">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>

            </div>

          </div>

        </section> */}

        {/* <section id="team" className="team section light-background">

          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <div><span>Check Our</span> <span className="description-title">Team</span></div>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img src="assets/img/person/person-m-7.webp" className="img-fluid" alt="" loading="lazy" />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow
                    </p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img src="assets/img/person/person-f-8.webp" className="img-fluid" alt="" loading="lazy" />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores
                      exercitationem ut</p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img src="assets/img/person/person-m-6.webp" className="img-fluid" alt="" loading="lazy" />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed
                      facilis at qui</p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img src="assets/img/person/person-f-4.webp" className="img-fluid" alt="" loading="lazy" />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam
                      consectetur</p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img src="assets/img/person/person-m-12.webp" className="img-fluid" alt="" loading="lazy" />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Brian Doe</h4>
                    <span>Marketing</span>
                    <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit
                      laborum velit</p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
                <div className="team-member d-flex">
                  <div className="member-img">
                    <img src="assets/img/person/person-f-9.webp" className="img-fluid" alt="" loading="lazy" />
                  </div>
                  <div className="member-info flex-grow-1">
                    <h4>Josepha Palas</h4>
                    <span>Operation</span>
                    <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi
                      cupiditate vel</p>
                    <div className="social">
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                      <a href=""><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section> */}

        {/* Pricing Section */}
        {/* <section id="pricing" className="pricing section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Pricing</h2>
            <div><span>Check Our</span> <span className="description-title">Pricing</span></div>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                <div className="pricing-card">
                  <div className="plan-header">
                    <div className="plan-icon">
                      <i className="bi bi-box"></i>
                    </div>
                    <h3>Starter</h3>
                    <p>For individuals just getting started</p>
                  </div>
                  <div className="plan-pricing">
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">12</span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li><i className="bi bi-check-circle-fill"></i> Nullam accumsan lorem</li>
                      <li><i className="bi bi-check-circle-fill"></i> Vestibulum auctor dapibus</li>
                      <li><i className="bi bi-check-circle-fill"></i> Nulla consequat massa</li>
                      <li className="disabled"><i className="bi bi-x-circle-fill"></i> In enim justo rhoncus ut</li>
                      <li className="disabled"><i className="bi bi-x-circle-fill"></i> Curabitur ullamcorper ultricies</li>
                    </ul>
                  </div>
                  <div className="plan-cta">
                    <a href="#" className="btn-plan">Choose Plan</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                <div className="pricing-card popular">
                  <div className="popular-tag">Most Popular</div>
                  <div className="plan-header">
                    <div className="plan-icon">
                      <i className="bi bi-briefcase"></i>
                    </div>
                    <h3>Professional</h3>
                    <p>For small teams and growing businesses</p>
                  </div>
                  <div className="plan-pricing">
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">39</span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li><i className="bi bi-check-circle-fill"></i> Donec quam felis ultricies</li>
                      <li><i className="bi bi-check-circle-fill"></i> Nam eget dui etiam rhoncus</li>
                      <li><i className="bi bi-check-circle-fill"></i> Maecenas tempus tellus</li>
                      <li><i className="bi bi-check-circle-fill"></i> Donec pede justo fringilla</li>
                      <li className="disabled"><i className="bi bi-x-circle-fill"></i> Cras dapibus vivamus</li>
                    </ul>
                  </div>
                  <div className="plan-cta">
                    <a href="#" className="btn-plan">Choose Plan</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <div className="pricing-card">
                  <div className="plan-header">
                    <div className="plan-icon">
                      <i className="bi bi-building"></i>
                    </div>
                    <h3>Enterprise</h3>
                    <p>For large organizations and corporations</p>
                  </div>
                  <div className="plan-pricing">
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">79</span>
                      <span className="period">/month</span>
                    </div>
                  </div>
                  <div className="plan-features">
                    <ul>
                      <li><i className="bi bi-check-circle-fill"></i> Etiam sit amet orci eget</li>
                      <li><i className="bi bi-check-circle-fill"></i> Pellentesque posuere vulputate</li>
                      <li><i className="bi bi-check-circle-fill"></i> Quisque rutrum aenean</li>
                      <li><i className="bi bi-check-circle-fill"></i> Fusce vulputate eleifend</li>
                      <li><i className="bi bi-check-circle-fill"></i> Phasellus viverra nulla</li>
                    </ul>
                  </div>
                  <div className="plan-cta">
                    <a href="#" className="btn-plan">Choose Plan</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section> */}

        {/* Faq Section */}
        <section className="faq-9 faq section" id="faq">
          <div className="container">
            <div className="row">
              <div className="col-lg-5" data-aos="fade-up">
                <h2 className="faq-title">
                  Have a question? Check out the FAQ
                </h2>
                <p className="faq-description">
                  We’ve compiled answers to the most common questions about our
                  web and mobile development services, so you can get clarity
                  before starting your project.
                </p>
                <div
                  className="faq-arrow d-none d-lg-block"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <svg
                    className="faq-arrow"
                    width="200"
                    height="211"
                    viewBox="0 0 200 211"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="300">
                <FaqAccordion />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <div>
              <span>Let's</span>{" "}
              <span className="description-title">Connect</span>
            </div>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            {/* Contact Info Boxes */}
            <div className="row gy-4 mb-5">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4>Our Address</h4>
                    <p>1842 Maple Avenue, Portland, Oregon 97204</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h4>Email Address</h4>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-headset"></i>
                  </div>
                  <div className="info-content">
                    <h4>Hours of Operation</h4>
                    <p>Sunday-Fri: 9 AM - 6 PM</p>
                    <p>Saturday: 9 AM - 4 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps (Full Width) */}
          <div className="map-section" data-aos="fade-up" data-aos-delay="200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form Section (Overlapping) */}
          <div id="contact-form" className="container form-container-overlap">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="col-lg-10">
                <div className="contact-form-wrapper">
                  <h2 className="text-center mb-4">Worried About Who to Trust With Your Digital Future?</h2>
                  <p className="lead text-center">We listen first, build second. No spam, no upsell &ndash; just a trusted team that treats your project like our own.</p>

                  <form className="php-email-form">
                    <div className="row g-3">
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-person"></i>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Your Name *"
                              required="true"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-envelope"></i>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Your Email *"
                              required="true"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-telephone"></i>
                            <input
                              type="tel"
                              className="form-control"
                              name="phone"
                              placeholder="Your Phone Number *"
                              required="true"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-building"></i>
                            <input
                              type="text"
                              className="form-control"
                              name="company"
                              placeholder="Company Name or Website"
                              required="false"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-chat-dots message-icon"></i>
                            <textarea
                              className="form-control"
                              name="description"
                              placeholder="Describe Your Project *"
                              style={{ height: "180px" }}
                              required="true"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-paperclip"></i>
                            <input
                              type="file"
                              className="form-control"
                              name="file"
                              placeholder="Drag IMAGE, PDF or DOCX file here (optional)"
                              required="false"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="loading">Loading</div>
                        <div className="error-message">
                          Something went wrong. Please try again.
                        </div>
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>

                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-submit"
                        >
                          Let’s Talk
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <Link href="/" className="logo d-flex align-items-center">
                <span className="sitename">PMDC Solutions</span>
              </Link>
              <p>
                PMDC Solutions is a full-stack digital agency delivering modern
                web, mobile, and custom software solutions. We help startups and
                enterprises turn ideas into scalable products with robust
                technology and user-first design.
              </p>
              <div className="social-links d-flex mt-4">
                <Link href="">
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link href="">
                  <i className="bi bi-twitter-x"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li>
                  <Link href="/#portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/#about">About Us</Link>
                </li>
                <li>
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link href="/services/ui-ux-design">UI/UX Design</Link>
                </li>
                <li>
                  <Link href="/services/web-development">Web Development</Link>
                </li>
                <li>
                  <Link href="/services/mobile-development">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/e-commerce-solutions">
                    E-Commerce Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/mvp-development">MVP Development</Link>
                </li>
                <li>
                  <Link href="/services/custom-solutions">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <p className="mt-4">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">PMDC Solutions</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>

      <ScrollTop />
      <Preloader />
      <ThemeInitializer />
    </>
  );
}
