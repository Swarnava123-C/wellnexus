import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

  return (
    <div className='flex bg-primary md:mx-10 my-20 px-6 sm:px-10 md:px-14 lg:px-12 rounded-lg'>
        {/*---Left Side---*/}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
<div className='font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl'>
    <p>Access Health Updates</p>
    <p className='mt-4'>from 100+ Doctors</p>
</div>
<button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white mt-6 px-8 py-3 rounded-full text-gray-600 text-sm sm:text-base hover:scale-105 transition-all'>Create account</button>
        </div>

{/*---Right Side---*/}
        <div className='hidden md:block relative md:w-1/2 lg:w-[370px]'>
            <img className='right-0 bottom-0 absolute w-full max-w-md' src={assets.appointment_img} alt="" />
        </div>

    </div>
  )
}

export default Banner