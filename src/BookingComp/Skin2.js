import React, { useState } from 'react';
import { format } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'tailwindcss/tailwind.css';
import { FaGooglePay, FaAmazonPay } from "react-icons/fa";
import { BiLogoPaypal } from "react-icons/bi";
import { SiPaytm } from "react-icons/si";

export default function Skin1() {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState('15');
  const [isScannerVisible, setIsScannerVisible] = useState(true);

  const availableTimeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM'];
  const durationPriceMap = {
    '15': 100,
    '30': 150,
    '45': 200,
    '60': 250
  };
  const handlePay = () => {
    const confirmation = window.confirm(`Your payment request is confirmed. Amount: Rs-${paymentAmount}. Time: ${selectedDuration} min. Proceed?`);
    if (confirmation) {
      setIsScannerVisible(false);
    }
  };

  const handleDateChange = newDate => {
    setDate(newDate);
    setIsSubmitted(false); // Reset submission on date change
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setPaymentAmount(durationPriceMap[selectedDuration]);
    alert(`Your appointment is confirmed for ${format(date, 'PP')} at ${timeSlot}.`);
  };



  const handleDurationChange = event => {
    setSelectedDuration(event.target.value);
  };

  return (
    <div className='justify-center bg-sky-900 h-full items-center flex'>

      <div className=" p-4 flex flex-col mb-9 justify-center items-center">
        <div className='h-[200px] w-full mt-7 p-3 flex bg-sky-500'>
          <img className='h-40 w-44 mt-2 rounded-full' src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D' alt='/' />
          <div>
            <p className='text-2xl ml-3 font-bold mt-5'>Dr.Puja| Skin Specialist</p>
            <p className='p-2 ml-3 font-bold text-green-900'>Starts 15min/rs100</p>
          </div>
        </div>
        <p className='text-2xl font-medium m-4'>Confirm Your Slot</p>
        <Calendar onChange={handleDateChange} value={date} className="mb-4 p-4 bg-inherit text-red-200" />
        <div className="">
          <label htmlFor="timeSlot" className="block mb-2  font-medium text-2xl text-white">Select a time slot:</label>
          <select
            id="timeSlot"
            value={timeSlot}
            onChange={e => setTimeSlot(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option className='' value="">Select time</option>
            {availableTimeSlots.map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="duration" className="block mb-2 font-medium text-2xl text-white">Select duration (min):</label>
          <select
            id="duration"
            value={selectedDuration}
            onChange={handleDurationChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            <option value="45">45 min</option>
            <option value="60">60 min</option>
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 m-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          disabled={!timeSlot}
        >
          Submit
        </button>
        {isSubmitted && (
          <>
            {isScannerVisible && <p className='text-blue-200 text-1xl'> Pay to proceed further</p>}
            {isScannerVisible && <img src="https://cdn.pixabay.com/photo/2021/12/12/16/10/qr-6865526_640.png" alt="Scanner" className="mt-4 h-[300px] rounded-lg w-[300px] border-2 border-blue-400 p-6" />}
            {isScannerVisible && <div className='flex m-1 space-x-6'>
              <FaGooglePay className='h-8 w-8 bg-red-400 rounded-full' />
              <BiLogoPaypal className='h-8 w-8 bg-sky-400 rounded-full' />
              <SiPaytm className='h-8 w-8 bg-blue-600 rounded-full' />
              <FaAmazonPay className='h-8 w-8 bg-yellow-400 rounded-full' />
            </div>}
            {isScannerVisible && <button
              onClick={handlePay}
              className="text-white bg-blue-500 focus:ring-4 m-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-3 text-center"
            >
              Pay -{paymentAmount}
            </button>}
          </>
        )}
        {isScannerVisible ? null : <p className="text-2xl font-medium text-green-500">Booked ✅</p>}
      </div>
    </div>
  )
}