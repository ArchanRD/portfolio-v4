import React from "react";
import ProjectCardTag from "../Tags/ProjectCardTag";
import { Link } from "react-router-dom";

const ProjectCard = ({
  image,
  imageWidth,
  imageHeight,
  title,
  buttonText,
  buttonBgColor,
  buttonBorderColor,
  tags,
  buttonLink,
  projectLink,
}) => {
  return (
    <div className="border-2 border-gray-900 p-4 rounded-lg md:w-[300px] xl:w-[350px]">
      <Link to={buttonLink}>
        <img
          src={image}
          alt="project image"
          style={{
            height: `${imageHeight}px`,
            width: `${imageWidth}px`,
          }}
          className="rounded-lg object-cover"
        />
      </Link>
      <div className="flex flex-wrap gap-4 items-center justify-between mt-4">
        <h3 className="font-handlee text-xl font-bold xl:text-2xl">{title}</h3>
        {projectLink !== null ? (
          <Link to={projectLink}>
            <button className="text-white bg-gray-800 hover:bg-gray-700 border-none font-inter text-sm font-medium py-2 px-4 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
              {buttonText}
            </button>
          </Link>
        ) : (
          <button disabled={true} className="text-white  bg-gray-500 cursor-not-allowed border-none font-inter text-sm font-medium py-2 px-4 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
            {buttonText}
          </button>
        )}
      </div>
      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map((tag, index) => {
          return (
            <a href={`/filter/${tag[0]}`} key={index}>
              <ProjectCardTag
                name={tag[0]}
                bgColor={tag[1]}
                borderColor={tag[2]}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
