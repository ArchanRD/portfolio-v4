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
    <div className="pb-2">
      <div className="flex flex-wrap items-center gap-1">
        <img
          src={companyLogo}
          alt="company logo"
          width={logoWidth}
          height={logoWidth}
          className="bg-white rounded-md shadow-md"
        />
        <div>
          <h2 className="font-inter font-semibold text-md font-gray-800">
            {companyName}
          </h2>
          <p className="font-inter font-medium text-gray-800 text-sm">{position}</p>
          <p className="font-inter text-xs text-gray-700">{startDate} - {endDate}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
