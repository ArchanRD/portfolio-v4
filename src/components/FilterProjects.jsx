import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { projects } from "../util";
import ProjectCard from "./Cards/ProjectCard";
import ProjectCardTag from "./Tags/ProjectCardTag";

const FilterProjects = () => {
  const location = useLocation();
  const [filteredProjects, setfilteredProjects] = useState([]);
  const [tag, settag] = useState([]);

  const url = location.pathname;
  const tagName = url.split("/")[2];

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.tags.some((tag) => tag[0].includes(tagName) && settag(tag))
    );
    setfilteredProjects(filtered);
  }, []);

  return (
    <div>
      <h2 className="w-max flex items-center gap-2">
        Projects with tag{" "}
        <ProjectCardTag bgColor={tag[1]} borderColor={tag[2]} name={tag[0]} />
      </h2>
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
  );
};

export default FilterProjects;
