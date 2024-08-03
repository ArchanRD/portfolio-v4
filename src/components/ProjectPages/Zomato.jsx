import React from "react";
import Navbar from "../Navbar";
import Layout from "../Layout";
import Technology from "../Tags/Technology";

const Zomato = () => {
  return (
    <Layout>
      <Navbar hideMenu={true} />
      <div className="lg:max-w-3xl mx-auto">
        <img
          src="/projectImages/eccomerce-preview.png"
          className="rounded-xl h-auto lg:max-w-3xl"
        />
        <div className="">
          <h2 className="font-generalSans text-lg mobile-480:text-xl lg:text-2xl xl:text-3xl font-semibold mt-5">
            Zomato clone
          </h2>
          <p className="mt-4 font-generalSans text-sm mobile-480:text-md lg:text-base xl:text-lg">
            A responsive, mobile-friendly website inspired by the popular
            platform, <strong>Zomato</strong>. This project was meticulously
            crafted to hone my CSS skills, showcasing my proficiency in creating
            stunning and user-friendly web generalSansfaces without the need for
            JavaScript.
          </p>
          <p className="mt-4 font-generalSans text-sm mobile-480:text-md lg:text-base xl:text-lg">
            Hosted on GitHub Pages, whether you're viewing it on a desktop,
            tablet, or smartphone, you can rest assured that this website
            delivers a consistent and immersive experience every time
          </p>

          <div className="font-generalSans mt-4 pb-4">
            <h2 className="text-lg font-semibold mobile-480:text-xl lg:text-2xl">
              Technologies used:{" "}
            </h2>
            <div className="flex gap-2 flex-wrap mt-2">
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
            <a
              className="mt-4 inline-block"
              href="https://archanrd.github.io/Zomato-clone/"
              target="_blank"
            >
              <button className="bg-gray-800 text-white font-generalSans font-semibold py-2 px-6 border-2 border-transparent focus:ring focus:ring-offset-2 focus:ring-black">
                Take a tour!
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Zomato;
