import React from 'react'
import { RightArrow, YouTube } from './comman/Icon'
import logo from '../assets/images/png/Logo.png'

const Footer = () => {
    return (
        <div>
            <div className="container lg:!max-w-[1182px] px-3 mx-auto ">
                <div className=' flex  flex-wrap justify-between pt-14 sm:pt-24 lg:pt-[130px] '>
                    <div className=' w-full sm:w-[50%] lg:w-auto pt-5 lg:pt-0'>
                        <ul>
                            <li className=' font-poppins font-semibold text-[24px] leading-[28px] text-[#131619] pb-3 lg:pb-5'>Company</li>
                            <li className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]'>Home</li>
                            <li className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]'>Solutions</li>
                            <li className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]'>Apps</li>
                            <li className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]'>Services</li>
                        </ul>
                    </div>
                    <div className=' w-full sm:w-[50%] lg:w-auto pt-5 lg:pt-0'>
                        <ul>
                            <li className=' font-poppins font-semibold text-[24px] leading-[28px] text-[#131619] pb-3 lg:pb-5'>Product</li>
                            <li className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]'>Web apps</li>
                            <li className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]'>Mobile apps</li>
                            <li className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]'>Mac & desktop apps</li>
                        </ul>
                    </div>
                    <div className=' w-full sm:w-[50%] lg:w-auto pt-5 lg:pt-0'>
                        <ul>
                            <li className=' font-poppins font-semibold text-[24px] leading-[28px] text-[#131619] pb-3 lg:pb-5'>Company</li>
                            <li className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]'>info@kava.com</li>
                            <li className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px] max-w-[217px]'>1234, Lorem ipsum dolor sit amet, consectetuer.</li>
                        </ul>
                    </div>
                    <div className=' w-full sm:w-[50%] lg:w-auto pt-5 lg:pt-0'>
                        <p className=' font-poppins font-semibold text-[24px] leading-[28px] text-[#131619] pb-3 lg:pb-5'>Get in touch</p>
                        <div className='bg-[#E6F2FF]  w-[234px] py-1 rounded-[22.5px] flex items-center justify-between ps-5 pe-1'>
                            <input className=' bg-transparent' type="text" placeholder='Your email address' />
                            <button className=' py-[13px] bg-[#0055B2] px-3 rounded-[18.5px] '><RightArrow /></button>
                        </div>
                        <div className='flex gap-4  pt-5 lg:pt-16'>
                            <YouTube />
                            <YouTube />
                            <YouTube />
                            <YouTube />
                        </div>
                    </div>
                </div>
                <div className=' bg-[#909398] h-[0.5px] w-full mt-7 lg:mt-12'>

                </div>
                <div className=' flex justify-between lg:pt-[13px] py-3 lg:pb-[27px] items-center'>
                     <img src={logo} alt="#" />
                     <p className=' font-poppins font-normal text-sm  sm:text-base lg:text-lg  leading-7 text-[#58595B]'>Copyright©20221 kava up, LLC</p>
                </div>
            </div>
        </div>
    )
}

export default Footer