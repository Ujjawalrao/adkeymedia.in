// import { section } from 'motion/react-client'
import React from 'react'
import ShinyText from './ShinyText.jsx';
import { motion } from "motion/react";
import charge from '../assets/props/charge.png';
import start from '../assets/props/start.png';
import whitelogo from "../assets/brandLogo/logo-white.png";

function HeroSection() {
  return (
    <div className="relative h-[60vh] lg:min-h-[80vh] overflow-hidden bg-cover bg-center p-6 lg:p-0">
      <div className="absolute inset-0 z-0">

      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-xl font-bold text-[#86278F] md:text-xl lg:text-2xl">
          The one and only
        </h1>

        <div className="max-w-4xl px-4">
          <ShinyText
            text="Digital Marketing Agency"
            speed={2}
            shineColor="#fff"
            color="gray"
            spread={120}
            yoyo={true}
            pauseOnHover={true}
            direction="left"
            delay={0}
            className="text-5xl sm:text-6xl lg:text-7xl"
          />
        </div>
      </div>

      <motion.img
        src={charge}
        alt="Charge Icon"
        drag
        dragConstraints={{ top: -300, left: -200, right: 1000, bottom: 300 }}
        transition={{ duration: 1 }}
        className="absolute left-[19vw] top-[20%] z-20 h-22 w-22 cursor-grab"
      />

      <motion.img
        src={start}
        alt="Start Icon"
        drag
        dragConstraints={{ top: -300, left: -900, right: 200, bottom: 300 }}
        transition={{ duration: 1 }}
        className="absolute right-[19vw] top-[35%] z-20 h-22 w-22 cursor-grab"
      />
    </div>
  );
}

export default HeroSection