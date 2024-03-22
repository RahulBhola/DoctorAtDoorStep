import React from "react";
import { useNavigate } from "react-router-dom";
// import img1 from "./login.png";
import img1 from "../assets/starterImg.png";
import { FaPlusCircle } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";

const StarterPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic if needed

    // Navigate to the Welcome component
    navigate("/login");
  };

  return (
    <div className="bg-gray-200 h-[100%]">
      <div className="bg-emerald-600 flex justify-between items-center px-4 py-2">
        <FaPlusCircle className="text-red-700 h-10 w-9" />
        <div className="flex">
          <p
            className="bg-emerald-700 rounded-full text-gray-300 px-2 hover:cursor-pointer hover:bg-emerald-800"
            onClick={() => {
              navigate("/signin");
            }}
          >
            SignIn
          </p>
          <p className="text-xl">/</p>
          <p
            className="bg-emerald-700 rounded-full text-gray-300 px-2 hover:cursor-pointer hover:bg-emerald-800"
            onClick={() => {
              navigate("/login");
            }}
          >
            LogIn
          </p>
        </div>
      </div>

      <div className="bg-emerald-600 h-[560px] rounded-bl-full flex p-4  justify-center items-center">
        <img
          className="ml-4"
          style={{ height: 300, width: 400 }}
          src={img1}
          alt="/"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[100px]">
        <p className="text-3xl font-bold text-gray-700" l>
          How Do You Feel Today
        </p>
        <p className="m-10 w-2/3  font-semibold text-gray-700">
          Choose the Desire Doctor According to the problem to your Doorstop
        </p>
        <button
          className="flex justify-center items-center w-2/3 bg-emerald-700 px-2 p-2 rounded-full font-bold text-gray-300  "
          onClick={handleLogin}
        >
          Get Started
          <CiLocationArrow1 className="ml-6 text-white text-2xl" />{" "}
        </button>
      </div>
    </div>
  );
};

export default StarterPage;
