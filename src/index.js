import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import AllProjects from "./components/AllProjects";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/allprojects",
    element: <AllProjects />
  },
  {
    path: "/project/:project",
    element: <ProjectPage />,
  },
  {
    path: "*",
    element: <div>Error</div>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
