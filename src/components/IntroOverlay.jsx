import React from 'react'
import { motion } from "motion/react";
import DecryptedText from './DecryptedText';


function IntroOverlay() {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}      
        animate={{ opacity: 0 ,
          display: "none"
        }}
        transition={{ duration: 1, delay: 2 }}
    >
      <DecryptedText text={"adkeymedia.in"}  className='text-white hover:text-white' />
    </motion.div>   
  )
}

export default IntroOverlay;