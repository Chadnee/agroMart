import React, { useEffect, useState } from "react";
import useEmployee from "./hooks/useEmployee";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules"; // Import navigation module
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Employee = () => {
        const [refetch, employee, employeeLoading] = useEmployee()
       
        if(employeeLoading){
          return <p className="text-center">Employees are loading...</p>
        }

  return (
    <div className="lg:mx-20 mx-5 mt-24">
      <div className="flex lg:flex-row flex-col w-full items-center gap-4">
        <div className="flex flex-col lg:w-6/12 w-full items-start justify-center space-y-4">
          <p className="flex gap-1 items-center">
            <span className="text-3xl text-[#55a931]">
              <FaCanadianMapleLeaf></FaCanadianMapleLeaf>
            </span>
            <span className="">
              Our Employee
            </span>
          </p>
          <p className="text-5xl font-serif">Meet with Our Employees</p>
          <p className="text-stone-500">Employees are the heart of every company. With teamwork, honesty, and creativity, they drive success, improve services, and shape a stronger future.</p>
           
           <p className="flex justify-start items-center gap-4">
             <span className="custom-next border-2 p-3 rounded-full"><FaArrowRight></FaArrowRight></span>
             <span className="custom-prev border-2 p-3 rounded-full"><FaArrowLeft></FaArrowLeft></span>
           </p>
        </div>

        <div className=""></div>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
       navigation={{
          nextEl: ".custom-next", //  right arrow
          prevEl: ".custom-prev", //  left arrow
        }}
        modules={[Navigation]}
        className="w-full px-10"
          breakpoints={{
    360: {       // screens >= 320px
      slidesPerView:1,
      spaceBetween: 10,
    },
    700: {       // screens >= 640px
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {      // screens >= 1024px
      slidesPerView:3,
      spaceBetween:30,
    },
  }}
      >
        {employee.map((item) => (
          <SwiperSlide key={item.id} className="">
              <div className="flex flex-col items-center justify-center space-y-3">
                 <div className="relative ">
                  <img src={item.image} className="h-[300px] rounded-4xl w-full" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-r rounded-4xl from-black/50 via-black/10 to-transparent pointer-events-none"></div>
                 </div>
                 <p className="text-stone-600 text-sm">{item.name}</p>
                 <p className="text-xl font-semibold">{item.position}</p>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Employee;
