import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Resume from "../PDF's/Archan Dhrangadharia Resume 2025.pdf";

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <div className="mt-11 mobile-480:w-[400px] mobile-480:mx-auto sm:w-3/4 md:flex md:gap-10 md:w-auto md:mx-10 md:justify-between lg:gap-32 xl:gap-28 xl:mr-auto">
      <div className="md:flex flex-col">
        <div className="flex items-center gap-4 md:justify-center">
          <motion.div
            initial={!hasAnimated ? { opacity: 0, x: 20 } : false}
            whileInView={!hasAnimated ? { opacity: 1, x: 0 } : false}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
            onAnimationComplete={() => setHasAnimated(true)}
          >
            <img
              src="/Ink 1.png"
              className="md:h-auto md:w-32 lg:w-36"
              width={120}
              height={120}
              alt="character"
            />
          </motion.div>
          <motion.div
            initial={!hasAnimated ? { opacity: 0, x: 20 } : false}
            whileInView={!hasAnimated ? { opacity: 1, x: 0 } : false}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
            onAnimationComplete={() => setHasAnimated(true)}
          >
            <img
              src="/arrow.png"
              className="md:w-12  md:h-auto"
              alt="arrow"
              width={50}
              height={50}
            />
          </motion.div>
          <motion.div
            initial={!hasAnimated ? { opacity: 0, x: 20 } : false}
            whileInView={!hasAnimated ? { opacity: 1, x: 0 } : false}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
            onAnimationComplete={() => setHasAnimated(true)}
          >
            <h2 className="font-handlee font-bold -rotate-12 bg-blue-300 text-lg md:text-2xl">
              archan
            </h2>
          </motion.div>
        </div>
        <motion.h2
          initial={!hasAnimated ? { opacity: 0, y: -20 } : false}
          whileInView={!hasAnimated ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
          onAnimationComplete={() => setHasAnimated(true)}
          className="mt-8 text-4xl md:text-3xl relative font-generalSans font-semibold w-2/3 sm:w-auto md:w-2/3 md:mx-auto lg:text-4xl text-gray-800 lg:w-auto xl:text-5xl xl:w-full"
        >
          I{" "}
          <span className="bg-pink-200 h-3 block absolute top-5 left-5 z-10 w-32 md:w-28 md:top-4 lg:top-5 lg:w-32 xl:top-6 xl:h-4 xl:w-44"></span>
          <span className="relative z-20">develop top notch websites</span>
        </motion.h2>
      </div>
      <motion.div
        initial={!hasAnimated ? { opacity: 0, y: -20 } : false}
        whileInView={!hasAnimated ? { opacity: 1, y: 0 } : false}
        onAnimationComplete={() => setHasAnimated(true)}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
        className="flex flex-col md:justify-end md:w-1/2"
      >
        <p className="mt-4 font-generalSans text-lg md:text-base md:w-auto lg:text-lg xl:text-xl">
          I'm <strong>Archan Dhrangadharia</strong>, building standout websites
          using cutting-edge tech for a strong digital footprint.
        </p>
        <Link to={Resume} target="_blank" className="w-max">
          <button className="bg-gray-800 px-3 py-2 rounded text-white font-generalSans font-semibold mt-4 flex items-center gap-1 hover:bg-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Resume<span className="material-symbols-outlined">download</span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
