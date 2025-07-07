"use client";

import React, { useState, useEffect, useRef } from "react";
// import { Phone, MessageCircle } from "lucide-react";
import OverlayIcon from "./OverlayIcon";
import { Phone, MessageCircle, Home, IndianRupee, Building, Gift } from "lucide-react";

const ContactBarMobile = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const intervalRef = useRef(null);

  const toggleOverlay = () => setIsOverlayOpen((prev) => !prev);

  const toggleButton = () => {
    setIsOpen((prev) => !prev);
  };

  // Loop show/hide every 5 seconds when isOpen is false
  useEffect(() => {
    if (!isOpen) {
      intervalRef.current = setInterval(() => {
        setVisible((prev) => !prev);
      }, 5000);
    } else {
      setVisible(true); // Force show when open
    }

    return () => clearInterval(intervalRef.current);
  }, [isOpen]);

  // Scroll handler — keeps bar visible when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <div
      className={`w-full fixed bottom-0 left-0 z-40 sm:hidden transition-all duration-500 pb-2 ease-in-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
    >

      <div className="relative mx-auto w-full max-w-[461px] xs:px-0  px-1">
        {/* Background SVG */}
        <svg
          className="w-full"
          viewBox="0 0 461 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M188.752 10.1253C185.653 4.61766 180.256 0.366638 173.936 0.366638H10.7858C5.28923 0.366638 0.833374 4.82249 0.833374 10.3191V50.6693C0.833374 56.1659 5.28922 60.6217 10.7858 60.6217H450.881C456.378 60.6217 460.833 56.1659 460.833 50.6693V10.3191C460.833 4.8225 456.378 0.366638 450.881 0.366638H288.202C281.882 0.366638 276.485 4.61766 273.386 10.1253C265.011 25.0091 249.198 35.0449 231.069 35.0449C212.94 35.0449 197.127 25.0091 188.752 10.1253Z"
            fill="#ffdeac"
          />
        </svg>

        {/* Contact Buttons */}
        <div className="w-full h-full absolute left-0 bottom-0 flex text-[#000]">
          {/* Call Button */}
          <button
            aria-label="call"
            className="w-1/3 relative pt-1.5 text-center text-[11px] xs:text-[12px] font-semibold tracking-widest flex flex-col justify-center items-center"
          >
            <div className="absolute bottom-[1px] xxs:bottom-0.5 xs:bottom-1 flex flex-col gap-[3px] xs:gap-[3px]">
              <Phone size={16} className="mx-auto" />
              Call
            </div>
          </button>

          {/* Book Site Visit Button */}
          <div className="w-1/3 relative pt-5 ml-1 text-center text-[11px] xs:text-[12px] font-semibold tracking-widest flex flex-col justify-center items-center">
            {/* Overlay */}
            <div
              className={`duration-75 left-[100%] z-10 fixed overflow-hidden h-screen w-screen bg-[#000000aa] ${isOverlayOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
                }`}
            >
              <div className="w-full h-full flex justify-center items-end py-9">
                <div className="opacity-0 w-[55px] h-[55px] duration-500 relative rotate-[24deg] flex justify-between items-center rounded-full"></div>
              </div>
            </div>

            {/* Toggle Button */}
            <button
              onClick={toggleButton}
              className="rotate-0 duration-500 flex justify-center items-center w-[55px] xs:w-[62px] h-[55px] xs:h-[62px] absolute bottom-[25px] xs:bottom-[32px] cxs:bottom-[34px] left-[50%] z-50 translate-x-[-55%] rounded-full bg-[#000]"
            >
                {isOpen && (
                    <>
                      {/* Price Button - Top Left */}
                      <a 
                        href="/price"
                        className={`absolute w-[68px] h-[68px] bg-white rounded-full flex flex-col justify-center items-center shadow-lg transition-all duration-500 ${
                          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                        }`}
                        style={{
                          top: '-80px',
                          left: '-80px',
                          transitionDelay: '100ms'
                        }}
                      >
                        <IndianRupee size={24} className="text-[#a85918] mb-1" />
                        <span className="text-[10px] font-semibold text-[#a85918] uppercase tracking-wide">Price</span>
                      </a>

                      {/* Current Offer Button - Top */}
                      <a 
                        href="/price#current-offer"
                        className={`absolute w-[68px] h-[68px] bg-white rounded-full flex flex-col justify-center items-center shadow-lg transition-all duration-500 ${
                          isOverlayOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                        }`}
                        style={{
                          top: '-100px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          transitionDelay: '200ms'
                        }}
                      >
                        <Gift size={24} className="text-[#a85918] mb-1" />
                        <span className="text-[9px] font-semibold text-[#a85918] uppercase tracking-wide text-center leading-tight">Current<br/>Offer</span>
                      </a>

                      {/* Amenities Button - Top Right */}
                      <a 
                        href="/amenities"
                        className={`absolute w-[68px] h-[68px] bg-white rounded-full flex flex-col justify-center items-center shadow-lg transition-all duration-500 ${
                          isOverlayOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                        }`}
                        style={{
                          top: '-80px',
                          right: '-80px',
                          transitionDelay: '300ms'
                        }}
                      >
                        <Building size={24} className="text-[#a85918] mb-1" />
                        <span className="text-[9px] font-semibold text-[#a85918] uppercase tracking-wide">Amenities</span>
                      </a>

                      {/* Our Products Button - Bottom Left */}
                      <a 
                        href="/#products"
                        className={`absolute w-[68px] h-[68px] bg-white rounded-full flex flex-col justify-center items-center shadow-lg transition-all duration-500 ${
                          isOverlayOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                        }`}
                        style={{
                          bottom: '-80px',
                          left: '-80px',
                          transitionDelay: '400ms'
                        }}
                      >
                        <Home size={24} className="text-[#a85918] mb-1" />
                        <span className="text-[8px] font-semibold text-[#a85918] uppercase tracking-wide text-center leading-tight">Our<br/>Products</span>
                      </a>
                    </>
                  )}
              <div className="relative">
                  <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.625 33.3762L25.4681 25.9827L32.8615 10.1396L17.0184 17.5331L9.625 33.3762ZM21.2433 23.8703C20.6447 23.8703 20.1434 23.6675 19.7392 23.2619C19.3351 22.8564 19.1323 22.355 19.1308 21.7579C19.1294 21.1608 19.3322 20.6595 19.7392 20.2539C20.1462 19.8483 20.6476 19.6455 21.2433 19.6455C21.839 19.6455 22.341 19.8483 22.7494 20.2539C23.1578 20.6595 23.3599 21.1608 23.3557 21.7579C23.3514 22.355 23.1487 22.8571 22.7473 23.2641C22.3459 23.6711 21.8446 23.8731 21.2433 23.8703ZM21.2433 42.882C18.3211 42.882 15.575 42.3272 13.0049 41.2174C10.4348 40.1077 8.19912 38.603 6.29795 36.7032C4.39678 34.8035 2.89204 32.5678 1.78372 29.9963C0.675412 27.4248 0.120552 24.6787 0.119143 21.7579C0.117735 18.8371 0.672595 16.091 1.78372 13.5195C2.89485 10.948 4.39959 8.71236 6.29795 6.81259C8.1963 4.91283 10.4319 3.40809 13.0049 2.29837C15.5778 1.18865 18.3239 0.633789 21.2433 0.633789C24.1626 0.633789 26.9088 1.18865 29.4817 2.29837C32.0546 3.40809 34.2902 4.91283 36.1886 6.81259C38.0869 8.71236 39.5924 10.948 40.7049 13.5195C41.8175 16.091 42.3716 18.8371 42.3674 21.7579C42.3632 24.6787 41.8083 27.4248 40.7028 29.9963C39.5973 32.5678 38.0926 34.8035 36.1886 36.7032C34.2846 38.603 32.049 40.1084 29.4817 41.2196C26.9144 42.3307 24.1682 42.8848 21.2433 42.882ZM21.2433 38.6572C25.961 38.6572 29.957 37.0201 33.2312 33.7458C36.5054 30.4716 38.1426 26.4756 38.1426 21.7579C38.1426 17.0402 36.5054 13.0442 33.2312 9.76997C29.957 6.49573 25.961 4.85861 21.2433 4.85861C16.5255 4.85861 12.5296 6.49573 9.25533 9.76997C5.98109 13.0442 4.34397 17.0402 4.34397 21.7579C4.34397 26.4756 5.98109 30.4716 9.25533 33.7458C12.5296 37.0201 16.5255 38.6572 21.2433 38.6572Z" fill="white" />
              </svg>
              </div>
            

            </button>
            <span className="absolute pb-0.5 xs:pb-1 bottom-0 self-center">
              Book a site visit
            </span>
          </div>

          {/* WhatsApp Button */}
          <div className="w-1/3 relative pt-1 text-center text-[11px] xs:text-[12px] font-semibold tracking-widest flex flex-col justify-center items-center">
            <div className="absolute bottom-[0px] xxs:bottom-0.5 xs:bottom-1 flex flex-col gap-[1px] xxs:gap-[3px] xs:gap-[3px]">
              <MessageCircle size={21} className="mx-auto" />
              WhatsApp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBarMobile;
