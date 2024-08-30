import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Cars } from "components/cars/cars";
import { Movies } from "components/movies/movies";
import { Products } from "components/products/products";
import { SiteLinks } from "components/site-links/site-links";
import { Users } from "components/users/users";

import { Header } from "./components/header/header";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <div>
        <Header />
        <SiteLinks />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/users",
        element: <Users />
      },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/cars",
        element: <Cars />
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
