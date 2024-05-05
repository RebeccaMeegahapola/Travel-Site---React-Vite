import React from 'react';
import '../styles/Footer.css';
import Logo from '../assets/logo.png';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div>
                <p className='footer-section-desc'>
                    Nulla consectetur elementum ligula, sed vehicula erat pharetra at. Mauris dapibus vestibulum consequat. 
                    Cras vehicula a eros sit amet dignissim. 
                </p>
                <div className="footer-icons">
                    <i class="fa fa-twitter"></i>
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                </div>
                <p className='copyright'>
                    @2024 Travelious. All rights reserved.
                </p>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <h3>About</h3>
                    <span>About Us</span>
                    <span>Features</span>
                    <span>News & Blog</span>
                </div>
                <div className="footer-section-columns">
                    <h3>Movement</h3>
                    <span>What Travelious</span>
                    <span>Support Us</span>
                </div>
                <div className="footer-section-columns">
                    <h3>Company</h3>
                    <span>Why Travelious</span>
                    <span>Capital</span>
                    <span>Security</span>
                </div>
                <div className="footer-section-columns">
                    <h3>Support</h3>
                    <span>FAQs</span>
                    <span>Support Center</span>
                    <span>Contact Us</span>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Footer