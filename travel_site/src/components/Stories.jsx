import React from 'react';
import '../styles/Stories.css';
import Story from "../assets/Story.jpg";
import Story1 from "../assets/story2.jpg";
import Story2 from "../assets/map.jpg";

function Stories() {

    const storyInfo = [
        {
          number: "12K+",
          description: "Success Journey"
        },
        {
            number: "20+",
            description: "Awards Winning"
        },
        {
            number: "30+",
            description: "Years of Experience"
        },
    ];

    const aboutInfo = [
        {
            description1: '"Vestibulum vitae imperdiet mauris, et venenatis est. Curabitur egestas lorem ac leo aliquet pretium. Donec fringilla nisl velit. Nulla efficitur rutrum tellus eget ornare."',
            rate: "fa fa-star",
            name: "Alice Agasta",
            job: 'Entrepreneur'
        }
    ]

  return (
    <div>
        <div className='stories'>
            <div className='left-side' style={{ backgroundImage: `url(${Story})`}}>
            </div>
            <div className='right-side'>
                <h2 className='story-heading'>OUR <span>STORIES</span> WITH ADVENTURES</h2>
                <p className='decs'>
                    Maecenas commodo mauris nec nulla consectetur, at tincidunt leo laoreet. Nunc et maximus nibh, 
                    quis facilisis tortor. Aenean ac velit sit amet turpis fringilla interdum. Duis ac leo eros. 
                    Aenean lobortis sodales viverra. Morbi pellentesque metus eget libero mattis varius.
                </p>
                <div className='story-div'>
                {storyInfo.map((data) => (
                    <div className='story-card'>
                        <h3 className='story-no'>{data.number}</h3>
                        <p className='description'>{data.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
        
        <div>
            <h1 className='map-content'>Start Your new <span>Adventure</span> <br /> Around the world</h1>
            <div  style={{ backgroundImage: `url(${Story2})`}} className='map'>

            </div>
        </div>

        <div className='stories'>            
            <div className='right-side'>
                <h2 className='story-heading'>WHAT ADVENTURES SAY <span>ABOUT US</span></h2>
                <p className='decs'>
                    Maecenas commodo mauris nec nulla consectetur, at tincidunt leo laoreet. Nunc et maximus nibh, 
                    quis facilisis tortor. Aenean ac velit sit amet turpis fringilla interdum. Duis ac leo eros. 
                    Aenean lobortis sodales viverra. Morbi pellentesque metus eget libero mattis varius.
                </p>
                <div className='story-div'>
                {aboutInfo.map((data1) => (
                    <div className='about-card'>
                        <p className='about-description'><em>{data1.description1}</em></p>
                        <i className={data1.rate}></i><i className={data1.rate}></i><i className={data1.rate}></i><i className={data1.rate}></i><i className={data1.rate}></i>
                        <p className='name'>{data1.name}</p>
                        <p className='job'>{data1.job}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className='left-side' style={{ backgroundImage: `url(${Story1})` }}>
            </div>
        </div>
    </div>
    
  )
}

export default Stories