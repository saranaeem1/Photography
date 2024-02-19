import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Learning Loom</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="Page.js#courses">Courses</a>
            </li>
            <li>
              <a href="Page.js#instructors">Instructors</a>
            </li>
            <li>
              <a href="Page.js#about">About us</a>
            </li>
            <li>
              <a href="Page.js#pricing">Pricing</a>
            </li>
            <li>
              <a href="Page.js#ContactContainer">Contact us</a>
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
        <p>&copy; 2023 Learning Loom Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
