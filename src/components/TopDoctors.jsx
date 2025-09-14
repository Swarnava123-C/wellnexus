import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

const navigate = useNavigate()
const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center md:mx-10 my-16 text-gray-900 gap:4'>
        <h1 className='font-medium text-3xl'>Top Doctors You Can Trust</h1>
        <p className='sm:w-1/3 text-sm text-center'>Meet trusted doctors across specialities with records and benefits made simple.</p>
        <div className='gap-4 gap-y-6 grid grid-cols-auto px-3 sm:px-0 pt-5 w-full'>
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden transition-all hover:translate-y-[-10px] duration-500 cursor-pointer' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-green-500 text-sm text-center'>
                            <p className='bg-green-500 rounded-full w-2 h-2'></p><p>Available</p>
                        </div>
                        <p className='font-medium text-gray-900 text-lg' >{item.name}</p>
                        <p className='text-gray-600 text-sm' >{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0) }} className='bg-blue-50 mt-10 px-12 py-3 rounded-full text-gray-600'>more</button>
    </div>
  )
}

export default TopDoctors