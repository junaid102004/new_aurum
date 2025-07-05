import React from 'react'
import NewIconRight from './icons/NewIconRight'
import NewIcons1 from './icons/NewIcons1'
import NewIcons2 from './icons/NewIcons2'
import NewIcons3 from './icons/NewIcons3'
import NewPhoneIcon from './icons/NewPhoneIcon'
import WhatsAppNew from './icons/WhatsAppNew'
import DownloadNew from './icons/DownloadNew'
import RotateCircle from '../Animations/RotateCircle'
const Banner = ({ size }) => {
    return (

        <div className="w-[35%]  hidden md:flex flex-col h-full">
            <div className="w-[330px] pt-[20px] bg-[#131313] flex flex-col justify-evenly h-full items-center">
                {/* ✅ Fix: Keep width consistent & set fixed height */}
                <div className="relative w-[calc(100%+26px)] bg-black h-[53px] flex justify-center overflow-hidden">
                    <div className="absolute w-full bg-white h-full flex items-center">
                        <div className="animate-marquee whitespace-nowrap font-bold uppercase font-['SuperaGothic'] text-[16px] leading-[18px]">
                            Ask us for the best available offer &nbsp; • &nbsp; Ask us for the best available offer &nbsp; •
                        </div>
                    </div>
                </div>
                <div className="flex   ml-[27px] pr-3 flex-col justify-evenly h-[50%]">
                    <div className="font-supera600 text-[35px] 2xl:text-[39px] 3xl:text-[39px] leading-tight text-left tracking-[0.03em] text-[#fff] uppercase">
                        High Rise Luxury Apartments
                    </div>
                    <div className="flex flex-col">
                        <div className="font-supera600 text-[55px] text-[#fff] uppercase">
                            {size} <span className="text-[#fff] text-[16px] uppercase">sqft</span>
                        </div>
                        <div className="text-[#fff] text-[16px] uppercase">
                            Ground + 17 Storey
                        </div>
                    </div>

                </div>
                <div className="h-[25%] flex flex-col justify-center w-full">
                    <div className='flex w-full px-2 h-[90px] items-center justify-around bg-white '>

                        <div className="flex flex-col border-r-2 items-center border-gray-200 px-2">
                            <NewIcons1 />
                            <div className='flex flex-col'>
                                <p className="text-[8px] text-center">
                                    Type
                                </p>
                                <p className='text-[10px] font-normal text-center'>
                                    SEMI FURNISHED
                                </p>

                            </div>
                        </div>

                        <div className="flex flex-col border-r-2 items-center border-gray-200  px-2">
                            <NewIcons3 />
                            <div>
                                <p className="text-[8px] text-center">
                                    Type
                                </p>
                                <p className='text-[10px] font-normal text-center'>
                                    SEMI FURNISHED
                                </p>

                            </div>
                        </div>


                        <div className="flex flex-col items-center border-gray-200  px-2">
                            <NewIcons2 />
                            <div className='flex flex-col'>
                                <p className='text-[10px] font-normal text-center'>
                                    hand over
                                </p>
                                <p className='text-[12px] font-normal text-center'>
                                    December 2029
                                </p>

                            </div>
                        </div>

                    </div>


                </div>
                <div className='flex flex-col  items-center gap-4 w-full '>
                    <div className='w-[100%] flex items-center  justify-around '>
                        <div className=''>
                            <NewPhoneIcon />
                        </div>
                        <div className=''>
                            <WhatsAppNew />
                        </div>
                        <div className=''>
                            <DownloadNew />
                        </div>

                    </div>
                    <div className='w-[150px] h-[42px]  gap-2 flex mb-6 justify-center text-center items-center bg-white text-[16px] rounded-[6px] font-medium'>
                        Explore Now <NewIconRight />
                    </div>
                </div>

            </div>
            <RotateCircle />

        </div>

    )
}

export default Banner