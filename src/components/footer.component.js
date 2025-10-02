import Link from "next/link";

export default function Footer() {
  return (
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
                <Link href="/services/custom-solutions">Custom Solutions</Link>
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
  );
}
