import React, { useState } from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa6";
import { FaLungs } from "react-icons/fa";
import { GiStomach } from "react-icons/gi";
import { GiBleedingEye } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function AmbulanceBooking() {
  const [heartSelect, setHeartSelect] = useState(false);
  const [bleedingSelect, setBleedingSelect] = useState(false);
  const [bodySelect, setBodySelect] = useState(false);
  const [headacheSelect, setHeadacheSelect] = useState(false);
  const [respiratorySelect, setRespiratorySelect] = useState(false);
  const [vomitingSelect, setVomitingSelect] = useState(false);
  const [eyeSelect, setEyeSelect] = useState(false);
  const [otherSelect, setOtherSelect] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleHeartSelect = () => {
    setHeartSelect(true);
    setBleedingSelect(false);
    setBodySelect(false);
    setHeadacheSelect(false);
    setRespiratorySelect(false);
    setVomitingSelect(false);
    setEyeSelect(false);
    setOtherSelect(false);
    setSelectedPlan(true);
  };

  const handleBleedingSelect = () => {
    setHeartSelect(false);
    setBleedingSelect(true);
    setBodySelect(false);
    setHeadacheSelect(false);
    setRespiratorySelect(false);
    setVomitingSelect(false);
    setEyeSelect(false);
    setOtherSelect(false);
    setSelectedPlan(true);
  };

  const handleBodySelect = () => {
    setHeartSelect(false);
    setBleedingSelect(false);
    setBodySelect(true);
    setHeadacheSelect(false);
    setRespiratorySelect(false);
    setVomitingSelect(false);
    setEyeSelect(false);
    setOtherSelect(false);
    setSelectedPlan(true);
  };
  const handleHeadacheSelect = () => {
    setHeartSelect(false);
    setBleedingSelect(false);
    setBodySelect(false);
    setHeadacheSelect(true);
    setRespiratorySelect(false);
    setVomitingSelect(false);
    setEyeSelect(false);
    setOtherSelect(false);
    setSelectedPlan(true);
  };
  const handleRespiratorySelect = () => {
    setHeartSelect(false);
    setBleedingSelect(false);
    setBodySelect(false);
    setHeadacheSelect(false);
    setRespiratorySelect(true);
    setVomitingSelect(false);
    setEyeSelect(false);
    setOtherSelect(false);
    setSelectedPlan(true);
  };
  const handleVomitingSelect = () => {
    setHeartSelect(false);
    setBleedingSelect(false);
    setBodySelect(false);
    setHeadacheSelect(false);
    setRespiratorySelect(false);
    setVomitingSelect(true);
    setEyeSelect(false);
    setOtherSelect(false);
    setSelectedPlan(true);
  };
  const handleEyeSelect = () => {
    setHeartSelect(false);
    setBleedingSelect(false);
    setBodySelect(false);
    setHeadacheSelect(false);
    setRespiratorySelect(false);
    setVomitingSelect(false);
    setEyeSelect(true);
    setOtherSelect(false);
    setSelectedPlan(true);
  };
  const handleSetOtherSelect = () => {
    setHeartSelect(false);
    setBleedingSelect(false);
    setBodySelect(false);
    setHeadacheSelect(false);
    setRespiratorySelect(false);
    setVomitingSelect(false);
    setEyeSelect(false);
    setOtherSelect(true);
    setSelectedPlan(true);
  };

  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedPlan) {
      navigate("/body/ambulance/details");
    } else {
      alert("Please select your Requirement.");
    }
  };

  return (
    <div>
      <p className="text-sky-600 text-3xl px-6 pt-6 mt-6">Hey,</p>
      <p className="text-sky-700 font-bold text-3xl px-6">What happened?</p>
      <p className="text-blue-600 text-xl px-6 pt-4">
        Select an issue and know the first aid procedure
      </p>
      <div className="flex space-x-6 p-6">
        <div
          className={
            heartSelect
              ? "flex flex-col items-center p-1 pt-4 bg-pink-700 text-pink-200 w-1/3 rounded-xl"
              : "flex flex-col items-center p-1 pt-4 bg-pink-200 text-pink-700 w-1/3 rounded-xl"
          }
          onClick={handleHeartSelect}
        >
          <FaHeartPulse className="text-3xl" />
          <p className="text-sm mt-5 font-bold mb-2">Heart Attack</p>
        </div>

        <div
          className={
            bleedingSelect
              ? "flex flex-col items-center p-1 pt-4 bg-orange-700 text-orange-200 w-1/3 rounded-xl"
              : "flex flex-col items-center p-1 pt-4 bg-orange-200 text-orange-700 w-1/3 rounded-xl"
          }
          onClick={handleBleedingSelect}
        >
          <FaDroplet className="text-3xl" />
          <p className="text-sm mt-5 font-bold mb-2">Bleeding</p>
        </div>

        <div
          className={
            bodySelect
              ? "flex flex-col items-center p-1 pt-4 bg-sky-700 text-sky-200 w-1/3 rounded-xl"
              : "flex flex-col items-center p-1 pt-4 bg-sky-200 text-sky-700 w-1/3 rounded-xl"
          }
          onClick={handleBodySelect}
        >
          <FaThermometerThreeQuarters className="text-3xl" />
          <p className="text-sm mt-5 font-bold mb-2">Body Heat</p>
        </div>
      </div>

      <div className="flex space-x-6 px-6">
        <div
          className={
            headacheSelect
              ? "flex flex-col items-center p-1 pt-4 bg-blue-700 text-blue-200 w-1/3 rounded-xl"
              : "flex flex-col items-center p-1 pt-4 bg-blue-200 text-blue-700 w-1/3 rounded-xl"
          }
          onClick={handleHeadacheSelect}
        >
          <FaHeadSideVirus className="text-3xl" />
          <p className="text-sm mt-5 font-bold mb-2">Headache</p>
        </div>

        <div
          className={
            respiratorySelect
              ? "flex flex-col items-center p-1 pt-4 bg-blue-800 text-blue-300 w-1/3 rounded-xl"
              : "flex flex-col items-center p-1 pt-4 bg-blue-300 text-blue-800 w-1/3 rounded-xl"
          }
          onClick={handleRespiratorySelect}
        >
          <FaLungs className="text-3xl" />
          <p className="text-sm mt-5 font-bold mb-2">Respiratory</p>
        </div>

        <div
          className={
            vomitingSelect
              ? "flex flex-col items-center p-1 pt-4 bg-red-700 text-red-300 w-1/3 rounded-xl"
              : "flex flex-col items-center p-1 pt-4 bg-red-300 text-red-700 w-1/3 rounded-xl"
          }
          onClick={handleVomitingSelect}
        >
          <GiStomach className="text-3xl" />
          <p className="text-sm mt-5 font-bold mb-2">Vomiting</p>
        </div>
      </div>
      <div className="flex space-x-6 p-6 ">
        <div
          className={
            eyeSelect
              ? "flex flex-col items-center p-1 pt-4 bg-red-700 text-red-200 w-1/3 rounded-xl"
              : "flex flex-col items-center p-1 pt-4 bg-red-200 text-red-700 w-1/3 rounded-xl"
          }
          onClick={handleEyeSelect}
        >
          <GiBleedingEye className="text-3xl" />
          <p className="text-sm mt-5 font-bold mb-2">Eye</p>
        </div>

        <div
          className={
            otherSelect
              ? "flex flex-col items-center p-1 pt-4 bg-pink-800 text-pink-300 w-2/3 rounded-xl"
              : "flex flex-col items-center p-1 pt-4 bg-pink-300 text-pink-800 w-2/3 rounded-xl"
          }
          onClick={handleSetOtherSelect}
        >
          <HiDotsHorizontal className="text-3xl" />
          <p className="text-sm mt-5 font-bold mb-2">Others</p>
        </div>
      </div>
      <p
        className="fixed bottom-0 bg-sky-800 text-white uppercase p-6 w-full text-center font-bold text-2xl hover:bg-sky-300 cursor-pointer"
        onClick={handleContinue}
      >
        Continue
      </p>
    </div>
  );
}

export default AmbulanceBooking;
