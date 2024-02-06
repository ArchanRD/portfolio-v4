import React from "react";
import Navbar from "../Navbar";
import Layout from "../Layout";
import Technology from "../Tags/Technology";

const Ecommerce = () => {
  return (
    <Layout>
      <Navbar hideMenu={true} />
      <div className="lg:max-w-3xl mx-auto">
        <img
          src="/projectImages/eccomerce-preview.png"
          className="rounded-xl h-auto lg:max-w-3xl"
        />
        <div className="">
          <h2 className="font-inter text-lg mobile-480:text-xl lg:text-2xl xl:text-3xl font-semibold mt-5">
            Royal Terrace - An ecommerce and blog site
          </h2>
          <p className="mt-4 font-inter text-sm mobile-480:text-md lg:text-base xl:text-lg">
            <strong>Royal terrace</strong> is an basic ecommerce site. The
            website not only boasts a robust e-commerce infrastructure but also
            features a sophisticated blogging section, elevating user engagement
            to new heights. Through a seamless signup process, users gain the
            ability to craft and share their own compelling blog posts,
            enriching the communal blog section with diverse perspectives
          </p>
          <p className="mt-4 font-inter text-sm mobile-480:text-md lg:text-base xl:text-lg">
            Royal Terrace stands on the robust foundation of{" "}
            <span className="bg-green-100 rounded">
              PHP, MySQL, JavaScript, HTML, and CSS.
            </span>{" "}
            These technologies collectively contribute to a seamless and
            responsive user experience. The webiste was made as first
            freelancing project.
          </p>

          <div className="font-inter mt-4 pb-4">
            <h2 className="text-lg font-semibold mobile-480:text-xl lg:text-2xl">
              Technologies used:{" "}
            </h2>
            <div className="flex gap-2 flex-wrap mt-2">
              <Technology
                name="PHP"
                bgColor="#7BD3EA59"
                borderColor="#0B60B0"
              />
              <Technology
                name="MySQL"
                bgColor="#E26EE53c"
                borderColor="#7E30E1"
              />{" "}
              <Technology
                name="Bootstrap"
                bgColor="#FFB5343c"
                borderColor="#FF004D"
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
            <a className="mt-4 inline-block" href="http://royalterrace.epizy.com/" target="_blank">
              <button className="bg-gray-800 text-white font-inter font-semibold py-2 px-6 border-2 border-transparent focus:ring focus:ring-offset-2 focus:ring-black">Take a tour!</button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ecommerce;
