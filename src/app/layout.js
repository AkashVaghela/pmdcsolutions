import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PMDC Solutions - Your Partner in Digital Excellence",
  description: "PMDC Solutions offers expert web development, digital marketing, and IT consulting services to help your business thrive in the digital landscape.",
  keywords: "web development, digital marketing, IT consulting, SEO, software solutions, PMDC Solutions",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://www.pmdc.solutions/" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        {/* Favicons */}
        <link href="favicon.ico" rel="icon" />
        <link href="favicon.ico" rel="apple-touch-icon" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        {/* Vendor CSS Files */}
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* Template Main CSS File */}
        <link href="/assets/css/main.css" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main" className="visually-hidden-focusable">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PMDC Solutions",
              "url": "https://www.pmdc.solutions/",
              "logo": "https://www.pmdc.solutions/assets/img/logo.webp",
              "sameAs": [
                "https://www.linkedin.com/company/pmdc",
                "https://twitter.com/pmdc",
                "https://www.facebook.com/pmdc"
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "info@example.com",
                "areaServed": "Global",
                "availableLanguage": ["en"]
              }]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PMDC Solutions",
              "url": "https://www.pmdc.solutions/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.pmdc.solutions/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
