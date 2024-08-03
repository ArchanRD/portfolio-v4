import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay:0.4, ease: "easeInOut" }}
      viewport={{once: true}}
      className="p-2 bg-white rounded-md shadow-md xl:rounded-xl xl:p-4 border border-white hover:border-gray-200 transition ease-in-out active:bg-gray-50 active:scale-95 duration-200"
    >
      <Link
        target="_blank"
        to="https://www.linkedin.com/in/archan-dhrangadharia-ba67a0227/"
        className="flex flex-wrap items-center gap-1"
      >
        <img
          src={companyLogo}
          alt="company logo"
          width={logoWidth}
          height={logoWidth}
          className="xl:w-20"
        />
        <div>
          <h2 className="font-generalSans font-semibold text-md font-gray-800 xl:text-2xl">
            {companyName}
          </h2>
          <p className="font-generalSans font-medium text-gray-800 text-sm xl:text-lg">
            {position}
          </p>
          <p className="font-generalSans text-xs text-gray-700 xl:text-sm">
            {startDate} - {endDate}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default WorkCard;
