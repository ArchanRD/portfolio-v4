import React from "react";

const Technology = ({ name, bgColor, borderColor }) => {
  return (
    <p
      style={{ backgroundColor: `${bgColor}`, borderColor: `${borderColor}` }}
      className="text-xs rounded-xl border px-2 xl:text-base mobile-480:text-md"
    >
      {name}
    </p>
  );
};

export default Technology;
