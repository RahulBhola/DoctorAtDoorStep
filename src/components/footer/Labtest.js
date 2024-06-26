import React, { useState } from "react";
import Navbar from "./FixedFooter";
import labtest from "../../assets/labtest.jpg";
import { CiTimer } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import Header from "../header/Header";
import labtestDetails from "../../assets/labtestDetails.jpg";
import { useNavigate } from "react-router-dom";


function Labtest() {
  const [selectedDuration, setSelectedDuration] = useState("15");

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };
  const labtestVarieties = [
    "Fasting Blood Glucose",
    "Lipid Profile Test",
    "HbA1c Genotyping",
    "RPR & HLA Typing",
    "Insulin Sensitivity Test",
    "Thyroid Function Test",
    "Vitamin D-Total Test",
    "Vitamin B-12 Test",
    "High Sensitivity CRP",
    "C-Reactive Protein (CRP)",
    "Serum Amylase",
    "Magnesium",
    "Phosphorus",
    "Calcium Serum",
    "LDH- Lactate Dehydrogenas",
    "Alkaline Phosatases",
    "Kidney Profile or KFT",
    "Electrolytes Group",
  ];
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("We will call you soon");
    navigate("/welcome");
  };
  return (
    <div>
      <Header />

      <div className="mt-6 text-2xl ml-3 text-gray-500 font-bold mb-2">
        Lab Test & Health Checks
      </div>
      <div className="relative top-1">
        <img
          src={labtest}
          alt="Lab Test"
          className="w-full h-48 opacity-85 rounded-2xl p-2"
          style={{ filter: "brightness(80%)" }}
        />
        <div className="absolute inset-0">
          <div className="text-white">
            <p className="p-6 text-xl font-bold">
              Lab test at home in
              <p className="text-lg text-amber-300">
                60 min with DoctorAtHome App
              </p>
            </p>
            <div className="flex p-6">
              <div className="flex">
                <CiTimer className="p-1 text-3xl rounded-full bg-green-300 text-black" />
                <p className="ml-2 font-bold">Reports in 6 hours</p>
              </div>
              <div className="flex ml-6">
                <GrGroup className="p-1 text-3xl rounded-full bg-green-300 text-black" />
                <p className="ml-2 font-bold">5L+ trusted users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-2xl ml-3 text-gray-500 font-bold mb-2">
        Lab Test & Health Checks
      </div>

      <div className="mb-32">
        <img
          src={labtestDetails}
          alt="Lab Test Details"
          className="mx-auto w-96 my-6 border-solid border-2 rounded-lg shadow-md"
        />
        <div className="mt-6 text-xl ml-5 text-gray-500 font-bold mb-2">Select Required test for booking</div>
        <div className="mt-4 mx-5">
          <select
            id="duration"
            value={selectedDuration}
            onChange={handleDurationChange}
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {labtestVarieties.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div
          className="flex items-center justify-center"
          onClick={handleSubmit}
        >
          <p
          className="rounded-xl py-4 bg-sky-800 text-white text-center font-bold uppercase mt-20 w-48 cursor-pointer hover:bg-sky-300"
          >Book Now</p>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Labtest;
