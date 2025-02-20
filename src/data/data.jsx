import React from 'react';

function Data () {

    const handleBook =() => {
        alert('call us throught  whatappnumber or our gmail address  ');

    }

    return (
              <div className='moving'>
           <button className='btn20' onClick={handleBook}><h1>Contact Us</h1></button> 
        </div>
    )
}
export default Data;
