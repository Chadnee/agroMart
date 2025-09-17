import { Rating, ThinStar } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import React, {useState } from "react";
import useProduct from "./hooks/useProduct";
import ReactiveButton from "reactive-button";
import { IoReturnDownBackOutline } from "react-icons/io5";

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
  //console.log(ratings);

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
    <div className="flex lg:flex-row flex-col h-screen">
      {/* main flex */}
      <div className=" lg:w-10/12 w-full flex flex-col">
       {/* child col */}
      <div className="lg:text-xl md:text-xl lg:py-6 md:py-6 py-3 flex  justify-between lg:px-16 md:px-16 px-3 items-center bg-gradient-to-tr from-[#4b73b0] via-[#77bee1] to-[#26a7ed] shadow-lg">
               <Link className="font-serif flex gap-2 justify-start items-center text-[17px]" to="/">
               <IoReturnDownBackOutline></IoReturnDownBackOutline><span>Back to Home</span></Link>
               <span className="font-serif uppercase">
                <span className=""> Agro</span>
                <span className="text-amber-800">M</span>
                <span className="">Art</span>
              </span>
              
              
      </div>
        {/* child col */}
        <div className=" flex lg:flex-row flex-col-reverse flex-1 h-10/12 gap-5 justify-between items-center bg-[#d3e2ea] lg:pl-16">
          <div className="space-y-4 flex flex-col lg:items-start items-center lg:pt-10 md:pt-7 pt-4 pb-12 px-3 lg:px-0">
            <p className="text-[#d4840e] md:text-4xl lg:text-4xl text-2xl font-serif lg:text-start text-center">{name}</p>
            <p className="text-amber-800 md:text-3xl lg:text-5xl text-xl font-bold lg:text-start text-center tracking-tighter font-serif">
              {category}
            </p>
            <p className="flex items-center lg:justify-start justify-center lg:gap-28 md:gap-28 gap-16">
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
            <p className="flex flex-col gap-1 lg:justify-start justify-center">
              <span className="lg:text-start text-center">
                <del className="text-stone-500 ">{oldPrice}</del>
              </span>
              <span className="tracking-wider lg:text-start text-center">
                <span className="text-amber-800 tracking-wider font-bold pr-1">
                  {price}
                </span>
                BDT Only !!!
              </span>
            </p>
            <p className=" font-thin tracking-wider text-justify text-stone-500 font-serif lg:text-start ">
              {description}
            </p>
            <p className="lg:pt-12 mg:pt-8 pt-5 lg:text-start text-center">
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
          <img src={image} className="lg:w-2/5 md:w-full lg:h-[420px] md:h-[420px] h-[300px] lg:pr-12 lg:px-0 px-3 lg:pt-0 pt-5" alt="" />
        </div>

        {/* child col - hidden for small device*/}
        <div className="lg:block md:block hidden ">
            <div className="text-sm py-3 bg-gradient-to-tr from-[#4b73b0] via-[#77bee1] to-[#26a7ed] shadow-lg flex flex-1 justify-between items-center px-16">
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
        

      </div>
      {/* main flex */}
      <div className="lg:w-2/12 w-full bg-sky-600 lg:bg-gradient-to-tr from-[#4b73b0] via-[#77bee1] to-[#26a7ed] shadow-lg lg:h-full flex flex-col items-center pl-4 pr-4">
        <p className="py-10 text-2xl font-thin text-white flex flex-col items-center justify-center">
           <span>You May Like</span>
        <span className='pb-10 italic font-thin text-sm text-amber-400'>--“Click to show details above”--</span></p>
     <div className="flex flex-col space-y-5 gap-4 items-center justify-evenly cursor-pointer">
          {product
    .sort(() => Math.random() - 0.5) // shuffle randomly
    .slice(0, 3) // take only 3 after shuffle
    .map((item) => (
      <Link to={`/products/${item._id}`} key={item._id}>
        <div className="text-white text-center">
          <img src={item.image} className="lg:h-[130px] h-[200px]  w-full" alt="" />
          <p className="font-thin lg:text-[16px] text-xl">{item.category}</p>
        </div>
      </Link>
    ))}
        </div>
      </div>

       {/* child col- only for small device*/}
        <div className="lg:hidden md:hidden block ">
            <div className="text-sm bg-sky-600 shadow-lg flex flex-col justify-between items-center gap-24 py-16 px-3">
            {/* <div className="text-sm bg-gradient-to-tr from-[#2d76ca] via-[#5ba0ee] to-[#26a7ed] shadow-lg flex flex-col justify-between items-center gap-24 py-16 px-3"> */}
          <div className="text-white font-semibold flex flex-col justify-center items-center">
            <p>Trusted by over 3,50,000 clients</p>
            <p>Worldwide since 2008</p>
          </div>
               <div className="text-white font-semibold flex flex-col justify-center items-center">
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
          <div className="text-white font-semibold flex flex-col justify-center items-center">
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
  );
};

export default Product;
