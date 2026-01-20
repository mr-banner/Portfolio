import localmeet from "../../assets/local_meet.png"
import budgetbrain from "../../assets/budget_brain.png"
import quickpick from "../../assets/quick_pick.png"
import afrovids from "../../assets/afro_vids.png"

export const HERO_CONTENT = `I am a passionate software developer with experience in building modern, scalable, and user-friendly web applications using React.js, JavaScript, Node.js, Express.js and Tailwind CSS. I focus on writing clean, maintainable code and delivering high-performance solutions that enhance user experience and solve real-world problems.`;

export const ABOUT_TEXT = `I am a versatile developer with hands-on experience in both frontend and backend technologies including React, Node.js, MongoDB, and MySQL. I enjoy solving complex problems, learning new technologies, and collaborating with teams to build meaningful digital products. I believe in continuous learning and strive to write efficient, scalable, and well-structured code. Outside of coding, I explore new tools, contribute to open-source projects, and keep upgrading my technical skills.`;

export const EXPERIENCES = [
  {
    year: "08/07/2024 - Present",
    role: "Frontend Developer Intern",
    company: "Cybervie Pvt.Ltd",
    description: `Played a key role in designing and implementing user interfaces, focusing on creating responsive and user-friendly designs. 
                  Led the development of an assessment module for seamless management of student evaluations. 
                  Integrated OTP verification using Firebase to enhance security and authentication. 
                  Collaborated with cross-functional teams in an Agile environment to deliver high-quality features on time.`,
    technologies: ["JavaScript", "React", "MaterialUI", "Redux"],
  },
  {
    year: "01/2023 - 02/2023",
    role: "Frontend Intern",
    company: "OASIS INFOBYTE",
    description: `Designed and developed responsive user interfaces using React. Built a fully responsive e-commerce website with modern UI practices and optimized performance.`,
    technologies: ["HTML", "CSS", "JavaScript", "React"]
  },
];

export const PROJECTS = [
  {
    title: "Local Meet : Video Conferencing Platform",
    image: localmeet,
    description:
      "Developed an online video conferencing platform using WebRTC technology with peer-to-peer and group communication features. Implemented screen sharing, real-time chat, and host control functionalities.",
    technologies: ["React.js", "Node.js", "MongoDB", "WebRTC"],
    github: "https://github.com/mr-banner/LocalMeet",
    live: "https://local-meet.vercel.app"
  },
  {
    title: "Budget Brain",
    image: budgetbrain,
    description:
      "A personal finance management application that helps users track expenses, manage budgets, and analyze spending patterns with interactive visual reports.",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Firebase"],
    github: "https://github.com/mr-banner/Budget_Brain",
    live: "https://budget-brain-mauve.vercel.app/"
  },
  {
    title: "Quick Pick",
    image: quickpick,
    description:
      "A product selection and ordering platform with dynamic filtering, category management, and a smooth user-friendly interface for quick and efficient browsing.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/mr-banner/Quickpick-E-commerce",
    live: "https://quickpick-e-commerce.vercel.app/"
  },
  {
    title: "Afrovids – Freelance Project",
    image: afrovids,
    description:
      "An AI-powered video creation and editing platform that allows users to generate, customize, and enhance videos using artificial intelligence. Features include AI-based video generation, smart editing tools, automated effects, and seamless content customization for creators.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "AI APIs"],
  }
];

