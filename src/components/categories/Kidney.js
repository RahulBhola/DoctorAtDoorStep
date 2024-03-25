import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Kidney() {
    // const navigate = useNavigate();
    // const handleLogin = () => {
    //     // Perform authentication logic if needed

    //     // Navigate to the Welcome component
    //     navigate('./BookingComp/Eye1');
    // };
    return (
        <>
            <p className='m-3 text-2xl ml-4'> Kidney </p>
            <div className='flex flex-wrap justify-center items-center'>

                <div className='flex m-1 flex-col justify-center items-center mt-3 bg-sky-700 h-[200px]  w-[180px]'>
                    <img className='rounded-full' style={{ height: 100, width: 100 }} src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D' alt='/' />
                    <div className='flex flex-col justify-center items-center text-white w-full'>
                        <p>Dr.Saha(MBBS/MD)</p>
                        <p>rating - ⭐⭐⭐⭐</p>
                    </div>
                    <div className='m-2'>
                        <Link to="../BookingComp/Kideny1" className=' bg-slate-200 px-4 p-1 rounded-3xl'>Book</Link>  
                    </div>
                </div>
                <div className='flex flex-col m-1 justify-center items-center mt-3 bg-gray-400 h-[200px] w-[180px]'>
                    <img className='rounded-full grayscale' style={{ height: 100, width: 100 }} src='https://img.freepik.com/free-photo/doctors-day-handsome-brunette-cute-guy-medical-gown-with-crossed-hands_140725-162942.jpg?size=626&ext=jpg&ga=GA1.1.890975536.1709918995&semt=sph' alt='/' />
                    <div className='flex flex-col justify-center items-center w-full'>
                        <p className='text-gray-600'>Dr.Raman(MBBS/MD)</p>
                        <p className="text-gray-600">rating - ⭐⭐⭐⭐</p>
                    </div>
                    <div className='m-2'>
                        <button to="../BookingComp/Eye1" className=' bg-slate-200 text-gray-600 px-4  rounded-3xl'>Book</button>
                    </div>
                </div>
                <div className='flex flex-col m-1 justify-center items-center mt-3 bg-gray-400 h-[200px] w-[180px]'>
                    <img className='rounded-full grayscale' style={{ height: 100, width: 100 }} src='https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.890975536.1709918995&semt=sph' alt='/' />
                    <div className='flex flex-col justify-center items-center w-full'>
                        <p className='text-gray-600'>Dr.Rakhi(MBBS/MD)</p>
                        <p className="text-gray-600">rating - ⭐⭐⭐⭐</p>
                    </div>
                    <div className='m-2'>
                    <button to="../BookingComp/Eye1" className=' bg-slate-200 text-gray-600 px-4  rounded-3xl'>Book</button>
                    </div>
                </div>
                <div className='flex flex-col m-1 justify-center items-center mt-3 bg-gray-400 h-[200px] w-[180px]'>
                    <img className='rounded-full grayscale' style={{ height: 100, width: 100 }} src='https://img.freepik.com/free-photo/handsome-smiling-medical-professional-examining-with-stethoscope-colored-background_662251-366.jpg?size=626&ext=jpg&ga=GA1.1.890975536.1709918995&semt=sph' alt='/' />
                    <div className='flex flex-col justify-center items-center w-full'>
                        <p className='text-gray-600'>Dr.Raman(MBBS/MD)</p>
                        <p className="text-gray-600">rating - ⭐⭐⭐⭐</p>
                    </div>
                    <div className='m-2'>
                    <button to="../BookingComp/Eye1" className=' bg-slate-200 text-gray-600 px-4  rounded-3xl'>Book</button>
                    </div>
                </div>
                
                
            </div>
            <div className='flex ml-3 flex-col justify-center m-1 items-center mt-3 bg-gray-400 h-[200px] w-[180px]'>
                    <img className='rounded-full grayscale' style={{ height: 100, width: 100 }} src='https://img.freepik.com/free-photo/portrait-professional-medical-worker-posing-picture-with-arms-folded_1098-19293.jpg?size=626&ext=jpg&ga=GA1.1.890975536.1709918995&semt=sph' alt='/' />
                    <div className='flex flex-col justify-center items-center w-full'>
                        <p className='text-gray-600'>Dr.Raman(MBBS/MD)</p>
                        <p className="text-gray-600">rating - ⭐⭐⭐⭐</p>
                    </div>
                    <div className='m-2'>
                        <button to="../BookingComp/Eye1" className=' bg-slate-200 text-gray-600 px-4  rounded-3xl'>Book</button>
                    </div>
                </div>
        </>
    )
}