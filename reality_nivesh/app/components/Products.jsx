"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import NewIcons1 from './icons/NewIcons1.jsx';
import NewIcons3 from './icons/NewIcons3.jsx';
import NewIcons2 from './icons/NewIcons2.jsx';
import NewPhoneIcon from './icons/NewPhoneIcon.jsx';
import WhatsAppNew from './icons/WhatsAppNew.jsx';
import DownloadNew from './icons/DownloadNew.jsx';
import NewIconRight from './icons/NewIconRight.jsx';
import Banner from './Banner.jsx';
import RotateCircle from '../Animations/RotateCircle.jsx';

const Products = () => {
    const [activeIndex, setActiveIndex] = useState(false);
    const data = [
        {
            id: 1,
            image: "/uploads/Master_Bedroom.png",
            type: "4 bhk",
            size: "2950 ",
            title: "Master Bedroom",
            description:
                "Spacious master bedroom with premium wooden flooring and balcony view.",
            configuration: "3+1 BHK",
        },
        {
            id: 2,
            image: "/uploads/AURUM-GATE-NIGHT-HIRES.png",
            type: "3 bhk",
            size: "4050 ",

            title: "Living Room",
            description:
                "Modern living room with natural lighting, connected dining, and Italian marble.",
            configuration: "4+1 BHK",
        },
        {
            id: 3,
            image: "/uploads/amenities-img1.webp",
            type: "4+1 bhk",
            size: "3950 ",

            title: "Modular Kitchen",
            description:
                "Fully-equipped modular kitchen with chimney, hob, and ample storage.",
            configuration: "3+1 BHK",
        },
    ];

    return (
        <>
            <div className="w-full flex  flex-col">
                <div className="w-full flex  flex-col">
                    <h1 className="text-[42px] w-full font-bold uppercase font-['SuperaGothic'] text-ellipsis text-center">
                        Our Products
                    </h1>
                    <p className="text-[20px] text-[#5A5454] w-full font-bold uppercase font-['SuperaGothic'] text-ellipsis text-center">Medallion Aurum offers luxury 3+1 BHK & 4+1 BHK apartments in Mohali Near Chandigarh </p>


                    <div className="w-full flex items-center flex-col mb-10">


                        <div className="w-full flex   px-[60px] justify-between ">
                            <div className='flex justify-start  gap-3 w-[40%]'>
                            {data?.map((item, i) => {
                                return (
                                    <React.Fragment key={item.id || i}>
                                        <div className="w-full flex mt-4 gap-7">
                                            <div className={`text-[26px] ${activeIndex === i ? "text-black" : "text-[#787878]"} font-bold uppercase font-['SuperaGothic']`}>
                                                {item?.type}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                            }
                            </div>
                           
                            <div className="text-[26px] text-center font-bold uppercase font-['SuperaGothic']">
                                01/05
                            </div>
                        </div>

                    </div>


                </div>

                <div className="w-full flex">

                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="w-full h-[90vh]"
                    >
                        {/* Slide 1 */}
                        {data?.map((d, i) => {
                            return (
                                <SwiperSlide key={i} className=''>
                                    <div
                                        className="w-full h-[90vh] bg-cover bg-no-repeat bg-center relative"
                                        style={{ backgroundImage: `url(${d?.image})` }}
                                    >

                                        <div className="w-full h-full flex items-center ">
                                            <div className="w-[65%] h-[90%] items-end justify-center flex px-5 relative" >
                                                <p className="text-[17px] text-white w-full font-medium uppercase font-['SuperaGothic'] text-ellipsis text-center">
                                                    {data?.description}
                                                </p>
                                            </div>

                                            <Banner size={d?.size} />
                                            <RotateCircle />
                                        </div>
                                    </div>
                                </SwiperSlide>

                            )
                        })}

                    </Swiper>
                </div>

            </div>

        </>

    )
}

export default Products