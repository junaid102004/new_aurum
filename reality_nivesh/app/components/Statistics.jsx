import Image from 'next/image'
import React from 'react'

const Statistics = () => {
    return (
        <div className="w-full h-full bg-[url('/uploads/image7.png')] px-[60px] py-[60px] bg-no-repeat bg-cover flex justify-center items-center p-10">
            <div className='grid md:grid-cols-4 grid-cols-2 '>
                <div className='flex md:w-auto justify-start gap-4 px-3'>
                    <Image
                        src="/uploads/Vector1.png"
                        alt="Image"
                        width={60}
                        height={60}
                        style={{ objectFit: "contain" }}
                    />
                    <div className='flex flex-col'>
                        <div className="lg:text-[55px] md:text-[42px] leading-none text-[#4D4E4D] font-['SuperaGothic'] font-extrabold">
                            12.6
                        </div>
                        <div className="lg:text-[22px] md:text-[18px]  leading-none font-semibold text-[#474747] font-['SuperaGothic']">
                            Acres Land Area
                        </div>

                    </div>
                </div>

                <div className='flex md:w-auto lg:border-l-2 border-[#D8D8D8] justify-start gap-4 px-3'>
                    <Image
                        src="/uploads/Vector2.png"
                        alt="Image"
                        width={60}
                        height={60}
                        style={{ objectFit: "contain" }}
                    />
                    <div className='flex flex-col'>
                        <div className="lg:text-[55px] md:text-[42px]  leading-none text-[#4D4E4D] font-['SuperaGothic'] font-extrabold">
                            700
                        </div>
                        <div className="lg:text-[22px] md:text-[18px] leading-none font-semibold text-[#474747] font-['SuperaGothic']">
                            Luxuary Apartments
                        </div>

                    </div>
                </div>

                <div className='flex md:w-auto lg:border-l-2 border-[#D8D8D8] justify-start gap-4 px-3 '>
                    <Image
                        src="/uploads/Vector3.png"
                        alt="Image"
                        width={60}
                        height={60}
                        style={{ objectFit: "contain" }}
                    />
                    <div className='flex flex-col'>
                        <div className="lg:text-[55px] md:text-[42px]  leading-none text-[#4D4E4D] font-['SuperaGothic'] font-extrabold">
                            10
                        </div>
                        <div className="lg:text-[22px] md:text-[18px] leading-none font-semibold text-[#474747] font-['SuperaGothic']">
                            Tower | G+17
                        </div>

                    </div>
                </div>
                <div className='flex md:w-auto lg:border-l-2 border-[#D8D8D8] justify-start gap-4  px-3'>
                    <Image
                        src="/uploads/Vector4.png"
                        alt="Image"
                        width={60}
                        height={60}
                        style={{ objectFit: "contain" }}
                    />
                    <div className='flex flex-col'>
                        <div className="lg:text-[55px] md:text-[42px]  leading-none text-[#4D4E4D] font-['SuperaGothic'] font-extrabold">
                            100000
                        </div>
                        <div className="lg:text-[22px] md:text-[18px] leading-none font-semibold text-[#474747] font-['SuperaGothic']">
                            Sq Ft Club House
                        </div>
                    </div>

                </div>

            </div>
        </div>






    )
}

export default Statistics