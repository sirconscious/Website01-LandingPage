import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg from "../assets/code.jpg"
import { useState , useEffect} from 'react'
import {checklistItems} from "../constants/idnex"
export default function Workflow() {
  return (
    <div className='mt-22 '>
      <h2 className='text-3 sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-white'>
        Accelerate your <span className='bg-gradient-to-r from-cyan-600 to-cyan-400 text-transparent bg-clip-text'>coding workflow.</span>
      </h2>
      <div className="flex flex-wrap justify-center mt-6 p-6">
        <div className="p2 w-full lg:w-1/2 ">
          <img src={codeImg} alt="" />
        </div>
        <div className="p-2 w-full lg:w-1/2">
          {checklistItems.map((value,index)=>{
            return(
            <div className="flex mb-12" key={index}>
               <div className='text-cyan-400  mb-12 pt-1' >

                    <CheckCircle2/>
              </div>
              <div className="text-white ml-2">
                <h5 className='text-cyan-400 text-lg'>{value.title}</h5>
                <p>{value.description}</p>
              </div>
            </div>
           )
          })}
        </div>
      </div>
    </div>
  )
}
