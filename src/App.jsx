import { useEffect } from "react";
import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  document.title = "Portfolio"
  const [theme,setTheme] = React.useState("dark");
  const darkMode = () => {
    setTheme("dark");
  }
  const lightMode = () => {
    setTheme("light");
  }

  React.useEffect(() => {
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(theme);
  },[theme])

  return (
    <ThemeProvider value = {{theme,darkMode,lightMode}}>
    <div className={`overflow-x-hidden text-neutral-100 antialiased ${
          theme === "light" ? "bg-[#E2E9ED]" : "bg-neutral-950"
        }`}>
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto lg:px-20  px-5">
        <Navbar />
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Project/>
        <Footer/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
