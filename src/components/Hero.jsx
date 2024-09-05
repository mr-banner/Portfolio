import React from 'react'
import { HERO_CONTENT } from './Constants/Constant'
import { motion } from "framer-motion"
import profilePic from "../assets/profile_pic.png"

const container = (delay)=>({
  hidden: {x: -100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay}
  },
})
function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col lg:items-start '>
              <motion.h1 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='lg:pb-12 pb-3 text-4xl font-thin tracking-tight lg:mt-8 lg:text-7xl'>Kamal Kant Sahu</motion.h1>
              <motion.span 
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-300 to via-slate-500 
              to-purple-500 bg-clip-text tracking-tight text-transparent text-3xl mb-2.5 lg:mb-1'>Frontend Developer</motion.span>
              <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='mb-8 max-w-xl lg:py-6 font-light tracking-tight '>{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
            <div className='flex justify-center'>
              <motion.img 
              initial={{x:100,opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1.2,delay:1.1}}
              src={profilePic} alt="Kamal Kant" className='w-11/12 lg:w-4/6  lg:h-auto rounded-lg'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
