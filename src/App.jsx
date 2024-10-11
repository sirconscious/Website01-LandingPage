import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
export default function App() {
  return (
<div className="bg-slate-800 sm:h-fit ">
      <div className=" sm:mx-12">
      <NavBar/>
      </div>
    <div className="max-w-7xl mx-auto pt-10 px-10">
    <div className="mx-12">
    <Hero/>
    </div>
    </div>
    <FeatureSection/>
    <Workflow/>
    <Pricing></Pricing>
    </div> 
    )
}
