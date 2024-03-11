import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = ({ hideMenu }) => {
  return (
    <div className="flex justify-between py-12 w-full mx-auto mobile-480:w-[400px] mobile-480:mx-auto sm:w-3/4 md:w-auto md:mx-10 lg:mx-0 lg:w-auto lg:box-border">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex items-center gap-2"
      >
        <Link to={"/"}>
          <h1 className="font-handlee text-gray-800 text-2xl font-bold">
            archan
          </h1>
        </Link>
      </motion.div>
      {hideMenu == true ? (
        <div></div>
      ) : (
        <div className="flex gap-2 font-inter text-lg text-gray-700">
          <Link to={"/allprojects"}>
            <p className=" hover:text-gray-800 active:text-gray-900">
              Projects
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
