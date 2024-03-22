// Welcome.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import { FaHome, FaPlus, FaCarSide } from "react-icons/fa";
import { BiSolidDonateBlood } from "react-icons/bi";
import { MdFace5 } from "react-icons/md";
import { GiLiver } from "react-icons/gi";
import { GiHeartOrgan } from "react-icons/gi";
import { GiKidneys } from "react-icons/gi";
import { BsFillLungsFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContactForm from "./ContactForm";
import { FaUserLarge } from "react-icons/fa6";
import { useCookies } from "react-cookie";

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
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Use the search input to dynamically navigate to the corresponding body part component
    if (searchInput.trim() !== "") {
      navigate(`/body/${searchInput.toLowerCase()}`);
    }
  };
  const [, , removeCookie] = useCookies(["token"]);
  const handleLogout = (req, res) => {
    removeCookie("token");
    navigate("/");
  };

  return (
    <div className="w-[100%]">
      <div>
        <div>
          <div className="bg-emerald-600 flex justify-between items-center px-4 py-2">
            <FaUserLarge className="bg-emerald-700 text-gray-300 p-1 rounded-full  h-10 w-9" />
            <p
              className="bg-emerald-700 rounded-full text-gray-300 px-2 hover:cursor-pointer hover:bg-emerald-800"
              onClick={handleLogout}
            >
              LogOut
            </p>
          </div>
          <div className="bg-emerald-600 h-[220px] flex flex-col rounded-bl-3xl rounded-br-3xl justify-center items-center">
            <div className="mt-[59px] ">
              <h2 className="ml-8 text-2xl font-bold text-white">
                Find Doctor For ??
              </h2>
              {/* Search Bar */}
              <form className="bg-emerald-600" onSubmit={handleSearchSubmit}>
                <input
                  className="border-2 rounded-full border-blue-400 shadow-md shadow-gray-800 h-[47px] m-2 mt-3 p-2 w-[300px]"
                  type="text"
                  placeholder="Search body parts..."
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button type="submit">
                  <MdOutlineSearch className="text-3xl text-white pt-2" />
                </button>
              </form>
            </div>
          </div>
          <p className="mt-6 text-2xl ml-3 text-gray-500">Services</p>
          <div className="flex justify-evenly items-center mt-4">
            <div className="m-2 flex flex-col justify-evenly items-center shadow-md shadow-gray-300 p-2 ">
              <FaHome className="text-2xl text-gray-500" />
              <p>Doorstop</p>
            </div>
            <div className="m-2 flex flex-col justify-evenly items-center shadow-md shadow-gray-300 p-2 ">
              <FaPlus className="text-2xl text-red-400" />
              <p>Emergancy</p>
            </div>
            <div className="m-2 flex flex-col justify-evenly items-center shadow-md shadow-gray-300 p-2 ">
              <BiSolidDonateBlood className="text-2xl text-rose-500" />
              <p>Blood</p>
            </div>
            <div className="m-2 flex flex-col justify-evenly items-center shadow-md shadow-gray-300 p-2 ">
              <FaCarSide className="text-2xl text-sky-300" />
              <p>Ambulance</p>
            </div>
          </div>

          <div className="w-[100%] mt-2">
            <p className="ml-3 text-2xl text-gray-400 mb-3">Recently Added</p>
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
              <div className="bg-emerald-200 flex p-2 justify-evenly h-35">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtW0o_Sr62KBhzXkgtyTyobTfHYQvX_4AQMQ&usqp=CAU"
                  alt="/"
                />
                <div>
                  <p className="font-bold text-2xl text-gray-700">
                    Dr.Aman(Eye specialist)
                  </p>
                  <p>rating - ⭐⭐⭐⭐</p>
                </div>
              </div>
              <div className="bg-emerald-200 flex p-2 justify-evenly h-29">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeEzeqSeG5MwgQd6_tq3q66w-XrYcZ8lZZA&usqp=CAU"
                  alt="/"
                />
                <div>
                  <p className="font-bold text-2xl text-gray-700">
                    Dr.Priti(Heart specialist)
                  </p>
                  <p>rating - ⭐⭐⭐⭐</p>
                </div>
              </div>
              <div className="bg-emerald-200 flex p-2 justify-evenly h-29">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtb060DQUEdqZ1susfsrFDR4rs0dg5l6dclg7FYmNCrCngJHC9Wqhigxb8l1ygZsiegd0&usqp=CAU"
                  alt="/"
                />
                <div>
                  <p className="font-bold text-2xl text-gray-700">
                    Dr.Roy(Eye specialist)
                  </p>
                  <p>rating - ⭐⭐⭐⭐</p>
                </div>
              </div>
              <div className="bg-emerald-200 flex p-2 justify-evenly h-29">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8tojHt_DQmb2VipaBxG7XfxZGent0PCaxg&usqp=CAU"
                  alt="/"
                />
                <div>
                  <p className="font-bold text-2xl text-gray-700">
                    Dr.Salini(Skin specialist)
                  </p>
                  <p>rating - ⭐⭐⭐⭐</p>
                </div>
              </div>
            </Carousel>
            ;
          </div>

          {/* Body Part Links */}
          <p className="text-2xl text-gray-500 ml-4 mt-2">Categories</p>
          <div className="flex flex-wrap m-3">
            <Link
              className="shadow-sm shadow-gray-400 p-2 px-6 m-3 flex"
              to="/body/skin"
            >
              <MdFace5 className="m-1 text-red-400 h-6 w-7" />
              Skin
            </Link>
            <Link
              className=" p-2 px-4 m-3 shadow-sm shadow-gray-400 flex"
              to="/body/Dental"
            >
              <FaPlus className="m-1 text-red-400 h-6 w-7" />
              Dental
            </Link>
            <Link
              className=" p-2 px-4 m-3 shadow-sm shadow-gray-400 flex"
              to="/body/eye"
            >
              <FaRegEye className="m-1 h-6 text-red-400 w-7" />
              Eye
            </Link>
            <Link
              className=" p-2 px-4 m-3 shadow-sm shadow-gray-400 flex"
              to="/body/heart"
            >
              <GiHeartOrgan className="m-1 text-red-400 h-6 w-7" />
              Heart
            </Link>
            <Link
              className=" p-2 px-4 m-3 shadow-sm shadow-gray-400 flex"
              to="/body/kidney"
            >
              <GiKidneys className="m-1 text-red-400 h-6 w-7" />
              Kidney
            </Link>
            <Link
              className=" p-2 px-4 m-3 shadow-sm shadow-gray-400 flex"
              to="/body/lungs"
            >
              <BsFillLungsFill className="m-1 text-red-400 h-6 w-7" />
              Lungs
            </Link>
            <Link
              className=" p-2 px-4 m-3 shadow-sm shadow-gray-400 flex"
              to="/body/liver"
            >
              <GiLiver className="m-1 h-6 w-7 text-red-400" />
              Liver
            </Link>
          </div>
        </div>
      </div>

      {/* Blood bank */}
      <div className="mt-4 flex justify-evenly bg-rose-100 p-4 w-full">
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
      {/* Contact */}
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Welcome;
