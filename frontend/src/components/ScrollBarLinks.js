import React from "react";

const ScrollbarLinks = () => {
  return (
    <div className="w-full overflow-x-auto py-3 bg-green-white">
      <div className="flex space-x-4 items-center justify-center">
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-5 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px] shrink-0">
          New
        </button>
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-5 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px] shrink-0">
          Best Sellers
        </button>
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-5 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px] shrink-0">
          Huda Beauty
        </button>
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-5 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px] shrink-0" shrink-0>
          Kayali
        </button>
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-5 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px] shrink-0">
          Wishful
        </button>
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-5 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px] shrink-0">
          Gifts & Sets
        </button>
      </div>
    </div>
  );
};

export default ScrollbarLinks;
