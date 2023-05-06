import React, { useState } from 'react';
import { validateText, validateEmail } from '../../utils/helpers';
import '../styles/Contact.css';

function Form() {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
      if (!validateText(inputValue)) {
        setErrorMessage("Name required.")
      }
      else {
        setErrorMessage("")
      }
    }

    if (inputType === 'email') {
      setEmail(inputValue);
      if (!validateEmail(inputValue)) {
        setErrorMessage("Enter a vaild Email.")
      }
      else {
        setErrorMessage("")
      }
    } 

    if (inputType === 'message') {
      setMessage(inputValue);
      if (!validateText(inputValue)) {
        setErrorMessage("Message required.")
      }
      else {
        setErrorMessage("")
      }
  }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Name, email, or message is invalid');
      return;
    }
    alert(`Message Sent`);

    setName('');
    setMessage('');
    setEmail('');
  };


  return (
    <div>
      <h1 class="contactTitle">Contact Me</h1>
      <div class="container formContainer">
      <form className="form">
        <p>Name:</p>
        <input class="inputs"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br></br>
        <p>Email Address:</p>
        <input class="inputs"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email Address"
        />
        <br></br>
        <p>Message:</p>
        <textarea class="inputs"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Message"
        />
        <br></br>
        <button type="button" class="submitBtn" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    </div>
  );
      }

export default Form;
