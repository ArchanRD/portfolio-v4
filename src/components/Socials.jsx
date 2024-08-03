import React from "react";
import Social from "./Cards/Social";
import { motion } from "framer-motion";

const Socials = () => {
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
            Socials
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

        <div className="flex flex-wrap gap-2">
          <Social
            name="Github"
            href="https://github.com/ArchanRD"
            logoHref="/sociaIImages/github.png"
            profilePageHref="/ProfilePages/githubProfileSS.png"
          />
          <Social
            name="LinkedIn"
            href="https://www.linkedin.com/in/archan-dhrangadharia-ba67a0227/"
            logoHref="/sociaIImages/linkedin.png"
            profilePageHref="/ProfilePages/linkedinProfileSS.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Socials;
