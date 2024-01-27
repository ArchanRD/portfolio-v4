import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhatIDo from "./components/WhatIDo";

function App() {
  return (
    <div className="px-10 md:px-0 xl:max-w-7xl mx-auto">
      <Navbar />
      <div>
        <Hero />
      </div>
      <div className="mt-20">
        <WhatIDo />
      </div>
    </div>
  );
}

export default App;
