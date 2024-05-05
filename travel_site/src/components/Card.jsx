import React from 'react';
import '../styles/Card.css'

function Card() {
  return (
    <div className='card'>
        <div className='card-content'>
            <h1 className='card-heading'>GET STARTED WITH <br/> <span>TRAVELIOUS</span></h1>
            <p className='card-paragraph'>
                Maecenas commodo mauris nec nulla consectetur, at tincidunt leo laoreet. Nunc et maximus nibh, quis facilisis tortor. 
                Aenean ac velit sit amet turpis fringilla interdum. Duis ac leo eros. Aenean lobortis sodales viverra. Morbi pellentesque 
                metus eget libero mattis varius. Fusce aliquet, mi vitae lobortis aliquam, ante ex posuere augue, quis pulvinar tortor 
                sapien id felis. 
            </p>
            <button className='btn'>GET STARTED</button>
        </div>
        
    </div>
  )
}

export default Card