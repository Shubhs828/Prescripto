import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(false);

  return (
    <div className='flex justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo}/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex item-centre gap-4'>
        {
            token ? 
            <div className='flex item-centre gap-2 curson-pointer group relative'>
                <img className='w-9 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My profile</p>
                        <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My appointments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Log out</p>
                    </div>
                </div>
            </div> :
            <button 
            onClick={()=>navigate('/login')}
            className='bg-green-500 font-medium text-white px-4 py-3 rounded-xl font-light ms:block hover:scale-110 hover:bg-blue-500 transition-all duration-500'>Create Account</button>
        }
      </div>

    </div>
  )
}

export default Navbar
