"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setMobileOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    if (mobileOpen) body.classList.add("mobile-nav-active");
    else body.classList.remove("mobile-nav-active");
  }, [mobileOpen]);

  return (
    <header
      id="header"
      className="header d-flex align-items-center fixed-top"
      role="banner"
    >
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link
          href="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          <h1 className="sitename">PMDC</h1>
        </Link>

        <nav
          id="navmenu"
          className="navmenu"
          role="navigation"
          aria-label="Primary"
        >
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="dropdown">
              <Link href="/#services">
                <span>Services</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
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
          <button
            type="button"
            className={`mobile-nav-toggle d-xl-none bi ${
              mobileOpen ? "bi-x" : "bi-list"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="navmenu"
            onClick={() => setMobileOpen((v) => !v)}
          />
        </nav>

        <a className="btn-getstarted" href="/#contact-form">
          Book Free Discovery Call
        </a>
      </div>
    </header>
  );
};

export default NavBar;
