// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight, FaHeart, FaStar } from "react-icons/fa";

// const CardSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const cards = [
//     {
//       image: "https://via.placeholder.com/300",
//       label: "New!",
//       title: "Boujee Marshmallow 10ml Travel Spray",
//       price: "$129",
//       rating: "4.9",
//       reviews: "(200)",
//     },
//     // Add 7 more card objects with unique content
//     ...Array(7).fill({
//       image: "https://via.placeholder.com/300",
//       label: "New!",
//       title: "Boujee Marshmallow 10ml Travel Spray",
//       price: "$129",
//       rating: "4.9",
//       reviews: "(200)",
//     }),
//   ];

//   const handleNext = () => {
//     if (currentIndex < cards.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="w-full relative overflow-hidden">
//       <div className="flex items-center justify-between absolute top-1/2 left-0 w-full z-10">
//         <button
//           className="text-pink-700 bg-white rounded-full p-2 hover:bg-pink-700 hover:text-white transition"
//           onClick={handlePrev}
//         >
//           <FaArrowLeft size={24} />
//         </button>
//         <button
//           className="text-pink-700 bg-white rounded-full p-2 hover:bg-pink-700 hover:text-white transition"
//           onClick={handleNext}
//         >
//           <FaArrowRight size={24} />
//         </button>
//       </div>

//       {/* cards */}
//       <div
//         className="flex transition-transform duration-500 "
//         style={{ transform: `translateX(-${currentIndex * 300}px)` }}
//       >
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="w-[310px] h-[600px] flex-shrink-0 border-2 border-pink-700 rounded-lg overflow-hidden m-2"
//           >
//             <div className="relative">
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full h-[300px] object-cover"
//               />
//               <span className="absolute top-2 left-2 bg-pink-700 text-white text-xs font-bold rounded-full px-2 py-1">
//                 {card.label}
//               </span>
//               <FaHeart
//                 className="absolute top-2 right-2 text-pink-700 hover:text-red-500 cursor-pointer"
//                 size={20}
//               />
//             </div>
//             <div className="p-4 flex flex-col gap-3">
//               <h2 className="text-lg font-bold text-gray-800">{card.title}</h2>
//               <p className="text-pink-700 font-semibold">{card.price}</p>
//               <div className="flex items-center gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="text-yellow-500" />
//                 ))}
//                 <span className="text-gray-600 ml-1">{card.rating} {card.reviews}</span>
//               </div>
//               <button
//                 className="px-6 py-3 bg-pink-700 text-white font-semibold rounded-lg hover:bg-white hover:border hover:border-pink-700 hover:text-pink-700 transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//   );
// };

// export default CardSlider;
