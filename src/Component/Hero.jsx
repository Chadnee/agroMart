import React from "react";
import img from "../assets/images/AgroMart (1).png";
import Button from "../share/Button/Button";

const Hero = () => {
  return (
    <div className="relative w-full" id="hero">
      <img src={img} className="w-full object-cover max-h-screen" alt="" />
      {/* <div className=' bg-gradient-to-tr via-stone-500 from-black/30 to-transparent absolute inset-0 '></div> */}
      {/* <div className=' bg-gradient-to-tr   to-transparent  absolute inset-0 '></div> */}
      <div className="md:w-6/12 lg:w-6/12 flex flex-col  justify-center absolute md:pl-16 lg:pl-28 pl-7 inset-0 lg:-top-16 md:-top-16 -top-10">
        <div className=" text-white lg:space-y-7 md:space-y-5 space-y-2 mt-10 text-start flex flex-col">
         <p className="lg:text-[50px] md:text-5xl text-2xl font-bold">Agromart</p>
          <p 
          className=" lg:text-[10px] md:text-[10px] text-[5px] lg:tracking-[3px] tracking-[2px] uppercase font-bold">
            Grow Better, Harvest More
            {/* Organic Compost & Fertilizers Firm */}
          </p>
          <p className="text-sm  md:block lg:block hidden">
            Your one-stop solution for fertilizers, compost, and essential agri-products — now delivered to your doorstep with ease and reliability. Your trusted partner for fertilizers, compost, and essential agri-products. Save time, cut hassle, and get everything you need in just a few clicks. Join thousands of farmers choosing smarter agriculture today.
          </p>
          {/* <button className='border hover hover:bg-green-600 border-[#eec10e] px-5 rounded-md py-1'>Shop now</button>  [#92b70b]*/}
          <button
            style={{ letterSpacing: ".5px" }}
            className="lg:px-6 md:px-6 w-fit px-3 lg:text-[12px] md:text-[17px] lg:text-sm text-[8px] py-1 overflow-hidden  bg-[#006838] text-white rounded-md shadow-lg
            duration-1000 easy-in-out hover:bg-yellow-600 hover:shadow-lg hover:scale-105"
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
// style={{ letterSpacing: ".5px" }}
//       className={`
//         relative px-10 text-[17px] py-1 overflow-hidden
//         ${bgColor} ${textColor} font-semibold ${rounded}
//         shadow-lg
//         transition-colors duration-700 ease-in-out
//         hover:bg-blue-950 hover:text-sky-400
//         hover:shadow-xl hover:scale-105
//       `}
