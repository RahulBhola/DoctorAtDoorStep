import React, { useState } from "react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../../utils/serverHelpers";
import { useCookies } from "react-cookie";
import loginImg from "../../assets/signImg.png";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const login = async () => {
    const data = { email, password };
    const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);

    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success");
      navigate("/welcome");
    } else {
      alert("Failure");
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-col  items-center p-6 h-[650px] bg-sky-700 rounded-tr-full rounded-tl-3xl">
          <img
            className="rounded-full shadow-md shadow-gray-700"
            style={{ height: 180, width: 170, marginBottom: 30 }}
            src={loginImg}
            alt="/"
          />
          <h2 className="text-gray-300">
            Welcome back! Please fill below details to LogIn
          </h2>
          <TextInput
            label="Email address or username"
            placeholder="Email address or username"
            className="my-6"
            value={email}
            setValue={setEmail}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
          <div className=" w-full flex items-center justify-center my-8">
            <button
              className="bg-sky-900 text-white hover:bg-emerald-100 font-semibold p-3 px-20 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                login();
              }}
            >
              LOG IN
            </button>
          </div>

          <div className="w-full border border-solid border-gray-300"></div>
          <div className="my-6 font-semibold text-lg">
            {" "}
            Don't have an account?
          </div>
          <Link
            to="/signin"
            className=" bg-sky-900 text-white hover:bg-emerald-100 w-full flex items-center justify-center py-4 rounded-full font-bold"
          >
            SIGN UP FOR SPOTIFY
          </Link>
        </div>

        <div className="bg-sky-700 w-full h-[150px] flex justify-around py-10">
          <div className="flex flex-col">
            <p className="m-1">Door-stop</p>
            <p className="m-1">Emergency</p>
            <p className="m-1">All Categories</p>
          </div>
          <div className="flex flex-col">
            <p className="m-1">Specialist</p>
            <p className="m-1">Doctors</p>
            <p className="m-1">Blood bank</p>
          </div>
        </div>
        <div className="bg-sky-700 pt-7">
          <p className="ml-20 pb-3">Copyright © 2024 Capstone Team</p>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
