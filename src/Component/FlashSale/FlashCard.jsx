import React from 'react';

const FlashCard = ({items}) => {
    console.log(items)
    return (
        <div>
              <div className=" border-4 shadow-lg px-4 py-6 rounded-lg flex h-full flex-col items-center border-cyan-800">
                <img src={items.image} className="h-[150px]" alt={items.name} />
                <p className="text-center font-semibold p-4">{items.name}</p>
               <p className="flex justify-between gap-5">
                <span><span className="text-amber-400 pr-1">{items.price}</span>BDT</span>
                <span className='text-stone-500'><del>{items.oldPrice}</del></span>
               </p>
                <p className="bg-cyan-600 text-white px-5 py-1 mt-5 rounded-md font-sans font-bold">
                  Buy
                </p>
              </div>
        </div>
    );
};

export default FlashCard;