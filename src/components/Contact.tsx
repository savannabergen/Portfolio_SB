import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Form } from "@siavanna/ts_library";

const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

if (!serviceId || !templateId || !publicKey) {
  throw new Error("EmailJS credentials are missing");
}

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [sentName, setSentName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(""); // Clear any previous error messages

    // Validation checks
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out all fields");
      return;
    }

    // Email validation (basic check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    const senderName = name;
    const templateParams = {
      name: senderName,
      email: email,
      message: message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response.status, response.text);
        setSentName(senderName);
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        setError("Error sending email. Please try again later.");
        console.log("Error sending email", error);
      });
  };

  const fields = [
    {
      label: "Name",
      type: "text",
      name: "name",
      value: name,
      onChange: (event) => setName(event.target.value),
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: email,
      onChange: (event) => setEmail(event.target.value),
    },
    {
      label: "Message",
      type: "textarea",
      name: "message",
      value: message,
      onChange: (event) => setMessage(event.target.value),
    },
  ];

  return (
    <>
      <h1>Contact Me</h1>
      <Form fields={fields} buttonText="Send Email" onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && (
          <>
            <h2>Thank you, {sentName}!</h2>
            <p>Email sent successfully!</p>
          </>
        )}
      </Form>
    </>
  );
};

export default ContactForm;
