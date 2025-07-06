"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MobileNavbar = ({ isOpen, setIsOpen }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const menuItems = [
    {
      id: "home",
      name: "Home",
    },
    {
      id: "products",
      name: "Products",
      subItems: [
        { id: "3bhk", name: "3 BHK" },
        { id: "4bhk", name: "4 BHK" },
        { id: "4plus", name: "4 BHK +1" },
      ],
    },
    {
      id: "plans",
      name: "Plans",
      subItems: [
        { id: "unit-plans", name: "Unit Plans" },
        { id: "site-plan", name: "Site Plan" },
        { id: "tower-plan", name: "Tower Plan" },
      ],
    },
    {
      id: "location",
      name: "Location Map",
      subItems: [
        { id: "nearby", name: "Nearby" },
        { id: "distance", name: "Find Distance" },
        { id: "highlights", name: "Key Highlights" },
      ],
    },
    {
      id: "price",
      name: "Price",
      subItems: [
        { id: "price-sheet", name: "Price Sheet" },
        { id: "payment-structure", name: "Payment Structure" },
        { id: "offers", name: "Current Offers" },
      ],
    },
    {
      id: "amenities",
      name: "Amenities",
    },
    {
      id: "gallery",
      name: "Gallery",
    },
    {
      id: "contact-us",
      name: "Contact Us",
    }
  ];
  useEffect(()=>{
       console.log("expandeditems",expandedItems)
  },[])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

//   const toggleItem = (id) => {
//     setExpandedItems((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//     console.log("idddddd",[id])
//   };
const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const updated = {
        ...prev,
        [id]: !prev[id],
      };
      console.log("Before:", prev);
      console.log("After:", updated);
      return updated;
    });
  };
  
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 lg:hidden h-full w-[80%] bg-[#202938] z-50 shadow-md 
        transform ${isOpen ? "translate-x-0" : "translate-x-full"} 
        transition-transform duration-[1500ms] ease-[cubic-bezier(0.86,0,0.07,1)]`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-600">
          <Image
            src={"/uploads/logo.webp"}
            height={100}
            width={100}
            alt="logo"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-white"
          >
            ✕
          </button>
        </div>

        <nav className="p-5">
          <ul className="flex flex-col space-y-4 text-lg font-medium text-white">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="border-b-[0.50px] border-gray-700 py-3"
              >
                <div
                  className={`flex justify-between items-center ${
                    item.subItems ? "cursor-pointer" : ""
                  }`}
                  onClick={() => item.subItems && toggleItem(item.id)}
                >
                  <a href={`#${item.id}`} className="block w-full">
                    {item.name}
                  </a>

                  {item.subItems && (
                    expandedItems[item.id] ? (
                      <FaChevronUp className="text-sm" />
                    ) : (
                      <FaChevronDown className="text-sm" />
                    )
                  )}
                </div>

                {/* Submenu */}
                {item.subItems && expandedItems[item.id] && (
                  <ul className="pl-3 mt-2 space-y-2 text-sm text-white">
                    {item.subItems.map((sub) => (
                      <li key={sub.id}>
                        <a href={`#${sub.id}`} className="block">
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNavbar;
