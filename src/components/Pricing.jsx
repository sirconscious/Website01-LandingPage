import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import {pricingOptions} from '../constants/idnex'


export default function Pricing() {
  return (
    <div className='mt-20 h-fit'>
      <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white tracking-wide">Pricing</div>
      <div className='flex  flex-wrap flex-row p-5'>
        {pricingOptions.map((item,index)=>{
           return (<div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
                <div className="p-10 border border-cyan-400 rounded-xl text-white text-4xl">
                    <p className='tex-4xl bg-gradient-to-r from-cyan-600 to-cyan-400 text-transparent bg-clip-text  mb-8'>{item.title} {item.title === "Pro" &&
                     <span className='text-white text-2xl'>(Most Popular)</span>}</p>
                     <p>
                      <span>({item.price})<span className='text-base text-gray-400'>/month</span></span>
                     </p>
                     <ul>
                      {item.features.map((feature,index)=>{
                        return(
                          <li key={index} className='mt-5 text-cyan-400 flex space-x-4 space-y-7'><CheckCircle2 className='mt-8'/> <span className='ml-2 text-lg text-white'>
                            {feature}</span></li>
                        )
                      })}
                     </ul>
                      <a href="#" className='inline-flex justify-center items-center w-full
                       bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 rounded-xl mt-5 hover:bg-gradient-to-r hover:from-cyan-600 hover:via-cyan-300 hover:to-cyan-600'>Subscrib</a>
                </div>
            </div>)
        })}
      </div>
    </div>
  )
}
