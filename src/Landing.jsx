import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import WhatIDo from "./components/WhatIDo";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div>
      <Layout>
        <Navbar />
        <Hero />
        <WhatIDo />
        <Projects />
        <WorkExperience />
        <Skills />
        <Socials />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
