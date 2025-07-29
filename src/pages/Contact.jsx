import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  
  return (
    <div className="text-white flex flex-col py-5 md:py-10 px-4 md:px-10 page-fade-in">
      <div className="m-1 md:m-10 px-2">
        <h2
          className="text-4xl text-sky-400 text-center"
          style={{ filter: "drop-shadow(0 0 15px #ffffff)" }}
        >
          Contactame
        </h2>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
