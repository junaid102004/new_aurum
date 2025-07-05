"use client";
import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const ContactBar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => setIsOverlayOpen(!isOverlayOpen);

  return (
    <>
    </>
    // <div className="relative table mx-auto w-full max-w-[461px]">
    //   {/* Background SVG */}
    //   <svg className="w-full" viewBox="0 0 461 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M188.752 10.1253C185.653 4.61766 180.256 0.366638 173.936 0.366638H10.7858C5.28923 0.366638 0.833374 4.82249 0.833374 10.3191V50.6693C0.833374 56.1659 5.28922 60.6217 10.7858 60.6217H450.881C456.378 60.6217 460.833 56.1659 460.833 50.6693V10.3191C460.833 4.8225 456.378 0.366638 450.881 0.366638H288.202C281.882 0.366638 276.485 4.61766 273.386 10.1253C265.011 25.0091 249.198 35.0449 231.069 35.0449C212.94 35.0449 197.127 25.0091 188.752 10.1253Z"
    //       fill="#ffdeac"
    //     />
    //   </svg>

    //   {/* Contact Buttons */}
    //   <div className="w-full  flex justify-between h-full absolute left-0 bottom-0  text-[#000]">
    //     {/* Call Button */}
    //     <button
    //       aria-label="call"
    //       className=" relative pt-1.5 text-center text-[11px] whitespace-nowrap xs:text-[12px] font-semibold tracking-widest flex flex-col justify-center items-center"
    //     >
    //       <div className="absolute bottom-[1px]  left-[45px] xxs:bottom-0.5 xs:bottom-1 flex flex-col gap-[3px] xs:gap-[3px]">
    //         <span className="mx-auto">
    //           <Phone size={16} />
    //         </span>
    //         Call
    //       </div>
    //     </button>

    //     {/* Book Site Visit Button */}
    //     <div className=" relative pt-5 ml-1 text-center text-[11px] whitespace-nowrap xs:text-[12px] font-semibold tracking-widest flex flex-col justify-center items-center">
    //       <div className={`duration-75 left-[100%] z-10 fixed overflow-hidden h-screen w-screen bg-[#000000aa] ${isOverlayOpen ? 'opacity-100' : 'opacity-0'}`}>
    //         {/* Overlay content */}
    //         <div className="w-full h-full flex justify-center items-end py-9">
    //           {/* Quick Links */}
    //           <div className="opacity-0 w-[55px] h-[55px] duration-500 relative rotate-[24deg] flex justify-between items-center rounded-full">
    //             {/* Quick action buttons */}
    //             {/* Note: Add your quick action buttons here */}
    //           </div>
    //         </div>
    //       </div>

    //       {/* Center Button */}
    //       <button
    //         onClick={toggleOverlay}
    //         className="rotate-0 duration-500 flex justify-center items-center w-[55px] xs:w-[62px] h-[55px] xs:h-[62px] absolute bottom-[25px] xs:bottom-[32px] cxs:bottom-[34px] left-[50%] z-50 translate-x-[-55%] rounded-full bg-[#000]"
    //       >
    //         <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <circle cx="26.9333" cy="27.1358" r="26.6817" fill="#000" />
    //           <path
    //             d="M14.9093 39.1598L31.3056 31.5082L38.9572 15.1119L22.5609 22.7635L14.9093 39.1598ZM26.9333 29.322C26.3139 29.322 25.795 29.1121 25.3767 28.6924C24.9584 28.2726 24.7486 27.7538 24.7471 27.1358C24.7456 26.5179 24.9555 25.999 25.3767 25.5793C25.7979 25.1595 26.3168 24.9496 26.9333 24.9496C27.5498 24.9496 28.0694 25.1595 28.492 25.5793C28.9147 25.999 29.1238 26.5179 29.1194 27.1358C29.1151 27.7538 28.9052 28.2734 28.4898 28.6946C28.0745 29.1158 27.5556 29.3249 26.9333 29.322ZM26.9333 48.9975C23.9091 48.9975 21.067 48.4233 18.4072 47.2748C15.7474 46.1264 13.4337 44.5691 11.4661 42.603C9.49856 40.6369 7.94128 38.3232 6.79427 35.6619C5.64726 33.0006 5.07302 30.1586 5.07157 27.1358C5.07011 24.1131 5.64434 21.271 6.79427 18.6097C7.94419 15.9485 9.50148 13.6348 11.4661 11.6687C13.4308 9.70256 15.7445 8.14528 18.4072 6.99681C21.07 5.84834 23.912 5.27411 26.9333 5.27411C29.9546 5.27411 32.7966 5.84834 35.4593 6.99681C38.1221 8.14528 40.4358 9.70256 42.4004 11.6687C44.3651 13.6348 45.9231 15.9485 47.0745 18.6097C48.2258 21.271 48.7994 24.1131 48.795 27.1358C48.7906 30.1586 48.2164 33.0006 47.0723 35.6619C45.9282 38.3232 44.3709 40.6369 42.4004 42.603C40.43 44.5691 38.1163 46.1271 35.4593 47.277C32.8024 48.4269 29.9604 49.0004 26.9333 48.9975ZM26.9333 44.6252C31.8157 44.6252 35.9512 42.9309 39.3398 39.5423C42.7284 36.1538 44.4226 32.0183 44.4226 27.1358C44.4226 22.2534 42.7284 18.1179 39.3398 14.7293C35.9512 11.3407 31.8157 9.64645 26.9333 9.64645C22.0508 9.64645 17.9153 11.3407 14.5268 14.7293C11.1382 18.1179 9.44391 22.2534 9.44391 27.1358C9.44391 32.0183 11.1382 36.1538 14.5268 39.5423C17.9153 42.9309 22.0508 44.6252 26.9333 44.6252Z"
    //             fill="white"
    //           />
    //         </svg>
    //       </button>
    //       <span className="absolute pb-0.5 xs:pb-1 bottom-0 self-center">Book a site visit</span>
    //     </div>

    //     {/* WhatsApp Button */}
    //     <div className=" relative pt-1 text-center text-[11px] whitespace-nowrap xs:text-[12px] font-semibold tracking-widest flex flex-col justify-center items-center">
    //       <div className="absolute left-[-85px] bottom-[0px] xxs:bottom-0.5 xs:bottom-1 flex flex-col gap-[1px] xxs:gap-[3px] xs:gap-[3px]">
    //         <span className="mx-auto">
    //           <MessageCircle size={21} />
    //         </span>
    //         WhatsApp
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ContactBar;