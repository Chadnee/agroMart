import React from "react";
import img from "../assets/images/tractor.jpg";
import star from "../assets/icons/star.png";
import { BsTelephoneFill } from "react-icons/bs";
import { SlEarphonesAlt } from "react-icons/sl";
import { CiDollar } from "react-icons/ci";

const Highlights = () => {
  return (
    <div id = "highLights" className="flex flex-col lg:w-10/12 md:w-10/12 mb-28 mt-32 justify-center items-center lg:mx-auto mx-3">
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5 justify-center items-stretch">
       <div className="relative">
  <img src={img} className="lg:h-[550px] md:h-[550px] h-[450px] w-full object-cover" alt="" />

  {/* Arrow Shape */}
  <div className="absolute top-3/5 left-0 -translate-y-1/2 
                  bg-[#e2aa1d]  py-3 px-7
                  flex flex-col items-center justify-center 
                  font-serif  md:text-xl lg:text-xl text-sm
                  [clip-path:polygon(0%_0%,85%_0%,100%_50%,85%_100%,0%_100%)]">
    <span>2000+</span>
    <span>Products Sold</span>
  </div>
</div>
        {/* <div className="w-1/2 relative">
          <img src={img} className="h-[550px]" alt="" />
          <p className="absolute top-2/4 left-0 text-white py-5 px-3 bg-[#e2aa1d] flex flex-col items-center justify-center">
          <span className=" text-xl font-bold">2000+</span>
          <span className="text-xl font-bold">Products sold</span>
        </p>
        </div> */}

        <div className=" flex flex-col space-y-7">
          <p className="text-amber-400">Highlights</p>
          <p className="uppercase text-5xl font-serif font-semibold">
            We give the best <br /> quality services <br />from our firm
          </p>
          <p className="text-sm font-thin">
            Your one-stop solution for fertilizers, compost, and essential
            agri-products — now delivered to your doorstep with ease and
            reliability. Your trusted partner for fertilizers, compost, and
            essential agri-products. Save time, cut hassle, and get everything
            you need in just a few clicks.
          </p>
          <div className="flex justify-between gap-2">
            <div className="flex gap-5 flex-col">
              <div className="text-sm font-thin">
                <li className="flex gap-2 items-start">
                  <img className="h-[12px]" src={star} alt="" />
                  <span>100% Organic & Eco-friendly Products</span>
                </li>
                <li className="flex gap-2 items-start">
                  <img className="h-[12px]" src={star} alt="" />
                  <span>Reliable and super fast delivery</span>
                </li>
                <li className="flex gap-2 items-start">
                  <img className="h-[12px]" src={star} alt="" />
                  <span>High quality with affordable prices</span>
                </li>
              </div>
              <div className="flex justify-between w-full gap-2">
                <p className="flex shadow-lg border border-sky-200 w-1/2 flex-col items-center justify-center py-2">
                  <span className="text-4xl text-amber-400">
                    <CiDollar></CiDollar>
                  </span>
                  <span className="text-stone-600 lg:text-sm text-center md:text-xl text-[10px] font-thin">
                    Online Payment
                  </span>
                </p>
                <p className="flex shadow-lg border border-sky-200 w-1/2 flex-col items-center justify-center py-2">
                  <span className="text-3xl text-amber-400">
                    <SlEarphonesAlt></SlEarphonesAlt>
                  </span>
                  <span className="text-stone-600 lg:text-sm text-center md:text-xl text-[10px]  font-thin">
                    Online Support
                  </span>
                </p>
              </div>
              <p className="text-stone-200 ">
                <hr />
              </p>

              <p className="flex text-white text-sm w-4/5 justify-center py-2 bg-zinc-900 gap-4 items-center">
                <span className="text-white text-xl -mb-2">
                  <BsTelephoneFill></BsTelephoneFill>
                </span>
                <p>
                  <span className=" font-semibold uppercase">Call Us</span>
                  <br />
                  <span className="">+880 0924-736589</span>
                </p>
              </p>
            </div>
            <div className="flex flex-col justify-evenly text-sm  items-center bg-sky-100">
              <p className="flex flex-col items-center justify-center px-5">
                <span className="text-amber-400 text-[17px] font-bold">
                  100%
                </span>
                <span className="text-stone-600 text-center">Organic Products</span>
              </p>
             <hr className="w-full text-stone-300" />
              <p className="flex flex-col items-center justify-center px-5">
                <span className="text-amber-400 text-[17px] font-bold">
                  2563+
                </span>
                <span className="text-stone-600 text-center">Customer review</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
