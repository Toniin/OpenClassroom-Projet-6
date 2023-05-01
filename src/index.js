import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/css/style.css"
import Layout from "./layout/Layout"
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Annonces from "./pages/Annonces";
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
        path: "annonces",
        element: <Annonces />,
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
