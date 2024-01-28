import React from "react";

const ProjectCardTag = ({ name, bgColor, borderColor }) => {
    
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        borderColor: `${borderColor}`,
        color: `${borderColor}`
      }}
      className="font-inter text-xs rounded-xl border px-2 xl:text-md"
    >
      {name}
    </div>
  );
};

export default ProjectCardTag;
