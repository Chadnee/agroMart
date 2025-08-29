import React from 'react';
import { productCategories } from '../constant/Constant';

const Category = () => {
    console.log(productCategories)

    return (
     <div id="category" className='flex flex-col mx-auto items-center my-20'>
    <p className='pb-2 font-bold text-2xl font-serif'>Categories</p>
           <span className='pb-10 italic font-thin text-sm text-[#3d6b08]'>--“Discover the most popular products for your farm”--</span>
           <div className='md:grid-cols-5 lg:grid-cols-5 grid-cols-2 grid md:mx-28 lg:mx-20 md:justify-center lg:justify-center gap-2 md:gap-5 lg:gap-5 '>
            {productCategories.map(product => <div key={product.id}
            className=''>
           <img src={product.image} className='h-[150px] w-full' alt="" />
            <p className='text-center font-thin'>{product.name}</p>
            </div>)}
        </div>
     </div>
    );
};

export default Category;