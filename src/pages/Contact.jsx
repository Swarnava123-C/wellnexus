import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        <div className='pt-10 text-gray-500 text-2xl text-center'>
          <p>CONTACT <span className='font-semibold text-gray-700'>US</span></p>
        </div>

<div className='flex md:flex-row flex-col justify-center gap-10 my-10 mb-28 text-sm'>
<img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

<div className='flex flex-col justify-center items-start gap-6'>
  <p className='font-semibold text-gray-600 text-lg'>OUR OFFICE</p>
  <p className='text-gray-500'>EM-4, Salt Lake, Sector V <br />Kolkata, West Bengal, India – 700091</p>
  <p className='text-gray-500'>Tel: (415) 555‑0132 <br />Email: swarnavamalakar863@gmail.com</p>
  <p className='font-semibold text-gray-600 text-lg'>CAREERS at WELLNEXUS</p>
  <p className='text-gray-500'>Learn more about our teams and job openings.</p>
  <button className='hover:bg-black px-8 py-4 border border-black hover:text-white text-sm transition-all duration-500'>Explore Jobs</button>
</div>

</div>

    </div>
  )
}

export default Contact