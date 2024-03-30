import React from "react";
import Navbar from "./FixedFooter";
import labtest from "../../assets/labtest.jpg";
import { CiTimer } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import Header from "../header/Header";

function Labtest() {
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
        />
        <div className="absolute inset-0">
          <div className="text-white">
            <p className="p-6 text-xl font-bold">
              Lab test at home in
              <p className="text-2xl text-amber-300">
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

      <Navbar />
    </div>
  );
}

export default Labtest;
