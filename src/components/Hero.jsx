import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mt-11">
      <div className="flex items-center gap-4">
        <div>
          <img src="/Ink 1.png" className="" width={120} height={120} />
        </div>
        <div>
          <img src="/arrow.png" alt="" width={50} height={50} />
        </div>
        <div>
          <h2 className="font-handlee font-bold -rotate-12 bg-blue-300 text-lg">
            archan
          </h2>
        </div>
      </div>
      <h2 className="mt-8 text-4xl relative font-inter font-semibold w-2/3">
        I{" "}
        <span className="bg-pink-200 h-3 block absolute top-5 left-5 -z-10 w-32"></span>
        develop top notch websites
      </h2>
      <p className="mt-4 font-inter text-lg">
      I'm <strong>Archan Dhrangadharia</strong>, building standout websites using cutting-edge tech for a strong digital footprint
      </p>
      <Link to="https://www.linkedin.com/in/archan-dhrangadharia-ba67a0227/" target="_blank">
      <button className="bg-gray-800 px-3 py-2 text-white font-inter font-semibold mt-4 hover:bg-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Linkedin</button>
      </Link>
    </div>
  );
};

export default Hero;
