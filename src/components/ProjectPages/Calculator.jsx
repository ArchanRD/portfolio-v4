import React from "react";
import Navbar from "../Navbar";
import Layout from "../Layout";
import Technology from "../Tags/Technology";

const Calculator = () => {
  return (
    <Layout>
      <Navbar hideMenu={true} />
      <div className="lg:max-w-3xl mx-auto">
        <img
          src="/projectImages/js-calculator.png"
          className="rounded-xl h-auto lg:max-w-3xl"
        />
        <div className="">
          <h2 className="font-inter text-lg mobile-480:text-xl lg:text-2xl xl:text-3xl font-semibold mt-5">
            Calculator
          </h2>
          <p className="mt-4 font-inter text-sm mobile-480:text-md lg:text-base xl:text-lg">
            A basic calculator made using javascript. It can perform basic arithmatic calculations.
          </p>

          <div className="font-inter mt-4 pb-4">
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
              <Technology
                name="Javascript"
                bgColor="#80B3FF3c"
                borderColor="#49108B"
              />
            </div>
            <a
              className="mt-4 inline-block"
              href="https://archanrd.github.io/Javascript-Calculator/"
              target="_blank"
            >
              <button className="bg-gray-800 text-white font-inter font-semibold py-2 px-6 border-2 border-transparent focus:ring focus:ring-offset-2 focus:ring-black">
                Take a tour!
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calculator;
