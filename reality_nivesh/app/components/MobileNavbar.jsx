"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MobileNavbar = ({ isOpen, setIsOpen }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const menuItems = [
    
    {
      id: "products",
      name: "Products",
      route:"#products",
      subItems: [
        { id: "3bhk", name: "3 BHK" },
        { id: "4bhk", name: "4 BHK" },
        { id: "4plus", name: "4 BHK +1" },
      ],
    },
    {
      id: "plans",
      name: "Plans",
      route:"plans",
      subItems: [
        { id: "unit-plans", name: "Unit Plans",route:"plans" },
        { id: "site-plan", name: "Site Plan" ,route:"site-plan"},
        { id: "tower-plan", name: "Tower Plan" ,route:"tower-plan"},
      ],
    },
    {
      id: "location",
      name: "Location Map",
      route:"location",
      subItems: [
        { id: "nearby", name: "Nearby" },
        { id: "distance", name: "Find Distance" },
        { id: "highlights", name: "Key Highlights" },
      ],
    },
    {
      id: "price",
      name: "Price",
      route:"price",
      subItems: [
        { id: "price-sheet", name: "Price Sheet" },
        { id: "payment-structure", name: "Payment Structure" },
        { id: "offers", name: "Current Offers" },
      ],
    },
    {
      id: "amenities",
      name: "Amenities",
      route:"amenities",

    },
    {
      id: "gallery",
      name: "Gallery",
      route:"gallery",

    },
    {
      id: "contact-us",
      name: "Contact Us",
      route:"#contact-us",

    },
  ];

  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 lg:hidden h-full w-[80%] bg-[#202938] z-50 shadow-md
        transform transition-transform duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
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

        {/* Scrollable Nav */}
        <div className="overflow-y-auto h-[calc(100%-80px)]">
          <nav className="p-5">
            <ul className="flex flex-col space-y-2 text-lg font-medium text-white">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="border-b-[0.5px] font-['Supera'] font-semibold text-[18px] border-gray-700 py-3"
                >
                  <div
                    className={`flex justify-between items-center ${
                      item.subItems ? "cursor-pointer" : ""
                    }`}
                    onClick={() => item.subItems && toggleItem(item.id)}
                  >
                    <a href={`${item.route}`} className="block w-full">
                      {item.name}
                    </a>

                    {item.subItems && (
                      <>
                        {expandedItems[item.id] ? (
                          <FaChevronUp className="text-sm" />
                        ) : (
                          <FaChevronDown className="text-sm" />
                        )}
                      </>
                    )}
                  </div>

                  {/* Submenu (expandable) */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      expandedItems[item.id] ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    {item.subItems && (
                      <ul className="pl-3 space-y-1 text-sm text-white">
                        {item.subItems.map((sub) => (
                          <li key={sub.id}>
                            <a href={`${sub.route}`} className="block">
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
