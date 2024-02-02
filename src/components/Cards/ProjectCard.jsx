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
}) => {
  return (
    <div className="border-2 border-gray-900 p-4 rounded-lg md:w-[300px] xl:w-[350px]">
      <img
        src={image}
        alt="project image"
        style={{
          height: `${imageHeight}px`,
          width: `${imageWidth}px`,
        }}
        className="rounded-lg object-cover"
      />
      <div className="flex flex-wrap gap-4 items-center justify-between mt-4">
        <h3 className="font-handlee text-xl font-bold xl:text-2xl">{title}</h3>
        <Link to={buttonLink}>
          <button
            style={{
              backgroundColor: `${buttonBgColor}`,
              borderColor: `${buttonBorderColor}`,
            }}
            className="text-white font-inter text-sm font-medium border-2 py-2 px-2 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl"
          >
            {buttonText}
          </button>
        </Link>
      </div>
      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map((tag, index) => {
          return (
            <ProjectCardTag
              name={tag[0]}
              bgColor={tag[1]}
              borderColor={tag[2]}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
