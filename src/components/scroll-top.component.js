"use client";

import { useEffect, useState } from 'react';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="#" className={`scroll-top d-flex align-items-center justify-content-center ${visible ? 'active' : ''}`} onClick={onClick}>
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollTop;


