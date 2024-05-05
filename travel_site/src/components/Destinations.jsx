import React from 'react';
import destination1 from "../assets/destination 1.jpg";
import destination2 from "../assets/destination 2.jpg";
import destination3 from "../assets/destination 3.jpg";
import '../styles/Destinations.css';

function Destinations() {

    const workInfoData = [
        {
          image: destination1,
          title: "Diving",
          text: "Dieng, Indonesia",
          price: "$20/ person"
        },
        {
          image: destination2,
          title: "Kurug Hiji Camp",
          text: "Bogor, Indonesia",
          price: "$200/ person"
        },
        {
          image: destination3,
          title: "Sky Diving",
          text: "Bundung, Indonesia",
          price: "$300/ person"
        },
    ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">FIND POPULAR DESTINATIONS</h1>
      </div>
      <div className="row1-container">
        {workInfoData.map((data) => (
          <div class="box box-down cyan" key={data.title}>
            <img src={data.image} alt="" className='dimage'/>
            <h2 className='title'>{data.title}</h2>
            <p className='text'>{data.text}</p>
            <p className="price">{data.price}</p>
            <button className='book'>Book</button>
          </div>
        ))}
      </div>           
    </div>
  )
}

export default Destinations