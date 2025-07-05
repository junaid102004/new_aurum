import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="relative w-full bg-black text-white mt-10 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/uploads/footer-bg-image.webp')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-5 py-10 space-y-10">

          {/* Logo */}
          <div className="w-[320px] h-[90px] relative">
            <Image src="/uploads/Frame_1.png" fill alt="logo" className="object-contain" />
          </div>

          {/* Navigation & Contact */}
          <div className="w-full border-t border-gray-400 pt-8 flex  flex-col justify-between items-center text-sm space-y-6 lg:space-y-0">

            {/* Links */}
            <div className="flex flex-wrap  justify-center gap-6">
              {[
                "ABOUT US", "PRODUCTS", "LOCATION MAP", "PLANS",
                "PRICE", "AMENITIES", "GALLERY", "FAQ",
                "DOWNLOADS", "CONTACT US"
              ].map((item, idx) => (
                <a key={idx} href="#" className="hover:text-orange-400 transition">{item}</a>
              ))}
            </div>

            {/* Phone Numbers */}


            {/* Social Icons */}
            <div className="flex  text-center gap-4 mt-4 lg:mt-0">
              <p>📞 +91 89680 66698 | +91 99880 10405</p>
              {["facebook", "instagram", "twitter", "pinterest", "youtube"].map((icon, idx) => (
                <a key={idx} href="#" className="hover:scale-110 transition">
                  <img
                    src={`/icons/${icon}.svg`}
                    alt={icon}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Sales Partner */}
          <div className="text-center text-[20px] text-gray-300">
            SALES PARTNER – <strong className=" text-[20px] text-orange-500">REALTY </strong><strong className='text-[20px] text-blue-600'>NIVESH</strong>
            {"\u00A0\u00A0"} Showroom No. 12, Level 2, Uptown Insignia PR-7, Airport Road, Zirakpur, Punjab
          </div>

          {/* Bottom bar */}

        </div>
      </div>
      <div className="text-xs bg-[#F1F1F1]  items-center pb-3 text-gray-400 pt-4 border-t flex lg:flex-row flex-col border-gray-600 justify-between w-full text-center">
        <div className='lg:w-[50%] flex lg:justify-start justify-center gap-5 lg:gap-0 w-full'>
          <ul className='flex w-full gap-4 lg:gap-[60px] px-5'>
            <li className='font-["Supera"] font-medium lg:text-[16px] text-black'>
              Disclaimer
            </li>
            <li className='font-["Supera"] font-medium lg:text-[16px] text-black'>
              Terms and condition
            </li> 
           <li className='font-["Supera"] font-medium lg:text-[16px] text-black'>
              Privacy policy
            </li>
          </ul>
        </div>
        <div className='flex text-black font-semibold text-[10px] lg:text-[16px] uppercase justify-end w-full lg:w-[50%] pr-10'>
          © Copyright 2024 sushma GROUP.  REALTY NIVESH All Rights Reserved
        </div>
      </div>
    </>
  )
}

export default Footer
