import React from "react";
import bloodImage from "../../assets/blood.png";
import { Link } from "react-router-dom";

function Blood() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={bloodImage} alt="bloodDeop" />

      <div className="flex bg-red-700 text-white p-3 rounded-2xl justify-evenly items-center mb-6 mt-20">
        <div className="flex flex-col font-bold mr-8 px-3 py-4">
          <div className="text-3xl">102231</div>
          <p className="text-center">Donor's</p>
        </div>

        <Link
          to="/body/blood/donate"
          className="bg-white text-red-700 px-8 py-1 font-bold rounded-lg mr-1"
        >
          Donate Blood
        </Link>
      </div>

      <div className="flex bg-red-700 text-white p-4  rounded-2xl justify-evenly items-center">
        <div className="flex flex-col font-bold mr-8 p-4">
          <div className="text-3xl">32231</div>
          <p className="text-center">Request's</p>
        </div>

        <Link
          to="/body/blood/require"
          className="bg-white text-red-700 px-8 py-1 font-bold rounded-lg"
        >
          Require Blood
        </Link>
      </div>
    </div>
  );
}

export default Blood;
