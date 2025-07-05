import React from 'react'

const BackGround = () => {
    return (
        <div>
            <div className='w-full relative  h-screen  bg-[url("/uploads/AURUM-GATE-NIGHT-HIRES.png")] bg-cover bg-center bg-no-repeat'>

                <div className="w-full h-[54%] bg-[linear-gradient(0deg,#000000_10.53%,#0000001f_100%)] sm:bg-[linear-gradient(100deg,#00000_1.53%,rgba(0,0,0,0)_100%)] absolute z-20 left-0 bottom-0">
                </div>
                <div className='flex relative  flex-col w-full h-full justify-center items-center cmd:items-stretch md:justify-end  cmd:px-[50px] xl:px-[40px] z-30'>

                    <div className='flex cmd:flex-row flex-col  justify-between '>
                        <div className='flex flex-col pb-[48px] items-center    '>
                            <div className='flex cmd:flex-col xs:flex-row flex-col'>
                            <h2 className="text-white text-[28px] flex justify-center items-center md:text-[40px] font-['SuperaGothic'] cmd:font-extralight uppercase leading-tight">
                                The pride of
                            </h2>
                            &nbsp; &nbsp;
                            <h2
                                className="xl:text-[70px] text-[32px] xs:text-[80px] text-center xs:text-start tracking-tight lg:text-[58px] cmd:text-[48px] text-white uppercase font-['SuperaGothic'] font-bold leading-tight text-transparent"
                                style={{
                                    backgroundImage: "url('/uploads/bgImage.png')",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    WebkitBackgroundClip: "text", // <-- Important!
                                    backgroundClip: "text",       // <-- Good for Firefox
                                    WebkitTextFillColor: "transparent" // <-- Also needed for Chrome
                                }}
                            >
                                Mohali
                            </h2>
                            </div>



                            <h2 className="text-white text-center text-[18px] font-['SuperaGothic'] leading-tight">
                                On International Airport Road, Mohali
                            </h2>
                            <h2 className="text-white mt-5 text-center xl:text-[36px] text-[24px] font-['SuperaGothic'] leading-tight">
                                3+1&4+1 luxury apartments
                            </h2>
                        </div>
                        <div className='flex-col flex'>
                            <div className='flex flex-col sm:flex-row justify-center cmd:justify-start'>
                                <div className='flex flex-col  pl-5'>
                                    <div className='sm:border-r-2 pr-5 flex sm:flex-col border-white'>
                                        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M47.0509 0L43.8651 2.35631L34.798 9.18962L23.8313 7.42145L23.0961 7.30269L22.4217 7.7174L11.2726 14.8429L2.32706 13.135L0 12.6638V45.1225H47.0509V0ZM43.13 7.71552V17.8477L34.8588 24.1513L24.1391 20.7337L23.2176 20.4396L22.4237 20.9109L11.5177 27.9214L3.92091 24.975V17.2614L11.3961 18.6752L12.1921 18.8524L12.8665 18.4377L23.9548 11.3122L34.9823 13.0785L35.8391 13.1972L36.5134 12.6657L43.13 7.71552ZM43.13 22.6791V41.3524H3.92091V29.0995L11.0276 31.8102L12.0078 32.1628L12.8665 31.633L23.892 24.5641L34.6745 28.0383L35.6548 28.3926L36.5134 27.7442L43.13 22.6791Z" fill="white" />
                                        </svg>


                                        <div className="text-white text-[14px] font-['SuperaGothic'] ">SPREAD ACROSS</div>
                                        <div className="text-white text-[36px] font-['SuperaGothic'] ">12.6 ACRES</div>
                                    </div>
                                </div> 
                                <div className='flex pl-5 flex-col '>
                                    <div className=''>
                                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.2809 23.9966C32.4895 23.9966 37.524 18.9834 37.524 12.7996C37.524 6.61767 32.4895 1.60449 26.2809 1.60449C20.0722 1.60449 15.043 6.61767 15.043 12.7996C15.043 15.6638 16.3488 17.747 16.3488 17.747L2.75376 31.2851C2.14357 31.8935 1.28966 33.4732 2.75376 34.932L4.32283 36.494C4.93302 37.0152 6.46651 37.7446 7.72069 36.494L9.55305 34.6723C11.3818 36.494 13.4739 35.4533 14.2585 34.4108C15.5642 32.5891 13.997 30.7656 13.997 30.7656L14.52 30.2444C17.0283 32.7456 19.2254 31.2869 20.0099 30.2444C21.3175 28.4227 20.0099 26.5992 20.0099 26.5992C19.4869 25.5585 18.4409 25.5585 19.7484 24.2563L21.3175 22.6944C22.5717 23.7351 25.1512 23.9966 26.2844 23.9966H26.2809Z" stroke="white" strokeWidth="2.13106" strokeLinejoin="round" />
                                            <path d="M30.2031 12.8012C30.2007 13.8389 29.7864 14.8332 29.0511 15.5654C28.3159 16.2977 27.3199 16.708 26.2822 16.7061C25.2445 16.708 24.2486 16.2977 23.5133 15.5654C22.778 14.8332 22.3637 13.8389 22.3613 12.8012C22.3623 12.2872 22.4644 11.7785 22.662 11.304C22.8595 10.8295 23.1486 10.3986 23.5127 10.0358C23.8768 9.67305 24.3087 9.38555 24.7839 9.18973C25.2591 8.99391 25.7682 8.8936 26.2822 8.89454C26.7962 8.8936 27.3053 8.99391 27.7805 9.18973C28.2557 9.38555 28.6877 9.67305 29.0518 10.0358C29.4158 10.3986 29.7049 10.8295 29.9025 11.304C30.1 11.7785 30.2022 12.2872 30.2031 12.8012Z" stroke="white" strokeWidth="2.13106" />
                                        </svg>



                                        <div className="text-white text-[14px]  font-['SuperaGothic'] " >HANDOVER DATE</div>
                                        <div className="text-white text-[36px] uppercase  font-semibold font-['SuperaGothic'] ">December 2029</div>
                                    </div>
                                </div>

                            </div>
                            <div className="text-white uppercase text-center font-semibold text-[22px] mb-4 font-['SuperaGothic']">
                                10 Towers | G+17 floors | 76% Open area
                            </div>
                            <div className="w-full h-10 justify-center cmd:justify-start flex mb-8 cmd:mb-0">
                                <div className="w-[30%] flex justify-center gap-4 py-2 =x-3items-center h-full rounded-full bg-no-repeat  bg-[url('/uploads/bgImage.png')] bg-cover">
                                    <div className='flex '>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.29949 13.7163L3.72718 8.14402L5.28743 6.52804L8.18503 9.42565V0.342773H10.414V9.42565L13.3116 6.52804L14.8718 8.14402L9.29949 13.7163ZM2.61272 18.1742C1.99976 18.1742 1.47522 17.9561 1.03909 17.52C0.602967 17.0839 0.384532 16.559 0.383789 15.9453V12.6019H2.61272V15.9453H15.9863V12.6019H18.2152V15.9453C18.2152 16.5582 17.9971 17.0831 17.561 17.52C17.1249 17.9569 16.6 18.1749 15.9863 18.1742H2.61272Z" fill="#090909" />
                                        </svg>
                                    </div>
                                    <div className='flex mb-8 '>
                                        Brouchure
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackGround