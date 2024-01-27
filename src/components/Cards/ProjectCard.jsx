import React from "react";
import ProjectCardTag from "../Tags/ProjectCardTag";

const ProjectCard = ({
  image,
  imageWidth,
  imageHeight,
  title,
  buttonText,
  buttonBgColor,
  buttonBorderColor,
  tags,
  tagBorderColor,
  tagBgColor
}) => {
  return (
    <div className="border-2 border-gray-900 p-4 rounded-lg">
      <img
        src={image}
        alt="project image"
        style={{
          height: `${imageHeight}px`,
          width: `${imageWidth}px`,
        }}
        className="rounded-lg object-cover"
      />
      <div className="flex items-center justify-between mt-4">
        <h3 className="font-handlee text-2xl font-bold w-3/5">{title}</h3>
        <button
          style={{
            backgroundColor: `${buttonBgColor}`,
            borderColor: `${buttonBorderColor}`,
          }}
          className="text-white font-inter text-sm font-medium border-2 py-2 px-3 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl"
        >
          {buttonText}
        </button>
      </div>
      <div className="mt-4 flex gap-2">
        {tags.map((tag, index)=>{
            {console.log(tag)}
            return <ProjectCardTag name={tag[0]} bgColor={tag[1]} borderColor={tag[2]} key={index} />
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
