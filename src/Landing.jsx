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
  );
}

export default App;
