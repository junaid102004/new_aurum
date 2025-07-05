import React from 'react'
import Image from 'next/image'
const PriceList = () => {
    return (
        <div className='w-full px-[60px]  mb-10'>
            {/* <h1>
                PriceList
            </h1> */}
            <div className="flex w-full  shadow-[0px_0px_4px_1px_rgba(0,0,0,0.3)]  justify-center h-[200px] overflow-hidden rounded-[22px] items-center ">
                <div className="w-[80%]  h-[200px] overflow-hidden flex">
                    <div className='w-[45%] rounded-tl-lg overflow-hidden h-full'>
                        <div className="w-full h-full relative scale-100 hover:scale-110 duration-1000 hover:duration-1000">
                            <Image
                                 src={"/uploads/amenities-img1.webp"}
                                alt="Extensive Amenities"
                                fill
                                className="object-cover"
                            />


                        </div>

                    </div>
                    <div className='w-[55%] flex flex-col font-s py-[25px] px-[30px]'>
                        <h1 className=' font-supera mt-4 text-[20px] font-bold'>
                        3+1 BHK


                        </h1>
                        <p className='font-supera text-[14px] font-normal mt-4 '>
                            2950 SQFT.
                        </p>
                        <p className='font-supera  text-[14px] font-normal text-ellipsis line-clamp-5 overflow-hidden  mt-2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        </p>
                    </div>
                </div>
                <div className='w-[20%] flex h-full  overflow-hidden'>
                    <div className='bg-black  relative w-[95%]'>
                        <div className='flex justify-center  items-center'>
                            <div className='absolute top-[40%] left-[40%]'>
                                <svg width="55" height="55" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.4653 10.8623H19.9982V7.92814C19.9982 3.87902 16.712 0.592773 12.6629 0.592773C8.61374 0.592773 5.32749 3.87902 5.32749 7.92814V10.8623H3.86042C2.24664 10.8623 0.92627 12.1827 0.92627 13.7964V28.4672C0.92627 30.081 2.24664 31.4013 3.86042 31.4013H21.4653C23.0791 31.4013 24.3995 30.081 24.3995 28.4672V13.7964C24.3995 12.1827 23.0791 10.8623 21.4653 10.8623ZM12.6629 24.066C11.0491 24.066 9.72871 22.7456 9.72871 21.1318C9.72871 19.518 11.0491 18.1977 12.6629 18.1977C14.2766 18.1977 15.597 19.518 15.597 21.1318C15.597 22.7456 14.2766 24.066 12.6629 24.066ZM17.2108 10.8623H8.11493V7.92814C8.11493 5.41945 10.1542 3.38021 12.6629 3.38021C15.1716 3.38021 17.2108 5.41945 17.2108 7.92814V10.8623Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='w-[5%] bg-[url("/uploads/bgImage.png")]   bg-cover bg-no-repeat'>

                    </div>
                </div>
              
            </div>
           
            <div className="flex w-full mt-8 shadow-[0px_0px_4px_1px_rgba(0,0,0,0.3)]  justify-center h-[200px] overflow-hidden rounded-[22px] items-center ">
                <div className="w-[80%]  h-[200px] overflow-hidden flex">
                    <div className='w-[45%] rounded-tl-lg overflow-hidden h-full'>
                        <div className="w-full h-full relative scale-100 hover:scale-110 duration-1000 hover:duration-1000">
                            <Image
                               src={"/uploads/amenities-img1.webp"}
                                alt="Extensive Amenities"
                                fill
                                className="object-cover"
                            />


                        </div>

                    </div>
                    <div className='w-[55%] flex flex-col font-s py-[25px] px-[30px]'>
                        <h1 className=' font-supera mt-4 text-[20px] font-bold'>
                        3+1 BHK


                        </h1>
                        <p className='font-supera text-[14px] font-normal mt-4 '>
                            2950 SQFT.
                        </p>
                        <p className='font-supera  text-[14px] font-normal text-ellipsis line-clamp-5 overflow-hidden  mt-2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        </p>
                    </div>
                </div>
                <div className='w-[20%] flex h-full  overflow-hidden'>
                    <div className='bg-black  relative w-[95%]'>
                        <div className='flex justify-center  items-center'>
                            <div className='absolute top-[40%] left-[40%]'>
                                <svg width="55" height="55" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.4653 10.8623H19.9982V7.92814C19.9982 3.87902 16.712 0.592773 12.6629 0.592773C8.61374 0.592773 5.32749 3.87902 5.32749 7.92814V10.8623H3.86042C2.24664 10.8623 0.92627 12.1827 0.92627 13.7964V28.4672C0.92627 30.081 2.24664 31.4013 3.86042 31.4013H21.4653C23.0791 31.4013 24.3995 30.081 24.3995 28.4672V13.7964C24.3995 12.1827 23.0791 10.8623 21.4653 10.8623ZM12.6629 24.066C11.0491 24.066 9.72871 22.7456 9.72871 21.1318C9.72871 19.518 11.0491 18.1977 12.6629 18.1977C14.2766 18.1977 15.597 19.518 15.597 21.1318C15.597 22.7456 14.2766 24.066 12.6629 24.066ZM17.2108 10.8623H8.11493V7.92814C8.11493 5.41945 10.1542 3.38021 12.6629 3.38021C15.1716 3.38021 17.2108 5.41945 17.2108 7.92814V10.8623Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='w-[5%] bg-[url("/uploads/bgImage.png")]   bg-cover bg-no-repeat'>

                    </div>
                </div>
              
            </div>


        </div>
    )
}

export default PriceList