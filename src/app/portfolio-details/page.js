"use client";

import Script from 'next/script';
import ThemeInitializer from '@/components/theme-initializer.component';

export default function PortfolioDetails() {
    return (
        <body className="portfolio-details-page">

            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                        {/* <img src="assets/img/logo.webp" alt="" /> */}
                        <h1 className="sitename">Strategy</h1>
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    <a className="btn-getstarted" href="#about">Get Started</a>

                </div>
            </header>

            <main className="main">

                <div className="page-title dark-background" data-aos="fade">
                    <div className="container position-relative">
                        <h1>Portfolio Details</h1>
                        <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Portfolio Details</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <section id="portfolio-details" className="portfolio-details section">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4">
                            <div className="col-lg-6" data-aos="fade-right">
                                <div className="portfolio-details-media">
                                    <div className="main-image">
                                        <div className="portfolio-details-slider swiper init-swiper" data-aos="zoom-in">
                                            {/* <script type="application/json" className="swiper-config">
                                                            {
                                "loop": true,
                                "speed": 1000,
                                "autoplay": {
                                    "delay": 6000
                                },
                                "effect": "creative",
                                "creativeEffect": {
                                    "prev": {
                                    "shadow": true,
                                    "translate": [0, 0, -400]
                                    },
                                    "next": {
                                    "translate": ["100%", 0, 0]
                                    }
                                },
                                "slidesPerView": 1,
                                "navigation": {
                                    "nextEl": ".swiper-button-next",
                                    "prevEl": ".swiper-button-prev"
                                }
                                }
                                            </script> */}
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <img src="assets/img/portfolio/portfolio-5.webp" alt="Portfolio Image" className="img-fluid" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <img src="assets/img/portfolio/portfolio-7.webp" alt="Portfolio Image" className="img-fluid" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <img src="assets/img/portfolio/portfolio-8.webp" alt="Portfolio Image" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="swiper-button-prev"></div>
                                            <div className="swiper-button-next"></div>
                                        </div>
                                    </div>

                                    <div className="thumbnail-grid" data-aos="fade-up" data-aos-delay="200">
                                        <div className="row g-2 mt-3">
                                            <div className="col-3">
                                                <img src="assets/img/portfolio/portfolio-4.webp" alt="Gallery Image" className="img-fluid glightbox" />
                                            </div>
                                            <div className="col-3">
                                                <img src="assets/img/portfolio/portfolio-6.webp" alt="Gallery Image" className="img-fluid glightbox" />
                                            </div>
                                            <div className="col-3">
                                                <img src="assets/img/portfolio/portfolio-11.webp" alt="Gallery Image" className="img-fluid glightbox" />
                                            </div>
                                            <div className="col-3">
                                                <img src="assets/img/portfolio/portfolio-12.webp" alt="Gallery Image" className="img-fluid glightbox" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tech-stack-badges" data-aos="fade-up" data-aos-delay="300">
                                        <span>Angular</span>
                                        <span>Express.js</span>
                                        <span>PostgreSQL</span>
                                        <span>GraphQL</span>
                                        <span>Firebase</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-left">
                                <div className="portfolio-details-content">
                                    <div className="project-meta">
                                        <div className="badge-wrapper">
                                            <span className="project-badge">UX/UI Design</span>
                                        </div>
                                        <div className="date-client">
                                            <div className="meta-item">
                                                <i className="bi bi-calendar-check"></i>
                                                <span>September 2024</span>
                                            </div>
                                            <div className="meta-item">
                                                <i className="bi bi-buildings"></i>
                                                <span>DigitalCraft Solutions</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="project-title">Innovative Financial Dashboard App</h2>

                                    <div className="project-website">
                                        <i className="bi bi-link-45deg"></i>
                                        <a href="#" target="_blank">projectwebsite.example.com</a>
                                    </div>

                                    <div className="project-overview">
                                        <p className="lead">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                                        </p>

                                        <div className="accordion project-accordion" id="portfolio-details-projectAccordion">
                                            <div className="accordion-item" data-aos="fade-up">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#portfolio-details-collapse-1" aria-expanded="true" aria-controls="collapseOne">
                                                        <i className="bi bi-clipboard-data me-2"></i> Project Overview
                                                    </button>
                                                </h2>
                                                <div id="portfolio-details-collapse-1" className="accordion-collapse collapse show" data-bs-parent="#portfolio-details-projectAccordion">
                                                    <div className="accordion-body">
                                                        <p>Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item" data-aos="fade-up" data-aos-delay="100">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#portfolio-details-collapse-2" aria-expanded="false" aria-controls="collapseTwo">
                                                        <i className="bi bi-exclamation-diamond me-2"></i> The Challenge
                                                    </button>
                                                </h2>
                                                <div id="portfolio-details-collapse-2" className="accordion-collapse collapse" data-bs-parent="#portfolio-details-projectAccordion">
                                                    <div className="accordion-body">
                                                        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#portfolio-details-collapse-3" aria-expanded="false" aria-controls="collapseThree">
                                                        <i className="bi bi-award me-2"></i> The Solution
                                                    </button>
                                                </h2>
                                                <div id="portfolio-details-collapse-3" className="accordion-collapse collapse" data-bs-parent="#portfolio-details-projectAccordion">
                                                    <div className="accordion-body">
                                                        <p>Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="project-features" data-aos="fade-up" data-aos-delay="300">
                                        <h3><i className="bi bi-stars"></i> Key Features</h3>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <ul className="feature-list">
                                                    <li><i className="bi bi-check2-circle"></i> Real-time Data Visualization</li>
                                                    <li><i className="bi bi-check2-circle"></i> User Role Management</li>
                                                    <li><i className="bi bi-check2-circle"></i> Secure Authentication</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="feature-list">
                                                    <li><i className="bi bi-check2-circle"></i> Customizable Dashboards</li>
                                                    <li><i className="bi bi-check2-circle"></i> Data Export Options</li>
                                                    <li><i className="bi bi-check2-circle"></i> Multi-device Support</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cta-buttons" data-aos="fade-up" data-aos-delay="400">
                                        <a href="#" className="btn-view-project">View Live Project</a>
                                        <a href="#" className="btn-next-project">Next Project <i className="bi bi-arrow-right"></i></a>
                                    </div>
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
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span className="sitename">Strategy</span>
                            </a>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                            <div className="social-links d-flex mt-4">
                                <a href=""><i className="bi bi-twitter-x"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Product Management</a></li>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                            <p>United States</p>
                            <p className="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                            <p><strong>Email:</strong> <span>info@example.com</span></p>
                        </div>

                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Strategy</strong> <span>All Rights Reserved</span></p>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>

            </footer>

            {/* Scroll Top */}
            <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

            {/* Preloader */}
            <div id="preloader"></div>

            {/* Vendor JS Files */}
            <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
            <Script src="/assets/vendor/aos/aos.js" />
            <Script src="/assets/vendor/glightbox/js/glightbox.min.js" />
            <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" />
            <Script src="/assets/vendor/swiper/swiper-bundle.min.js" />
            <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" />
            <Script src="/assets/vendor/php-email-form/validate.js" />

            <ThemeInitializer />
        </body>
    )
}