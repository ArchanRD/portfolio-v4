import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { projects } from "../util";
import ProjectCard from "./Cards/ProjectCard";
import ProjectCardTag from "./Tags/ProjectCardTag";
import Layout from "./Layout";
import Navbar from "./Navbar";

const FilterProjects = () => {
  const location = useLocation();
  const [filteredProjects, setfilteredProjects] = useState([]);
  const [tag, settag] = useState([]);

  const url = location.pathname;
  let tagName = url.split("/")[2].toLowerCase();

  if (tagName.includes("%20")) {
    tagName = tagName.replace(/%20/g, " ");
  }

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.tags.some((tag) => tag[0].toLowerCase().includes(tagName))
    );
    setfilteredProjects(filtered);
  }, []);

  if (filteredProjects.length > 0) {
    return (
      <Layout>
        <Navbar />
        <h2 className="w-max flex items-center gap-2 font-inter text-xl font-medium text-gray-800">
          Projects with tag{" "}
          <ProjectCardTag
            bgColor="#1c1c1c"
            borderColor="#000000"
            name={tagName}
            color="#fff"
          />
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {filteredProjects.map((project) => {
            return (
              <div key={project.key}>
                <ProjectCard
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
              </div>
            );
          })}
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Navbar />
        <h2 className="w-max flex items-center gap-2">
          No projects found with tag
          <ProjectCardTag
            bgColor="#1c1c1c"
            borderColor="#000000"
            name={tagName}
            color="#fff"
          />
        </h2>
      </Layout>
    );
  }
};

export default FilterProjects;
