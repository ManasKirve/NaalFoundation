import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="footer-title">NAAL Foundation</h5>
            <p className="footer-text">
              Making a difference in people's lives through education, healthcare, and community support.
            </p>
            <div className="social-links ">
              <a target="_blank" href=" https://www.facebook.com/share/1CSambJjA4/ " ><img src='/assets/facebook.png' className='social-images' /></a>

              <a target="_blank" href=" https://www.youtube.com/@naalfoundationujani " ><img src='/assets/youtube.png' className='social-images' /></a>

              <a target="_blank" href="https://www.instagram.com/naalfoundationujani?utm_source=qr&igsh=amVuOXEyb3p5cWVm" ><img src='/assets/instagram.png' className='social-images' /></a>


            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="footer-title">Contact Info</h5>
            <ul className="footer-contact">
              <li><i className="fas fa-map-marker-alt"></i>At Post Ujani , Ausa, Latur</li>

              <li><i className="fas fa-envelope"></i>naal.131020@gmail.com </li>
            </ul>
          </div>


          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="footer-title">Phone Numbers </h5>
            <ul className="footer-contact">


              <li><i className="fas fa-phone"></i> +91 98814 49538</li>

              <li><i className="fas fa-phone"></i> +91 9881897421</li>

              <li><i className="fas fa-phone"></i> +91 89757369698</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0">
                © {new Date().getFullYear()} NAAL Foundation. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;