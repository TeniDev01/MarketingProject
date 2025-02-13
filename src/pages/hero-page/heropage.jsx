import React from 'react'
import "./heropage.css";
import Svg  from "../../assets/icons/svg"
import time from '../../assets/img/time.png';
import teni from '../../assets/img/teni.png';
import capcut from '../../assets/img/capcut.png';
import cap from '../../assets/img/cap.png';
import cap2 from '../../assets/img/cap2.png';
import cap5 from '../../assets/img/cap5.png';
import mark  from '../../assets/img/mark.png';
import ContactForm from '../../data/ContractForm.jsx';




  




const Heropage = () => {
  return (
    <section className="sectionn1">
        <div className='child'>
               <div className="background">
        <Svg/>
        <p className="p">We care about our work and we care about our clients.</p>

        <div className="ButtonNme">
            <ContactForm/>
        </div>
        </div>     

        <div className='rectang'>
            <div>
                <img src={mark} alt="" />
            </div>
            <div className='Angle'>
              
            <img src= {time} alt="ten" className='direc' />
            </div>
            
            <div className='ola-img'>
                <img src={teni} alt="ola"  className='img1'/>
            </div>
            <div className='capcut'>
                <img src={capcut} alt="ola" />
            </div>
            <div className='cap1'>
                <img src={cap} alt="" />

            </div>
            <div className='cap2'>
              <img src={cap2} alt="lang" className='lol'/>
            </div>
            <div className='cap5'>
                <img src={cap5} alt="" className='lol' />
            </div>
          
        </div>
        </div>
      
    </section>
   
  );
};

export default Heropage
