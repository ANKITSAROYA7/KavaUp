import React from 'react'
import phonepic from '../assets/images/png/PhonePic.png'

const ContactUs = () => {
    return (
        <div className=' pt-14 sm:pt-24  lg:pt-[140px]'>
            <div className="container lg:!max-w-[1182px] px-3 mx-auto  overflow-hidden ">
                <div className='bg-[#F8dbeb] p-5 sm:p-10 lg:p-0'>
                    <div className=' max-w-[951px] mx-auto'>
                        <div className="flex items-end flex-wrap mx-[-12px] justify-center ">
                            <div className=' lg:w-[42%] px-3  -mt-[177px] flex max-lg:order-last'>
                                <img className='translate-y-[199px] sm:translate-y-[218px] lg:translate-y-[177px]  max-w-[315px]' src={phonepic} alt="#" />
                            </div>
                            <div className=' lg:w-[58%] px-3 lg:pt-20 lg:pb-[60px] '>
                                <p className=' font-semibold text-[25px] md:text-[32px]  lg:text-[40px] font-poppins leading-10  lg:leading-[50px] text-[#131619] '>Take the Next Step in Your Digital Transformation</p>
                                <p className=' text-[#131619] font-poppins font-normal text-lg leading-9 py-3 lg:pt-[30px] lg:pb-[16px]'>Concentrate on your brand, business, or project while we handle the software development.</p>
                                <p className=' text-[#0055B2] font-poppins font-medium text-lg leading-9'>Get in touch with Kava Up to learn more!</p>
                                <button className=' font-poppins font-medium text-lg leading-[21px] text-white px-10 py-5 bg-gradient-to-l from-[#0055B2] to-[#D0006F] rounded-[50px] mt-5 lg:mt-[30px] '>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactUs