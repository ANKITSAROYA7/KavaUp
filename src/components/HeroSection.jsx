import React from 'react'
import { useState } from 'react'
import { RxCross1 } from "react-icons/rx"
import { BiMenu } from "react-icons/bi"
import mainpic from '../assets/images/png/MainPic.png'
import logo from '../assets/images/png/NavBarLogo.svg'
import { Arrow } from './comman/Icon'

const HeroSection = () => {
    const [show, setShow] = useState(false);
    if (show) {
        document.body.classList.add("overflow-hidden")
    } else {
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <div>
            <div className="container lg:!max-w-[1182px] px-3 mx-auto">
                <nav className=' pt-[23px] pb-6 sm:pb-10 lg:pb-[123px]'>
                    <div className=' flex justify-between items-center'>
                        <div className=' flex items-center'>
                            <img src={logo} className=' w-20 sm:w-24 lg:w-auto cursor-pointer' alt='logo' />
                        </div>
                        <ul className={`${show ? " !left-[0px] bg-[#ffff]" : ""} z-40 flex gap-[40px] flex-col min-h-screen w-full top-0 bottom-0 fixed justify-center items-center left-full lg:static lg:w-auto lg:min-h-full lg:flex-row transition-all duration-500 `}>
                            <li><a onClick={() => setShow(false)} href="#" className='text-[#131619] font-poppins font-medium text-lg leading-[21px] hover:text-[#0055B2] transition-all duration-300'>Home</a></li>
                            <li><a onClick={() => setShow(false)} href="#" className='text-[#131619] font-poppins font-medium text-lg leading-[21px] flex  items-center hover:text-[#0055B2] transition-all duration-300'>Apps<span className=' ps-2'><Arrow/></span></a></li>
                            <li><a onClick={() => setShow(false)} href="#" className='text-[#131619] font-poppins font-medium text-lg leading-[21px] flex  items-center hover:text-[#0055B2] transition-all duration-300'>Solutions<span className=' ps-2'><Arrow/></span></a></li>
                            <li><a onClick={() => setShow(false)} href="#" className='text-[#131619] font-poppins font-medium text-lg leading-[21px] flex  items-center hover:text-[#0055B2] transition-all duration-300'>Services<span className=' ps-2'><Arrow/></span></a></li>
                            <li><a onClick={() => setShow(false)} href="#" className='text-[#131619] font-poppins font-medium text-lg leading-[21px] hover:text-[#0055B2] transition-all duration-300'>Contact Us</a></li>
                        </ul>
                        <label className=' z-[41] lg:hidden  text-3xl' onClick={() => setShow(!show)}>
                            {show ? <RxCross1 /> : <BiMenu />}
                        </label>
                    </div>
                </nav>
                <p className=' text-[#080F1D] max-w-[1000px] font-poppins font-semibold text-[22px] md:text-[35px] lg:text-[43px] xl:text-5xl sm:leading-9 lg:leading-[60px] mx-auto text-center  xl:pb-[80px] pb-6 sm:pb-10'>Building Reliable Solutions for Businesses, Brands, & Startups</p>
                <div className=' flex flex-wrap mx-[-12px] items-center 2xl:items-start justify-center '>
                    <div className=' lg:w-6/12 px-3'>
                        <p className=' font-semibold text-[20px] md:text-[32px]  lg:text-[40px] font-poppins  lg:leading-[50px] text-[#080F1D] pb-3 md:pb-5 lg:pb-6'>Web Apps</p>
                        <p className=' text-[#0055B2] font-poppins font-medium text-[19px] sm:text-xl lg:leading-[32px] pb-3 lg:pb-4'>Custom Web App Development</p>
                        <p className=' text-[#46484B] font-poppins font-normal text-lg leading-[32px] pb-3 md:pb-5 lg:pb-6'>Do you want to enhance your website with a custom web application? We can help. </p>
                        <p className=' text-[#0055B2] font-poppins font-medium text-[19px] sm:text-xl lg:leading-[32px] pb-3 lg:pb-4'>Custom Web Apps Solve Unique Business Needs</p>
                        <p className=' text-[#46484B] font-poppins font-normal text-lg leading-[32px] pb-5 lg:pb-[30px]'>We analyze your unique needs and build powerful, practical web applications that make your life easier. From customer portals to key integrations with third-party vendors and beyond, our custom web application development solves problems. </p>
                        <button className=' font-poppins font-medium text-lg lg:leading-[21px] text-white px-10 py-5 bg-gradient-to-l from-[#0055B2] to-[#D0006F] rounded-[50px] hover:scale-[1.05] transition-all duration-300'>Read More</button>
                    </div>
                    <div className=' lg:w-6/12 px-3 relative pt-5 lg:pt-0 '>
                        <img className='  2xl:absolute -top-[10px] left-14 w-full  2xl:min-w-[697px]' src={mainpic} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection