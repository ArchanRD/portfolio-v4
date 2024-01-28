import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WhatIDo from "./components/WhatIDo";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="ml-7 pl-5 mr-5 md:px-0 xl:max-w-7xl mx-auto bg-dotted bg-no-repeat bg-cover">
        <Navbar />
        <Hero />
        <WhatIDo />
        <Projects />
        <WorkExperience />
        <Contact />
    </div>
  );
}

export default App;
