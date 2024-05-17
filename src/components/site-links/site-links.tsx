import React from "react";
import { Link } from "react-router-dom";

import "./site-links.css";

export const SiteLinks = () => {
  return (
    <div className="site-links">
      <Link to={"/products"}>PRODUCTS</Link>
      <Link to={"/users"}>USERS</Link>
      <Link to={"/movies"}>MOVIES</Link>
      <Link to={"/cars"}>CARS</Link>
    </div>
  );
};
