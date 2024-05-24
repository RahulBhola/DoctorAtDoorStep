import React from 'react'
import emg from "../../assets/emergency.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Emergancy() {
  const navigate = useNavigate();

  return (
    <div>
        <img src={emg} alt="emergency" className="rounded-b-3xl"/>
        <div className="flex flex-col items-center rounded-3xl p-6">
            <p className='uppercase text-3xl font-bold text-center mt-4 mb-2 text-red-600'>
                Emergency Assistance for Customers
            </p>
            <p className='text-center text-gray-600 mb-6'>
                Click in button below to call in case of emergency we will reach you out in 30 seconds.
            </p>
        <button className="flex justify-center items-center bg-red-500 text-white py-2 px-4 rounded-full shadow hover:bg-red-600 transition duration-300 w-full py-3 "
        onClick={() => navigate("/body/Emergancy/EmergencyTwo")}>
            <p>Let's get started</p>
            <FaArrowRight className='ml-2'/>
        </button>
        </div>
    </div>
)
}