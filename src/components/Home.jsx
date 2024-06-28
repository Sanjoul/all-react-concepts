import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Popular from "./Popular";

const Home = () => {
  return (
    <div>
      <Banner />
      <Cards />
      <Popular title="Popular Fruits" />
      <Popular title="Popular Vegetables" />
    </div>
  );
};

export default Home;
