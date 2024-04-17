import React from 'react'
import { Facebook, Insta, RightArrow, Twitter, YouTube } from './comman/Icon'
import logo from '../assets/images/png/Logo.svg'

const Footer = () => {
    return (
        <div>
            <div className="container lg:!max-w-[1194px] px-3 mx-auto ">
                <div className=' flex  flex-wrap justify-between pt-14 sm:pt-24 lg:pt-[130px] '>
                    <div className=' w-full sm:w-[50%] lg:w-auto pt-5 lg:pt-0'>
                        <ul>
                            <li className=' pb-3 lg:pb-5'><a className=' font-poppins font-semibold text-[24px] leading-[28px] text-[#131619]' href="">Company</a></li>
                            <li><a className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]' href="#">Home</a></li>
                            <li><a className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]' href="#">Solutions</a></li>
                            <li><a className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]' href="#">Apps</a></li>
                            <li><a className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]' href="#">Services</a></li>
                        </ul>
                    </div>
                    <div className=' w-full sm:w-[50%] lg:w-auto pt-5 lg:pt-0'>
                        <ul>
                            <li className='pb-3 lg:pb-5'><a className=' font-poppins font-semibold text-[24px] leading-[28px] text-[#131619] ' href="">Product</a></li>
                            <li><a className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]' href="#">Web apps</a></li>
                            <li><a className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]' href="#">Mobile apps</a></li>
                            <li><a className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]' href="#">Mac & desktop apps</a></li>
                        </ul>
                    </div>
                    <div className=' w-full sm:w-[50%] lg:w-auto pt-5 lg:pt-0'>
                        <ul>
                            <li className='pb-3 lg:pb-5'><a className=' font-poppins font-semibold text-[24px] leading-[28px] text-[#131619]' href="">Company</a></li>
                            <li><a className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]' href="#">info@kava.com</a></li>
                            <li className=' max-w-[217px]'><a className=' text-[#46484B] font-poppins font-normal text-[18px] leading-[40px]' href="#">1234, Lorem ipsum dolor sit amet, consectetuer.</a></li>
                        </ul>
                    </div>
                    <div className=' w-full sm:w-[50%] lg:w-auto pt-5 lg:pt-0'>
                        <p className='pb-3 lg:pb-5'><a className=' font-poppins font-semibold text-[24px] leading-[28px] text-[#131619] ' href="#">Get in touch</a></p>
                        <div className='bg-[#E6F2FF]  w-[234px] py-1 rounded-[22.5px] flex items-center justify-between ps-5 pe-1'>
                            <input className=' bg-transparent outline-none focus:outline-none w-full placeholder:font-poppins placeholder:text-xs placeholder:leading-7 placeholder:text-[#58595B]' type="text" placeholder='Your email address' />
                            <button className=' py-[13px] bg-[#0055B2] pe-3 ps-4 rounded-[18.5px] '><RightArrow /></button>
                        </div>
                        <div className='flex gap-4  pt-5 lg:pt-16'>
                           <a href="" className=' group'> <Facebook/></a>
                           <a href=""> <YouTube /></a>
                           <a href=""> <Twitter/></a>
                           <a href=""> <Insta/></a>
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