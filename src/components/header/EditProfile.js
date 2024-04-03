import React, { useState } from "react";
import maleUserImage from "../../assets/userImage.jpg";
import { MdOutlineEdit } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { makeAuthenticatedPOSTRequest } from "../../utils/serverHelpers";

function EditProfile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState({ street: "", city: "" });

  const handleUpdate = async () => {
    try {
      const response = await makeAuthenticatedPOSTRequest("/auth/profile", {
        username: username,
        email: email,
        phone: phone,
        address: address,
      });
      alert("Details updated successfully!");
      navigate("/welcome");
      console.log(response); // Handle success response
    } catch (error) {
      console.error("Error:", error); // Handle error
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold mt-4 text-xl">User Profile</div>
        <div className="flex relative cursor-pointer">
          <img
            src={maleUserImage}
            alt="User"
            className="items-center rounded-full w-36 mt-12"
          />
          <MdOutlineEdit className="text-2xl absolute bg-yellow-300 rounded-full w-12 h-12 p-2 bottom-0 right-0" />
        </div>
      </div>
      <div className="flex border-2 mx-6 mt-6 mb-2 rounded-full shadow-2xl">
        <FaUserCircle className="text-3xl m-4" />
        <input
          type="text"
          placeholder="Enter Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="text-black pl-4 w-full rounded-r-full"
        />
      </div>
      <div className="flex border-2 mx-6 my-2 rounded-full shadow-2xl">
        <MdAlternateEmail className="text-3xl m-4" />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black pl-4 w-full rounded-r-full"
        />
      </div>
      <div className="flex border-2 mx-6 my-2 rounded-full shadow-2xl">
        <FaPhoneSquareAlt className="text-3xl m-4" />
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="text-black pl-4 w-full rounded-r-full"
        />
      </div>
      <div className="flex border-2 mx-6 my-2 rounded-full shadow-2xl">
        <FaAddressBook className="text-3xl m-4" />
        <input
          type="text"
          placeholder="Enter Your Address"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
          className="text-black pl-4 w-full rounded-r-full"
        />
      </div>
      <div
        className="flex items-center justify-center mx-6 bg-yellow-300 font-bold px-20 py-4 rounded-full mt-6 shadow-xl cursor-pointer hover:bg-yellow-100 space-x-2"
        onClick={handleUpdate}
      >
        Update
      </div>
    </div>
  );
}

export default EditProfile;
