import React from 'react'
import "./itemcard.css";
import Company from "../../assets/img/Company.png"
import Company3 from "../../assets/img/Company3.png"
import name from "../../assets/img/name.png"
import vector from "../../assets/img/vector.png"
import prod2 from "../../assets/img/prod2.png"
import scan1 from "../../assets/img/scan1.png"
import scan2 from "../../assets/img/scan2.png"
import scan4 from "../../assets/img/scan4.png"
import scan5 from "../../assets/img/scan5.png"
import scan6 from "../../assets/img/scan6.png"


const Itemcard =() => {
  return (
   <section className='section1'>
    <div className='look'>
      <p className="map">Companies We  Works with</p>
      </div>
      
      <div className='look'>
        <a href=""><img src={Company} alt="scan" className='ign' /></a>
     <a href=''>   <img src={Company3} alt="scan"  width="100px" className='ign' /> </a>
       <a href=''> <img src={name} alt="scan" className='ign' /></a>
       <a href=''>  <img src={vector} alt="scan" width="70px" height="30" className='ign' /></a>
      <a href=''>  <img src={prod2} alt="prod1"  className='ign'/></a>
        

      </div>
      <div className='scan'>
      <a href=''>  <img src={scan1} alt="scan" className='ign'/></a>
      <a href=''>    <img src={scan2} alt="scan"className='ign' /></a>
      <a href=''>  <img src={scan4} alt="scan"className='ign' /></a>
      <a href=''>  <img src={scan5} alt="scan" className='ign'/></a>
       <a href=''> <img src={scan6} alt="scan" className='ign'/></a>

      </div>


    

   </section>
  );
};

export default Itemcard
