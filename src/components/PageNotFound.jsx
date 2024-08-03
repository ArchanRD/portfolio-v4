import React from "react";
import Layout from "./Layout";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <Navbar />
      <div className="flex items-center justify-center flex-col py-40">
        <h2 className="font-handlee font-bold text-red-600 text-2xl sm:text-4xl">
          Oops!{" "}
        </h2>
        <h2 className="font-generalSans text-lg sm:text-xl font-medium text-center text-gray-800">
          404: Page Lost in the Digital Bermuda Triangle
        </h2>
        <div className="flex items-center gap-2 mt-4">
          <span className="material-symbols-outlined text-yellow-400">
            radio_button_checked
          </span>
          <Link to={"/"}>
            <h1 className="font-handlee text-gray-800 text-2xl font-bold">
              archan
            </h1>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
