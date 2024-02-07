import React from "react";
import Navbar from "../Navbar";
import Layout from "../Layout";
import Technology from "../Tags/Technology";

const Quotes = () => {
  return (
    <Layout>
      <Navbar hideMenu={true} />
      <div className="lg:max-w-3xl mx-auto">
        <img
          src="/projectImages/quotes-app.png"
          className="rounded-xl h-auto lg:max-w-3xl"
        />
        <div className="">
          <h2 className="font-inter text-lg mobile-480:text-xl lg:text-2xl xl:text-3xl font-semibold mt-5">
            Quotes generating app
          </h2>
          <p className="mt-4 font-inter text-sm mobile-480:text-md lg:text-base xl:text-lg">
            A dynamic website that generates random quotes with a simple button
            click. Utilizing a random selection method, quotes are fetched from
            a variety of sources through an API call to one of the renowned '
            <strong>quotes APIs</strong>'.
          </p>
          <p className="mt-4 font-inter text-sm mobile-480:text-md lg:text-base xl:text-lg">
            This website also provides a curated list of authors. By clicking on
            an author's name, users can explore quotes specifically attributed
            to them. The fetching of quotes and authors is seamlessly handled
            through the implementation of the 'fetch' method, ensuring efficient
            API calls and smooth user interactions.
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
                bgColor="#E26EE53c"
                borderColor="#7E30E1"
              />
              <Technology
                name="API"
                bgColor="#80B3FF3c"
                borderColor="#49108B"
              />
            </div>
            {/* <a
              className="mt-4 inline-block"
              href=""
              target="_blank"
            >
              <button className="bg-gray-800 text-white font-inter font-semibold py-2 px-6 border-2 border-transparent focus:ring focus:ring-offset-2 focus:ring-black">
                Take a tour!
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quotes;
