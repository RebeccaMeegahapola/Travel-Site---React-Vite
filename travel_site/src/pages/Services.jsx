import React from 'react';
import '../styles/Services.css';
import ServiceBg from '../assets/serviceBg.jpg';
import ServiceImage from '../assets/service3.jpg';
import ServiceImage1 from '../assets/service1.jpg';
import ServiceImage2 from '../assets/service2.jpg';
import compass from '../assets/compass.png';
import camera from '../assets/camera.png';
import pricing from '../assets/best-price.png';
import time from '../assets/time.png';
import destination from '../assets/destination.png';
import transport from '../assets/seller.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import tour from '../assets/flight.png';
import camp from '../assets/tent.png';
import adventure from '../assets/adventure.png';
import outdoor from '../assets/hiking.png';


function Services() {

    const serviceInfo = [
        {
            image: destination,
            description: "Custom Destinations"
        },
        {
            image: camera,
            description: "Unforgetable Moments"
        },
        {
            image: pricing,
            description: "Competitive Pricings"
        },
        {
            image: compass,
            description: "self Guide"
        },
        {
            image: time,
            description: "24/7 Available"
        },
        {
            image: transport,
            description: "Transportation"
        },
    ];

    const cardInfo = [
        {
            image: tour,
            heading: "Tour And Travel",
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            image: camp,
            heading: "Camping",
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            image: adventure,
            heading: "Adventure Tour",
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            image: outdoor,
            heading: "Outbound Activity",
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }
    ]

    return (
        <div>
            <div style={{ backgroundImage: `url(${ServiceImage})` }} className='service'>
                <Navbar />
                <div className='headerContainer'>
                <h1>Our Services</h1>
                </div>
            </div>
            <div className='services'>            
                <div className='right-side'>
                    <h2 className='service-heading'>Join the <span>Adventure</span> with stories</h2>
                    <p className='service-decs'>
                        Maecenas commodo mauris nec nulla consectetur, at tincidunt leo laoreet. Nunc et maximus nibh, 
                        quis facilisis tortor. Aenean ac velit sit amet turpis fringilla interdum. Duis ac leo eros. 
                        Aenean lobortis sodales viverra. Morbi pellentesque metus eget libero mattis varius.
                    </p>
                    <div className='service-div'>
                        {serviceInfo.map((service) => (
                            <div className='service-card'>
                                <img src={service.image} className='serviceImage'/>
                                <p className='service-description'>{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <button className='serviceBtn'>See All Services</button>
                </div>
                <div className='left-side' style={{ backgroundImage: `url(${ServiceImage1})` }}>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${ServiceImage2})` }} className='serviceDiv'>
                <p className='servicePara'>Why Choose Us</p>
                <h2 className='service-heading1'>Let Us Show You The Beauty Of <br /> The World</h2>
                <div className='btnDiv'>
                    <button className='serviceBtn1'>Book Now</button>
                </div>
                <div className='serviceCards'>
                    {cardInfo.map((card) => (
                        <div className='serviceCardGroup'>
                            <div>
                                <img src={card.image} className='cardImage'/>
                            </div>
                            <h3 className='card-heading'>{card.heading}</h3>
                            <p className='card-description'>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services