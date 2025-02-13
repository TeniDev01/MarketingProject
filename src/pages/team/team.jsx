import React from 'react'
import "./team.css"
import marke1 from "../../assets/img/marke1.png"
import marke2 from "../../assets/img/marke2.png"
import marke3 from "../../assets/img/marke3.png"
import marke4 from  "../../assets/img/marke4.png"
import marke5 from "../../assets/img/marke5.png"
import marke6 from "../../assets/img/marke6.png"

const Team=() => {
  return (
    <section className='section8'>
        <div className='immg'>
  <div className='section8-img'>
            <div className='section8-red'>
                <img src={marke1} alt="ola" />
                <img src={marke2} alt="ola" />

                <img src={marke3} alt="ola" />

            </div>
            <div className='section8-red2'>
                <img src={marke4} alt="ola" />

                <img src={marke5} alt="ola" />
                <img src={marke6} alt="ola" />
            </div>
        </div>
        <div>
            <p className='p-text'>Meet Our Team</p>
      <small className='section8-ten'>Discover the brilliance behind  Embrace. Our team blends<br/> innovation and artistry to craft digital wonders that captivate</small>
      <div>
       <a href="l"><button className='btn9'>Learn More</button></a>
      </div>



        </div>

        </div>
      
    </section>
  );
};

export default Team
