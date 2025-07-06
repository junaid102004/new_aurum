"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ToggleBar from "./icons/ToggleBr";
import { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import MobileToggleBar from "./MobileToggleBar";
import NewMobileToggleBar from "./icons/NewMobileToggleBar";
const Navbar = () => {
    const [expandable, setExpandable] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [scrolled, setScrolled] = useState(false);
    const [navbarBg, setNavbarBg] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    // 🔄 Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        const updateNavbarBg = () => {
          const screenWidth = window.innerWidth;
      
          const isSmallScreen = screenWidth < 640;
      
          // 👇 this is your original logic — we just tweak the black part
          const bg =
            isHome && !scrolled
              ? "bg-transparent"
              : isSmallScreen
              ? "bg-[url('/uploads/bgImage.png')] bg-cover bg-no-repeat"
              : "bg-black";
      
          setNavbarBg(bg);
        };
      
        // Run once and on scroll/resize
        updateNavbarBg();
        window.addEventListener("resize", updateNavbarBg);
        window.addEventListener("scroll", updateNavbarBg);
      
        return () => {
          window.removeEventListener("resize", updateNavbarBg);
          window.removeEventListener("scroll", updateNavbarBg);
        };
      }, [isHome, scrolled]);
      
    // useEffect(() => {
    //     const handleResize = () => {
    //         const isLargeScreen = window.innerWidth >= 1024;
    //         setExpandable(isLargeScreen);
    //     };

    //     // Set initial value on mount
    //     handleResize();

    //     // Update on resize
    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    return (
        <>
            <nav
                className={`${navbarBg} bg-cover bg-no-repeat  fixed w-full top-0 left-0 z-50 transition-all duration-500`}
            >
                {/* Navbar content goes here */}
                <div className=" w-full px-2 ">
                    <div className="relative flex h-auto items-center ">
                        <div className="flex flex-1 items-center justify-between lg:justify-around">
                            <div className="flex p-2 shrink-0 items-center">
                                <Image
                                    src="/uploads/_2373034914864.png"
                                    width={200}
                                    height={70}
                                    alt="Description of image"
                                />
                            </div>
                            {/* <button
                                className="p-3 text-white bg-black fixed top-4 left-4 z-50 rounded"
                                onClick={() => setIsOpen(true)}
                            >
                                ☰
                            </button> */}

                            {/* Overlay (dark background behind the navbar) */}
                            {/* {isOpen && (
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                                    onClick={() => setIsOpen(false)} // click on overlay to close
                                ></div>
                            )} */}

                            <div className="hidden border-2  border-red-400  sm:ml-6 transition-all duration-500	  lg:flex justify-around">
                                <div className="hidden lg:flex  items-start h-full xl:space-x-4">
                                    {!expandable && (
                                        <a href="#" className="rounded-md lg:text-[14px] xl:text-[18px] font-['SuperaGothic'] uppercase text-white">About Us</a>

                                    )}

                                    <ul>
                                        <a href="#" className="rounded-md px-3 py-2 lg:text-[14px] xl:text-[18px]  font-['SuperaGothic'] uppercase text-white">Products</a>
                                        {expandable && (
                                            <>

                                                <li>
                                                    <a href="#" className="hidden rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] md:block uppercase text-white">3+1 BHK</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">4+1 BHK</a>
                                                </li>

                                            </>
                                        )}
                                    </ul>
                                    <ul >

                                        <a href="#" className="rounded-md px-3 py-2 lg:text-[14px] xl:text-[18px]  font-['SuperaGothic'] uppercase text-white">Plans</a>
                                        {expandable && (
                                            <>
                                                <li>
                                                    <a href="#" className="hidden rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] md:block uppercase text-white">Unit Plans</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Site Plan </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Tower Plan </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Amenities</a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                    <ul >
                                        <a href="#" className="rounded-md px-3 py-2 lg:text-[14px] xl:text-[18px]  font-['SuperaGothic'] uppercase text-white">Locaion Map</a>
                                        {expandable && (
                                            <>
                                                <li>
                                                    <a href="#" className="hidden rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] md:block uppercase text-white">Near By</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Find Distance</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Key Highlights</a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                    <ul >

                                        <a href="#" className="rounded-md px-3 py-2 lg:text-[14px] xl:text-[18px]  font-['SuperaGothic'] uppercase text-white">Price</a>
                                        {expandable && (
                                            <>
                                                <li>
                                                    <a href="#" className="hidden rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] md:block uppercase text-white">Price Sheet</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Payment Structure</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Current Offers</a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                    <ul >

                                        <a href="#" className="rounded-md px-3 py-2 lg:text-[14px] xl:text-[18px]  font-['SuperaGothic'] uppercase text-white">Amenities</a>
                                        {expandable && (
                                            <>
                                                <li>
                                                    <a href="#" className="hidden rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] md:block uppercase text-white">Project Walk Through</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Sample Flat</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Project Gallery</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Construction Updates </a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                    <ul >

                                        <a href="#" className="rounded-md px-3 py-2 lg:text-[14px] xl:text-[18px]  font-['SuperaGothic'] uppercase text-white">Gallery</a>
                                        {expandable && (
                                            <>
                                                <li>
                                                    <a href="#" className="hidden rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] md:block uppercase text-white">+91 99880 10405</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Product 2</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Product 3</a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                    <ul >

                                        <a href="#" className="rounded-md px-3 py-2 lg:text-[14px] xl:text-[18px]  font-['SuperaGothic'] uppercase text-white">Contact Us</a>
                                        {expandable && (
                                            <>
                                                <li>
                                                    <a href="#" className="hidden rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] md:block uppercase text-white">Product 1</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Product 2</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="hidden md:block rounded-md px-3 py-2 text-[12px] font-['SuperaGothic'] uppercase text-white">Product 3</a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden lg:flex">
                                <ToggleBar expandable={expandable} setExpandable={setExpandable} />
                             

                            </div>
                            <div className="lg:hidden">
                            <NewMobileToggleBar />
                            </div>

                        </div>

                    </div>
                </div>

            </nav>

        </>
    );
};

export default Navbar;
