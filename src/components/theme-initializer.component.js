"use client";

import { useEffect } from 'react';

const ThemeInitializer = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import browser-only libs to avoid SSR/build-time eval issues
      let AOS;
      let Isotope;
      let GLightbox;
      let Swiper;
      let imagesLoaded;

      const loadBrowserLibs = async () => {
        const [{ default: AOSMod }, { default: GLightboxMod }, { default: SwiperMod }] = await Promise.all([
          import('aos'),
          import('glightbox'),
          import('swiper')
        ]);
        AOS = AOSMod;
        GLightbox = GLightboxMod;
        Swiper = SwiperMod;

        initialize();
      };

      const initialize = () => {
      /**
       * Apply .scrolled class to the body as the page is scrolled down
       */
      const toggleScrolled = () => {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader || (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top'))) return;
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
      }

      document.addEventListener('scroll', toggleScrolled);
      window.addEventListener('load', toggleScrolled);

      /**
       * Mobile nav toggle
       */
      const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
      const mobileNavToogle = () => {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
      }
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
      }

      /**
       * Hide mobile nav on same-page/hash links
       */
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToogle();
          }
        });
      });

      /**
       * Toggle mobile nav dropdowns
       */
      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function(e) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        });
      });

      // Preloader is handled by React component now; no DOM removal here

      /**
       * Scroll top button
       */
      let scrollTop = document.querySelector('.scroll-top');
      const toggleScrollTop = () => {
        if (scrollTop) {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
      }
      if(scrollTop) {
        scrollTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }

      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);

      /**
       * Animation on scroll function and init
       */
      const aosInit = () => {
        const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        AOS?.init({
          duration: prefersReduced ? 0 : 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false,
          disable: prefersReduced
        });
      }
      // Initialize AOS immediately in case page has already loaded
      aosInit();
      window.addEventListener('load', aosInit);

      /**
       * Init swiper sliders
       */
      const initSwiper = () => {
        document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
          let config = JSON.parse(
            swiperElement.querySelector(".swiper-config").innerHTML.trim()
          );
          if (Swiper) {
            new Swiper(swiperElement, config);
          }
        });
      }
      window.addEventListener("load", initSwiper);

      /**
       * Initiate glightbox
       */
      if (GLightbox) {
        GLightbox({
          selector: '.glightbox'
        });
      }

      // Isotope removed in favor of React filtering in PortfolioGrid

      /**
       * Frequently Asked Questions Toggle
       */
      document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
        faqItem.addEventListener('click', () => {
          faqItem.parentNode.classList.toggle('faq-active');
        });
      });

      /**
       * Correct scrolling position upon page load for URLs containing hash links.
       */
      window.addEventListener('load', function(e) {
        if (window.location.hash) {
          if (document.querySelector(window.location.hash)) {
            setTimeout(() => {
              let section = document.querySelector(window.location.hash);
              let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
              window.scrollTo({
                top: section.offsetTop - parseInt(scrollMarginTop),
                behavior: 'smooth'
              });
            }, 100);
          }
        }
      });

      /**
       * Navmenu Scrollspy
       */
      let navmenulinks = document.querySelectorAll('.navmenu a');
      const navmenuScrollspy = () => {
        navmenulinks.forEach(navmenulink => {
          if (!navmenulink.hash) return;
          let section = document.querySelector(navmenulink.hash);
          if (!section) return;
          let position = window.scrollY + 200;
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
            navmenulink.classList.add('active');
          } else {
            navmenulink.classList.remove('active');
          }
        })
      }
      window.addEventListener('load', navmenuScrollspy);
      document.addEventListener('scroll', navmenuScrollspy);

      // Cleanup function
      return () => {
        document.removeEventListener('scroll', toggleScrolled);
        window.removeEventListener('load', toggleScrolled);
        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.removeEventListener('click', mobileNavToogle);
        }
        document.removeEventListener('scroll', toggleScrollTop);
        window.removeEventListener('load', toggleScrollTop);
        window.removeEventListener('load', aosInit);
        window.removeEventListener("load", initSwiper);
        window.removeEventListener('load', navmenuScrollspy);
        document.removeEventListener('scroll', navmenuScrollspy);
      };
      };

      // Start once libs are loaded
      loadBrowserLibs();
    }
  }, []);

  return null; // This component does not render anything
};

export default ThemeInitializer;

// Helper function, assuming imagesLoaded is available globally or imported
// You might need to install and import it: npm install imagesloaded
