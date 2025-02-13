import React, { useState } from 'react';

function ContractForm() {
  const [email, setEmail] = useState(''); // State to store the email input

  // Function to handle the change in the email input field
  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state
  };

  // Function to handle the form submission
  const handleSubmit = () => {
    if (email) {
      alert(`Email submitted: ${email}`); // Alert to show the email or send it somewhere
    } else {
      alert('Please enter a valid email!');
    }
    
  };

  return (
    <div>
      <input
        type="email"
        className="gmail"
        id="emailinput"
        placeholder="Enter Your Email"
        value={email} // Bind input value to the state
        onChange={handleEmailChange} // Update state when the input changes
      />
      <button className="Talk" id="submitBTN" onClick={handleSubmit}>
        Let Talk
      </button>
    </div>
  );
}

export default ContractForm; 