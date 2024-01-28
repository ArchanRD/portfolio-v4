import React from "react";

const WorkCard = ({
  companyLogo,
  logoWidth,
  companyName,
  position,
  startDate,
  endDate,
  shortDesc,
}) => {
  return (
    <div className="p-2 bg-white rounded-md shadow-md xl:rounded-xl xl:p-4">
      <div className="flex flex-wrap items-center gap-1">
        <img
          src={companyLogo}
          alt="company logo"
          width={logoWidth}
          height={logoWidth}
          className="xl:w-20"
        />
        <div>
          <h2 className="font-inter font-semibold text-md font-gray-800 xl:text-2xl">
            {companyName}
          </h2>
          <p className="font-inter font-medium text-gray-800 text-sm xl:text-lg">
            {position}
          </p>
          <p className="font-inter text-xs text-gray-700 xl:text-sm">
            {startDate} - {endDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
