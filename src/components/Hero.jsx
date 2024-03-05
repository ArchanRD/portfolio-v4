import React from "react";
import { Link } from "react-router-dom";
import Resume from "../PDF's/Archan Resume 2024.pdf"

const Hero = () => {
  return (
    <div className="mt-11 mobile-480:w-[400px] mobile-480:mx-auto sm:w-3/4 md:flex md:gap-10 md:w-auto md:mx-10 md:justify-between lg:gap-32 xl:gap-28 xl:mr-auto">
      <div className="md:flex flex-col">
        <div className="flex items-center gap-4 md:justify-center">
          <div>
            <img src="/Ink 1.png" className="md:h-auto md:w-32 lg:w-36" width={120} height={120} />
          </div>
          <div>
            <img src="/arrow.png" className="md:w-12  md:h-auto" alt="arrow" width={50} height={50} />
          </div>
          <div>
            <h2 className="font-handlee font-bold -rotate-12 bg-blue-300 text-lg md:text-2xl">
              archan
            </h2>
          </div>
        </div>
        <h2 className="mt-8 text-4xl md:text-3xl relative font-inter font-semibold w-2/3 sm:w-auto md:w-2/3 md:mx-auto lg:text-4xl text-gray-800 lg:w-auto xl:text-5xl xl:w-full">
          I{" "}
          <span className="bg-pink-200 h-3 block absolute top-5 left-5 -z-10 w-32"></span>
          develop top notch websites
        </h2>
      </div>
      <div className="flex flex-col md:justify-end md:w-1/2">
        <p className="mt-4 font-inter text-lg md:text-base md:w-auto lg:text-lg xl:text-xl">
          I'm <strong>Archan Dhrangadharia</strong>, building standout websites
          using cutting-edge tech for a strong digital footprint.
        </p>
        <Link
          to={Resume}
          target="_blank"
          className="w-max"
        >
          <button className="bg-gray-800 px-3 py-2 text-white font-inter font-semibold mt-4 hover:bg-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
