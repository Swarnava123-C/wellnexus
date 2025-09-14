import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] =  useState(false)
    const [token, setToken] =useState(true)

  return (
    <div className='flex justify-between items-center mb-5 py-4 border-b border-b-gray-400 text-sm'>
        <img onClick={()=>navigate('/')} className='h-40 sm:h-14 md:h-16 lg:h-18 object-contain cursor-pointer' src={assets.logo2} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='hidden bg-primary m-auto border-none outline-none w-3/5 h-0.5' />
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='hidden bg-primary m-auto border-none outline-none w-3/5 h-0.5' />
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='hidden bg-primary m-auto border-none outline-none w-3/5 h-0.5'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='hidden bg-primary m-auto border-none outline-none w-3/5 h-0.5' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token 
                ? <div className='group relative flex items-center gap-2 cursor-pointer'>
                    <img className='rounded-full w-8' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='hidden group-hover:block top-0 right-0 z-20 absolute pt-14 font-medium text-gray-600 text-base'>
                        <div className='flex flex-col gap-4 bg-stone-100 p-4 rounded min-w-48'>
                            <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer' >Logout</p>
                        </div>
                    </div>
                </div>
                :<button onClick={()=>navigate('/login')}  className='hidden md:block bg-primary px-8 py-3 rounded-full font-light text-white'>Create account</button>
            }
            
        </div>
    </div>
  )
}

export default Navbar

