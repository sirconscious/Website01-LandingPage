import React from 'react'
import {testimonials} from "../constants/idnex"
export default function Testemonials() {
  return (
    <div className='mt-20 tracking-wider'>
        <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center my-10 text-white lg:my-20'>
            What peaople are saying</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial,index)=>(
                    <div className='w-full sm:w-1/2 lg:w-1/3 px-4 py-4' key={index}>
                        
                        <div className="bg-cyan-600 p-6 rounded-md ">
                            <div className="flex mb-6 items-center">
                            <img src={testimonial.image} className='w-12 h-12 rounded-full' alt="" />
                            <div className="">
                            <p className='p-4 text-2xl font-bold '>{testimonial.user}</p>
                            </div>
                            
                        </div>
                            <p className='text-xl  text-white'>{testimonial.text}</p>
                        </div>

                        </div>
                ))}
            </div>
    </div>
  )
}
