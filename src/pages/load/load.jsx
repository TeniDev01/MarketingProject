import React from 'react'
import "./load.css"
import left from "../../assets/img/left.png" 
import MyComponent from '../../data/MyComponent'

const Load=() => {
  return (
   <section className='section7'>
    <div className='section-display'>
        <div className='section7-id'>
            <div>
             <h1 className='font-size'>Elevate Your<br/> brand Today!</h1>
             
            </div>
            <div className='section7-g'>
               <MyComponent/>
            </div>
        </div>
    </div>

   </section>
  )
}

export default Load
