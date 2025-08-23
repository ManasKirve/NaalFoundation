import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   const location = useLocation();

  useEffect(() => {
    // Collapse navbar on route change
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      new window.bootstrap.Collapse(navbarCollapse).hide();
    }
  }, [location]);

  return (
    <div>
{/* Topbar with Social Links */}
<div className="topbar top-navbar  text-white py-2 px-3">
  <div className="container-fluid d-flex justify-content-end align-items-center">
    {/* Left side - Social links */}
              <div className="social-links ">
              <a target="_blank"  href=" https://www.facebook.com/share/1CSambJjA4/ " className="social-link"><i className="fab fa-facebook-f"></i></a>
               <a target="_blank"  href=" https://www.youtube.com/@naalfoundationujani " className="social-link"><i className="fab fa-youtube"></i></a>

              <a target="_blank"  href="https://www.instagram.com/naalfoundationujani?utm_source=qr&igsh=amVuOXEyb3p5cWVm" className="social-link"><i className="fab fa-instagram"></i></a>
              
            </div>


    {/* Right side - optional (phone/email etc if needed later) */}
    {/* <div className="contact-info small">
      <i className="fas fa-phone-alt me-2"></i> +91 1234567890
    </div> */}
  </div>
</div>

{/* Main Navbar */}
<nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container-fluid px-3">
    <Link className="navbar-brand" to="/">
      <img className="navbar-brand-logo" src="assets/naalfoundatrionlogo.png" alt="Naal Foundation Logo" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      onClick={toggleMenu}
      aria-expanded={isOpen}
    >
       <i className="fas fa-bars text-white "></i>
    </button>
    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" end>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link donate-btn" to="/donate">Donate Now</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
   
  );
};

export default Navbar;
