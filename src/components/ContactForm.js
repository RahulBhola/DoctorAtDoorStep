import React, { useState } from "react";
import Navbar from "./footer/FixedFooter";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with form data (e.g., send to a server, display a message)
    console.log("Form data submitted:", formData);
    // You can add additional logic here, such as sending the form data to a server
  };

  return (
    <div>
      <div className="flex flex-col mt-[60px]  items-center p-6 h-[650px] bg-sky-800/80 rounded-tr-full rounded-tl-3xl">
        <img
          className="rounded-full shadow-md shadow-gray-700"
          style={{ height: 180, width: 170, marginBottom: 30 }}
          src="https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?t=st=1709919298~exp=1709922898~hmac=13038ed9e6870f1206138064379b20411b364da3e4d69dc042465294f218c365&w=740"
          alt="/"
        />
        <h2 className="text-gray-300">Any suggestions</h2>
        <form onSubmit={handleSubmit}>
          <div className="m-2">
            <label className="text-white font-bold" htmlFor="name">
              Name:
            </label>
            <input
              className="rounded-full p-2 w-[250px] shadow-md shadow-gray-700"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-2">
            <label className="text-white font-bold" htmlFor="email">
              Email:
            </label>
            <input
              className="rounded-full p-2 w-[250px] shadow-md shadow-gray-700"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-2">
            <label className="font-bold text-white" htmlFor="contact">
              Contact:
            </label>
            <input
              className="rounded-full p-2 w-[250px] shadow-md shadow-gray-700"
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-white" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-30 rounded-lg h-[100px] shadow-md shadow-gray-700"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-sky-300 px-10 p-2 rounded-lg mt-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Navbar />
    </div>
  );
};

export default ContactForm;
