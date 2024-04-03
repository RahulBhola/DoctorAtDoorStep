import React, { useState, useRef } from "react";
import { Dropdown } from "react-bootstrap";
import maleUserImage from "../../assets/userImage.jpg";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const [, , removeCookie] = useCookies(["token"]);

  const handleLogout = (req, res) => {
    removeCookie("token");
    removeCookie("isLoggedIn");
    navigate("/");
  };
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Use the search input to dynamically navigate to the corresponding body part component
    if (searchInput.trim() !== "") {
      navigate(`/body/${searchInput.toLowerCase()}`);
    }
  };

  return (
    <div>
      <div className="p-4 absolute">
        <div ref={dropdownRef}>
          <img
            src={maleUserImage}
            alt="User"
            className="p-1 rounded-full w-12"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="flex flex-col bg-gray-700 mt-3">
              <Dropdown.Item
                className="w-32 pl-3 py-1 text-gray-300 hover:cursor-pointer hover:bg-gray-500"
                onClick={() => navigate("/profile")}
              >
                Profile
              </Dropdown.Item>

              <Dropdown.Item
                className="w-32 pl-3 py-1 text-gray-300 hover:cursor-pointer hover:bg-gray-500"
                onClick={() => navigate("/packages/subscribe")}
              >
                Packages
              </Dropdown.Item>

              <Dropdown.Item
                className="w-32 pl-3 py-1 text-gray-300 hover:cursor-pointer hover:bg-gray-500"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Dropdown.Item>

              <Dropdown.Item
                className="w-32 pl-3 py-1 text-gray-300 hover:cursor-pointer hover:bg-gray-500"
                onClick={handleLogout}
              >
                Logout
              </Dropdown.Item>
            </div>
          )}
        </div>
      </div>
      <div className="bg-sky-900 h-[220px] flex flex-col rounded-bl-3xl rounded-br-3xl justify-center items-center">
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">Find Doctor For ??</h2>
          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center mt-4"
          >
            <input
              className="border-2 rounded-l-full border-blue-400 shadow-md shadow-gray-800 h-12 px-4 w-[300px]"
              type="text"
              placeholder="Search body parts..."
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <button
              type="submit"
              className="bg-blue-400 rounded-r-full mx-1 p-2 flex items-center justify-center"
            >
              <MdOutlineSearch className="text-3xl text-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;