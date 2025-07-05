import React from 'react'

const PaymentStructure = () => {
  return (
    <div className='container-lg'>
<div className='w-full flex flex-col justify-center items-center '>
    <h2 className='text-center w-full font-supera font-medium text-white text-[40px]'>
        Payment Structure
    </h2>
    <div className='bg-white w-[96%] relative top-8 sm:top-0 z-20 2xl:container mx-auto rounded-2xl sm:rounded-xl overflow-hidden mb-16 sm:mb-0 sm:mt-8 cmd:mt-14 px-0 bxxs:px-3 xs:px-5 sm:px-16 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:shadow-none'>
       <h2>
        Milestones Detailes
       </h2>
       <div className="grid grid-cols-1 h-[550px] gap-y-[30px] sm:gap-y-[40px] py-2 overflow-y-auto sm:pr-2">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12"
                >
                  <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#141413] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                    <div>
                      {[
                        "Within 30 Days of Booking",
                        "On Start of Raft",
                        "On Completion of Stilt",
                        "On Completion of 3rd Floor",
                        "On Completion of 6th Floor",
                        "On Completion of 9th Floor",
                        "On Completion of 12th Floor",
                        "On Completion of 15th Floor",
                        "On Completion of 18th Floor",
                        "On Start of Plumbing Work",
                        "On Start of PO Work",
                        "On Possession"
                      ][index]}
                    </div>
                    <div className="ml-8 text-right">
                      {[
                        "25% of Sale Price",
                        "10% of Sale Price",
                        "10% of Sale Price",
                        "5% of Sale Price",
                        "5% of Sale Price",
                        "5% of Sale Price",
                        "5% of Sale Price",
                        "5% of Sale Price",
                        "5% of Sale Price",
                        "10% of Sale Price",
                        "10% of Sale Price",
                        "5% of Sale Price"
                      ][index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
    </div>

</div>
    </div>
  )
}

export default PaymentStructure