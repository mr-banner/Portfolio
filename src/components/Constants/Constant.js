import project1 from "../../assets/videoconf.png"
import project2 from "../../assets/todo.png"
import project3 from "../../assets/portfolio.jpg"
import project4 from "../../assets/blog.jpeg"

export const HERO_CONTENT = `I am a frontend developer with 1 year of experience in JavaScript, Java, React.js, Tailwind CSS, and Redux Toolkit, focused on building scalable web applications that enhance user experiences and drive business growth.`;

export const ABOUT_TEXT = `I am a versatile frontend developer with 1 year of experience in React, Node.js, MySQL, and MongoDB. I excel in collaborative settings, solving complex problems, and contributing to open-source projects. Outside of coding, I stay active and explore new technologies. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
      year: "08/07/2024 - Present",
      role: "Frontend Developer Intern",
      company: "Cybervie Pvt.Ltd",
      description: `Played a key role in designing and implementing user interfaces, focusing on creating responsive, user-friendly designs. 
                    Led the creation of an assessment section for modules, allowing for seamless integration and management of various assessments.
                    Integrated OTP verification during student registration using Firebase, enhancing security and user experience.
                    Worked closely with cross-functional teams, following Agile methodologies to ensure timely delivery of features.`,
      technologies: ["Javascript", "React", "MaterialUI", "Redux"],
    },
    {
      year: "01/2023 - 02/2023",
      role: "Frontend Intern",
      company: "OASIS INFOBYTE",
      description: `Designed and developed user interfaces for web applications using React. Created a E-commerce website which is responsive for all media devices.`,
      technologies: ["HTML", "CSS", "JavaScript", "React"]
    },
];

export const PROJECTS = [
    {
      title: "Local Meet A video conferencing platform",
      image: project1,
      description:
        "developed a online video conferencing platform using webRTC technology, having features like peer-to-peer communication and group communication also have the screen sharing and host control facilities.",
      technologies: ["React.js", "Node.js", "MongoDB","Javascript"],
    },
    {
      title: "Todo App",
      image: project2,
      description:
        "An application for managing tasks, with features such as task creation, deletion, updation and progress tracking.",
      technologies: ["React","Redux-toolkit","Tailwind"],
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["React","Tailwind","Redux","Git"]
    },
    {
      title: "Blogging Platform",
      image: project4,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["React","Redux","Appwrite","Tailwind"]
    },
  ];


