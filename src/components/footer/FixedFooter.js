import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";
import { GoPackageDependencies } from "react-icons/go";
import { GrTest } from "react-icons/gr";
import { TiHome } from "react-icons/ti";

function FixedFooter() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/welcome");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex w-full items-center fixed bottom-0">
      <div className="bg-sky-900 w-full h-20 text-white flex justify-around">
        <Link
          to="/welcome"
          className={`flex flex-col items-center justify-center ${
            activeLink === "/welcome" ? "text-sky-300" : ""
          }`}
          onClick={() => handleClick("/welcome")}
        >
          <TiHome className="text-lg mr-2" />
          <div className="text-xs">
            <p>Home</p>
          </div>
        </Link>
        <Link
          to="/packages"
          className={`flex flex-col items-center justify-center ${
            activeLink === "/packages" ? "text-sky-300" : ""
          }`}
          onClick={() => handleClick("/packages")}
        >
          <GoPackageDependencies className="text-lg mr-2" />
          <p className="text-xs">Packages</p>
        </Link>

        <div className=" flex flex-col items-center justify-center">
          <Link
            to="/consult"
            className="bg-sky-600 rounded-full p-6 flex items-center justify-center -translate-y-1/4 shadow-2xl"
          >
            <FaHeartbeat className="text-xl" />
          </Link>
          <p className="mb-6 text-xs -translate-y-3/4">Consult Now</p>
        </div>

        <Link
          to="/labtest"
          className={`flex flex-col items-center justify-center ${
            activeLink === "/labtest" ? "text-sky-300" : ""
          }`}
          onClick={() => handleClick("/labtest")}
        >
          <GrTest className="text-lg mr-2" />
          <p className="text-xs">Lab Test</p>
        </Link>

        <Link
          to="/contact"
          className={`flex flex-col items-center justify-center ${
            activeLink === "/contact" ? "text-sky-300" : ""
          }`}
          onClick={() => handleClick("/contact")}
        >
          <IoIosContact className="text-lg mr-2" />
          <p className="text-xs">Contact Us</p>
        </Link>
      </div>
    </div>
  );
}

export default FixedFooter;
