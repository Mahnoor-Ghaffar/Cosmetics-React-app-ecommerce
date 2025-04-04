// import React, { useEffect, useState, useCallback } from 'react'
// import image1 from '../assets/Banner/s-hero-img.jpg'
// import image2 from '../assets/Banner/s-hero-img.jpg'
// import image3 from '../assets/Banner/s-hero-img.jpg'
// import image4 from '../assets/Banner/s-hero-img.jpg'
// import image5 from '../assets/Banner/s-hero-img.jpg'

// import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"

// const BannerProduct = () => {
//   const [currentImage, setCurrentImage] = useState(0)

//   const desktopImages = [image1, image2, image3, image4, image5]
//   const mobileImages = [image1, image2, image3, image4, image5] // Same images for now

//   const nextImage = useCallback(() => {
//     setCurrentImage((prev) => (prev < desktopImages.length - 1 ? prev + 1 : 0))
//   }, [desktopImages.length])

//   const prevImage = () => {
//     if (currentImage !== 0) {
//       setCurrentImage((prev) => prev - 1)
//     }
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImage()
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [nextImage])

//   return (
//     <div className='container mx-auto px-4 rounded'>
//       <div className="md:h-72 h-58 w-full bg-slate-200 relative overflow-hidden">

//         {/* Controls (only on md and up) */}
//         <div className='absolute z-10 h-full w-full md:flex items-center justify-between px-4 hidden'>
//           <button onClick={prevImage} className='bg-white shadow-md rounded-full p-2 text-2xl'>
//             <FaAngleLeft />
//           </button>
//           <button onClick={nextImage} className='bg-white shadow-md rounded-full p-2 text-2xl'>
//             <FaAngleRight />
//           </button>
//         </div>

//         {/* Desktop/Tablet Slider */}
//         <div className='hidden md:flex h-full w-full transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${currentImage * 100}%)` }}>
//           {desktopImages.map((img, index) => (
//             <div key={`desktop-${index}`} className='min-w-full min-h-full'>
//               <img src={img} alt={`Banner ${index + 1}`} className='w-full h-full object-cover' />
//             </div>
//           ))}
//         </div>

//         {/* Mobile Slider */}
//         <div className='flex md:hidden h-full w-full transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${currentImage * 100}%)` }}>
//           {mobileImages.map((img, index) => (
//             <div key={`mobile-${index}`} className='min-w-full min-h-full'>
//               <img src={img} alt={`Mobile Banner ${index + 1}`} className='w-full h-full object-cover' />
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default BannerProduct
