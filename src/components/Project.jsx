import React from 'react'
import { PROJECTS } from './Constants/Constant'
import {motion} from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
function Project() {
  const {theme} = useTheme();
  return (
    <div className={`border-b -pb-4 lg:mb-20 mb-2
      ${theme === "light" ? " border-[#CDC1FF]" : "border-neutral-900"}
      `}>
      <motion.h1 
      whileInView={{y:0,opacity:1}}
      initial={{y:-100,opacity:0}}
      transition={{duration:0.5, delay:0.7}}
      className={`lg:my-20 my-16 text-center text-4xl
      ${theme === "light" ? "text-[#5e3ff8]" : "text-[#FFF]"}
      `}>Projects</motion.h1>
      <div>
        {PROJECTS.map((project,index) => (
            <div key={index} className='mb-16 flex flex-wrap lg:justify-evenly'>
                <motion.div 
                whileInView={{x:35,opacity:1}}
                initial={{x:-100,opacity:0}}
                transition={{duration:0.5,delay:0.5}}
                className='w-full lg:w-1/4 flex lg:justify-start'>
                <img src={project.image} alt={project.title} width="250px" height="250px" className='mb-11 rounded shadow-2xl'/>
                </motion.div>
                <motion.div 
                whileInView={{y:0,opacity:1}}
                initial={{y:-100,opacity:0}}
                transition={{duration:0.5,delay:0.7}}
                className='w-full max-w-xl lg:w-3/4 '>
                    <h6 className={`mb-2 font-semibold text-neutral-100
                      ${theme === "light" ? "text-[#A594F9]" : " text-neutral-200 "}
                      `}>{project.title}</h6>
                    <p className={`text-neutral-400 text-base mb-4
                      ${theme === "light" ? "text-neutral-900" : "text-neutral-400 "}
                      `}>{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span key={index} className={`mr-2 text-sm mt-4 rounded bg-neutral-900
                          text-purple-500 px-2 py-1 font-medium
                          ${theme === "light" ? "bg-white text-[#A594F9] shadow-" : "bg-neutral-900 text-neutral-400"}
                          ` }>{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Project
