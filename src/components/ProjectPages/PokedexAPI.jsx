import React from "react";
import Navbar from "../Navbar";
import Layout from "../Layout";
import Technology from "../Tags/Technology";

const PokdexAPI = () => {
  return (
    <Layout>
      <Navbar hideMenu={true} />
      <div className="lg:max-w-3xl mx-auto">
        <img
          src="/projectImages/pokedex.png"
          className="rounded-xl h-auto lg:max-w-3xl"
        />
        <div className="">
          <h2 className="font-generalSans text-lg mobile-480:text-xl lg:text-2xl xl:text-3xl font-semibold mt-5">
            Pokedex
          </h2>
          <p className="mt-4 font-generalSans text-sm mobile-480:text-md lg:text-base xl:text-lg">
            <strong>Pokedex</strong> is a mobile-friendly website that
            serves as a comprehensive repository for Pokemon information,
            leveraging one of the Pokedex APIs. The site is designed to be
            responsive across all screen sizes, ensuring a seamless user
            experience. Its development primarily focuses on honing JavaScript
            skills, particularly in making API calls using the fetch method.
            Currently hosted on Vercel, Pokedex provides users with detailed
            information about various Pokemon species."
          </p>

          <div className="font-generalSans mt-4 pb-4">
            <h2 className="text-lg font-semibold mobile-480:text-xl lg:text-2xl">
              Technologies used:{" "}
            </h2>
            <div className="flex gap-2 flex-wrap mt-2">
              <Technology
                name="HTML"
                bgColor="#FFB5343c"
                borderColor="#FF004D"
              />
              <Technology
                name="CSS"
                bgColor="#7BD3EA59"
                borderColor="#0B60B0"
              />
              <Technology
                name="Javascript"
                bgColor="#E26EE53c"
                borderColor="#7E30E1"
              />
              <Technology
                name="PokeAPI"
                bgColor="#80B3FF3c"
                borderColor="#49108B"
              />
            </div>
            <a className="mt-4 inline-block" href="https://pokedex-vercel-ttz7jywpb-archanrd.vercel.app/" target="_blank">
              <button className="bg-gray-800 text-white font-generalSans font-semibold py-2 px-6 border-2 border-transparent focus:ring focus:ring-offset-2 focus:ring-black">Take a tour!</button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PokdexAPI;
