import React from 'react'
import slack from '../assets/images/png/Slack.png'
import netflix from '../assets/images/png/Netflix.png'
import fitbit from '../assets/images/png/FitBit.png'
import google from '../assets/images/png/Google.png'
import airbnb from '../assets/images/png/AirBnb.png'
import uber from '../assets/images/png/Uber.png'

const Partners = () => {
    return (
        <div className=' pt-14 sm:pt-24  lg:pt-[110px]'>
            <div className="container lg:!max-w-[1182px] px-3 mx-auto">
                <p className=' font-poppins font-medium text-[24px] leading-[34px] text-[#03020D] text-center mx-auto'>Our Trusted Partners</p>
                <div className=' overflow-x-clip'>
                    <div className=' flex items-center  gap-9 lg:gap-[87.85px] justify-center pt-[50px] animate-spin-slow'>
                        <img src={slack} className=' max-w-[109px]' alt="#" />
                        <img src={netflix} className=' max-w-[95px]' alt="#" />
                        <img src={fitbit} className=' max-w-[95px] ' alt="#" />
                        <img src={google} className=' max-w-[95px]' alt="#" />
                        <img src={airbnb} className=' max-w-[95px]' alt="#" />
                        <img src={uber} className=' max-w-[95px]' alt="#" />
                        <img src={slack} className=' max-w-[109px]' alt="#" />
                        <img src={netflix} className=' max-w-[95px]' alt="#" />
                        <img src={fitbit} className=' max-w-[95px] ' alt="#" />
                        <img src={google} className=' max-w-[95px]' alt="#" />
                        <img src={airbnb} className=' max-w-[95px]' alt="#" />
                        <img src={uber} className=' max-w-[95px]' alt="#" />
                        <img src={uber} className=' max-w-[95px]' alt="#" />
                        <img src={slack} className=' max-w-[109px]' alt="#" />
                        <img src={netflix} className=' max-w-[95px]' alt="#" />
                        <img src={fitbit} className=' max-w-[95px] ' alt="#" />
                        <img src={google} className=' max-w-[95px]' alt="#" />
                        <img src={airbnb} className=' max-w-[95px]' alt="#" />
                        <img src={uber} className=' max-w-[95px]' alt="#" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners