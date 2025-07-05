import React from 'react'
import NewPhone from './icons/NewPhone'
import NewMail from './icons/NewMail'
import NewLocation from './icons/NewLocation'

const ContactUs = () => {
    return (
        <div className='w-full '>
            <div className='flex w-full mt-5 justify-center'>
                <h3 className='text-[42px] font-["Supera"] uppercase '>
                    contact us
                </h3>
            </div>
            <div className='w-full flex mt-[70px] justify-between relative h-[150px] bg-black'>

                {/* First Icon */}
                <div className='flex  w-[35%] flex-col '>
                    <div className='absolute flex  top-[-20%] left-[15%] bg-[url("/uploads/bgImage.png")] rounded-full bg-no-repeat bg-cover w-[70px] h-[70px]'>
                        <div className='flex w-full h-full justify-center items-center'>
                            <NewPhone />
                        </div>

                    </div>
                    <div className=' flex flex-col w-full  justify-center items-center'>
                        <h3 className='text-white  mt-[50px] '>
                            +91 89680 66698

                        </h3>
                        <h3 className='text-white   mt-2'>
                            +91 99880 10405
                        </h3>
                    </div>

                </div>


                {/* Second Icon */}
                <div className='flex  w-[35%] flex-col '>
                    <div className='absolute flex  top-[-20%] left-[47%] bg-[url("/uploads/bgImage.png")] rounded-full bg-no-repeat bg-cover w-[70px] h-[70px]'>
                        <div className='flex w-full h-full justify-center items-center'>
                            <NewMail />
                        </div>

                    </div>
                    <div className=' flex flex-col w-full  justify-center items-center'>
                        <h3 className='text-white  mt-[50px] '>
                            sales@realtynivesh.com

                        </h3>

                    </div>

                </div>


                {/* Third Icon */}
                <div className='flex  w-[35%] flex-col '>
                    <div className='absolute flex  top-[-20%] left-[80%] bg-[url("/uploads/bgImage.png")] rounded-full bg-no-repeat bg-cover w-[70px] h-[70px]'>
                        <div className='flex w-full h-full justify-center items-center'>
                            <NewLocation />
                        </div>

                    </div>
                    <div className=' flex flex-col w-full text-center text-white justify-center items-center mt-[50px]'>


                        Showroom No. 12 level 2, UPTOWN<br />


                        insignia PR-7 Airport Road, Zirakpur,<br />


                        Punjab

                    </div>

                </div>


            </div>

        </div>
    )
}

export default ContactUs