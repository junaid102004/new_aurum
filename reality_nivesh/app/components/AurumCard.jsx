import Image from 'next/image'
import React from 'react'

const AurumCard = () => {
    return (
        <div className='mt-12 flex flex-col md:flex-row'>
            <div className="w-full h-full md:bg-[url('/uploads/group1.png')] bg-no-repeat bg-cover bg-l flex justify-center items-center ">
                <div className='w-full h-full flex justify-center items-center '>
                    <div
                        className="md:w-[90%] items-center justify-center md:flex-row flex-col h-full flex bg-black"
                        style={{
                            backgroundImage: "url('/uploads/image (4).png.png')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundBlendMode: "multiply" // Blends the black background with the image
                        }}
                    >
                        <div className='items-center justify-center md:flex-row flex-col h-full flex bg-[url("/uploads/aboutcontanierlayere.webp")]'>
                            <div className='md:w-[35%] mt-8 md:mt-0 h-full'>
                                <div className=' flex justify-center items-center w-full h-full p-8 md:p-0'>
                                    <Image
                                        alt="About Us Image"
                                        src="/uploads/image.webp"
                                        objectFit="contain"
                                        width={416} // Default width (for larger screens)
                                        height={404}
                                        className="w-[300px] md:w-[416px]" // 300px below md, 416px above
                                        priority
                                    />

                                </div>
                            </div>

                            <div className='md:w-[65%] h-full flex flex-col pl-7 pt-12 p-6 '>
                                <p className='text-white text-[21px] font-medium font-["SuperaGothic"]'>
                                    Welcome to Medallion Aurum, a premium residential destination designed to redefine luxury living in Mohali. Strategically located, Medallion Aurum Mohali offers an unparalleled blend of elegant architecture, modern amenities, and a lifestyle that resonates with opulence and comfort. Our vision is to create a world-class living experience for residents who value sophistication and exclusivity.

                                </p>
                                <br></br>
                                <p className='text-white text-[21px] font-medium font-["SuperaGothic"]'>
                                    Medallion Aurum Apartments are thoughtfully designed to provide maximum space utilization, contemporary aesthetics, and a seamless blend of functionality and beauty. With a keen focus on quality, convenience, and luxury, we offer a variety of high-end apartments that cater to diverse needs, ensuring comfort and satisfaction for every resident.

                                </p>

                                {/* <p className='text-white text-[21px] font-semibold font-["SuperaGothic"]'>
                                At Medallion Aurum, we prioritize your comfort and well-being by providing a host of state-of-the-art amenities, including landscaped green spaces, fitness centers, dedicated recreational zones, and 24/7 security. Our commitment to excellence makes us stand apart as Mohali's premier choice for luxury apartment living.

                            </p> */}
                                <div className='rounded-lg mb-[70px] bg-[url(/uploads/bgImage.png)] bg-cover bg-center w-[200px] h-[50px] flex justify-center items-center mt-5 font-semibold text-[24px] font-["SuperaGothic"]'>

                                    Read More

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default AurumCard