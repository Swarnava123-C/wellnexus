import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex md:flex-row flex-col flex-wrap bg-primary px-6 md:px-10 lg:px-20 rounded-lg'>
        
{/*----- Left Side-----*/}
<div className='flex flex-col justify-center items-start gap-4 m-auto md:mb-[-30px] py-10 md:py-[10vw] md:w-1/2'>
<p className='font-semibold text-white text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight'>
    Smart Health Data Management <br /> for Hospitals & Patients
</p>
<div className='flex md:flex-row flex-col items-center gap-3 font-light text-white text-sm'>
    <img className='w-28'  src={assets.group_profiles} alt="" />
    <p>Hospitals can securely update health records, instantly accessible to Super Admins, <br className='hidden sm:block' /> for monitoring, schemes, and better patient care.</p>
</div>
<a href="#speciality" className='flex items-center gap-2 bg-white m-auto md:m-0 px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300'>
    Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
</a>
</div>

{/*----- Right Side-----*/}
<div className='relative md:w-1/2'>
<img className='bottom-0 md:absolute rounded-lg w-full h-auto' src={assets.header_img} alt="" />
</div>

    </div>
  )
}

export default Header