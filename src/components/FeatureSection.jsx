import React from 'react'
import { features } from '../constants/idnex'
export default function FeatureSection() {
  return (
    <div className='relative mt-6 md:mt-20 border-b border-cyan-400 min-[800px]: h-fit bg-inherit'>
      <div className="text-center">
        <span className='text-cyan-400 p-2 border border-cyan-400 rounded-md text-lg'>Featurs</span>
        <h2 className='text-2xl sm:text-5xl md:text-6xl text-white mt-10'>Easily build
             <span className='bg-gradient-to-r from-cyan-400
              to-cyan-700  text-transparent bg-clip-text lg:text-7xl'>your code</span></h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">

      </div>
      <div className="flex flex-wrap mt-10 lg:mt:20 text-white p-5 ">
        {features.map((feature,index)=>{
            return(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 m-5 sm:m-0 flex ">
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 rounded-md 
                         text-cyan-400 justify-center items-center ">{feature.icon}</div>
                    </div>
                    <div className="">
                        <h5 className=' text-cyan-400'>{feature.text}</h5>
                        <p className='p-2 text-md sm:mb-20'>{feature.description}</p>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}
