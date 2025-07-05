import React from 'react'

const HeroSection = () => {
    return (
        <div className='containe'>
             <video
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/mainVideo-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative w-full h-screen overflow-hidden">
                <div className='w-full pt-12 flex flex-col justify-center  h-full bg-black/50'>
                    <div className="px-[60px] xl:w-[1000px] absolute m-auto  text-center sm:text-left flex flex-col  justify-start  text-white ">
                        <h1 className="xl:text-[60px] md:text-[42px] lg:[48px] text-[50px] flex-wrap md:flex-nowrap  font-semibold font-['SuperaGothic'] leading-tight">Discover Luxury Living at The Medallion Aurum Mohali</h1>
                        <h2 className=" text-[25px] font-['SuperaGothic'] text-white md:mt-[22px] leading-tight">Where Elegance Meets Modern Comfort in the Heart of Mohali.</h2>
                        <h2 className="text-[18px] font-['SuperaGothic'] text-white md:mt-[18px] leading-tight">The medallion aurum IT City Mohali</h2>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HeroSection 