"use client";

import { useState } from 'react';

const FaqItem = ({ question, answer, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`faq-item ${open ? 'faq-active' : ''}`}>
      <h3 onClick={() => setOpen(v => !v)}>{question}</h3>
      <div className="faq-content" style={{ display: open ? 'block' : 'none' }}>
        <p>{answer}</p>
      </div>
      <i className="faq-toggle bi bi-chevron-right" onClick={() => setOpen(v => !v)}></i>
    </div>
  );
};

const FaqAccordion = () => {
  const items = [
    {
      q: 'What services does PMDC provide?',
      a: 'We offer end-to-end digital solutions including UI/UX design, website and web app development, mobile app development, MVP/POC creation, and custom software tailored to your business needs.'
    },
    {
      q: 'Do you work with startups and small businesses?',
      a: 'Absolutely! We specialize in helping startups validate their ideas with MVPs and scalable solutions. Our flexible approach fits the budget and goals of early-stage businesses.'
    },
    {
      q: 'How do you ensure quality and timely delivery?',
      a: 'Our process includes structured planning, agile development, and milestone-based delivery. Regular updates and transparent communication ensure your project stays on track.'
    },
    {
      q: 'Can you handle ongoing support and maintenance?',
      a: 'Yes, we provide post-launch support, regular updates, bug fixes, and feature enhancements to keep your website or app secure and future-ready.'
    },
    {
      q: 'What technologies do you use?',
      a: 'We use modern frameworks and tools including React, Next.js, Angular, Node.js, NestJS, Flutter, and cloud solutions (AWS/GCP) to build scalable, secure, and high-performing applications.'
    },
    {
      q: 'How can I get started with PMDC?',
      a: 'Simply reach out via our contact form or connect with us on Upwork or LinkedIn. We’ll schedule a consultation to discuss your goals and propose a tailored plan.'
    }
  ];

  return (
    <div className="faq-container">
      {items.map((item, idx) => (
        <FaqItem key={idx} question={item.q} answer={item.a} defaultOpen={idx === 0} />
      ))}
    </div>
  );
};

export default FaqAccordion;


