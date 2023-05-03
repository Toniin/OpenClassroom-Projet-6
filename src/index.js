import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./utils/styles/css/style.css"
import Layout from "./layout/Layout"
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Annonce from "./pages/Annonce";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "annonces/:indexAnnonce",
        element: <Annonce />,
      },
      {
        path: "about",
        element: <About />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
