import React from "react";
import { FaGooglePay, FaAmazonPay } from "react-icons/fa";
import { BiLogoPaypal } from "react-icons/bi";
import { SiPaytm } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const handlePay = () => {
    alert("succcessfull");
    navigate("/welcome");
  };
  
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl font-bold text-gray-600 mt-6"> Pay to proceed further</p>
      <img
        src="https://cdn.pixabay.com/photo/2021/12/12/16/10/qr-6865526_640.png"
        alt="Scanner"
        className="mt-20 h-[300px] rounded-lg w-[300px] border-2 border-gray-400 p-6"
      />
      <div className="flex mt-12 space-x-6">
        <FaGooglePay className="h-8 w-8 bg-red-400 rounded-full" />
        <BiLogoPaypal className="h-8 w-8 bg-sky-400 rounded-full" />
        <SiPaytm className="h-8 w-8 bg-blue-600 rounded-full" />
        <FaAmazonPay className="h-8 w-8 bg-yellow-400 rounded-full" />
      </div>
      <button
        onClick={handlePay}
        className="fixed bottom-0 text-white bg-blue-500 focus:ring-4 m-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-3 text-center"
      >
        Scan & Pay
      </button>
    </div>
  );
}

export default Payment;
