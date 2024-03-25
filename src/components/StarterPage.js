import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import img1 from "./login.png";
import img1 from "../assets/starterImg.png";
import { FaPlusCircle } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";

const StarterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchEmailAndPassword();
  }, []);

  const fetchEmailAndPassword = async () => {
    try {
      const response = await fetch("http://localhost:3000", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch email and password");
      }

      const { email, password } = await response.json();
      setEmail(email);
      setPassword(password);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleLogin = async () => {
    // const email = "rahulbhola2804@gmil.com";
    // const password = "123";
    try {
      const response = await fetchEmailAndPassword("/auth/login", {
        email,
        password,
      });

      if (response && !response.err) {
        navigate("/welcome");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="bg-gray-200 h-[100%]">
      <div className="bg-sky-700 flex justify-between items-center px-4 py-2">
        <FaPlusCircle className="text-red-700 h-10 w-9" />
        <div className="flex">
          <p
            className="bg-sky-900 rounded-full text-gray-300 px-2"
            onClick={() => {
              navigate("/signin");
            }}
          >
            SignIn
          </p>
          <p className="text-xl text-white">/</p>
          <p
            className="bg-sky-900 rounded-full text-gray-300 px-2"
            onClick={() => {
              navigate("/login");
            }}
          >
            LogIn
          </p>
        </div>
      </div>

      <div className="bg-sky-700 h-[560px] rounded-bl-full flex p-4  justify-center items-center">
        <img
          className="ml-4"
          style={{ height: 300, width: 400 }}
          src={img1}
          alt="/"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[100px]">
        <p className="text-3xl font-bold text-gray-700">
          How Do You Feel Today
        </p>
        <p className="m-10 w-2/3  font-semibold text-gray-700">
          Choose the Desire Doctor According to the problem to your Doorstop
        </p>
        <button
          className="flex justify-center items-center w-2/3 bg-sky-900 p-2 rounded-full font-bold text-gray-100  "
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
