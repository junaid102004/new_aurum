import React from 'react'
import NewIconRight from './icons/NewIconRight'

const ConnectWithus = () => {
    return (
        <div className='w-full  hidden sm:flex '>
            <div className='w-full bg-black flex h-auto items-center justify-between p-2 lg:p-5  px-4 lg:px-[90px]'>
                <h2 className=' text-center md:text-[24px] text-[16px] sm:text-[20px] cmd:text-[31px] whitespace-nowrap text-white font-["Supera"]  lg:text-[36px] '>
                    Are you interested in this Property?
                </h2>
                <div className='lg:text-[21px] cmd:text-[18px]  md:[14px] text-white rounded-full flex justify-center bg-[url("/uploads/bgImage.png")] font-["Supera"] bg-no-repeat bg-cover text-center sm:w-[150px] lg:w-[300px] md:w-[180px] cmd:w-[250px] items-center max-h-[48px] h-[42px]' >
                    connect with us{"\u00A0"}
                    <NewIconRight color={"white"} />
                </div>

            </div>
        </div>
    )
}

export default ConnectWithus