import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

export default function Emergancy() {
  return (
    <div className='flex flex-col justify-center items-center bg-blue-200 h-screen w-full'>
        
        <img className='h-[200px] w-30 mb-8 rounded-full shadow-md' src='https://cdn.vectorstock.com/i/500p/24/94/symbol-of-medicine-cross-vector-15322494.avif' alt='/'/>
        <p className='font-semibold text-2xl'>Ambulance <span className='text-red-700 font-bold text-4xl'>24*7</span></p>
        <div className='mt-20'>
            <div className='flex m-2 justify-center items-center space-x-9'>
                <img className='h-20 w-20 rounded-full' src='https://cdn.vectorstock.com/i/500p/00/08/ambulance-car-icon-vector-20760008.avif' alt='/'/>
                <p className='font-semibold text-2xl text-gray-600'>100-00000</p>
                <FaPhoneAlt className='text-green-600'/>
            </div>
            <div className='flex m-2 justify-center items-center space-x-9'>
                <img className='h-20 w-20 rounded-full' src='https://cdn.vectorstock.com/i/500p/00/08/ambulance-car-icon-vector-20760008.avif' alt='/'/>
                <p className='font-semibold text-2xl text-gray-600'>100-00000</p>
                <FaPhoneAlt className='text-green-600'/>
            </div>
            <div className='flex m-2 justify-center items-center space-x-9'>
                <img className='h-20 w-20 rounded-full' src='https://cdn.vectorstock.com/i/500p/00/08/ambulance-car-icon-vector-20760008.avif' alt='/'/>
                <p className='font-semibold text-2xl text-gray-600'>100-00000</p>
                <FaPhoneAlt className='text-green-600'/>
            </div>
        </div>
      
    </div>
  )
}