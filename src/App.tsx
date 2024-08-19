import React from "react";
import { Route, Routes } from "react-router-dom";

import { Products } from "components/products/products";
import { SiteLinks } from "components/site-links/site-links";

import { Header } from "./components/header/header";

import "./App.css";
import { Users } from "components/users/users";
import { Movies } from "components/movies/movies";
import { Cars } from "components/cars/cars";

function App() {
  return (
    <div className="App">
      <Header />
      <SiteLinks />
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/cars" element={<Cars />}></Route>
      </Routes>
    </div>
  );
}

export default App;
