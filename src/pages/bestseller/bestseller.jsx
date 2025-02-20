import React from 'react'
import "./bestseller.css";
// import Samex from '../../assets/icons/samex';
import market from '../../assets/img/market.png';
import sames from '../../assets/img/sames.png';
import market1 from '../../assets/img/market1.png';
import market2 from '../../assets/img/market2.png';
import market3 from '../../assets/img/market3.png';


const Bestseller =() => {
  return (
    <section className='section5'>
       <div className='mane'>
         <div>
              <div>
            <div className='money'>
            <p className='ok'>How it Works</p>

            <p className='believe'>We believe that the best way to create successful marketing<br/> campaigns is to work closely with our clients to understand<br/> their goals and challenges.</p>
        </div>
        <div className='img7'>
            <img src={sames} alt="" className='hh' />
        </div>
        </div>
        </div>
      <div>
         <div className='lookman'>
                <div>
                <img src={market} alt="marketing" id='lock' />
                </div>
                <div>
                    <p className='class'>Discovery</p>
                    <p className='olubode'>We meet with you to learn about your business, your goals,<br/> and your target audience.</p>
                </div>
        </div>
        <div className='lookman'>
            <div className=''>
            <img src={market1} alt="market1" id='lock' />
            </div>
            <div>
                <p className='class'>Strategy</p>
                <p className='olubode'>We develop a customized marketing strategy that is based <br/> on your unique needs and goals.</p>

            </div>
        </div>
      <div className='lookman'>
         <div >
            <img src={market2} alt="market1" id='lock' />
            </div>
            <div>
                <p className='class'>Execution</p>
                <p className='olubode'>We execute our strategy using the latest digital marketing <br/> tools and techniques.</p>

            </div>
      </div>
      <div className='lookman'>
        <div>
            <img src={market3} alt="market" id='lock' />
        </div>
        <div>
            <p className='class'>Measurement</p>
            <p className='olubode'>We track the results of our campaigns so that we can make <br/> adjustments as needed.</p>
        </div>
      </div>
      </div>
       </div>

      
       
                
            
        
       
        

    </section>
  )
}

export default Bestseller
