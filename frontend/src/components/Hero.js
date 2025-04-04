// import React, { useState, useEffect } from "react";

// const HeroSection = () => {
//   // Set the initial index of the image
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Define the list of images
//   const images = [
//     "../../public/M-A1-YUM-BOUJEE-GIF-newsize.gif", // Replace with your image URLs
//     "https://via.placeholder.com/1920x800/ffbb33/333333?text=Image+2",
//     "https://via.placeholder.com/1920x800/33ccff/333333?text=Image+3",
//     "https://via.placeholder.com/1920x800/32ff32/333333?text=Image+4",
//   ];

//   // Automatically change the image every 5 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change every 5 seconds

//     // Cleanup the interval when the component is unmounted
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <div
//         className="absolute inset-0 transition-transform duration-500 ease-in-out"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//         ))}
//       </div>

//       {/* Optional: Add some text or content for the hero section */}
//       <div className="absolute inset-0 flex items-center justify-center text-white z-10">
//         <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[550px] flex items-center justify-center bg-gray-100">
      {/* Desktop Image */}
      <img 
        src="D-A1-YUM-BOUJEE-GIF-newsize.gif" 
        alt="Hero Desktop" 
        className="hidden lg:block w-full h-full"
      />
      
      {/* Mobile Image */}
      <img 
        src="/M-A1-YUM-BOUJEE-GIF-newsize.gif" 
        alt="Hero Mobile" 
        className="block lg:hidden w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;
