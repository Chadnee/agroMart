import React from "react";
import { promotionalOfferProducts } from "../share/constant/Constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const PromotionalOffer = () => {
  return (
    <div className="flex flex-col mt-28 items-center lg:mx-auto md:mx-auto md:w-4/5 lg:w-4/5 w-4/5 mx-auto justify-center">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full px-16"
          breakpoints={{
    320: {       // screens >= 320px
      slidesPerView: 1,
      spaceBetween: 5,
    },
    640: {       // screens >= 640px
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {      // screens >= 1024px
      slidesPerView: 4,
      spaceBetween: 15,
    },
  }}
      >
        {promotionalOfferProducts.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <div className="shadow-lg transition-shadow w-full ">
              <p
                style={{
                  borderTopLeftRadius: "50px",
                  borderTopRightRadius: "0",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                className="bg-amber-800 text-white w-full text-center px-5 py-2 text-2xl font-sans font-bold"
              >
                {Math.round(((item.oldPrice - item.price) * 100) / item.oldPrice)}% OFF
              </p>

              <div className="p-10 h-[400px] flex flex-col items-center ">
                <img src={item.image} className="h-[200px]" alt={item.name} />
                <p className="text-center text-sm font-semibold p-4">{item.name}</p>
                 <p className="text-sm pb-2"><del className="text-stone-600">{item.oldPrice}</del></p>
                <p className="text-sm "><span className="text-amber-400 pr-1">{item.price}</span> BDT</p>
                <p className="bg-amber-800 text-white px-5 py-1 mt-5 text-xl rounded-md font-sans font-bold">
                  Get
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PromotionalOffer;




// import React from "react";
// import { promotionalOfferProducts } from "../share/constant/Constant";
// import { BsCartFill } from "react-icons/bs";
// import { BiSolidMessageRounded } from "react-icons/bi";

// const PromotionalOffer = () => {

//   return (
//     <div className=" flex flex-col mt-28 items-center shadow-md mx-auto justify-center">
//       {/* <p className="text-[#bf1a1c] text-3xl font-semibold font-sans my-10">Deal Promotional Offer !!!</p> */}
//       <div className="w-9/12 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-10 lg:mx-20 md:mx-20">
//         {promotionalOfferProducts.map((item) => (
//           <div className="shadow-lg transition-shadow">
//              <p
//               style={{
//                 borderTopLeftRadius: "50px", // rounded
//                 borderTopRightRadius: "0", // rounded
//                 borderBottomLeftRadius: "10px", // rounded
//                 borderBottomRightRadius: "10px", // sharp
//               }}
//               className="bg-cyan-800 text-white w-full text-center px-5 py-2  text-2xl rounded-md font-sans font-bold"
//             >
//                {Math.round(((item.oldPrice-item.price) * 100)/item.oldPrice)}% OFF
//             </p>
//             <div
//               key={item.id}
//               className=" p-10 h-[400px] flex flex-col items-center"
//             >
//               <img src={item.image} className="h-[200px]" alt="" />
//               <p className="text-center text-sm font-semibold p-4">
//                 {item.name}
//               </p>
//               <p className="text-sm">{item.price}BDT</p>
//               {/* <p className="bg-[#eec10e] text-white px-5 py-1 mt-5 text-xl rounded-md font-sans font-bold">
//                 {Math.round(((item.oldPrice-item.price) * 100)/item.oldPrice)}% OFF
               
//               </p> */}
//               <p className="bg-cyan-700 text-white px-5 py-1 mt-5 text-xl rounded-md font-sans font-bold">
//                 Get
               
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PromotionalOffer;
