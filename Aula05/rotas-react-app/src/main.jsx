import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contato from "../pages/Contato.jsx";
import Home from "../pages/Home.jsx";
import Comentarios from "../pages/Comentarios.jsx";
import Pessoas from "../pages/Pessoas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contatos",
    element: <Contato />,
  },
  {
    path: "/comentarios",
    element: <Comentarios />,
  },
  {
    path: "/pessoas/:id",
    element: <Pessoas />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
