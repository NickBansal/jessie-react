import React from "react";
import { Route,Routes } from "react-router-dom";

import { Products } from "components/products/products";
import { SiteLinks } from "components/site-links/site-links";

import { Header } from "./components/header/header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SiteLinks />
      <Routes>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
