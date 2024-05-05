import React from 'react';
import ContactImage from '../assets/contact.jpg';
import ContactImage1 from '../assets/contact2.jpg';
import '../styles/Contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div>
        <div style={{ backgroundImage: `url(${ContactImage})` }} className='contact'>
            <Navbar />
            <div className='headerContainer'>
              <h1>Contact Us</h1>
            </div>
        </div>
        <div className='contactForm'>
            <div className='leftSide' style={{ backgroundImage: `url(${ContactImage1})` }}></div>
            <div className='rightSide'>
                <h2>Get In Touch</h2>
                <form id="contact-form" method='POST'>
                    <input name="name" placeholder="Enter full name..." type="text" />
                    <input name="email" placeholder="Enter email..." type="email" />
                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                    ></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact