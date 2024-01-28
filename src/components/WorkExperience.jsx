import React from "react";
import WorkCard from "./Cards/WorkCard";

const WorkExperience = () => {
  return (
    <div className="mt-20">
      <div>
        <div>
          <h2 className="font-handlee bg-customPink font-bold text-2xl w-max">
            Work Experience
          </h2>
          <img
            src="/arrow.png"
            alt="arrow"
            width={50}
            height={50}
            className="-rotate-90 my-8"
          />
        </div>
        <WorkCard
          companyLogo="/workImages/MS-logo.png"
          companyName="Mission Sustainability"
          
          position="Software developer intern"
          shortDesc="Worked as full stack developer"
          startDate="May 2023"
          endDate="June 2023"
          key={1}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
