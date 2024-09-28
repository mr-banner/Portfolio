import React from 'react'
import { HERO_CONTENT } from './Constants/Constant'
import { motion } from "framer-motion"
import profilePic from "../assets/ProfilePic.png"
import { useTheme } from '../context/ThemeContext'

const container = (delay)=>({
  hidden: {x: -100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay}
  },
})
function Hero() {
  const {theme} = useTheme();
  return (
    <div className={`border-b pb-4 lg:mb-35
    ${theme === "light" ? " border-[#CDC1FF]" : "border-neutral-900"}
    `}>
      <div className='flex flex-wrap max-sm:flex-col-reverse'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col lg:items-start '>
              <motion.h1 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className={`lg:pb-12 pb-3 text-4xl font-[200] tracking-tight lg:mt-8 lg:text-7xl
              ${theme === "light" ? "text-neutral-900" : "text-[#FFF]"}
              `}>Kamal Kant Sahu</motion.h1>
              <motion.span 
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className={` bg-clip-text tracking-tight text-transparent text-3xl mb-2.5 lg:mb-1
              ${theme === "light" ? "bg-gradient-to-r from-[#a08dfe] to-[#5e3ff8]"
                :"bg-gradient-to-r from-pink-300 to via-slate-500 to-purple-500"}
              `}>Frontend Developer</motion.span>
              <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className={`mb-8 max-w-xl lg:py-6 font-[300] tracking-tight
                ${theme === "light" ? "text-neutral-900" : "text-[#FFF]"}
              `}>{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
            <div className='flex justify-center'>
              <motion.img 
              initial={{x:100,opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1.2,delay:1.1}}
              src={profilePic} alt="Kamal Kant"
              className={`w-4/5 lg:w-3/6  lg:h-auto max-sm:mb-10 
              ${theme === "light" ? "rounded-full shadow-2xl" : "rounded-none"}`}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
