import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {SiMongodb} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { GiMaterialsScience } from "react-icons/gi";
import { TbBrandMysql } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import {motion} from 'framer-motion'
import { FaJava } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { useTheme } from '../context/ThemeContext';

const iconVariants = (duration)=>({
  initial:{y:-10},
  animate:{
    y:[-10,10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  }
})
function Technologies() {
  const {theme} = useTheme();
  return (
    <div className="pb-4 lg:mb-35">
      <motion.h1 
      whileInView={{y:0,opacity:1}}
      initial={{y:-100,opacity:0}}
      transition={{duration:0.5, delay:0.5}}
      className={`lg:my-20 my-16 text-center text-4xl
        ${theme === "light" ? "text-[#5e3ff8]" : "text-[#FFF]"}
      `}>Technical
        <span className={`ml-3 ${theme === "light" ? "text-[#A594F9]" : " text-neutral-500 "}`}>Skills</span>
      </motion.h1>

      <motion.div
      whileInView={{x:0,opacity:1}}
      initial={{x:-100, opacity:0}}
      transition={{duration:0.5, delay:0.7}}
      className="flex items-center flex-wrap justify-center lg:gap-4 gap-8">
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className={`rounded-2xl  border-neutral-900 p-4
        ${theme === "dark" ? "border-4" : "border-2 shadow-xl"}
        `}>
            <RiReactjsLine className='text-cyan-400 lg:text-5xl text-3xl'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className={`rounded-2xl  border-neutral-900 p-4
          ${theme === "dark" ? "border-4" : "border-2 shadow-xl"}
          `}>
            <FaJava className=' text-blue-500 lg:text-5xl text-3xl'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className={`rounded-2xl  border-neutral-900 p-4
          ${theme === "dark" ? "border-4" : "border-2 shadow-xl"}
          `}>
            <IoLogoJavascript className='text-yellow-300 lg:text-5xl text-3xl'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className={`rounded-2xl  border-neutral-900 p-4
          ${theme === "dark" ? "border-4" : "border-2 shadow-xl"}
          `}>
            <SiMongodb className='text-green-500 lg:text-5xl text-3xl'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className={`rounded-2xl  border-neutral-900 p-4
          ${theme === "dark" ? "border-4" : "border-2 shadow-xl"}
          `}>
            <FaNodeJs className='text-green-500 lg:text-5xl text-3xl'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className={`rounded-2xl  border-neutral-900 p-4
          ${theme === "dark" ? "border-4" : "border-2 shadow-xl"}
          `}>
            <SiTailwindcss className='text-cyan-400 lg:text-5xl text-3xl'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className={`rounded-2xl  border-neutral-900 p-4
          ${theme === "dark" ? "border-4" : "border-2 shadow-xl"}
          `}>
            <GiMaterialsScience className='text-sky-500 lg:text-5xl text-3xl'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className={`rounded-2xl  border-neutral-900 p-4
          ${theme === "dark" ? "border-4" : "border-2 shadow-xl"}
          `}>
            <TbBrandMysql className='lg:text-5xl text-3xl' style={{color:'#00758f'}}/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className={`rounded-2xl  border-neutral-900 p-4
          ${theme === "dark" ? "border-4" : "border-2 shadow-xl"}
          `}>
            <TbBrandRedux  className='lg:text-5xl text-3xl' style={{color: '#ba8fff'}}/>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className={`rounded-2xl  border-neutral-900 p-4
          ${theme === "dark" ? "border-4" : "border-2 shadow-xl"}
          `}>
            <IoLogoHtml5  className='lg:text-5xl text-3xl' style={{color: '#e34c26'}}/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
