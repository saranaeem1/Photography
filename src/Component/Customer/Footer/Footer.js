import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>PixelVision Studio</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#" onClick={() => scrollToSection("review")}>
                Review
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection("contact")}>
                Contact us
              </a>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PixelVision Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
