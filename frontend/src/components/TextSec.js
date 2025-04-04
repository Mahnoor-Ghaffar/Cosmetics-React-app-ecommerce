import React, { useState } from "react";

const TextSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: "AN INCREDIBLY BOUJEE FLUFFY AND INDULGENT FRAGRANCE",
      buttonLabel: "Discover More",
    },
    {
      text: "OUR FINAL EYE SHADOW PALETTE!",
      buttonLabel: "Shop Now",
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-[200px] flex flex-col items-center  bg-gray-100 relative">
      <div className="text-center">
        <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mt-6 mb-11">
          {slides[currentSlide].text}
        </h1>
        <button
          className="px-20 py-3 bg-[#E31870] text-white font-semibold rounded-[30px] hover:bg-white hover:border hover:border-pink-700 hover:text-pink-700 transition"
        >
          {slides[currentSlide].buttonLabel}
        </button>
      </div>
      <div className="absolute right-16 bottom-5 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-2 ${
              currentSlide === index
                ? "bg-pink-700 border-pink-700"
                : "bg-white border-pink-700"
            }`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TextSection;
