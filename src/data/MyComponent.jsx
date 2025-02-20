import React from 'react';

function MyComponent() {
    // Define the function to handle the button click
    const handleBookCall = () => {
        alert("Call this number +2348128135574"); // Or you can do any other action here
        // Example: redirecting to a booking page
        // window.location.href = '/book-a-call';
    };

    return (
        <div className='section7-g'>
            <p className='section7-p'>
                Ready to transform your digital presence? Let's <br /> create magic together! Book our services now!
            </p>
            <button className='btn7' onClick={handleBookCall}>Book Call</button>
        </div>
        
    );
}

export default MyComponent;
