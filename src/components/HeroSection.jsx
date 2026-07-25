// import { section } from 'motion/react-client'
import React from 'react'
import ShinyText from './ShinyText.jsx';
import { motion } from "motion/react";

function HeroSection() {
  return (
<>
<div className="h-[60vh] lg:min-h-[80vh] flex items-center justify-center flex-col bg-cover bg-center">
    <h1 className="text-xl md:text-xl lg:text-2xl font-bold text-[#86278F] text-center mb-2">
      The one and only
    </h1>
   < br />

    <motion.img 
      
      src="src/assets/props/charge.png"
      alt="Crystal"
      drag
      dragConstraints={{ top: -300, left: -200, right: 1000, bottom: 300 }}
      transition={{ duration: 1 }}
      className="w-22 h-22 left-[19vw] mb-2 absolute cursor-grab"
       />

    <ShinyText text="Digital Marketing Agency" speed={2} shineColor="#fff" color="gray" spread={120} yoyo={true} pauseOnHover={true} direction="left" delay={0} className='text-7xl' />

    <motion.img 
      
      src="src/assets/props/start.png"
      alt="Crystal"
      drag
      dragConstraints={{ top: -300, left: -900, right: 200, bottom: 300 }}
      transition={{ duration: 1 }}
      className="w-22 h-22 right-[19vw] mt-42 absolute cursor-grab"
       />

</div>
</>
  )
}

export default HeroSection