"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setMobileOpen(false);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (!body) return;
    if (mobileOpen) body.classList.add('mobile-nav-active');
    else body.classList.remove('mobile-nav-active');
  }, [mobileOpen]);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top" role="banner">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">PMDC</h1>
        </Link>

        <nav id="navmenu" className="navmenu" role="navigation" aria-label="Primary">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#portfolio">Portfolio</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
          <button
            type="button"
            className={`mobile-nav-toggle d-xl-none bi ${mobileOpen ? 'bi-x' : 'bi-list'}`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="navmenu"
            onClick={() => setMobileOpen(v => !v)}
          />
        </nav>

        <a className="btn-getstarted" href="#about">Book Free Discovery Call</a>
      </div>
    </header>
  );
};

export default NavBar;


