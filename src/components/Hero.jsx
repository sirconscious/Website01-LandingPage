import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
export default function Hero() {
  return (
    <div className='flex flex-col w-full mt-4 lg:mt-40 justify-center items-center h-screen'>
     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center md:px-20"> 
        VirtualIR build tools <span className='bg-gradient-to-r from-cyan-400 to-cyan-700 text-transparent bg-clip-text'>
      for developers
      </span></h1>
      <p className='text-white mt-10 text-center text-sm sm:text-md md:text-lg  md:px-32 lg:px-44 '>
      Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center items-center mt-10">
      <a href="#" className='py-2 px-3 border border-cyan-400 rounded-md text-cyan-400
                                hover:bg-cyan-700
                                hover:text-white
                                '>
                                    Start For Free
                                </a>
      <a href="#" className='bg-gradient-to-r from-cyan-600 to-cyan-500 ml-5
                    hover:from-cyan-700 hover:to-cyan-600 
                    p-2 rounded-lg'>
                        Documentation
                    </a>                          
      </div>
      <div className="flex mt-10 flex-col sm:flex-row justify-center sm:p-12">
        <video   autoPlay muted loop className='border-2 border-cyan-500 my-5 sm:my-0  sm:w-1/2 rounded-md sm:ml-12 sm:mr-2'>
            <source src={video1} type='video/mp4'/>
            Your browser does not suport this video tag
        </video>
        <video   autoPlay muted loop className='border-2 border-cyan-500 sm:w-1/2 rounded-md sm:mr-14 sm:ml-2'>
            <source src={video2} type='video/mp4'/>
            Your browser does not suport this video tag
        </video>
      </div>
    </div>
  )
}
