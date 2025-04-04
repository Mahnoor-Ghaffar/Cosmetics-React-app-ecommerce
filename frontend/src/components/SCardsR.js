import { FaArrowLeft, FaArrowRight, FaHeart, FaStar } from "react-icons/fa";
import React, { useState, useEffect } from "react";

function SCardsR() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch products from the Makeup API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish"
      );
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    },2000); 

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [products.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < products.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 1
    );
  };

  return (
    <div className="w-full relative overflow-hidden">
      <div className="flex items-center justify-between absolute top-1/2 left-0 w-full z-10">
        <button
          className="text-pink-700 bg-white rounded-full p-2 hover:bg-pink-700 hover:text-white transition"
          onClick={handlePrev}
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          className="text-pink-700 bg-white rounded-full p-2 hover:bg-pink-700 hover:text-white transition"
          onClick={handleNext}
        >
          <FaArrowRight size={24} />
        </button>
      </div>

      {/* Product Cards */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 300}px)` }}
      >
        {products.map((product, index) => (
          <div
            key={product.id || index}
            className="w-[310px] h-[600px] flex-shrink-0 border-2 border-pink-700 rounded-lg overflow-hidden m-2"
          >
            <div className="relative">
              <img
                src={product.image_link || "https://via.placeholder.com/300"}
                alt={product.name}
                className="w-full h-[50%] object-cover"
              />
              <span className="absolute top-2 left-2 bg-pink-700 text-white text-xs font-bold rounded-full px-2 py-1">
                {product.category || "New"}
              </span>
              <FaHeart
                className="absolute top-2 right-2 text-pink-700 hover:text-red-500 cursor-pointer"
                size={20}
              />
            </div>
            <div className="p-4 flex flex-col gap-5 h-[40%]">
              <h2 className="text-lg font-bold text-gray-800 h-[120px]">
                {product.name}
              </h2>
              <p className="text-pink-700 font-semibold">
                ${product.price || "N/A"}
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
                <span className="text-gray-600 ml-1">
                  {product.rating || "N/A"} ({product.review_count || "0"})
                </span>
              </div>
              <button className="px-6 py-3 bg-pink-700 text-white font-semibold rounded-lg hover:bg-white hover:border hover:border-pink-700 hover:text-pink-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SCardsR;




// import { FaArrowLeft, FaArrowRight, FaHeart, FaStar } from "react-icons/fa";
// import React, { useState, useEffect } from "react";

// function SCardsR() {
//   const [products, setProducts] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Fetch products from MongoDB API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/get-cosmetics"); // Your backend API
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Auto-scroll functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 2000);

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [products.length]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex < products.length - 1 ? prevIndex + 1 : 0
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : products.length - 1
//     );
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

//       {/* Product Cards */}
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${currentIndex * 300}px)` }}
//       >
//         {products.map((product, index) => (
//           <div
//             key={product.id || index}
//             className="w-[310px] h-[600px] flex-shrink-0 border-2 border-pink-700 rounded-lg overflow-hidden m-2"
//           >
//             <div className="relative">
//               <img
//                 src={product.image_url || "https://via.placeholder.com/300"}
//                 alt={product.name}
//                 className="w-full h-[50%] object-cover"
//               />
//               <span className="absolute top-2 left-2 bg-pink-700 text-white text-xs font-bold rounded-full px-2 py-1">
//                 {product.product_type || "New"}
//               </span>
//               <FaHeart
//                 className="absolute top-2 right-2 text-pink-700 hover:text-red-500 cursor-pointer"
//                 size={20}
//               />
//             </div>
//             <div className="p-4 flex flex-col gap-5 h-[40%]">
//               <h2 className="text-lg font-bold text-gray-800 h-[120px]">
//                 {product.name}
//               </h2>
//               <p className="text-pink-700 font-semibold">
//                 {product.currency} {product.price || "N/A"}
//               </p>
//               <div className="flex items-center gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="text-yellow-500" />
//                 ))}
//                 <span className="text-gray-600 ml-1">
//                   {product.rating || "N/A"}
//                 </span>
//               </div>
//               <button className="px-6 py-3 bg-pink-700 text-white font-semibold rounded-lg hover:bg-white hover:border hover:border-pink-700 hover:text-pink-700 transition">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SCardsR;
