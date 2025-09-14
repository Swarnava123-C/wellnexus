import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='pt-10 text-gray-500 text-2xl text-center'>
        <p>ABOUT <span className='font-medium text-gray-700'>US</span></p>
      </div>

      <div className='flex md:flex-row flex-col gap-12 my-10'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-sm'>
          <p>Welcome to WellNexus, your trusted partner in managing healthcare data and improving accessibility. We simplify the way hospitals and departments update and share health information, making it easier for everyone to stay connected.</p>
          <p>With our Health Data Information & Management System,healthcare providers can enter and manage data in real time, while the Super Admin dynamically monitors updates. This ensures efficient implementation of Health and Family Welfare Schemes, other health programmes, and improved service delivery.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At WellNexus, our vision is to bridge the gap between patients, providers, and policymakers. By integrating modern healthcare technology, we empower better decision-making, enhance user experience, and create a seamless healthcare ecosystem.</p>
        </div>
      </div>

      <div className='my-4 text-xl'>
        <p>WHY <span className='font-semibold text-gray-700'>CHOOSE US</span> </p>
      </div>

      <div className='flex md:flex-row flex-col mb:20'>
        <div className='flex flex-col gap-5 hover:bg-primary px-10 md:px-16 py-8 sm:py-16 border text-[15px] text-gray-600 hover:text-white transition-all duration-300 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>From booking doctor appointments to updating hospital data, WellNexus ensures a seamless and real-time healthcare management experience.</p>

        </div>
        <div className='flex flex-col gap-5 hover:bg-primary px-10 md:px-16 py-8 sm:py-16 border text-[15px] text-gray-600 hover:text-white transition-all duration-300 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Patients can easily connect with trusted doctors, while hospitals and departments can share key statistics for scheme monitoring all in one platform.</p>
        </div>
        <div className='flex flex-col gap-5 hover:bg-primary px-10 md:px-16 py-8 sm:py-16 border text-[15px] text-gray-600 hover:text-white transition-all duration-300 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Whether it’s tailored health reminders for patients or actionable insights for policymakers, WellNexus adapts to the unique needs of every user.</p>
        </div>
      </div>

    </div>
  )
}

export default About