import React from "react";
import like from '../assets/images/like.png';
import { RiArrowRightSLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules"; // Import navigation module
import useProduct from "./hooks/useProduct";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const PromotionalOffer = () => {
      const [product] = useProduct()

  return (
    <div className="relative flex flex-col mt-44 items-center mx-5 md:mx-20  lg:mx-20 justify-center">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
       navigation={{
          nextEl: ".custom-next", // Only right arrow
          prevEl: null, // Disable left arrow
        }}
        modules={[Navigation]}
        className="w-full px-10"
          breakpoints={{
    320: {       // screens >= 320px
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {       // screens >= 640px
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {      // screens >= 1024px
      slidesPerView: 5,
      spaceBetween: 15,
    },
  }}
      >
        {product.slice(0,6).map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center items-center rounded-2xl shadow-2xl">
            <Link to={`/products/${item._id}`} className="shadow-lg  transition-shadow w-full ">
              {/* <p
                style={{
                  borderTopLeftRadius: "50px",
                  borderTopRightRadius: "0",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                className="bg-amber-800 text-white w-full text-center px-5 py-2 lg:text-2xl md:text-2xl text-[16px] font-sans font-bold"
              >
                {Math.round(((item.oldPrice - item.price) * 100) / item.oldPrice)}% OFF
              </p> */}

              <div className="lg:p-3 md:p-3 px-7 space-y-3 flex flex-col items-start justify-center ">
                 <div className="relative">
                    <img src={item.image} className="lg:h-[230px] md:h-[230px] h-[80px] " alt={item.name} />
                    <p className="absolute top-2  left-2 px-2 bg-stone-600 text-white ronded-lg text-[10px]">
                      {Math.round(((item.oldPrice - item.price) * 100) / item.oldPrice)}% Off
                    </p>
                    <p className="absolute bottom-2 right-2 bg-white rounded-full"><img src={like} className="h-[18px]" alt="" /></p>
                 </div>
                <p className="text-center text-sm text-stone-500">{item.name}</p>
                <p className="font-semibold">{item.category}</p>
                 <ReactStars
                                 count={5}
                                 size={16}
                                 activeColor="#ffd700"
                                 value={item.ratings}
                                 inactiveFillColor="#2c3973"
                                 isHalf={true} // ✅ allows half stars
                                 edit={false}
                               />
                 <p className="flex justify-center gap-6 items-center">
                  <span className="text-sm "><span className="text-amber-400 pr-1">{item.price}</span> BDT</span>
                 <del className="text-orange-700 text-sm">{item.oldPrice}</del></p>
                   </div>
            </Link> 
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-next absolute -right-10 -bottom-12 -translate-y-1/2 cursor-pointer bg-gray-100 px-2 py-2 text-stone-600 rounded-full shadow-md z-10">
        <RiArrowRightSLine></RiArrowRightSLine>
      </div>
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
