import React from 'react';
import { productCategories } from '../share/constant/Constant';
import useProduct from './hooks/useProduct';
import { Link } from 'react-router-dom';

const Category = () => {
    const [product] = useProduct()

    return (
     <div id="category" className='flex flex-col mx-auto items-center my-20'>
    <p className='pb-2 font-bold text-2xl font-serif'>Categories</p>
           <span className='pb-10 italic font-thin text-sm text-[#3d6b08]'>--“Discover the most popular products for your farm”--</span>
           <div className='md:grid-cols-5 lg:grid-cols-5 grid-cols-2 grid md:mx-28 lg:mx-20 mx-3 md:justify-center lg:justify-center gap-2 md:gap-5 lg:gap-5 '>
            {product.map(product => <div key={product.id}
            className=''> <Link to={`/products/${product._id}`}>
           <img src={product.image} className='h-[150px] w-full rounded-md' alt="" />
            <p className='text-center font-thin'>{product.category}</p>
            </Link></div>)}
        </div>
     </div>
    );
};

export default Category;