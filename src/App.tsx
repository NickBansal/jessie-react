import React from "react";

import { Movies } from "components/movies/movies";
import { Products } from "components/products/products";

import { Header } from "./components/header/header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Movies />
    </div>
  );
}

export default App;
