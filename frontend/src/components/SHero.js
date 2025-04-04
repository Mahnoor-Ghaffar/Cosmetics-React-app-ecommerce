import React from 'react';

const SHero = () => {
  return (
    <section className="relative w-full h-[550px] flex items-center justify-center bg-gray-100 my-16">
      {/* Desktop Image */}
      <img 
        src="s-hero-img.jpg" 
        alt="Hero Desktop" 
        className="hidden lg:block w-[230px] md:w-[700px] h-full"
      />
      
      {/* Mobile Image */}
      {/* <img 
        src="s-hero-img.jpg" 
        alt="Hero Mobile" 
        className="block lg:hidden w-full h-full object-cover"
      /> */}
    </section>
  );
};

export default SHero;