// Welcome.js
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skinImage from "../assets/skin.jpg";
import dentalImage from "../assets/dental.jpg";
import eyeImage from "../assets/eye.jpg";
import heartImage from "../assets/heart.jpg";
import kidneyImage from "../assets/kidney.jpeg";
import liverImage from "../assets/liver.jpg";
import lungsImage from "../assets/lungs.jpg";
import ambulanceImage from "../assets/ambulance.jpg";
import bloodImage from "../assets/blood.jpg";
import emergencyImage from "../assets/emergency.jpg";
import doorstepImage from "../assets/doorstep.png";
import Navbar from "./footer/FixedFooter";
import Header from "./header/Header";

const Welcome = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="w-[100%]">
      <div>
        <div>
          <Header />

          <p className="mt-6 text-2xl ml-3 text-gray-500 font-bold">Services</p>
          <div className="flex justify-evenly items-center mt-4">
            <div className="m-2 flex flex-col justify-evenly items-center shadow-md shadow-gray-300 p-2 ">
              <img
                src={doorstepImage}
                alt="doorstep"
                className="h-28 w-28 rounded-xl object-cover"
              />
              <p>Doorstop</p>
            </div>
            <div className="m-2 flex flex-col justify-evenly items-center shadow-md shadow-gray-300 p-2 ">
              <Link to="/body/Emergancy">
                <img
                  src={emergencyImage}
                  alt="emergency"
                  className="h-28 w-28 rounded-xl object-cover"
                />
                <p>Emergancy</p>
              </Link>
            </div>
            <div className="m-2 flex flex-col justify-evenly items-center shadow-md shadow-gray-300 p-2 ">
              <Link to="/body/blood">
                <img
                  src={bloodImage}
                  alt="blood"
                  className="h-28 w-28 rounded-xl object-cover"
                />
              </Link>
              <Link to="/body/blood">Blood</Link>
            </div>
            <div className="m-2 flex flex-col justify-evenly items-center shadow-md shadow-gray-300 p-2 ">
              <Link to="/body/ambulance">
                <img
                  src={ambulanceImage}
                  alt="ambulance"
                  className="h-28 w-28 rounded-xl object-cover"
                />
                <p>Ambulance</p>
              </Link>
            </div>
          </div>

          <div className="w-[100%] mt-2">
            <p className="ml-3 text-2xl text-gray-400 font-bold">
              Recently Added
            </p>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1500}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              //   deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              // itemClass="carousel-item-width-1000-px"
            >
              <div className="bg-sky-200 flex p-2 h-40 m-4 mb-6 rounded-xl">
                <div className="p-6">
                  <p className="font-bold text-2xl text-gray-700">
                    Dr.Aman (Eye specialist)
                  </p>
                  <p>Rating - ⭐⭐⭐⭐</p>
                </div>
                <img
                  className="h-30 w-40 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtW0o_Sr62KBhzXkgtyTyobTfHYQvX_4AQMQ&usqp=CAU"
                  alt="/"
                />
              </div>
              <div className="bg-sky-200 flex p-2 h-40 m-4 rounded-xl">
                <div className="p-6">
                  <p className="font-bold text-2xl text-gray-700">
                    Dr.Priti (Heart specialist)
                  </p>
                  <p>Rating - ⭐⭐⭐⭐</p>
                </div>
                <img
                  className="h-30 w-40 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeEzeqSeG5MwgQd6_tq3q66w-XrYcZ8lZZA&usqp=CAU"
                  alt="/"
                />
              </div>
              <div className="bg-sky-200 flex p-2 h-40 m-4 rounded-xl">
                <div className="p-6">
                  <p className="font-bold text-2xl text-gray-700">
                    Dr.Roy (Eye specialist)
                  </p>
                  <p>Rating - ⭐⭐⭐⭐</p>
                </div>
                <img
                  className="h-30 w-40 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtb060DQUEdqZ1susfsrFDR4rs0dg5l6dclg7FYmNCrCngJHC9Wqhigxb8l1ygZsiegd0&usqp=CAU"
                  alt="/"
                />
              </div>
              <div className="bg-sky-200 flex p-2 h-40 m-4 rounded-xl">
                <div className="p-6">
                  <p className="font-bold text-2xl text-gray-700">
                    Dr.Salini (Skin specialist)
                  </p>
                  <p>Rating - ⭐⭐⭐⭐</p>
                </div>
                <img
                  className="h-30 w-40 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8tojHt_DQmb2VipaBxG7XfxZGent0PCaxg&usqp=CAU"
                  alt="/"
                />
              </div>
            </Carousel>
          </div>

          <p className="text-2xl text-gray-500 ml-4 m-2 font-bold">
            Categories
          </p>
          <div className="flex flex-wrap justify-around text-sky-800 font-bold p-2 bg-sky-800 rounded-3xl">
            <Link
              className="bg-sky-200 rounded-xl my-3 flex flex-col items-center mt-4"
              to="/body/skin"
            >
              <img
                src={skinImage}
                alt="Skin"
                className="h-32 w-32 rounded-xl object-cover"
              />
              <p className="text-center">Skin</p>
            </Link>

            <Link
              className="bg-sky-200 rounded-xl my-3 flex flex-col items-center mt-4"
              to="/body/Dental"
            >
              <img
                src={dentalImage}
                alt="Dental"
                className="h-32 w-32 rounded-xl object-cover"
              />
              <p className="text-center">Dental</p>
            </Link>

            <Link
              className="bg-sky-200 rounded-xl my-3 flex flex-col items-center mt-4"
              to="/body/eye"
            >
              <img
                src={eyeImage}
                alt="Eye"
                className="h-32 w-32 rounded-xl object-cover"
              />
              <p className="text-center">Eye</p>
            </Link>

            <Link
              className="bg-sky-200 rounded-xl mb-3 flex flex-col items-center"
              to="/body/heart"
            >
              <img
                src={heartImage}
                alt="Heart"
                className="h-28 w-32 rounded-xl object-cover"
              />
              <p className="text-center">Heart</p>
            </Link>
            <Link
              className="bg-sky-200 rounded-xl mb-3 flex flex-col items-center"
              to="/body/kidney"
            >
              <img
                src={kidneyImage}
                alt="Kidney"
                className="h-28 w-32 rounded-xl object-cover"
              />
              <p className="text-center">Kidney</p>
            </Link>
            <Link
              className="bg-sky-200 rounded-xl mb-3 flex flex-col items-center"
              to="/body/lungs"
            >
              <img
                src={lungsImage}
                alt="Lungs"
                className="h-28 w-32 rounded-xl object-cover"
              />
              <p className="text-center">Lungs</p>
            </Link>
            <Link
              className="bg-sky-200 rounded-xl mb-3 flex flex-col items-center"
              to="/body/liver"
            >
              <img
                src={liverImage}
                alt="Liver"
                className="h-28 w-32 rounded-xl object-cover"
              />
              <p className="text-center">Liver</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Blood bank */}
      <div className="mt-4 mb-28 flex justify-evenly bg-sky-200 p-4 w-full">
        <img
          className="h-10 mt-2 w-12 bg-pink-200 rounded-full"
          src="https://oneblood.scene7.com/is/image/oneblood/About-blood-drop?ts=1701100554337&$BRBangle$&dpr=off"
          alt="/"
        />
        <div className="flex flex-col">
          <p className="text-2xl text-gray-600 font-bold">Blood bank service</p>
          <p>
            available currently -{" "}
            <span className="text-red-600 font-semibold">AB+ A+ O+ AB</span>-
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Welcome;
