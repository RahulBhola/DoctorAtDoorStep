import React from 'react';
import countdownImage from '../../assets/timer.png'; 
import { IoMdCall } from "react-icons/io";

const EmergencySupport = () => {
  return (
    <div className="flex flex-col items-center bg-white p-6">
      <h1 className="text-2xl font-bold text-center mb-2">We’re Sending Emergency Support</h1>
      <p className="text-center text-gray-500 mb-6">Don't worry our support team will contact you in next...</p>
      <div className="mb-6">
        <img src={countdownImage} alt="00:30" className="w-52 h-52"/>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
          <div>
            <p className="font-semibold">Emergency Doctor Contact</p>
            <p className="text-gray-500">408-747-7238</p>
          </div>
          <a href="tel:4087477238" className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center">
            <IoMdCall className='text-2xl'/>
          </a>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
          <div>
            <p className="font-semibold">Emergency Ambulance Contact</p>
            <p className="text-gray-500">408-747-7239</p>
          </div>
          <a href="tel:4087477239" className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center">
            <IoMdCall className='text-2xl'/>
          </a>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <p className="font-semibold">Emergency Hospital Contact</p>
            <p className="text-gray-500">408-555-6740</p>
          </div>
          <a href="tel:4085556740" className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center">
            <IoMdCall className='text-2xl'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default EmergencySupport;
