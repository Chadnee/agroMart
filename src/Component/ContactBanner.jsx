import React from 'react';
import { TbPhoneCall } from "react-icons/tb";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { FaArrowRight } from 'react-icons/fa';
import { LuArrowUpRight } from 'react-icons/lu';

const ContactBanner = () => {
    return (
        <div className='mt-20 w-10/12 flex flex-col items-center justify-center mx-auto rounded-[37px]'>
            <div
            className='relative w-full rounded-[37px] h-[350px] bg-no-repeat bg-cover bg-[position:50%_15%] bg-[url("https://images.pexels.com/photos/247616/pexels-photo-247616.jpeg?_gl=1*1mt7aq0*_ga*MjA1MTY4MDI4OS4xNzAxMTA0Mjk4*_ga_8JE65Q40S6*czE3NTgxMDgxOTgkbzckZzEkdDE3NTgxMDg0OTAkajU5JGwwJGgw")]'>
            <div className='absolute rounded-[37px] inset-0 bg-gradient-to-br from-[#153e03a1] via-[#2a710ca1] to-[#153e03a1]'></div>
            
            <div className='absolute inset-0 z-10 flex justify-between items-center px-20'>
                <div className='flex justify-start gap-12 items-center'>
                     <div className='border-4 border-dashed border-[#2f7d0d] p-7 bg-white  rounded-full'>
                          <TbPhoneCall className='text-5xl text-[#2f7d0d]'></TbPhoneCall>
                     </div>
                     <div className='flex flex-col justify-start space-y-3'>
                         <p className='flex gap-1'>
                            <span className='text-3xl text-[#55a931]'><FaCanadianMapleLeaf></FaCanadianMapleLeaf></span>
                            <span className=' text-white font-semibold text-start'>Let's Start Today</span>
                         </p>
                         <p className='text-5xl text-white font-bold text-start'>
                            Don’t Miss Out-
                         </p >
                         <p className='text-5xl text-white font-bold text-start'>Enjoy up to 50% Off</p>
                     </div>
                </div>

                <div className=''>
                    <button className='bg-[#dedb09] rounded-4xl px-10 py-4 items-center flex gap-1'>
                    <span>Contact Us</span>
                    <LuArrowUpRight></LuArrowUpRight></button>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default ContactBanner;
            
            
     
