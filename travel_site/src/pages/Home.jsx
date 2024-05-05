import React from 'react';
import BannerImage from '../assets/bg.jpg';
import '../styles/Home.css';
import '../styles/Destinations.css';
import Navbar from '../components/Navbar';
import Destinations from '../components/Destinations';
import Stories from '../components/Stories';
import Card from '../components/Card';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
        <div style={{ backgroundImage: `url(${BannerImage})` }} className='home'>
          <Navbar />
          <div className='headerContainer'>
              <h1>LIVE YOUR ADVENTURE</h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Integer tempus, ipsum eget ullamcorper semper, sem odio 
                  sollicitudin massa, eu venenatis leo urna vel lectus. 
                  Phasellus ultricies augue eu leo lacinia egestas.
              </p>
          </div>
        </div>
        <Destinations />
        <Stories />
        <Card />
        <Footer />
    </div>
    
  )
}

export default Home