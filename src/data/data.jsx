import React from 'react';

function Data () {
    const handleBookCall =() => {
        alert('call this number +2348128135574');

    }

    return (
              <div>
           <button className='btn20' onClick={handleBookCall}><h1>Contact Us</h1></button> 
        </div>
    )
}
export default Data;