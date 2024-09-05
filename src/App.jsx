import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  document.title = "Portfolio"
  return (
    <div className="overflow-x-hidden text-neutral-100 antialiased">
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
  );
}

export default App;
