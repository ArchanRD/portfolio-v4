import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WhatIDo from "./components/WhatIDo";

function App() {
  return (
    <div className="px-10 md:px-0 xl:max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <WhatIDo />
      <Projects />
    </div>
  );
}

export default App;
