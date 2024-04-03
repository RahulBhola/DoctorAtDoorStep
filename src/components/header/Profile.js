import React, { useState, useEffect } from "react";
import maleUserImage from "../../assets/userImage.jpg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { FaAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { makeAuthenticatedGETRequest } from "../../utils/serverHelpers";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cookies, , removeCookie] = useCookies(["token"]);

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

  const handleEditProfile = () => {
    navigate("/profile/edit-profile");
  };

  const handleLogout = () => {
    alert("Are You Sure You Want To Logout");
    removeCookie("token");
    removeCookie("isLoggedIn");
    navigate("/");
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
        </div>
        <div
          className="bg-yellow-300 font-bold px-20 py-4 rounded-full mt-6 shadow-xl cursor-pointer hover:bg-yellow-100"
          onClick={handleEditProfile}
        >
          Edit profile
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
        </div>
      )}
      <div
        className="flex items-center justify-center mx-6 bg-yellow-300 font-bold px-20 py-4 rounded-full mt-6 shadow-xl cursor-pointer hover:bg-yellow-100 space-x-2"
        onClick={handleLogout}
      >
        <AiOutlineLogout />
        <p>Logout</p>
      </div>
    </div>
  );
}

export default Profile;
