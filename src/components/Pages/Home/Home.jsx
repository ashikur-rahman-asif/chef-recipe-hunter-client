import React from "react";
import Header from "../Header/Header";
import Footer from "../../Footer/Footer";
import Chefs from "../Chefs/Chefs";
import TopRecipe from "../TopRecipe/TopRecipe";

const Home = () => {
  return (
    <div>
      <Header />
        <Chefs/>
      <TopRecipe/>
    </div>
  );
};

export default Home;
