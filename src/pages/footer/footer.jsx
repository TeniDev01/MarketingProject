import React from 'react'
import  "./footer.css"; 
import bgg from "../../assets/img/bgg.png"
import group from "../../assets/img/group.png"
import Data from '../../data/data.jsx' 

const Footer=()=> {
  return (
    <section className='section12'>
        <div className='moving-style'>
              <div className='moving'>
            <img src={group} alt="" /><br/>
            <a href='' className='href'><img src={bgg} alt="ol"/><br/></a>  
           <Data/>
        </div>
       < div className='icon27'>
       <div className='icon22'>
         <p>Work With Us</p>
        <p>Private Coaching</p>
        <p>About Us</p>
       </div>
       <div className='icon23'>
        <p>Our Work</p>
        <p>FAQs</p>
        <p>Advertise With Us</p>
       </div>
       <div className='icon24' >
        <p>Support Us</p>
        <p>Our Commitment</p>
        <p>Report a Bug</p>
       </div>
       <div className='icon25'>
        <p>Business Advices</p>
        <p>Our Team</p>
       </div>
       
       </div>
        </div>
      

    </section>
  )
}

export default Footer
