"use client";
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from "react";
// import RoundedSvg from "./icons/RoundedSvg";
const Highlight = () => {
    const images = [
        {
            src: "/uploads/AURUM-GATE-NIGHT-HIRES.png",
            description:
                "Welcome to Aurum's grand entrance,\nwhere luxury begins at first sight.\nThe gateway sets the tone for your elite lifestyle,\ninviting you into a world of elegance and grandeur."
        },
        {
            src: "/uploads/high.png",
            description:
                "High-rise views that touch the sky,\nbuilt with precision and luxury in every detail.\nEnjoy unmatched panoramas from your private balcony,\na daily reminder of the heights you've reached."
        },
        {
            src: "/uploads/high2.png",
            description:
                "Spacious living meets aesthetic beauty,\nwith interiors designed to inspire and relax.\nEvery inch reflects thoughtful planning,\ncrafted for families to grow and memories to bloom."
        },
        {
            src: "/uploads/high4.png",
            description:
                "Evening lights reflect your lifestyle,\nwhere comfort meets class after a long day.\nWatch the skyline come alive from your living room,\na perfect end to a productive day."
        },
        {
            src: "/uploads/high3.png",
            description:
                "Architectural brilliance with purpose,\nnot just a structure, but a statement.\nFrom foundation to finish, quality is paramount,\nbuilt for those who expect nothing but the best."
        },
        {
            src: "/uploads/image2.png",
            description:
                "Green surroundings meet urban luxury,\nblending nature with modern convenience.\nStep out into serene landscapes every morning,\nyet stay connected to the heartbeat of the city."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    return (
        <div className="flex w-full flex-col h-auto px-3 bg-[#EFEEEE] mb-[45px] py-3">
            <div className="w-full text-center mb-10">
                <h2 className="text-[42px] w-full font-bold uppercase font-['SuperaGothic'] text-ellipsis text-center">
                    Key Highlights
                </h2>
                <p>
                    Your Dream Home Awaits you to Own Exquisite Site in The medallion
                </p>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="h-[500px] flex  w-[90%] relative">
                    <div className="w-full flex  relative">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`relative h-full cursor-pointer overflow-hidden transition-all duration-500 ${activeIndex === index ? "w-[50%]" : "w-[10%]"

                                    }`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {/* Image */}
                                <Image
                                    src={src?.src}
                                    alt="Extensive Amenities"
                                    fill
                                    className="object-cover"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                    }}

                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/50"></div>

                                {/* Text Overlay */}
                                <div className={`absolute p-4 ${activeIndex === index ? "" : "top-[55%]"} inset-0 text-white flex text-[38px] font-['SuperaGothic'] ${activeIndex === index ? "justify-start" : "justify-center"} items-start pt-5`}>
                                    <h3 className={`text-base md:text-xl font-bold opacity-100 whitespace-nowrap tracking-wider ${activeIndex === index ? "rotate-0 " : "-rotate-90"}`}>
                                        Extensive Amenities
                                    </h3>
                                </div>

                                {/* Icon (Only visible on larger screens) */}
                                {activeIndex === index && (
                                    <>
                                        <div
                                            className={`${activeIndex === index ? "scale-125" : "scale-100"} 
                                      bxxs:block absolute opacity-60 right-[10%] translate-x-[50%] top-5 transition-transform duration-500`}
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 256 256"
                                                className={`duration-500 text-white ${activeIndex === index ? "size-[50px]" : "size-[35px]"
                                                    }`}
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM164,96v48a4,4,0,0,1-8,0V105.66L98.83,162.83a4,4,0,0,1-5.66-5.66L150.34,100H112a4,4,0,0,1,0-8h48A4,4,0,0,1,164,96Z"></path>
                                            </svg>

                                        </div>
                                        <p className="text-white animate-slideUp absolute w-full lg:top-[80%]  top-[70%] px-5 text-[14px]  lg:text-[18px] font-['SuperaGothic']">
                                            {src?.description}                                        </p>

                                    </>
                                )} {activeIndex !== index && (
                                    <>
                                        <div
                                            className={`${activeIndex !== index ? "scale-125" : "scale-100"} 
                                      bxxs:block absolute opacity-60 right-[50%] translate-x-[50%] top-5 transition-transform duration-500`}
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 256 256"
                                                className={`duration-500 text-white ${activeIndex === index ? "size-[50px]" : "size-[35px]"
                                                    }`}
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM164,96v48a4,4,0,0,1-8,0V105.66L98.83,162.83a4,4,0,0,1-5.66-5.66L150.34,100H112a4,4,0,0,1,0-8h48A4,4,0,0,1,164,96Z"></path>
                                            </svg>

                                        </div>


                                    </>
                                )}

                            </div>

                        ))}
                    </div>


                </div>


            </div>
            <div className="w-full flex h-auto border-3 border-red-500 justify-center items-center">
                <div className="w-[90%]  flex items-center justify-center">
                    {/* <div className="hidden md:flex gap-x-10 justify-center ">
                    <div className="flex flex-col ">
                        <div className="text-[22px] font-['SuperaGothic'] leading-tight font-semibold text-[#595959] whitespace-nowrap mt-6">A Few Words About </div>
                        <div className="xl:text-[38px] cmd:text-[32px] lg:text-[34px]  md:text-[26px] font-['SuperaGothic'] whitespace-nowrap font-semibold uppercase leading-tight mt-3 ">The medallion Aurum </div>

                    </div>
                    <div className=" flex">
                        <p className="lg:text-[18px] text-sm font-['SuperaGothic'] font-semibold text-[#303B35] mt-5">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                        </p>
                    </div>
                    </div> */}
                    <div className="hidden md:flex gap-x-10">
                        <div className="flex flex-col brder-2 border-black whitespace-nowrap">
                            <h1 className="text-black  text-3xl sm:text-2xl lg:4xl ">A Few Words About</h1>
                            <strong className="font-supera700 text-[26px] cmd:text-[30px] xl:text-[34px] 2xl:text-[38px] text-[#000] capitalize text-transparent bg-clip-text      bg-right-bottom  bg-coverbg bg-no-repeat bg-[url('/uploads/bgImage.png')]">
                                The Medallion Aurum
                            </strong>

                        </div>
                        <p className="mt-2">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Highlight