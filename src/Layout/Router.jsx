import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Product from "../Component/Product";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "products",
        element: <Product></Product>
      },
    ],
  },
]);
