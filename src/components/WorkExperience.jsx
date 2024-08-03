import React from "react";
import WorkCard from "./Cards/WorkCard";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <div className="mt-20">
      <div className="mobile-480:w-[400px] mobile-480:mx-auto md:x-auto md:mx-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="font-handlee bg-customPink font-bold text-2xl w-max xl:text-3xl"
          >
            Work Experience
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
