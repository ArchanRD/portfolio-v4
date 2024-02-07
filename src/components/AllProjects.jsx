import React from "react";
import Layout from "./Layout";
import Navbar from "./Navbar";
import ProjectCard from "./Cards/ProjectCard";

const AllProjects = () => {
  return (
    <Layout>
      <Navbar hideMenu={true} />
      <div>
        <h2 className="font-inter text-2xl font-bold">All projects</h2>
        <div className="mt-7 flex flex-col gap-4 md:flex-row md:flex-wrap">
          {/* Card 1 */}
          <ProjectCard
            image="/projectImages/wigle.jpg"
            imageWidth="380"
            imageHeight="200"
            title="Cloth renting app"
            buttonText="View project"
            buttonBgColor="#222831"
            buttonBorderColor="#FFFFFF"
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
            buttonBgColor="#186F65"
            buttonBorderColor="#597E52"
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
          {/* Card 4 */}
          <ProjectCard
            image="/projectImages/zomato-preview.png"
            imageWidth="380"
            imageHeight="200"
            title="Zomato clone"
            buttonText="View project"
            buttonBgColor="#BF3131"
            buttonBorderColor="#FF8080"
            buttonLink="/project/zomato"
            key={4}
            tags={[
              ["HTML", "#9ADE7B59", "#508D69"],
              ["CSS", "#FFB5343c", "#FF004D"],
            ]}
          />
          {/* Card 5 */}
          <ProjectCard
            image="/projectImages/netflix.preview.png"
            imageWidth="380"
            imageHeight="200"
            title="Netflix clone"
            buttonText="View project"
            buttonBgColor="#FF6969"
            buttonBorderColor="#C70039"
            buttonLink="/project/netflix"
            key={5}
            tags={[
              ["HTML", "#9ADE7B59", "#508D69"],
              ["CSS", "#FFB5343c", "#FF004D"],
            ]}
          />
          {/* Card 6 */}
          <ProjectCard
            image="/projectImages/quotes-app.png"
            imageWidth="380"
            imageHeight="200"
            title="Quotes app"
            buttonText="View project"
            buttonBgColor="#9F70FD"
            buttonBorderColor="#7F27FF"
            buttonLink="/project/quotes"
            key={5}
            tags={[
              ["HTML", "#9ADE7B59", "#508D69"],
              ["CSS", "#FFB5343c", "#FF004D"],
              ["Javascript", "#6C22A63c", "#6962AD"],
              ["API", "#80B3FF3c", "#49108B"],
            ]}
          />
          {/* Card 6 */}
          <ProjectCard
            image="/projectImages/js-calculator.png"
            imageWidth="380"
            imageHeight="200"
            title="Quotes app"
            buttonText="View project"
            buttonBgColor="#576CBC"
            buttonBorderColor="#0B2447"
            buttonLink="/project/js-calculator"
            key={5}
            tags={[
              ["HTML", "#9ADE7B59", "#508D69"],
              ["CSS", "#FFB5343c", "#FF004D"],
              ["Javascript", "#6C22A63c", "#6962AD"],
              ["API", "#80B3FF3c", "#49108B"],
            ]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AllProjects;
