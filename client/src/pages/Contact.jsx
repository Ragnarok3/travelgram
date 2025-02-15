import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <p>If you have any questions or need further information, please feel free to contact us:</p>
        <ul>
          <li><strong>Name:</strong> Amit Saxena</li>
          <li><strong>Email:</strong> saxenaamit2646@gmail.com</li>
          <li><strong>Phone:</strong> +91 8868816430</li>
          <li><strong>Address:</strong> Uttar Pradesh, India</li>
        </ul>
        <p>We look forward to hearing from you!</p>
        <p>
          <a href="/Amit_Resume_Full_Stack_developer.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">
            Download My CV
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;