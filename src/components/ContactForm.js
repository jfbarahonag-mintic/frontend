import React, { useState } from 'react'

import './ContactForm.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const onSendMessage = e => {
    e.preventDefault();
    
    if (email !== '' && name !== '' && message !== '') {
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
    } else {
      /* ERROR: Should never reach this point */
    }

  }

  return (
    <div className="contact">
      <form
        className="contact-form"
        onSubmit={onSendMessage}
      >
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e => setEmail(e.target.value))}
        />
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          className='contact-form__submit'
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm
