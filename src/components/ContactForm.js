import React, { useState, useEffect } from "react";
import maleUserImage from "../assets/userImage.jpg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { MdMessage } from "react-icons/md";
import Navbar from "./footer/FixedFooter";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [cookies, ,] = useCookies(["token"]);
  const [message, setMessage] = useState("");
  const [, setErrMsg] = useState("");
  const [, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await makeAuthenticatedGETRequest(
          "/auth/profileDetails"
        );
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // Handle error here
      }
    };

    fetchUserData();
  }, [cookies.token]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (message === "") {
      setErrMsg("Message is required!");
      Swal.fire("warning", "Message is required", "warning");
    } else {
      setSuccessMsg(
        `Thank you dear ${user.firstName} ${user.lastName}, Your Message has been sent successfully!`
      );
      Swal.fire(
        "Success!",
        "Your Message has been sent successfully. We will contact you soon.",
        "success"
      );

      // Construct template parameters
      const templateParams = {
        from_name: `${user.firstName} ${user.lastName}`,
        from_email: user.email,
        from_contact: user.phone || "",
        from_address: user.address ? user.address.city : "",
        message: message,
      };

      // Send email using EmailJS
      emailjs
        .send(
          "service_arh8zol",
          "template_m9f1fga",
          templateParams,
          "VjyZ53rmx4QfQHBAC"
        )
        .then((result) => {
          console.log(result.text);
          setSuccessMsg(
            `Your Message has been sent successfully. We will contact you soon.`
          );
          setMessage("");
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
        });
      navigate("/welcome");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold mt-4 text-xl">Contact Us Now</div>
        <div className="flex relative cursor-pointer">
          <img
            src={maleUserImage}
            alt="User"
            className="items-center rounded-full w-36 mt-12"
          />
        </div>
      </div>
      {user && (
        <div>
          <div className="flex items-center justify-center border-2 mx-6 mt-6 mb-2 rounded-full shadow-2xl">
            <FaUserCircle className="text-3xl m-4" />
            <div className="font-bold text-black pl-4 w-full rounded-r-full">
              {user.firstName} {user.lastName}
            </div>
          </div>
          <div className="flex items-center justify-center border-2 mx-6 mb-2 rounded-full shadow-2xl">
            <MdAlternateEmail className="text-3xl m-4" />
            <div className="font-bold text-black pl-4 w-full rounded-r-full">
              {user.email}
            </div>
          </div>
          {user.phone && (
            <div className="flex items-center justify-center border-2 mx-6 mb-2 rounded-full shadow-2xl">
              <FaPhoneSquareAlt className="text-3xl m-4" />
              <div className="font-bold text-black pl-4 w-full rounded-r-full">
                {user.phone}
              </div>
            </div>
          )}
          {user.address && user.address.city && (
            <div className="flex items-center justify-center border-2 mx-6 mb-2 rounded-full shadow-2xl">
              <FaAddressBook className="text-3xl m-4" />
              <div className="font-bold pl-4 w-full rounded-r-full">
                {user.address.city}
              </div>
            </div>
          )}
            
          <div className="flex items-center border-2 mx-6 mt-6 mb-2 rounded-full shadow-2xl">
            <MdMessage className="text-3xl m-4" />
            <p className="font-bold m-3">Write Message Below If Any</p>
          </div>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="m-6 mt-6 rounded-xl shadow-2xl p-4"
            cols="39"
            rows="8"
          ></textarea>
        </div>
      )}
      <div
        className="flex items-center justify-center mx-6 mb-56 bg-yellow-300 font-bold px-20 py-4 rounded-full mt-6 shadow-xl cursor-pointer hover:bg-yellow-100 space-x-2"
        onClick={handleUpdate}
      >
        Submit
      </div>
      <Navbar />
    </div>
  );
}

export default Profile;
