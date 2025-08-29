import React from "react";
import { promotionalOfferProducts } from "../constant/Constant";
import { BsCartFill } from "react-icons/bs";
import { BiSolidMessageRounded } from "react-icons/bi";

const PromotionalOffer = () => {

  return (
    <div className=" flex flex-col mt-28 items-center shadow-md mx-auto justify-center">
      {/* <p className="text-[#bf1a1c] text-3xl font-semibold font-sans my-10">Deal Promotional Offer !!!</p> */}
      <div className="w-9/12 grid md: grid-cols-4 lg:grid-cols-4 gap-10 mx-20">
        {promotionalOfferProducts.map((item) => (
          <div className="shadow-lg transition-shadow">
             <p
              style={{
                borderTopLeftRadius: "50px", // rounded
                borderTopRightRadius: "0", // rounded
                borderBottomLeftRadius: "10px", // rounded
                borderBottomRightRadius: "10px", // sharp
              }}
              className="bg-cyan-800 text-white w-full text-center px-5 py-2  text-2xl rounded-md font-sans font-bold"
            >
               {Math.round(((item.oldPrice-item.price) * 100)/item.oldPrice)}% OFF
            </p>
            <div
              key={item.id}
              className=" p-10 h-[400px] flex flex-col items-center"
            >
              <img src={item.image} className="h-[200px]" alt="" />
              <p className="text-center text-sm font-semibold p-4">
                {item.name}
              </p>
              <p className="text-sm">{item.price}BDT</p>
              {/* <p className="bg-[#eec10e] text-white px-5 py-1 mt-5 text-xl rounded-md font-sans font-bold">
                {Math.round(((item.oldPrice-item.price) * 100)/item.oldPrice)}% OFF
               
              </p> */}
              <p className="bg-cyan-700 text-white px-5 py-1 mt-5 text-xl rounded-md font-sans font-bold">
                Get
               
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionalOffer;
