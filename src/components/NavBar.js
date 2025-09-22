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
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">PMDC</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">Services</a></li>
            <li><a href="#services">Portfolio</a></li>
            <li><a href="#portfolio">Careers</a></li>
            <li><a href="#team">About Us</a></li>
            <li><a href="#contact">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className={`mobile-nav-toggle d-xl-none bi ${mobileOpen ? 'bi-x' : 'bi-list'}`} onClick={() => setMobileOpen(v => !v)}></i>
        </nav>

        <a className="btn-getstarted" href="#about">Book Free Discovery Call</a>
      </div>
    </header>
  );
};

export default NavBar;


