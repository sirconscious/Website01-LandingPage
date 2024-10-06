import React from 'react'
import {Menu , X} from "lucide-react"
import logo1 from '../assets/logo1.png'
import {navItems} from '../constants/idnex.jsx'
import { useState } from 'react'
export default function NavBar() {
    const [isMobile , setisMobile] = useState(false)
    function TogleMobile() {
        setisMobile(prev=>!prev)
    }
  return (
    <nav className='sticky top-0 left-0 w-full mx-auto backdrop-blur bg-cyan-700 bg-opacity-75 py-4 z-50 border-b-4 border-cyan-500'> 
        <div className=" mx-auto container px-5  relative text-sm">
            <div className="flex justify-between items-center ">
                <div className="flex item-center">
                    <img src={logo1} className='h-10 w-10 m-1' alt="" />
                    <span className='text-xl text-center align-middle tracking-tight py-2 text-cyan-500 font-medium	'>
                        SchoolTrack</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12  text-white'>
                    {navItems.map((item,index)=>{
                        return (
                            <li className=' hover:text-cyan-400' key={index}><a href={item.href}>{item.label}</a></li>
                        )
                    })}
                </ul>
                <div className="hidden lg:flex justify-center items-center space-x-12  text-white">
                    <a href="#" className='py-2 px-3 border border-cyan-400 rounded-md text-cyan-400
                     hover:bg-cyan-700
                     hover:text-white
                     '>
                        Sign In
                    </a>
                    <a href="#" className='bg-gradient-to-r from-cyan-600 to-cyan-500 
                    hover:from-cyan-700 hover:to-cyan-600 
                    p-2 rounded-lg'>
                        Create an account 
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-center items-center text-cyan-400">
                    <button onClick={TogleMobile}>
                        {isMobile? <X/> : <Menu/>}
                    </button>
                   { isMobile && <div className='fixed right-0 z-20 bg-slate-700 w-full p-12 top-16 flex 
                    justify-center space-y-5 flex-col items-center  lg:hidden'>
                        <ul className='flex flex-col space-y-12'>
                            {navItems.map((item,index)=>{
                               return( 
                                <li className='hover:border-b-2  text-center hover:border-cyan-400' key={index}> <a href={item.href}>{item.label}</a></li>
                               ) 
                            })}
                        </ul>
                        <div className="flex justify-center items-center">
                        <div className=" flex justify-center items-center space-x-12  text-white">
                                <a href="#" className='py-2 px-3 border border-cyan-400 rounded-md text-cyan-400
                                hover:bg-cyan-700
                                hover:text-white
                                '>
                                    Sign In
                                </a>
                                <a href="#" className='bg-gradient-to-r from-cyan-600 to-cyan-500 
                                hover:from-cyan-700 hover:to-cyan-600 
                                p-2 rounded-lg'>
                                    Create an account 
                                </a>
                            </div>
                        </div>
                    </div >}
                </div>
            </div>
        </div>
    </nav>
  )
}
