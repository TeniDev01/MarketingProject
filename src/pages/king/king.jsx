import React from 'react'
import "./king.css"
import frame1 from "../../assets/img/frame1.png"
import frame2 from "../../assets/img/frame2.png"
import frame3 from "../../assets/img/frame3.png"

const King =()=> {
  return (
   <section className='section6'>
    <div className='section5-style'>
         <div className='win'>
         <div className='omg'>
            <div className='oll'>
            <p className='work'>Our Work</p>
            <small className='goodluck'>A glimpse of our portfolio</small>
            </div>
        
        
    </div>
    <div className='name'>
        <div>
            <a href="https://www.apple.com/ng/"><img src={frame1} alt="frame" className='fig' /></a>
             <p className='mega'>App</p>
           

        </div>
        <div>
         <a href="https://www.coca-colacompany.com/"><img src={frame2} alt="frame" className='fig' /></a>
         <p className='mega'>Coca-cola</p>
            {/* <button className='mega'>See More</button> */}
        </div>
        <div>
           <a href="https://www.nike.com/in/"><img src={frame3} alt="frame"  className='fig'/></a>
           <p className='mega'>Nike</p>

            <div>
            
        </div>

        </div>


        
   
       
       
    </div>
    
    </div>
    
    </div>
    
   

   </section>
  )
}

export default King
