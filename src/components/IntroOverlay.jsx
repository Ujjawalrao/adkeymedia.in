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
        transition={{ duration: 3, delay: 2 }}
    >
      <motion.p 
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        exit={{ opacity: 0, }}
        transition={{ duration: 1,}}  
      className="text-white text-lg text-mono">adkeymedia.in</motion.p>
    </motion.div>   
  )
}

export default IntroOverlay;