import { Rating, ThinStar } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import React from "react";
import useProduct from "./hooks/useProduct";

// const customStyles = {
//   itemShapes: ThinStar,
//   activeFillColor: "#facc15",   // Tailwind yellow-400
//   inactiveFillColor: "#d1d5db", // Tailwind gray-300
// };

const Product = () => {
  const item = useLoaderData();
  const [product] = useProduct();

  const {
    image,
    name,
    id,
    price,
    oldPrice,
    category,
    description,
    ratings,
    quality,
  } = item;
  console.log(ratings);
  return (
    
      <div className="flex h-screen">
        {/* main flex */}
         <div className="w-9/12 flex flex-col">
             {/* child col */}
             <div className=" flex flex-1 h-10/12 gap-5 justify-between bg-[#d3e2ea] pl-16">
          <div className="space-y-4 pt-20 pb-12">
            <p className="text-[#d4840e] text-4xl font-serif">{name}</p>
            <p className="text-amber-800 text-5xl font-bold tracking-tighter font-serif">
              {category}
            </p>
          <p className="flex items-center justify-start gap-28">
              <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={ratings}
              inactiveFillColor="#2c3973"
              isHalf={true} // ✅ allows half stars
              edit={false}
            /> 
            <span className="text-amber-800 font-serif text-xl">{quality}</span>
          </p>
         <p className="flex flex-col gap-1 justify-start">
             <span><del className="text-stone-500">{oldPrice}</del></span>
          <span className="tracking-wider"><span className="text-amber-800 tracking-wider font-bold ">{price}</span> BDT Only !!!</span>

         </p>
            <p className=" font-thin tracking-wider text-stone-500 font-serif">
              {description}
            </p>
            <p className="pt-16">
                <button className="bg-amber-800 text-white px-5 py-2 rounded-md">
              Purchase First !
            </button>
            </p>
          </div>
          <img src={image} className=" w-2/5" alt="" />
        </div>
          
         {/* child col */}
         <div className=" bg-gradient-to-tr from-[#4b73b0] via-[#77bee1] to-[#26a7ed] shadow-lg flex flex-1 justify-between items-center px-16">
             <div className="text-[#1e4f68] font-semibold">
            <p>Trusted by over 3,50,000 clients</p>
            <p>Worldwide since 2008</p>
          </div>
          <div className="text-[#1e4f68] font-semibold ">
            <p className="text-4xl">{ratings}</p>
            <p> <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={ratings}
              inactiveFillColor="#2c3973"
              isHalf={true} // ✅ allows half stars
              edit={false}
            /> </p>
            <p>Positive customer review</p>
          </div>
          <div className="text-[#1e4f68] font-semibold">
             <p className="text-4xl">6M+</p>
             <p className="">hjwhuajsw kjwio hsiwjs</p>
             <p className="">jdjsqjs ioqjsio</p>
          </div>
         </div>
     
         </div> 
       {/* main flex */}
        <div className="w-3/12 bg-gradient-to-tr from-[#4b73b0] via-[#77bee1] to-[#26a7ed] shadow-lg h-full flex flex-col items-center pl-10 pt-20 pr-10">
              <p className="pt-4 pb-4 text-2xl font-thin text-white ">You May Like</p>
            <div className="flex flex-col gap-4 items-center justify-between">
                {
                    product.slice(0,3).map(item => (
                        <div className="text-white text-center">
                            <img src={item.image} className="h-[150px]" alt="" />
                            <p>{item.name}</p>
                            
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    
  );
};

export default Product;
