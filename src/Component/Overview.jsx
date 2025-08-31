import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
  return (
   <div className="">
     <div className="flex mb-28 flex-col items-center mt-28 lg:w-6/12 md:w-6/12 justify-center lg:mx-auto md:mx-auto mx-3">
      <p className="pb-2 font-bold text-2xl font-serif">Overview</p>
      <span className="pb-4 italic font-thin text-sm text-[#3d6b08]">
        --“Trusted Products for Better Harvests”--
      </span>
      <div className="grid md:grid-cols-2 w-full lg:grid-cols-2 grid-cols-1 gap-10 items-center lg:justify-between mx-3 md:justify-between justify-center">
        <figure>
            <img className="w-full h-[250px]" src="https://plus.unsplash.com/premium_photo-1661900320520-f180a50463d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </figure>
        <div>
           <p className="">  <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-yellow-400 mb-2" />
           <span className="text-center italic text-stone-600"> Our farm supply website is dedicated to providing high-quality seeds, fertilizers, tools, and other essentials that can helps farmer to grow stronger crops and a healthy farm as well as you want 
           We also provide expert guidance and practical tips to help you make the most of every season. Our commitment is to ensure that your farm flourishes with healthy, productive crops. We strive to bring innovative and flexible  solutions that make farming easier and more efficient for everyone.</span>
          <FontAwesomeIcon icon={faQuoteRight} className="text-4xl -mb-3 text-yellow-400 " />
        </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Overview;

