import React, { useState } from "react";
import Skill from "./Cards/Skill";

const Skills = () => {
  const [frontendActive, setfrontend] = useState(true);
  const [backendActive, setbackend] = useState(false);
  const [osAndUI, setOsAndUI] = useState(false);

  // Base tailwind classes for buttons
  const baseClass =
    "font-inter font-semibold bg-white shadow-md w-max py-2 px-6 rounded-lg cursor-pointer hover:bg-slate-50 active:text-white  active:bg-blue-600 transition ease-in-out select-none";

  const handleActive = (event) => {
    const button = event.target.innerHTML.toLowerCase();

    if (button === "frontend") {
      setfrontend(true);
      setbackend(false);
      setOsAndUI(false);
    } else if (button === "backend") {
      setfrontend(false);
      setbackend(true);
      setOsAndUI(false);
    } else {
      setfrontend(false);
      setbackend(false);
      setOsAndUI(true);
    }
  };

  // Skills
  const frontendSkills = [
    " Javascript",
    " React.js",
    "Next.js",
    "Tailwind",
    "Bootstrap",
    "Framer motion",
    "Sanity",
    "Strapi",
  ];

  const backendSkills = ["Laravel", "PHP", "MySQL", "MongoDB", "Mongoose", "Docker"];
  const OSandUI = ["Ubuntu", "Figma", "Canva"];

  return (
    <div className="mt-20">
      <div className="mobile-480:w-[400px] mobile-480:mx-auto md:x-auto md:mx-10">
        <div>
          <h2 className="font-handlee bg-customPink font-bold text-2xl w-max xl:text-3xl">
            Skills
          </h2>
          <img
            src="/arrow.png"
            alt="arrow"
            width={50}
            height={50}
            className="-rotate-90 my-8"
          />
        </div>
        {/* Tabs  */}
        <div className="flex flex-wrap gap-2">
          <h2
            className={
              frontendActive
                ? `!bg-blue-600 text-white hover:!bg-blue-600  ${baseClass}`
                : `bg-white  ${baseClass}`
            }
            onClick={(event) => handleActive(event)}
          >
            Frontend
          </h2>
          <h2
            className={
              backendActive
                ? `!bg-blue-600 text-white hover:!bg-blue-600 ${baseClass}`
                : `bg-white ${baseClass}`
            }
            onClick={(event) => handleActive(event)}
          >
            Backend
          </h2>
          <h2
            className={
              osAndUI
                ? `!bg-blue-600 text-white hover:!bg-blue-600 ${baseClass}`
                : `bg-white ${baseClass}`
            }
            onClick={(event) => handleActive(event)}
          >
            OS & UI
          </h2>
        </div>
        {/* Skill Cards  */}
        {frontendActive && <Skill name={frontendSkills} />}
        {backendActive && <Skill name={backendSkills} />}
        {osAndUI && <Skill name={OSandUI} />}
      </div>
    </div>
  );
};

export default Skills;
