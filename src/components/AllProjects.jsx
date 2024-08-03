import React from "react";
import Layout from "./Layout";
import Navbar from "./Navbar";
import ProjectCard from "./Cards/ProjectCard";

import { projects } from "../util";

const AllProjects = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <Layout>
      <Navbar hideMenu={true} />
      <div>
        <h2 className="font-generalSans text-2xl font-bold">All projects</h2>
        <div className="mt-7 flex flex-col gap-4 md:flex-row md:flex-wrap">
          {projects.map((project) => {
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
                key={project.key}
                tags={project.tags}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default AllProjects;
