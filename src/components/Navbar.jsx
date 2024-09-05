import React from "react";
import logo from "../assets/profile.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion"

function Navbar() {
  const [theme, setTheme] = React.useState("dark");

  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <nav className="flex justify-between items-center lg:mb-20 mb-10 pt-2 lg:pb-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Profile Logo" className="mx-2 w-36" />
      </div>
      <div className="m-8 flex mx-2 gap-4 items-center justify-center text-2xl">
        <motion.button 
        initial={{x:0,opacity:1}}
        animate={{x:0,opacity:1}}
        transition={{duration:5500,delay:5000}}
        onClick={handleClick} className="focus:outline-none transition ease-in-out delay-1500">
          {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
        </motion.button>
        <a
          href="https://www.linkedin.com/in/kamal-kant-sahu-4a8799202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/mr-banner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/Kamalkant28/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandLeetcode />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
