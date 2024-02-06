import React from "react";
import ProjectCard from "./Cards/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mobile-480:w-[400px] mobile-480:mx-auto md:w-auto md:mx-10">
      <h2 className="mt-20 font-handlee font-bold text-2xl bg-customPink inline-block xl:text-3xl">
        Featured Projects
      </h2>
      <img
        src="/arrow.png"
        alt="arrow"
        width={50}
        height={50}
        className="-rotate-90 my-8"
      />
      <p className="font-inter text-lg text-gray-800 xl:text-xl">
        Worked on several projects in technologies like React.js, Next.js,
        Laravel, PHP.
      </p>
      <Link to="/allprojects">
        <button className="mt-5 bg-matteYellow font-handlee font-bold text-lg py-1 px-2 w-max mr-auto hidden lg:block xl:text-xl">
          Show all projects
        </button>
      </Link>

      <div className="mt-7 flex flex-col gap-4 md:flex-row md:flex-wrap">
        {/* Card 1 */}
        <ProjectCard
          image="/projectImages/wigle.jpg"
          imageWidth="380"
          imageHeight="200"
          title="Cloth renting app"
          buttonText="View project"
          buttonBgColor="#F072CD"
          buttonBorderColor="#DB4A90"
          buttonLink="/project/wigle"
          key={1}
          tags={[
            ["Laravel", "#FFB5343c", "#FF004D"],
            ["PHP", "#7BD3EA59", "#0B60B0"],
            ["Javascript", "#E26EE53c", "#7E30E1"],
            ["Digital Ocean", "#80B3FF3c", "#49108B"],
          ]}
        />
        {/* Card 2 */}
        <ProjectCard
          image="/projectImages/eccomerce-preview.png"
          imageWidth="380"
          imageHeight="200"
          title="Ecommerce & blog"
          buttonText="View project"
          buttonBgColor="#5AB5E8"
          buttonBorderColor="#3192c9"
          buttonLink="/project/eccommerce"
          key={2}
          tags={[
            ["PHP", "#FFB5343c", "#FF004D"],
            ["Javascript", "#E26EE53c", "#7E30E1"],
          ]}
        />
        {/* Card 3 */}
        <ProjectCard
          image="/projectImages/pokedex.png"
          imageWidth="380"
          imageHeight="200"
          title="Pokedex API"
          buttonText="View project"
          buttonBgColor="#6962AD"
          buttonBorderColor="#6C22A6"
          buttonLink="/project/pokedex"
          key={3}
          tags={[
            ["HTML", "#9ADE7B59", "#508D69"],
            ["CSS", "#FFB5343c", "#FF004D"],
            ["API", "#6C22A63c", "#6962AD"],
          ]}
        />
      </div>
      <Link to="/allprojects">
        <button className="mt-5 lg:hidden bg-matteYellow font-handlee font-bold text-lg py-1 px-2 w-max ml-auto">
          Show all projects
        </button>
      </Link>
    </div>
  );
};

export default Projects;
