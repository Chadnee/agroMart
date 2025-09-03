import React from 'react';
import { productCategories } from '../../share/constant/Constant';
import FlashCard from './FlashCard';

const FlashProduct = () => {
    return (
        <div id = "flashSale" className='flex flex-col items-center justify-center w-4/5 mx-auto'>
            <p className='pb-2 font-bold text-2xl font-serif'>Flash Sale</p>
           <span className='pb-10 italic font-thin text-sm text-[#3d6b08]'>--“Get best selling products with limited access”--</span>
        <div className='lg:hidden md:hidden block '>
              <div className='grid grid-cols-1 justify-center gap-5'>
            {
                productCategories.slice(1,5).map(items =><FlashCard
                key={items.id} items={items}></FlashCard>)
            }
        </div>
        </div>
         <div className='hidden lg:block md:block '>
            <div className='grid grid-cols-5 gap-7 justify-center content-stretch'>
            {
                productCategories.map(items =><FlashCard
                key={items.id} items={items}></FlashCard>)
            }
        </div>
         </div>
        </div>
    );
};

export default FlashProduct;