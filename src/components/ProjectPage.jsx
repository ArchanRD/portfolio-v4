import React from "react";
import { useLocation } from "react-router-dom";
import Wigle from "./ProjectPages/Wigle";
import Layout from "./Layout";
import Navbar from "./Navbar";
import Ecommerce from "./ProjectPages/Ecommerce";
import PokdexAPI from "./ProjectPages/PokedexAPI";
import Zomato from "./ProjectPages/Zomato";
import Netflix from "./ProjectPages/Netflix";
import Quotes from "./ProjectPages/Quotes";
import Calculator from "./ProjectPages/Calculator";

const ProjectPage = () => {
  const location = useLocation();

  const url = location.pathname;
  const projectName = url.split("/")[2].toLowerCase();

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  if (projectName == "wigle") {
    return <Wigle />;
  } else if (projectName == "eccommerce") {
    return <Ecommerce />;
  } else if (projectName == "pokedex") {
    return <PokdexAPI />;
  } else if (projectName == "zomato") {
    return <Zomato />;
  } else if (projectName == "netflix") {
    return <Netflix />;
  } else if (projectName == "quotes") {
    return <Quotes />;
  } else if (projectName == "js-calculator") {
    return <Calculator />;
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
