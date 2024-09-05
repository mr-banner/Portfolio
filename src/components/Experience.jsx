import React from 'react'
import { EXPERIENCES } from './Constants/Constant'
import {motion} from 'framer-motion'

function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <motion.h1 
      whileInView={{y:0,opacity:1}}
      initial={{y:-100,opacity:0}}
      transition={{duration:0.5, delay:0.7}}
      className='lg:my-20 my-16 text-center text-4xl'>Experience</motion.h1>
      <div>
        {EXPERIENCES.map((exp,index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-evenly'>
                <div className='w-full lg:w-1/4'>
                    <motion.p 
                    whileInView={{x:0,opacity:1}}
                    initial={{x:100,opacity:0}}
                    transition={{duration:0.5,delay:0.5}}
                    className='mb-2 text-sm text-neutral-400'>{exp.year}</motion.p> 
                </div>
                <motion.div 
                whileInView={{y:0,opacity:1}}
                initial={{y:100,opacity:0}}
                transition={{duration:0.5,delay:0.7}}
                className='w-full max-w-xl lg:w-3/4'>
                    <h5 className='mb-2 font-bold'>{exp.company}</h5>
                    <h6 className='mb-2 font-semibold text-neutral-200'>{exp.role}</h6>
                    <p className='text-neutral-400 text-base mb-4'>{exp.description}</p>
                    {exp.technologies.map((tech,index)=>(
                        <span key={index} className='mr-3 text-sm mt-4 rounded bg-neutral-900
                         text-purple-500 px-2 py-1 font-medium '>{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
