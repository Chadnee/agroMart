import { Rating, ThinStar } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import React, { useEffect, useState } from "react";
import useProduct from "./hooks/useProduct";
import ReactiveButton from "reactive-button";

// const customStyles = {
//   itemShapes: ThinStar,
//   activeFillColor: "#facc15",   // Tailwind yellow-400
//   inactiveFillColor: "#d1d5db", // Tailwind gray-300
// };

const Product = () => {
  const item = useLoaderData();
   const [state, setState] = useState('idle');
  const [product, productLoading] = useProduct();

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

// useEffect(() => {
//   if (!productLoading && product.length > 0) {
//     const shuffled = [...product].sort(() => Math.random() - 0.5);
//     setRandomProducts(shuffled.slice(0, 3));
//   }
// }, [product, productLoading]);

// if (productLoading) {
//   return <p className="text-center text-xl text-gray-600">Loading...</p>;
// }
  return (
    <div className="flex md:flex-row lg:flex-row flex-col h-screen">
      {/* main flex */}
      <div className="w-10/12 flex flex-col">
       {/* child col */}
      <div className="text-xl py-6 flex  justify-start pl-16 gap-16 items-center bg-gradient-to-tr from-[#4b73b0] via-[#77bee1] to-[#26a7ed] shadow-lg">
             <span className="font-serif uppercase">
                <span className=""> Agro</span>
                <span className="text-amber-800">M</span>
                <span className="">Art</span>
              </span>
               <span className="font-serif"><Link to="/">#Home</Link></span>
              
              
      </div>
        {/* child col */}
        <div className=" flex flex-1 h-10/12 gap-5 justify-between items-center bg-[#d3e2ea] pl-16">
          <div className="space-y-4 pt-10 pb-12">
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
              <span className="text-amber-800 font-serif text-xl">
                {quality}
              </span>
            </p>
            <p className="flex flex-col gap-1 justify-start">
              <span>
                <del className="text-stone-500">{oldPrice}</del>
              </span>
              <span className="tracking-wider">
                <span className="text-amber-800 tracking-wider font-bold pr-1">
                  {price}
                </span>
                BDT Only !!!
              </span>
            </p>
            <p className=" font-thin tracking-wider text-stone-500 font-serif">
              {description}
            </p>
            <p className="pt-12">
              {/* <button className="bg-amber-800 text-white px-5 py-2 rounded-md">
                Purchase First !
              </button> */}
             <ReactiveButton
 buttonState={state}
  idleText="Purchase Now !"
  loadingText="Processing..."
  successText="Done!"
  errorText="Failed"
   style={{
    backgroundColor: "#c05621", // equivalent to bg-amber-800
    fontWeight: 600,
     letterSpacing: "0.05em",     // tracking-wider
    fontFamily: "sans-serif"
  }}
  className="px-6 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md"
  onClick={() => {
    setState("loading"); // start loading state
    setTimeout(() => {
      setState("success"); // after 2s → success
      setTimeout(() => setState("idle"), 1000); // back to idle after another 2s
    }, 2000);
  }}
/>
            </p>
          </div>
          <img src={image} className=" w-2/5 h-[420px] pr-12" alt="" />
        </div>

        {/* child col */}
        <div className="text-sm bg-gradient-to-tr from-[#4b73b0] via-[#77bee1] to-[#26a7ed] shadow-lg flex flex-1 justify-between items-center px-16">
          <div className="text-[#1e4f68] tracking-tighter flex flex-col justify-center items-center">
            <p>Trusted by over 3,50,000 clients</p>
            <p>Worldwide since 2008</p>
          </div>
         <div className="flex justify-between items-center gap-20">
               <div className="text-[#1e4f68] font-semibold flex flex-col justify-center items-center">
            <p className="text-4xl">{ratings}</p>
            <p>
              {" "}
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                value={ratings}
                inactiveFillColor="#2c3973"
                isHalf={true} // ✅ allows half stars
                edit={false}
              />{" "}
            </p>
            <p>Positive customer review</p>
          </div>
          <div className="text-[#1e4f68] font-semibold flex flex-col justify-center items-center">
            <p className="text-4xl">6M+</p>
            <p className="">Best Selling Products</p>
            <p className="">
              All rights are reserved by
              <span className="font-serif uppercase">
                <span className=""> Agro</span>
                <span className="text-amber-800">M</span>
                <span className="">Art</span>
              </span>
            </p>
          </div>
         </div>
        </div>

      </div>
      {/* main flex */}
      <div className="w-2/12 bg-gradient-to-tr from-[#4b73b0] via-[#77bee1] to-[#26a7ed] shadow-lg h-full flex flex-col items-center pl-4 pr-4">
        <p className="py-10 text-2xl font-thin text-white ">You May Like</p>
     <div className="flex flex-col space-y-5 gap-4 items-center justify-evenly">
          {product
    .sort(() => Math.random() - 0.5) // shuffle randomly
    .slice(0, 3) // take only 3 after shuffle
    .map((item) => (
      <Link to={`/products/${item._id}`} key={item._id}>
        <div className="text-white text-center">
          <img src={item.image} className="h-[130px] w-full" alt="" />
          <p className="font-thin">{item.category}</p>
        </div>
      </Link>
    ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
