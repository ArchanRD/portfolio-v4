import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = ({ hideMenu }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <div className="flex justify-between py-12 w-full mx-auto mobile-480:w-[400px] mobile-480:mx-auto sm:w-3/4 md:w-auto md:mx-10 lg:mx-0 lg:w-auto lg:box-border">
      <motion.div
        initial={!hasAnimated ? { opacity: 0, y: -20 } : false}
        animate={!hasAnimated ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.7, ease: "easeInOut", repeat: 0 }}
        onAnimationComplete={() => setHasAnimated(true)}
        className="flex items-center gap-2"
      >
        <Link to={"/"}>
          <h1 className="font-handlee text-gray-800 text-2xl font-bold">
            archan
          </h1>
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
