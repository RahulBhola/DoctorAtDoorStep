import React, { useState } from "react";
import subscribeTop from "../../assets/subscribeTop.jpg";
import subscribeBottom from "../../assets/subscribeBottom.jpg";
import { GoCircle } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import memberships from "../../assets/memberships.jpg";
import { useNavigate } from "react-router-dom";

function Subscribe() {
  const [basicDetails, setBasicDetails] = useState(false);
  const [goldDetails, setGoldDetails] = useState(false);
  const [premDetails, setPremDetails] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleBasicClick = () => {
    setBasicDetails(true);
    setGoldDetails(false);
    setPremDetails(false);
    setSelectedPlan(true);
  };

  const handleGoldClick = () => {
    setBasicDetails(false);
    setGoldDetails(true);
    setPremDetails(false);
    setSelectedPlan(true);
  };

  const handlePremClick = () => {
    setBasicDetails(false);
    setGoldDetails(false);
    setPremDetails(true);
    setSelectedPlan(true);
  };

  const navigate = useNavigate();

  const Subscribed = () => {
    if (selectedPlan) {
      navigate("/packages/subscribe/payment");
    } else {
      alert("Please select a membership plan.");
    }
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

      <div className="mt-6 text-lg ml-3 font-bold">Select Plan</div>
      <div className="text-xs ml-3 text-gray-500 font-bold">
        Introductory offers
      </div>

      <div className="flex justify-evenly mt-4">
        <div
          className={
            basicDetails
              ? "flex rounded-xl shadow-lg bg-sky-400 cursor-pointer"
              : "rounded-xl shadow-lg cursor-pointer"
          }
          onClick={handleBasicClick}
        >
          {basicDetails ? (
            <div className="flex">
              <div className="py-8 pl-6 flex flex-col text-center">
                <h5 className="text-white">6 months</h5>
                <del className="text-gray-300">Rs 1699</del>
                <h6 className="font-bold text-white">Rs 499</h6>
              </div>
              <FaCheckCircle className="text-2xl m-1 text-gray-100" />
            </div>
          ) : (
            <div className="flex">
              <div className="py-8 pl-6 flex flex-col items-center">
                <h5>6 months</h5>
                <del>Rs 1699</del>
                <h6 className="text-red-500 font-bold">Rs 499</h6>
              </div>
              <GoCircle className="text-2xl m-1 text-gray-300" />
            </div>
          )}
        </div>

        <div
          className={
            goldDetails
              ? "flex rounded-xl shadow-lg bg-sky-400 cursor-pointer"
              : "rounded-xl shadow-lg cursor-pointer"
          }
          onClick={handleGoldClick}
        >
          {goldDetails ? (
            <div className="flex">
              <div className="py-8 pl-6 flex flex-col text-center">
                <h5 className="text-white">3 months</h5>
                <del className="text-gray-300">Rs 899</del>
                <h6 className="font-bold text-white">Rs 249</h6>
              </div>
              <FaCheckCircle className="text-2xl m-1 text-gray-100" />
            </div>
          ) : (
            <div className="flex">
              <div className="py-8 pl-6 flex flex-col items-center">
                <h5>3 months</h5>
                <del>Rs 899</del>
                <h6 className="text-red-500 font-bold">Rs 249</h6>
              </div>
              <GoCircle className="text-2xl m-1 text-gray-300" />
            </div>
          )}
        </div>

        <div
          className={
            premDetails
              ? "flex rounded-xl shadow-lg bg-sky-400 cursor-pointer"
              : "rounded-xl shadow-lg cursor-pointer"
          }
          onClick={handlePremClick}
        >
          {premDetails ? (
            <div className="flex">
              <div className="py-8 pl-6 flex flex-col text-center">
                <h5 className="text-white">12 months</h5>
                <del className="text-gray-300">Rs 3299</del>
                <h6 className="font-bold text-white">Rs 999</h6>
              </div>
              <FaCheckCircle className="text-2xl m-1 text-gray-100" />
            </div>
          ) : (
            <div className="flex">
              <div className="py-8 pl-6 flex flex-col items-center">
                <h5>12 months</h5>
                <del>Rs 3299</del>
                <h6 className="text-red-500 font-bold">Rs 999</h6>
              </div>
              <GoCircle className="text-2xl m-1 text-gray-300" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 text-lg ml-3 font-bold">What you get</div>

      <div>
        <img
          src={subscribeTop}
          alt="offer details"
          className="mb-6 border-solid border-2 rounded-lg shadow-md"
        />
      </div>
      <div className="mt-6 mb-2 text-lg ml-3 font-bold">Top Hospitals</div>
      <div>
        <img
          src={subscribeBottom}
          alt="top hospitals"
          className="mb-16 border-solid border-2 rounded-lg shadow-md"
        />
      </div>
      <div
        className="fixed bottom-2 bg-sky-800 rounded-xl w-full text-center py-1 font-bold text-white text-xl cursor-pointer"
        onClick={Subscribed}
      >
        Subscibe
      </div>
    </div>
  );
}

export default Subscribe;
