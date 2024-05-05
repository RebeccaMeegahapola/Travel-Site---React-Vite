import React from 'react';
import AboutImage from '../assets/about.jpg';
import '../styles/About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import AboutImage2 from "../assets/AboutImage2.jpg";

function About() {

  const aboutInfoData = [
    {
      image: about1,
      country: "Bern, Switzerland",
      days: "10 days",
      price: "$2000/ person"
    },
    {
      image: about2,
      country: "Zagreb, Croatia",
      days: "7 days",
      price: "$2500/ person"
    },
    {
      image: about3,
      country: "Sicilly, Italy",
      days: "9 days",
      price: "$3000/ person"
    },
  ];

  const chooseUsData = [
    {
      icon: "fa fa-credit-card",
      heading: "Affordable Price",
      text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in velit imperdiet, fermentum lectus et, imperdiet mi. Ut nec sodales ex."
    },
    {
      icon: "fa fa-globe",
      heading: "Wide Variety of Destinations",
      text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in velit imperdiet, fermentum lectus et, imperdiet mi. Ut nec sodales ex."
    },
    {
      icon: "fa fa-thumbs-up",
      heading: "Highly Qualified Service",
      text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in velit imperdiet, fermentum lectus et, imperdiet mi. Ut nec sodales ex."
    },
];

  return (
    <div>
        <div style={{ backgroundImage: `url(${AboutImage})` }} className='about'>
          <Navbar />
          <div className='headerContainer'>
              <h1>About Us</h1>
          </div>
        </div>
        <div className='about-content'>
            <h1 className='about-heading'>Best Tours</h1>
            <div className="row1-container">
                {aboutInfoData.map((about) => (
                    <div class="about-box box-down cyan">
                        <img src={about.image} alt="" className='dimage'/>
                        <p className='country'>{about.country}</p>
                        <p className="days">{about.days}</p>
                        <p className="price">{about.price}</p>
                    </div>
                ))}
            </div> 
        </div>
        <div style={{ backgroundImage: `url(${AboutImage2})` }} className='about-content2'>
          <h1 className='about-heading'>Why Choose Us?</h1>
          <p className='about-para'>
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque tincidunt nibh 
            in enim consequat varius. Pellentesque consequat porttitor lacus. 
          </p>
          <div className="row1-container">
                {chooseUsData.map((about1) => (
                    <div class="box box-down">
                        <div className='iconDiv'>
                          <i className={about1.icon}></i>
                        </div>
                        <p className='heading'>{about1.heading}</p>
                        <p className="text">{about1.text}</p>
                    </div>
                ))}
            </div> 
        </div>
        <Footer />
    </div>
  )
}

export default About