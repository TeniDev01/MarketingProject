import React from 'react'
import "./blog.css"
import page from "../../assets/img/page.png"
import county1 from "../../assets/img/county1.png"; 

const Blog=() => {
  return (
   <section className='section9'>
    <div className='good'>
         <div className='section9-style'>
             <div>
                 <p className='style-name'>
                     Start Your Journey <br/> With Us Now
                 </p>
                 <button className='man' >Start Now</button>
             </div>
             <div className='line'>
              <img src={page} ait="ten"className="img30" />  
                <img src={county1} alt="ten"  className="img30" />
               </div>
         </div>
     </div>
  </section>
  );
}
export default Blog;
