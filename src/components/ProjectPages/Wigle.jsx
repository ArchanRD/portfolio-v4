import React from "react";
import Navbar from "../Navbar";
import Layout from "../Layout";
import Technology from "../Tags/Technology";

const Wigle = () => {
  return (
    <Layout>
      <Navbar hideMenu={true} />
      <div className="lg:max-w-3xl mx-auto">
        <img
          src="/projectImages/wigle.jpg"
          className="rounded-xl h-auto lg:max-w-3xl"
        />
        <div className="">
          <h2 className="font-generalSans text-lg mobile-480:text-xl lg:text-2xl xl:text-3xl font-semibold mt-5">
            Wigle - Cloth renting website
          </h2>
          <p className="mt-4 font-generalSans text-sm mobile-480:text-md lg:text-base xl:text-lg">
            <strong>Wigle</strong> is a sophisticated cloth renting website
            crafted as a culmination of my college final year project during my
            Diploma studies in 2023. This innovative platform enables users to
            effortlessly rent clothes online. The inspiration behind Wigle
            stemmed from the concept of Blinkit.
          </p>
          <p className="mt-4 font-generalSans text-sm mobile-480:text-md lg:text-base xl:text-lg">
            Wigle stands on the robust foundation of{" "}
            <span className="bg-green-100 rounded">
              Laravel, PHP, MySQL, JavaScript, HTML, and CSS.
            </span>{" "}
            These technologies collectively contribute to a seamless and
            responsive user experience. The website's architecture is carefully
            designed to provide a user-friendly generalSansface, efficient cloth
            rental processes.
          </p>

          <div className="font-generalSans mt-4 pb-4">
            <h2 className="text-lg font-semibold mobile-480:text-xl lg:text-2xl">
              Technologies used:{" "}
            </h2>
            <div className="flex gap-2 flex-wrap mt-2">
              <Technology
                name="Laravel"
                bgColor="#FFB5343c"
                borderColor="#FF004D"
              />
              <Technology
                name="Php"
                bgColor="#7BD3EA59"
                borderColor="#0B60B0"
              />
              <Technology
                name="Mysql"
                bgColor="#E26EE53c"
                borderColor="#7E30E1"
              />
              <Technology
                name="Digital Ocean"
                bgColor="#80B3FF3c"
                borderColor="#49108B"
              />
              <Technology
                name="HTML5"
                bgColor="#E26EE53c"
                borderColor="#7E30E1"
              />
              <Technology
                name="CSS3"
                bgColor="#7BD3EA59"
                borderColor="#0B60B0"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wigle;
