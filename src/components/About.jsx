import React from "react";
import about from "../assets/about.jpg";
import { motion } from "framer-motion"
import { ABOUT_TEXT } from "./Constants/Constant";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h1 
      whileInView={{y:0,opacity:1}}
      initial={{y:-100,opacity:0}}
      transition={{duration:1, delay:0.5}}
      className="lg:my-20 my-16 text-center text-4xl">
        About
        <motion.span className="ml-3 text-neutral-500">Me</motion.span>
      </motion.h1>

      <div className="flex flex-wrap sm:flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
          whileInView={{y:0, opacity:1}}
          initial={{y:100,opacity:0}}
          transition={{duration:0.7 , delay:0.5}}
           className="flex items-center justify-center">
            <img
              src={about}
              alt="About Image"
              className="w-3/4 lg:w-2/4  lg:h-auto rounded-2xl"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
            <motion.div 
            whileInView={{x:0, opacity:1}}
            initial={{x:100,opacity:0}}
            transition={{duration:0.7 , delay:0.5}}
            className="flex flex-col lg:items-start">
                <p className='mb-3 max-w-xl lg:py-12 py-8 font-light tracking-tight'> {ABOUT_TEXT}</p>
            </motion.div>
          </div>
      </div>
    </div>
  );
}

export default About;
