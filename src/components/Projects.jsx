import React from "react";
import ProjectCard from "./Cards/ProjectCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../util.js";

const Projects = () => {
  return (
    <div className="mobile-480:w-[400px] mobile-480:mx-auto md:w-auto md:mx-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="mt-20 font-handlee font-bold text-2xl bg-customPink inline-block xl:text-3xl"
      >
        Featured Projects
      </motion.h2>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
        src="/arrow.png"
        alt="arrow"
        width={50}
        height={50}
        className="-rotate-90 my-8"
      />
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
        className="font-generalSans text-lg text-gray-800 xl:text-xl"
      >
        Worked on several projects in technologies like React.js, Next.js,
        Laravel, PHP.
      </motion.p>
      <Link to="/allprojects" className="hidden lg:block">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="mt-5 bg-matteYellow font-handlee font-bold text-lg py-1 px-2 w-max mr xl:text-xl"
        >
          Show all projects
        </motion.button>
      </Link>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.58, ease: "easeInOut" }}
        className="mt-4 bg-blue-300 p-2 lg:w-max"
      >
        <h2 className="font-handlee text-2xl font-bold">💡Tip</h2>
        <h2 className="font-handlee text-lg">
          To filter the projects, click on the tags to search.
        </h2>
      </motion.div>

      <div className="mt-7 flex flex-col gap-4 md:flex-row md:flex-wrap">
        {projects.slice(0, 3).map((project) => {
          return (
            <ProjectCard
              projectLink={project.projectLink}
              image={project.image}
              imageWidth={project.imageWidth}
              imageHeight={project.imageHeight}
              title={project.title}
              buttonText={project.buttonText}
              buttonBgColor={project.buttonBgColor}
              buttonBorderColor={project.buttonBorderColor}
              buttonLink={project.buttonLink}
              tags={project.tags}
              key={project.key}
            />
          );
        })}
      </div>
      <Link to="/allprojects">
        <button className="mt-5 lg:hidden bg-matteYellow font-handlee font-bold text-lg py-1 px-2 w-max ml-auto">
          Show all projects
        </button>
      </Link>
    </div>
  );
};

export default Projects;
