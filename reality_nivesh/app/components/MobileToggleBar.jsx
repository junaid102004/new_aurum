"use client";
import React, { useState } from 'react'
import MobileNavbar from './MobileNavbar'

const MobileToggleBar = () => {
        const [isOpen, setIsOpen] = useState(false);
    
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)} // click on overlay to close
        ></div>
      )}

      {/* Toggle Button */}
      <div onClick={() => setIsOpen(!isOpen)} >
        <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.14912 0.430664H17.7979C18.5749 0.430664..." fill="white" />
          <path d="M18.628 23.869H3.97922C3.20220..." fill="white" />
        </svg>
      </div>

      {/* Slide-in Navbar */}
      {isOpen && <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  )
}

export default MobileToggleBar;
