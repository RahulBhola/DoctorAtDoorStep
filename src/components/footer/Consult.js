import React from "react";
import Navbar from "./FixedFooter";
import Header from "../header/Header";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import ConsultImage from "../../assets/consult.jpg";
import { useNavigate } from "react-router-dom";

function Consult() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("We will call you soon");
    navigate("/welcome");
  };
  return (
    <div>
      <Header />
      <div className="flex items-center mx-6 mt-8 mb-2 bg-sky-100 rounded-full p-1 font-bold">
        <GoDotFill />
        <div className="text-blue-800 ml-2">We take care of Your Health.</div>
      </div>
      <p className="text-4xl font-bold mx-6">
        Consult your health With Best Doctors
      </p>
      <p className="mx-6 my-4 text-gray-400 text-lg">Join our expert health consultationsfor personalized care. Connect with global specialists who prioritize your health journey with utmost professionalism. Your better health starts here now!</p>
      <div className="flex items-center justify-center mx-12 p-2 rounded-full space-x-2 bg-purple-800 text-white text-lg font-bold hover:bg-purple-300 cursor-pointer"
      onClick={handleSubmit}>
        <div>Consult Now</div>
        <FaArrowRight />
      </div>
      <img src={ConsultImage} alt="consultImage" className="p-6 mb-20"/>
      <Navbar />
    </div>
  );
}

export default Consult;
