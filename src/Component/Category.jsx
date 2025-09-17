import React from 'react';
import useProduct from './hooks/useProduct';
import { Link } from 'react-router-dom';
import img from '../assets/images/irrigation.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Category = () => {
    const [product] = useProduct()

    return (
     <div id="category" className='flex flex-col mx-auto items-center lg:mt-28 md:mt-28 mt-20sn lg:w-10/12'>
    <p className='pb-2 font-bold text-2xl font-serif'>Categories</p>
           <span className='lg:pb-24 pb-12 italic font-thin text-[10px] md:text-sm lg:text-sm text-[#3d6b08] text-center'>--“Discover the most popular products for your farm”--</span>
           <Swiper
                   slidesPerView={4}
                   pagination={{ clickable: true }}
                   modules={[Pagination]}
                   className="w-full "
                     breakpoints={{
               320: {       // screens >= 320px
                 slidesPerView: 3,
                 spaceBetween: 5,
               },
               640: {       // screens >= 640px
                 slidesPerView: 5,
                 spaceBetween: 5,
               },
               1024: {      // screens >= 1024px
                 slidesPerView: 7,
                 spaceBetween: 5,
               },
             }}
                 >
                        {product.map(product => <SwiperSlide key={product.id}
            > <Link to={`/products/${product._id}`} className='flex flex-col items-center justify-center'>
           <figure className='rounded-full'>
            <img src={product.categoryImage}className='lg:h-[100px] lg:w-[100px] h-[70px] w-[70px] rounded-full ' alt="" /></figure>
            <p className='text-center text-stone-500 text-[10px] md:text-[12px] lg:text-[12px]'>{product.category}</p>
            </Link></SwiperSlide>)}
                 </Swiper>
     </div>
    //  <div id="category" className='flex flex-col mx-auto items-center lg:mt-28 md:mt-28 mt-24'>
    // <p className='pb-2 font-bold text-2xl font-serif'>Categories</p>
    //        <span className='pb-10 italic font-thin text-sm text-[#3d6b08]'>--“Discover the most popular products for your farm”--</span>
    //        <div className='md:grid-cols-5 lg:grid-cols-5 grid-cols-2 grid md:mx-28 lg:mx-20 mx-3 md:justify-center lg:justify-center gap-2 md:gap-5 lg:gap-5 '>
    //         {product.map(product => <div key={product.id}
    //         className=''> <Link to={`/products/${product._id}`}>
    //        <img src={product.image} className='h-[150px] w-full rounded-md' alt="" />
    //         <p className='text-center font-thin'>{product.category}</p>
    //         </Link></div>)}
    //     </div>
    //  </div>
    );
};

export default Category;