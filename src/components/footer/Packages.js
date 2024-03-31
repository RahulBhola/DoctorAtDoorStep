import React from "react";
import Navbar from "./FixedFooter";
import packages from "../../assets/packages.jpg";
import packagesTop from "../../assets/packagesTop.jpg";
import packagesTopMost from "../../assets/packagesTopMost.jpg";
import { useNavigate } from "react-router-dom";
import memberships from "../../assets/memberships.jpg";

function Packages() {
  const navigate = useNavigate();

  const subscribe = () => {
    navigate("/packages/subscribe");
  };

  return (
    <div>
    <div className="relative">
    <img
      src={memberships}
      alt="membershipImage"
      className="h-52 w-full rounded-b-3xl"
      style={{ filter: "brightness(40%)" }}
    />
    <div className="absolute inset-0 p-6 text-center font-bold text-2xl text-white">
      DoctorAtHome Membership Plans
    </div>
  </div>
      <div className="mt-6 mb-2 text-lg ml-3 text-gray-500 font-bold">
        Select Plan
      </div>
      <div className="p-4">
        <img src={packagesTopMost} alt="benefits" className="border-solid border-2 rounded-lg shadow-md cursor-pointer" 
        onClick={subscribe}/>
      </div>
      <div className="mb-8 text-lg ml-3 text-gray-500 font-bold">
        Your DoctorAtHome ONE Membership Benefits
      </div>
      <div className="m-4 bg-sky-50 rounded-xl border-solid border-2 rounded-lg shadow-md">
        <div className="p-4 text-lg ml-3 text-gray-500 font-bold">
          Exclusive Discounts & Benefits
        </div>
        <img src={packagesTop} alt="benefits" className="pl-2 pr-2" />
      </div>
      <div className="mb-28">
        <img
          src={packages}
          alt="offers"
          className="my-6 border-solid border-2 rounded-lg shadow-md"
        />
      </div>
      <Navbar />
    </div>
  );
}

export default Packages;
