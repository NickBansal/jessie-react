import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Cars } from "components/cars/cars";
import { Movies } from "components/movies/movies";
import { Products } from "components/products/products";
import { SiteLinks } from "components/site-links/site-links";
import { Users } from "components/users/users";

import { Header } from "./components/header/header";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SiteLinks />
        <Routes>
          <Route path="/products" Component={Products} />
        </Routes>
        <Routes>
          <Route path="/movies" Component={Movies} />
        </Routes>
        <Routes>
          <Route path="/users" Component={Users} />
        </Routes>
        <Routes>
          <Route path="cars" Component={Cars} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
