import React from 'react';
import browser from "../assets/icons/search-engine.png";
import cart from "../assets/icons/shopping-cart.png";
import checklist from "../assets/icons/checklist.png";
import track from "../assets/icons/track.png";
import plant from "../assets/icons/plant.png";
import { ImArrowRight } from "react-icons/im";
//bg-[#e5e2d2]

const Process = () => {
    return (<div className=' bg-sky-100 py-20 mt-32' id='process'>
        <div className='w-11/12 mx-auto grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 justify-center items-center md:gap-10 lg:md:gap-10 gap-6'>
               <div className='flex flex-col items-center mx-auto text-center text-[15px] justify-center'>
                 <img src={browser} className='h-[100px]' alt="" />
                <p className=' text-cyan-600'>Browse & Select Products</p>
                <p className='text-zinc-600'>Customers explore fertilizers, compost, seeds, and other supplies online.</p>
             </div>
             {/* <div className='text-5xl text-amber-400'><ImArrowRight></ImArrowRight></div> */}
               <div className='flex flex-col items-center mx-auto text-center text-[15px] justify-center'>
                 <img src={cart} className='h-[100px]' alt="" />
                <p className='text-amber-300'>Place your order</p>
                <p >Add products to cart, confirm order placing, and choose payment method.</p>
             </div>
               <div className='flex flex-col items-center mx-auto text-center text-[15px] justify-center'>
                 <img src={checklist} className='h-[100px]' alt="" />
                <p className='text-rose-400'>Order processing</p>
                <p className='text-zinc-600'>Your team verifies stock, prepares packaging, and schedules delivery on the right time.</p>
             </div>
               <div className='flex flex-col items-center mx-auto text-center text-[15px] justify-center'>
                 <img src={track} className='h-[100px]' alt="" />
                <p className='text-emerald-400'>Fast and secure delivery</p>
                <p>Products are delivered safely to the customer’s doorstep to rpovide best services hand to hand.</p>
             </div>
               <div className='flex flex-col items-center mx-auto text-center text-[15px] justify-center'>
                 <img src={plant} className='h-[100px]' alt="" />
                <p className='text-[#bb9457]'>Grow and harvest better</p>
                <p className='text-zinc-600'>Customers use our products to improve their farm yield and garden productivity.</p>
             </div>
        </div>
    </div>
         
    );
};

export default Process;