import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WhatIDo from "./components/WhatIDo";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="ml-7 pl-5 mr-5 md:px-0 mx-auto bg-no-repeat xl:max-w-7xl xl:mx-auto bg-cover mobile-480:w-[480px] mobile-480:mx-auto sm:w-full lg:mx-20 lg:w-auto  lg:bg-contain xl:bg-cover xl:px-4">
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
