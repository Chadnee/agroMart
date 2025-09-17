import React, { useEffect, useState } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import useProduct from "./hooks/useProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules"; // Import navigation module
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillBank } from "react-icons/ai";
import { LuArrowUpRight } from "react-icons/lu";
import { BsCartPlus } from "react-icons/bs";

const Services = () => {
  const [product] = useProduct();
    const [initialSlide, setInitialSlide] = useState(0); // default = first card

  // Detect screen width on mount & resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setInitialSlide(3); // 3rd card (index starts at 0)
      } else {
        setInitialSlide(0); // 1st card
      }
    };

    handleResize(); // Run initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // console.log(product);
  return (
    <div className="mt-28 mx-4 lg:mx-0 " id="services">
      <div className="flex flex-col items-center justify-center md:space-y-5 space-y-3 lg:space-y-7">
        <p className="flex gap-2 items-center justify-center ">
          <FaCanadianMapleLeaf className="text-2xl text-[#47b450]"></FaCanadianMapleLeaf>
          <span className="lg:text-[16px] md:text[16px] text-[12px]">About Our Company</span>
        </p>
        <p className="lg:text-5xl md:text-5xl text-3xl text-center font-bold font-serif">Services we offer</p>
        <p className="text-stone-400 w-[600px] lg:block md:block hidden text-[14px] text-center">
          Organic farmers avoid toxic inputs, extra preservities care for soil and nature, and grow
          clean crops that protect health, preserve biodiversity.
        </p>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          centeredSlides={true}
          centeredSlidesBounds={true}
          key={initialSlide}
          initialSlide={initialSlide}
          //  navigation=
          modules={[Navigation]}
          className="w-full  custom-swiper mt-8 md:mt-16 lg:mt-16"
          loop={false}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3.9,
              spaceBetween: 55,
            },
          }}
        >
          {product.slice(0, 8).map((item, index) => (
            <SwiperSlide key={index} className="mx-4 lg:mx-0 md:mx-0">
              <div className="relative">
                <figure className="overflow-hidden realtive rounded-4xl">
                  <img
                    src={item.image}
                    className="lg:h-[400px] md:h-[400px] h-[350px] cursor-zoom-in rounded-4xl lg:pr-0 pr-7 object-cover  transform hover:scale-110 hover:rotate-3 transition-transform duration-1000 ease-in-out"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-r rounded-4xl from-black/50 via-black/10 to-transparent pointer-events-none"></div>
                </figure>
                <div className="absolute mb-20 top-3/5 lg:left-2/12 md:left-2/12 left-1/12 w-full">
                  {/* <img src={item.categoryImage} className="h-[100ppx] rounded-full" alt="" /> */}
                  <div className="relative bg-white rounded-2xl mb-20 max-h-[255px] pr-4 pl-7 md:px-12 lg:px-12 py-5 mr-7 shadow-2xl">
                    <p className="font-bold pb-5 pt-[50px]">
                      {item.category}
                    </p>
                    <p className=" text-stone-400 text-sm">
                      {item.description.split(" ").slice(0, 12).join(" ")}...
                    </p>
                    {/* <p className="flex items-center justify-start gap-4 font-semibold group hover:underline text-[#006838] pt-7">
                                <span className="transition-all duration-1000 ease-in-out transform group-hover:order-2 group-hover:translate-x-2">More Details</span>
                              <span className="font-semibold text-xl transform transition-all duration-700 ease-in-out group-hover:scale-100 group-hover:order-1 group-hover:-translate-x-2">
                                <LuArrowUpRight></LuArrowUpRight></span>
                              </p> */}
                    <p className="flex items-center gap-2 font-semibold text-[#189918] pt-7 group cursor-pointer hover:underline">
                      {/* Left Icon (hidden initially, shows on hover) */}
                      <span className="text-xl transform hidden scale-50 transition-all duration-500 ease-in-out group-hover:inline-flex group-hover:scale-100 group-hover:-translate-x-2">
                        <LuArrowUpRight />
                      </span>

                      {/* Text */}
                      <span className="transition-all duration-700 ease-in-out group-hover:translate-x-2">
                        More Details
                      </span>

                      {/* Right Icon (visible initially, hides on hover) */}
                      <span className="text-xl transform opacity-100 scale-100 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-50 group-hover:translate-x-2">
                        <LuArrowUpRight />
                      </span>
                    </p>

                    <p className="absolute text-4xl -top-8 lg:ml-10 md:ml-10 ml-12 -translate-x-1/2 text-white rounded-full bg-[#189918] p-5 md:p-6 lg:p-6">
                      {[0, 4, 8].includes(index) ? (
                        <AiFillBank></AiFillBank>
                      ) : [1, 3, 5, 7].includes(index) ? (
                        <BsCartPlus></BsCartPlus>
                      ) : [2, 6, 9].includes(index) ? (
                        <TbTruckDelivery></TbTruckDelivery>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;

/**
 * <div className="flex flex-col items-center lg:mt-28 md:mt-28 mt-24 lg:w-6/12 md:w-6/12 justify-center lg:mx-auto md:mx-auto mx-3">
      <p className="pb-2 font-bold text-2xl font-serif">About</p>
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
 */
