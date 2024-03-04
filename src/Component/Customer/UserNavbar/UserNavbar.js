import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserNavbar.css";
import Logout from "../../../Login/Logout";
import logo from "../../../Asset/pixelvision_logo.png";

const UserNavbar = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className={`navigation ${showNavigation ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/homepage">Home</Link>
          </li>
          <li>
            <Link to="/homepage" onClick={() => scrollToSection("genre")}>
              Genre
            </Link>
          </li>
          <li>
            <Link to="/homepage" onClick={() => scrollToSection("review")}>
              Review
            </Link>
          </li>
          <li>
            <Link to="/homepage" onClick={() => scrollToSection("contact")}>
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
      <div className="toggle_btn" onClick={toggleNavigation}>
        <i className="fas fa-bars"></i>
      </div>
      <div className={`dropdown_menu ${showNavigation ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/homepage">Home</Link>
          </li>
          <li>
            <Link to="/homepage" onClick={() => scrollToSection("genre")}>
              Genre
            </Link>
          </li>
          <li>
            <Link to="/homepage" onClick={() => scrollToSection("review")}>
              Review
            </Link>
          </li>
          <li>
            <Link to="/homepage" onClick={() => scrollToSection("contact")}>
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNavbar;
