import React from "react";
import ProjectCard from "./Cards/ProjectCard";
import { Link } from "react-router-dom";

import { projects } from "../util.js";

const Projects = () => {
  return (
    <div className="mobile-480:w-[400px] mobile-480:mx-auto md:w-auto md:mx-10">
      <h2 className="mt-20 font-handlee font-bold text-2xl bg-customPink inline-block xl:text-3xl">
        Featured Projects
      </h2>
      <img
        src="/arrow.png"
        alt="arrow"
        width={50}
        height={50}
        className="-rotate-90 my-8"
      />
      <p className="font-inter text-lg text-gray-800 xl:text-xl">
        Worked on several projects in technologies like React.js, Next.js,
        Laravel, PHP.
      </p>
      <Link to="/allprojects">
        <button className="mt-5 bg-matteYellow font-handlee font-bold text-lg py-1 px-2 w-max mr-auto hidden lg:block xl:text-xl">
          Show all projects
        </button>
      </Link>

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
