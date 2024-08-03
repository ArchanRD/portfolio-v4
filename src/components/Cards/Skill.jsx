import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name }) => {
  return (
    <ul
      style={{ listStyleType: "disc" }}
      className=" grid grid-cols-2 mt-5 border-t-2 broder-black py-2"
    >
      {name.map((langName, index) => {
        return (
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay:0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            key={index}
            className="text-black font-generalSans font-medium w-max mb-2 sm:text-lg xl:text-xl"
          >
            {langName}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Skill;
