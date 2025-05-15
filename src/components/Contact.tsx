import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from '@siavanna/ts_library';

const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

if (!serviceId || !templateId || !publicKey) {
  throw new Error('EmailJS credentials are missing');
}

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [sentName, setSentName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response.status, response.text);
        setSentName(name);
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
          setSuccess(false);
        }, 3000); // hide success message after 3 seconds
      })
      .catch((error) => {
        console.log('Error sending email', error);
      });
  };

  const fields = [
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      value: name,
      onChange: (event) => setName(event.target.value),
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      value: email,
      onChange: (event) => setEmail(event.target.value),
    },
    {
      label: 'Message',
      type: 'textarea',
      name: 'message',
      value: message,
      onChange: (event) => setMessage(event.target.value),
    },
  ];

  return (
  <>
    <h1>Contact Me</h1>
    <Form fields={fields} buttonText="Send Email" onSubmit={handleSubmit}>
      {success && (
        <>
          <h2>Thank you, {sentName}!</h2>
          <p>Email sent successfully!</p>
        </>
      )}
    </Form>
  </>
);
}
export default ContactForm;