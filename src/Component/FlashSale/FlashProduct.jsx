import React from "react";
import FlashCard from "./FlashCard";
import useProduct from "../hooks/useProduct";

const FlashProduct = () => {
  const [product] = useProduct();
  return (
    <div
      id="flashSale"
      className="flex flex-col items-center justify-center w-full lg:w-4/5 md:w-4/5 mx-auto pt-28"
    >
      <p className="pb-2 font-bold text-2xl font-serif">Flash Sale</p>
      <span className="pb-10 italic font-thin text-sm text-[#3d6b08]">
        --“Get best selling products with limited access”--
      </span>
      <div className="lg:hidden md:hidden block ">
        <div className="grid grid-cols-1 justify-center gap-6">
          {product
            .sort(() => Math.random() - 0.5) // shuffle randomly
            .slice(0, 5) // take only 3 after shuffle
            .map((items) => (
              <FlashCard key={items.id} items={items}></FlashCard>
            ))}
        </div>
      </div>
      <div className="hidden lg:block md:block ">
        <div className="grid grid-cols-5 gap-7 justify-center content-stretch">
          {product.map((items) => (
            <FlashCard key={items.id} items={items}></FlashCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashProduct;
