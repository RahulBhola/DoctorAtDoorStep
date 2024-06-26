import React, { useState } from "react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../../utils/serverHelpers";
import signImg from "../../assets/signImg.png";

function UserSignIn() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [, setCookie] = useCookies(["token"]);

  const navigate = useNavigate();

  const signUp = async () => {
    if (email !== confirmEmail) {
      alert("Email and confirm email fields must match. Please check again");
      return;
    }
    const data = { email, password, username, firstName, lastName };
    const response = await makeUnauthenticatedPOSTRequest(
      "/auth/register",
      data
    );
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
      <div className="flex flex-col items-center p-6 h-900 bg-sky-700 rounded-tr-full rounded-tl-3xl w-full">
        <img
          className="rounded-full shadow-md shadow-gray-700 mb-6"
          style={{ height: 180, width: 200 }}
          src={signImg}
          alt="Doctor"
        />
        <h2 className="text-gray-300">
          Welcome! Please fill in the details below to SignIn.
        </h2>
        <TextInput
          label="Username"
          placeholder="Enter your username"
          value={username}
          setValue={setUsername}
          className="my-3"
        />
        <div className="flex justify-between space-x-1 w-full">
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            value={firstName}
            setValue={setFirstName}
          />
          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <TextInput
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
          className="my-3"
        />
        <TextInput
          label="Confirm Email Address"
          placeholder="Enter your email again"
          value={confirmEmail}
          setValue={setConfirmEmail}
          className="mb-3"
        />
        <PasswordInput
          label="Create Password"
          placeholder="Enter a strong password here"
          value={password}
          setValue={setPassword}
        />
        <div className="flex justify-center my-8">
          <button
            className="bg-sky-900 text-white hover:bg-emerald-100 font-semibold p-3 px-20 rounded-full font-bold"
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
          >
            SIGN UP
          </button>
        </div>

        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-lg">
          Already have an account?
        </div>
        <Link
          to="/login"
          className="bg-sky-900 text-white hover:bg-emerald-100 w-full flex items-center justify-center py-4 rounded-full font-bold"
        >
          LOG IN INSTEAD
        </Link>
      </div>
      <div className="bg-sky-700 w-full h-[150px] flex justify-around text-gray-300">
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
      <div className="bg-sky-700">
        <p className="ml-20 pb-3 text-gray-300">
          Copyright © 2024 Capstone Team
        </p>
      </div>
    </div>
  );
}

export default UserSignIn;
