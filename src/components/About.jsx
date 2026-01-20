import { useRef } from "react";
import about from "../assets/About.png";
import { motion, useInView } from "framer-motion";
import { ABOUT_TEXT } from "./Constants/Constant";
import { useTheme } from "../context/ThemeContext";
import resume from "../assets/resume.pdf"

function About() {
  const { theme } = useTheme();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`border-b pb-4 lg:mb-35 ${
        theme === "light" ? " border-[#CDC1FF]" : "border-neutral-900"
      }`}
    >
      <motion.h1
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`lg:my-20 my-16 text-center text-4xl ${
          theme === "light" ? "text-[#5e3ff8]" : "text-[#FFF]"
        }`}
      >
        About
        <motion.span
          className={`ml-3 ${
            theme === "light" ? "text-[#A594F9]" : " text-neutral-500 "
          }`}
        >
          Me
        </motion.span>
      </motion.h1>

      <div className="flex flex-wrap sm:flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <img
              src={about}
              alt="About Image"
              className={`w-3/4 lg:w-2/4 lg:h-auto rounded-2xl ${
                theme === "light" ? "shadow-2xl" : "shadow-none"
              }`}
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col lg:items-start"
          >
            <p
              className={`mb-3 max-w-xl lg:py-12 py-8 font-light text-[16px] tracking-tight ${
                theme === "light"
                  ? "text-neutral-900 font-[300]"
                  : "text-[#FFF]"
              }`}
            >
              {ABOUT_TEXT}
            </p>
            <a
              href={resume}
              download = "Kamal_Kant_Sahu_Resume.pdf"
              className={`border-2 rounded-full p-3 max-sm:w-[50%] font-medium sm:text-[16px] text-sm  text-center mb-4 transition-all ease-in-out duration-500 ${theme === "light" ? "border-neutral-900 text-neutral-900 hover:shadow-gray-500 hover:shadow-2xl" : "border-neutral-50 text-white hover:shadow-gray-500 shadow-xl"}`}
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
