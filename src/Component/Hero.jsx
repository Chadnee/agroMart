import React from 'react';
import img from '../assets/images/tractor.jpg'
import Button from '../share/Button/Button';



const Hero = () => {
    return (
        <div className='relative w-full mb-20'>
                <img src={img} className='w-full object-cover h-[650px]' alt="" />
            <div className=' bg-gradient-to-tr via-stone-500 from-black/30 to-transparent absolute inset-0 '></div>
          <div className='absolute inset-0 text-white space-y-5 text-center flex flex-col mx-auto items-center justify-center'>
             <p className='text-3xl font-sans uppercase font-bold pb-3'>  Grow Better, Harvest More<br />
  Organic Compost & Fertilizers Firm</p>
             <p className='text-sm md:block lg:block hidden'>Your one-stop solution for fertilizers, compost, and essential agri-products — now delivered to your doorstep with ease and reliability. <br /> Your trusted partner for fertilizers, compost, and essential agri-products. 
                Save time, cut hassle, and get everything you need in just a few clicks.
Join thousands of <br /> farmers choosing smarter agriculture today. 
Now shop online and get everything delivered straight to your doorstep.</p>
            {/* <button className='border hover hover:bg-green-600 border-[#eec10e] px-5 rounded-md py-1'>Shop now</button> */}
           <button style={{letterSpacing: ".5px"}}
            className='relative px-10 text-[17px] py-1 overflow-hidden border-2 border-[#caab2d] text-white rounded-md shadow-lg transition-colors
            duration-1000 easy-in-out hover:bg-yellow-600 hover:shadow-lg hover:scale-105'
           >
            Shop now
           </button>
</div>
        </div>
    );
};


export default Hero
// style={{ letterSpacing: ".5px" }}
//       className={`
//         relative px-10 text-[17px] py-1 overflow-hidden
//         ${bgColor} ${textColor} font-semibold ${rounded}
//         shadow-lg 
//         transition-colors duration-700 ease-in-out
//         hover:bg-blue-950 hover:text-sky-400
//         hover:shadow-xl hover:scale-105
//       `}