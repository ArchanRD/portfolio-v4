import React from "react";
import { useLocation } from "react-router-dom";
import Wigle from "./ProjectPages/Wigle";
import Layout from "./Layout";
import Navbar from "./Navbar";
import Ecommerce from "./ProjectPages/Ecommerce";

const ProjectPage = () => {
  const location = useLocation();

  const url = location.pathname;
  const projectName = url.split("/")[2].toLowerCase();

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  if (projectName == "wigle") {
    return <Wigle />;
  } else if (projectName == "eccommerce") {
    return <Ecommerce />;
  } else {
    return (
      <Layout>
        <Navbar />
        Project not found
      </Layout>
    );
  }
};

export default ProjectPage;
