import React, { useState } from "react";
import Skill from "./Cards/Skill";
import { motion } from "framer-motion";

const Skills = () => {
  const [web, setweb] = useState(true);
  const [aiml, setaiml] = useState(false);
  const [osAndUI, setOsAndUI] = useState(false);

  // Base tailwind classes for buttons
  const baseClass =
    "font-generalSans font-semibold bg-white shadow-md w-max py-2 px-6 rounded-lg cursor-pointer hover:bg-slate-50 active:text-white  active:bg-blue-600 transition ease-in-out select-none";

  const handleActive = (event) => {
    const button = event.target.innerHTML.toLowerCase();

    if (button === "web") {
      setweb(true);
      setaiml(false);
      setOsAndUI(false);
    } else if (button === "ai/ml") {
      setweb(false);
      setaiml(true);
      setOsAndUI(false);
    } else {
      setweb(false);
      setaiml(false);
      setOsAndUI(true);
    }
  };

  // Skills
  const webSkills = [
    "React.js",
    "Next.js",
    "Tailwind",
    "Framer motion",
    "Sanity",
    "Laravel",
    "MySQL",
    "MongoDB",
    "Docker",
  ];

  const aimlSKills = [
    "Python",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Scikit-learn",
  ];
  const OSandUI = ["Ubuntu", "Figma", "Canva", "Git & Version control"];

  return (
    <div className="mt-20">
      <div className="mobile-480:w-[400px] mobile-480:mx-auto md:x-auto md:mx-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="font-handlee bg-customPink font-bold text-2xl w-max xl:text-3xl"
          >
            Skills
          </motion.h2>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            src="/arrow.png"
            alt="arrow"
            width={50}
            height={50}
            className="-rotate-90 my-8"
          />
        </div>

        {/* Tabs  */}
        <div className="flex flex-wrap gap-2">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "anticipate" }}
            viewport={{ once: true }}
            className={
              web
                ? `!bg-blue-600 text-white hover:!bg-blue-600  ${baseClass}`
                : `bg-white  ${baseClass}`
            }
            onClick={(event) => handleActive(event)}
          >
            Web
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className={
              aiml
                ? `!bg-blue-600 text-white hover:!bg-blue-600 ${baseClass}`
                : `bg-white ${baseClass}`
            }
            onClick={(event) => handleActive(event)}
          >
            AI/ML
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className={
              osAndUI
                ? `!bg-blue-600 text-white hover:!bg-blue-600 ${baseClass}`
                : `bg-white ${baseClass}`
            }
            onClick={(event) => handleActive(event)}
          >
            OS & UI
          </motion.h2>
        </div>
        {/* Skill Cards  */}
        {web && <Skill name={webSkills} />}
        {aiml && <Skill name={aimlSKills} />}
        {osAndUI && <Skill name={OSandUI} />}
      </div>
    </div>
  );
};

export default Skills;
