import React from 'react'
import "./recommend.css"
import Com from "../../assets/icons/com"

const Recommend=() => {
  return (
    <section className='section4'>
        <div className='myname'>
            <div className='make'>
                <div className='children'>
                    <h1 className='ola'>245%</h1>
                    <p className=''>More revenue for the brand</p>
                </div>
                <div className='children'>
                     <h1 className='ola'>130K%</h1>
                     <p className='oga'>Audience reached</p>
                </div>
            </div>
            <div className='mak'>
                <div className='childre'>
                 <h1 className='ola'>50+</h1>
                 <p className='pro'>Brand trust us</p>
                </div>
                <div className='childre'> 
                    <h1 className='ola'>24+</h1>
                    <p >Worldwide Award</p>
                </div>
               
            </div>
        </div>
        <div className='jav'>
            <h1 className='usually'>Commitments</h1>
            <p className='br'>We are committed to working with you collaboratively to understand 
              <br />   your goals and create a strategy that will achieve them.</p>

              <span className='learn'>Learn More <Com/></span>
        </div>

    </section>  
  );
};

export default Recommend