import React from 'react'
import {resourcesLinks} from "../constants/idnex"
import {platformLinks} from "../constants/idnex"
import {communityLinks} from "../constants/idnex"
export default function Footer() {
  return (
    <footer className='mt-20 border-t-2 border-cyan-400 backdrop-blur bg-cyan-700 bg-opacity-75 mx-10'>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ml-20">
        <div className="text-white">
            <h3 className='text-md font-semibold mb-4 mt-5'>Resources</h3>
            <ul className='space-y-2'>
                {resourcesLinks.map((resc,index)=>(
                    <li key={index} className='hover:text-cyan-400'>
                         <a href={resc.href}>{resc.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="text-white">
            <h3 className='text-md font-semibold mb-4 mt-5'>Platform</h3>
            <ul className='space-y-2'>
                {platformLinks.map((resc,index)=>(
                    <li key={index} className='hover:text-cyan-400'>
                         <a href={resc.href}>{resc.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="text-white">
            <h3 className='text-md font-semibold mb-4 mt-5'>Resources</h3>
            <ul className='space-y-2'>
                {communityLinks.map((resc,index)=>(
                    <li key={index} className='hover:text-cyan-400'>
                         <a href={resc.href}>{resc.text}</a>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </footer >
  )
}
