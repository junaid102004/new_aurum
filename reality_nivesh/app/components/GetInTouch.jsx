import Image from 'next/image'
import React from 'react'

const GetInTouch = () => {
    return (
        <div className='w-full flex relative bg-black h-auto'>
            <div className='w-[35%]  flex relative  '>
                <div className='w-full h-[750px]'>
                    <Image
                        src={"/uploads/AURUM-CLUB-BECK-HIRES.png"}
                        fill
                        alt='noimage'
                    // className='w-full h-full'
                    >
                    </Image>
                </div>
            </div>
            <div className='w-[65%] h-auto flex flex-col'>
                <div className='flex w-full justify-center flex-col '>
                    <h2 className='text-center w-full text-white text-[30px] font-["Supera"] font-Bold '>
                        Get in  <span className='font-bebas_Neue font-medium tracking-wide text-[60px] sm:text-[74px] bg-clip-text text-transparent bg-[url("/uploads/bgImage.png")] bg-cover bg-right-bottom'>Touch</span>
                    </h2>
                    <p className='m-auto font-medium font-["Supera"] text-white text-[18px]'>
                        You have any question? feel free to contact us.
                    </p>
                </div>


                <form className="grid grid-cols-1 md:grid-cols-2 gap-5 px-[50px] mt-8">
                    {/* First Row */}
                    <input type="text" placeholder="First Name" className="bg-[#232323]  border border-[#F2F9FF] p-3 rounded-md w-full" />
                    <input type="text" placeholder="Last Name" className="bg-[#232323] border border-[#F2F9FF] p-3 rounded-md w-full" />

                    {/* Second Row */}
                    <input type="text" placeholder="+91" className="bg-[#232323] border border-[#F2F9FF] p-3 rounded-md w-full" />
                    <input type="email" placeholder="Email" className="bg-[#232323] border border-[#F2F9FF] p-3 rounded-md w-full" />

                    {/* Dropdowns */}
                    <select className="col-span-2 bg-[#232323] border border-[#F2F9FF] text-white p-3 rounded-md w-full">
                        <option>Choose City</option>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                        <option>Kolkata</option>
                    </select>

                    <select className="col-span-2 bg-[#232323] border border-[#F2F9FF] p-3  text-white rounded-md w-full">
                        <option>Preferred Home Size?</option>
                        <option>1 BHK</option>
                        <option>2 BHK</option>
                        <option>3 BHK</option>
                    </select>

                    <select className="col-span-2 bg-[#232323] border border-[#F2F9FF] text-white p-3 rounded-md w-full">
                        <option>Are you a broker?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>

                    <select className="col-span-2 bg-[#232323] border border-[#F2F9FF] text-white p-3 rounded-md w-full">
                        <option>How did you hear about us?</option>
                        <option>Google</option>
                        <option>Friend</option>
                        <option>Social Media</option>
                    </select>

                    {/* Message */}
                    <textarea
                        placeholder="Message"
                        rows={4}
                        className="col-span-2 bg-[#232323] border border-[#F2F9FF] p-3 rounded-md w-full resize-none"
                    ></textarea>

                    {/* Button */}
                    <button
                        type="submit"
                        className="mb-5 mt-4  col-span-2 w-[170px] mx-auto text-[18px] text-transparent bg-[url('/uploads/bgImage.png')] bg-no-repeat bg-cover rounded-full transition-all text-white font-medium py-3 "
                    >
                        Submit
                    </button>
                </form>


            </div>
        </div>
    )
}

export default GetInTouch