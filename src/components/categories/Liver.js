import React from "react";
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Kidney() {
  // const navigate = useNavigate();
  // const handleLogin = () => {
  //     // Perform authentication logic if needed

  //     // Navigate to the Welcome component
  //     navigate('./BookingComp/Eye1');
  // };
  return (
    <>
      <p className="m-3 text-2xl ml-4"> Liver </p>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex m-1 flex-col justify-center items-center mt-3 bg-sky-700 h-[200px]  w-[180px]">
          <img
            className="rounded-full"
            style={{ height: 100, width: 100 }}
            src="https://img.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg?size=626&ext=jpg&ga=GA1.1.890975536.1709918995&semt=sph"
            alt="/"
          />
          <div className="flex flex-col justify-center items-center text-white w-full">
            <p>Dr.Sen(MBBS/MD)</p>
            <p>rating - ⭐⭐⭐⭐</p>
          </div>
          <div className="m-2">
            <Link
              to="../BookingComp/Liver1"
              className=" bg-slate-200 px-4 p-1 rounded-3xl"
            >
              Book
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center m-1 items-center mt-3 bg-gray-400 h-[200px] w-[180px]">
          <img
            className="rounded-full grayscale"
            style={{ height: 100, width: 100 }}
            src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17814.jpg?size=626&ext=jpg&ga=GA1.1.890975536.1709918995&semt=sph"
            alt="/"
          />
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-gray-600">Dr.Raman(MBBS/MD)</p>
            <p className="text-gray-600">rating - ⭐⭐⭐⭐</p>
          </div>
          <div className="m-2">
            <button
              to="../BookingComp/Eye1"
              className=" bg-slate-200 text-gray-600 px-4  rounded-3xl"
            >
              Book
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center m-1 items-center mt-3 bg-gray-400 h-[200px] w-[180px]">
          <img
            className="rounded-full grayscale"
            style={{ height: 100, width: 100 }}
            src="https://img.freepik.com/free-photo/portrait-professional-medical-worker-posing-picture-with-arms-folded_1098-19293.jpg?size=626&ext=jpg&ga=GA1.1.890975536.1709918995&semt=sph"
            alt="/"
          />
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-gray-600">Dr.Raman(MBBS/MD)</p>
            <p className="text-gray-600">rating - ⭐⭐⭐⭐</p>
          </div>
          <div className="m-2">
            <button
              to="../BookingComp/Eye1"
              className=" bg-slate-200 text-gray-600 px-4  rounded-3xl"
            >
              Book
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center m-1 items-center mt-3 bg-gray-400 h-[200px] w-[180px]">
          <img
            className="rounded-full grayscale"
            style={{ height: 100, width: 100 }}
            src="https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.890975536.1709918995&semt=sph"
            alt="/"
          />
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-gray-600">Dr.Sikha(MBBS/MD)</p>
            <p className="text-gray-600">rating - ⭐⭐⭐⭐</p>
          </div>
          <div className="m-2">
            <button
              to="../BookingComp/Eye1"
              className=" bg-slate-200 text-gray-600 px-4  rounded-3xl"
            >
              Book
            </button>
          </div>
        </div>
      </div>
      <div className="flex ml-8 flex-col m-1 justify-center items-center mt-3 bg-gray-400 h-[200px] w-[180px]">
        <img
          className="rounded-full grayscale"
          style={{ height: 100, width: 100 }}
          src="https://img.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_171337-5068.jpg?size=626&ext=jpg&ga=GA1.1.890975536.1709918995&semt=sph"
          alt="/"
        />
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-gray-600">Dr.Sharma(MBBS/MD)</p>
          <p className="text-gray-600">rating - ⭐⭐⭐⭐</p>
        </div>
        <div className="m-2">
          <button
            to="../BookingComp/Eye1"
            className=" bg-slate-200 text-gray-600 px-4  rounded-3xl"
          >
            Book
          </button>
        </div>
      </div>
    </>
  );
}
