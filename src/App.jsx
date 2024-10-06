import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
export default function App() {
  return (
<div className="bg-slate-800  ">
      <div className="mx-6">
      <NavBar/>
      </div>
    <div className="max-w-7xl mx-auto pt-10 px-10">
    <Hero/>
    </div>
    
</div>  )
}
