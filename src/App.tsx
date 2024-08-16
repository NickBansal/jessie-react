import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { SiteLinks } from "components/site-links/site-links";

import { Header } from "./components/header/header";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SiteLinks />
      </div>
    </Router>
  );
}

export default App;
