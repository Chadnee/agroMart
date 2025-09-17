import React from 'react';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { LuStore } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

const Works = () => {
    //[#86d624]
    const functionItem = [
        {
  title: "Order processing",
  description: "We carefully verify and confirm customer orders for accuracy. Every step is tracked to ensure timely service.",
  icon: <MdOutlineAddShoppingCart></MdOutlineAddShoppingCart>
},
{
  title: "Warehouse sorting",
  description: "Products are systematically organized for quick access. This process reduces delays and maintains quality.",
  icon: <LuStore></LuStore>
},
{
  title: "First delivery",
  description: "Fresh goods are dispatched directly to customers. We focus on speed and freshness to build trust.",
  icon: <TbTruckDelivery></TbTruckDelivery>
},

    ]
    return (   
        <div className='bg-gradient-to-b from-gray-100 to-white'>
             <div className='lg:w-7/12 md:w-9/12 mx-5 mt-24 lg:mt-32 pt-16 flex flex-col items-center justify-center lg:mx-auto md:mx-auto'>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-16 w-full '>
                 <div className='flex flex-col items-start justify-center space-y-6 lg:w-1/2'>
                     <p className=' uppercase text-[#47b450] font-serif'>who we are</p>
                     <p className='text-4xl font-bold'>Green fields and a healthy tomorrow are growing</p>
                     <p className='text-stone-500 text-sm'>where flourishing green fields symbolize growth, and the vision of a healthy tomorrow highlights sustainability and harmony with the environment.</p>
                     <button className='rounded-lg px-3 py-3 text-[10px] tracking-wider uppercase bg-[#47b450] text-white'>discover more</button>
                 </div>
                 
                 <div className='lg:w-1/2'>
                    <div className='relative'>
                        <figure className='inline-block p-3 bg-gradient-to-br from-[#52B852] to-[#aee852] rounded-lg'>
                            <img className='lg:h-[350px] md:h-[350px] h-[300px]' src="https://plus.unsplash.com/premium_photo-1679428401908-1ebebf678cb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGFncmljdWx0dXJhbCUyMGZpcm18ZW58MHx8MHx8fDA%3D" alt="" />
                        </figure>
                        <p className='absolute -top-5 -right-5 shadow-lg flex flex-col items-center justify-center gap-1 rounded-full bg-white lg:h-[130px] md:h-[130px] h-[100px] lg:w-[130px] md:w-[130px] w-[100px] text-center'>
                            <span className='lg:text-3xl md:text-3xl text-xl text-[#47b450] font-bold'>25+</span>
                            <span className='tracking-tight text-[12px] text-center font-serif'>Years of <br /> experience</span>
                        </p>
                    </div>
                 </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-6 gap-8 lg:mt-28 mt-20'>
                   {
                    functionItem.map((item, index)=>(index === 1)? 
                    <div className='relative flex flex-col items-center justify-center'>
                        <div key={index}  className='shadow-2xl rounded-lg px-10 py-8 space-y-4 flex flex-col items-center justify-center bg-gradient-to-br from-[#52B852]  to-[#aee852] '>
                        <p className='bg-white rounded-full p-3 text-[#52B852] text-5xl w-fit'>{item.icon}</p>
                        <p className='font-bold text-white'>{item.title}</p>
                        <p className='text-white font-thin text-[10px] pb-2 text-center'>{item.description}</p>
                    </div>
                     <p className='absolute -bottom-5 bg-white rounded-full p-[14px] shadow-2xl'>
                        <FaArrowRight className='text-stone-400 text-2xl'></FaArrowRight>
                     </p>
                    </div>
                    :<div className='relative flex flex-col items-center justify-center '>
                        <div key={index} className='shadow-2xl rounded-lg px-10 py-8 space-y-4 flex flex-col items-center justify-center'>
                        <p className='bg-[#52B852] rounded-full p-3 text-white text-5xl w-fit'>{item.icon}</p>
                        <p className='font-bold text-[#52B852]'>{item.title}</p>
                        <p className='text-stone-400 text-[10px] pb-2 text-center'>{item.description}</p>
                    </div>
                     <p className='absolute -bottom-5 bg-white rounded-full p-[14px] shadow-2xl'>
                        <FaArrowRight className='text-stone-400 text-2xl'></FaArrowRight>
                     </p>
                    </div> )
                   }
            </div>
        </div>
        </div>
       
    );
};

export default Works;