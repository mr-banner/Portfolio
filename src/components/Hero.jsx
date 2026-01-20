import { HERO_CONTENT } from "./Constants/Constant";
import { motion } from "framer-motion";
import Professional_Image_Portfolio from "../assets/Professional_Image_Portfolio.png";
import { useTheme } from "../context/ThemeContext";
import { Typewriter } from "react-simple-typewriter";
import resume from "../assets/resume.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  const { theme } = useTheme();

  return (
    <div
      className={`border-b pb-4 lg:mb-35
    ${theme === "light" ? " border-[#CDC1FF]" : "border-neutral-900"}
    `}
    >
      <div className="flex flex-wrap max-sm:flex-col-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:items-start ">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className={`lg:pb-12 pb-3 text-4xl font-[200] tracking-tight lg:mt-8 lg:text-7xl
              ${theme === "light" ? "text-neutral-900" : "text-[#FFF]"}
              `}
            >
              Kamal Kant Sahu
            </motion.h1>

            <motion.span
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className={` bg-clip-text tracking-tight text-transparent text-3xl mb-2.5 lg:mb-1
              ${
                theme === "light"
                  ? "bg-gradient-to-r from-[#a08dfe] to-[#5e3ff8]"
                  : "bg-gradient-to-r from-pink-300 to via-slate-500 to-purple-500"
              }
              `}
            >
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Full Stack Developer",
                  "Backend Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className={`mb-8 max-w-xl lg:py-6 font-[300] text-[18px] tracking-tight
                ${theme === "light" ? "text-neutral-900" : "text-[#FFF]"}
              `}
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
            variants={container(1.40)}
            initial="hidden"
            animate="visible"
            className="flex gap-5 -mt-5 items-center min-w-[80%]">
              <a
              href={resume}
              download="Kamal_Kant_Sahu_Resume.pdf"
              className={`border-2 rounded-full text-center p-3 mb-4 font-semibold text-sm transition-all ease-in-out duration-500 ${theme === "light" ? "border-neutral-900 text-neutral-900 hover:shadow-gray-500 hover:shadow-2xl" : "border-purple-800 text-white hover:shadow-purple-700/55 shadow-xl"}`}
            >
              Download CV
            </a>
            <a
              href="#Contact"
              className={`border-2 rounded-full text-center sm:w-[22%] w-[30%] p-3 mb-4 font-semibold text-sm transition-all ease-in-out duration-500 ${theme === "light" ? "border-neutral-900 hover:shadow-gray-500 hover:shadow-2xl bg-neutral-950 text-white hover:bg-transparent hover:text-black" : "border-purple-800 text-white hover:shadow-purple-700/55 shadow-xl"}`}
            >
              Hire Me
            </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              src={Professional_Image_Portfolio}
              alt="Kamal Kant"
              className={`w-4/5 lg:w-3/6  lg:h-auto max-sm:mb-10 
              ${theme === "light" ? "rounded-full shadow-2xl" : "rounded-full shadow-purple-700/35 shadow-2xl"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
