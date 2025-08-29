import React from 'react';
import img from '../assets/images/tractor.jpg'

const Hero = () => {
    return (
        <div className='relative w-full'>
                <img src={img} className='w-full  object-cover h-[650px]' alt="" />
            <div className=' bg-gradient-to-tr via-stone-500 from-black/30 to-transparent absolute inset-0 '></div>
          <div className='absolute inset-52 text-white space-y-5  text-center mx-auto items-center justify-center'>
             <p className='text-3xl font-sans uppercase font-bold'>  Grow Better, Harvest More<br />
  Organic Compost & Fertilizers Firm</p>
             <p className='text-sm md:visible lg:visible invisible'>Your one-stop solution for fertilizers, compost, and essential agri-products — now delivered to your doorstep with ease and reliability. <br /> Your trusted partner for fertilizers, compost, and essential agri-products. 
                Save time, cut hassle, and get everything you need in just a few clicks.
Join thousands of <br /> farmers choosing smarter agriculture today. 
Now shop online and get everything delivered straight to your doorstep.</p>
            <button className='border hover hover:bg-green-600 border-[#eec10e] px-5 rounded-md py-1'>Shop now</button>
            </div>
        </div>
    );
};

export default Hero;