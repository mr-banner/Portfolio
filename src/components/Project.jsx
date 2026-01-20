import React, { useRef } from "react";
import { PROJECTS } from "./Constants/Constant";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Project() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div
      ref={sectionRef}
      className={`border-b pb-4 lg:mb-20 mb-2 ${
        theme === "light" ? "border-[#CDC1FF]" : "border-neutral-900"
      }`}
    >
      <motion.h1
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={`lg:my-20 my-16 text-center text-4xl ${
          theme === "light" ? "text-[#5e3ff8]" : "text-[#FFF]"
        }`}
      >
        Projects
      </motion.h1>

      <div className="relative">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-16 cursor-pointer flex flex-wrap lg:justify-evenly group"
          >
            <div className="w-full lg:w-1/3 flex justify-center relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[260px] object-cover rounded-lg transition-all duration-500"
              />

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-6 text-white text-3xl">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="hover:scale-110 transition-all" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="hover:scale-110 transition-all" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full max-w-xl lg:w-3/5 lg:pl-6">
              <h6
                className={`mb-2 mt-4 font-semibold text-lg ${
                  theme === "light"
                    ? "text-[#A594F9]"
                    : "text-neutral-200"
                }`}
              >
                {project.title}
              </h6>

              <p
                className={`text-base mb-4 ${
                  theme === "light"
                    ? "text-neutral-900"
                    : "text-neutral-400"
                }`}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`mr-2 text-sm mt-2 rounded px-2 py-1 font-medium ${
                      theme === "light"
                        ? "bg-white text-[#A594F9] shadow-lg"
                        : "bg-neutral-900 text-purple-500"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
