import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-12 w-full mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex items-center gap-2"
      >
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          className="material-symbols-outlined text-yellow-400"
        >
          radio_button_checked
        </motion.span>
        <Link to={"/"}>
          <h1 className="font-handlee text-gray-800 text-2xl font-bold">
            archan
          </h1>
        </Link>
      </motion.div>
      <div className="flex gap-2 font-inter text-lg text-gray-700">
        <Link to={"/#projects"}>
          <p className=" hover:text-gray-800 active:text-gray-900">Projects</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
