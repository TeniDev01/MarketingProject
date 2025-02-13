import React from 'react';
import "./detail.css";
import calius from "../../assets/img/calius.png";
import imging from "../../assets/img/imging.png";
import gng from "../../assets/img/gng.png";

const  Detail=() => {
    return(
        <section className="section10">
        <div>
            <h1 className="client">What Our Client Said about us</h1>
        </div>
            

            <div className="">
                <div className="client-man">
                    <div className="mrman">
                     <div className='d2'>
                        <img src={calius} alt="ola" width="70" className='d1' />
                        <span>
                            <p>chief  Manger</p>
                        <h4>Banji Abiola</h4>
                        </span>

                        
                        </div>   
                        <p className="ul">
                          I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!
                        </p>
                    
                    </div>
                    <div>
                        <div className='mrman'>
                          <div className='d2'>
                            <img src={imging} alt="ola" width="70" className='d1' />
                            <span>
                                <p>cheif Manger</p>
                                <h4>ope joseph</h4>
                            </span>
                            </div> 
                              <p className="ul">  My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.</p> 
                        </div>
                    </div>
                    <div>
                        <div className='mrman'>
                            <div className='d2'>
                                <img src={gng} alt="ola" width="70" className='d1'/>
                                <span>
                                    <p>cheif Manger</p>
                                </span>
                               

                            </div>
                             <p className='ul'>
                                    Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!"
                                </p>


                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};
export default Detail;