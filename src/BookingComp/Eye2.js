import React, { useState } from 'react';
import { format } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'tailwindcss/tailwind.css';


export default function Eye2() {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const availableTimeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM'];
  
    const handleDateChange = newDate => {
      setDate(newDate);
      setIsSubmitted(false); // Reset submission on date change
    };
  
    const handleSubmit = () => {
      setIsSubmitted(true);
      alert(`Your appointment is confirmed for ${format(date, 'PP')} at ${timeSlot}.`);
    };
  
  return (
    <div className='justify-center bg-sky-900 h-[850px] items-center flex'>
        
      <div className=" p-4 flex flex-col mb-9 justify-center items-center">
      <div className='h-[200px] w-full mt-7 p-3 flex bg-sky-500'>
        <img className='h-40 w-44 mt-5 rounded-full' src='https://img.freepik.com/free-psd/doctor-preparing-routine-medical-check_23-2150493277.jpg?size=626&ext=jpg&ga=GA1.1.890975536.1709918995&semt=sph' alt='/'/>
        <p className='text-2xl font-bold mt-5'>Dr.Jamini| Eye Specialist</p>
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
        <button
          onClick={handleSubmit}
          className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 m-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          disabled={!timeSlot}
        >
          Submit
        </button>
        {isSubmitted && <p className=" text-green-500 ml-6">Appointment confirmed for {format(date, 'PP')} at {timeSlot}.</p>}
      </div>
    </div>
  )
}