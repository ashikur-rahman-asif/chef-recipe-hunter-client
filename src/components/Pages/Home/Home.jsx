import React from "react";
import Header from "../Header/Header";
import Footer from "../../Footer/Footer";
import Chefs from "../Chefs/Chefs";
import TopRecipe from "../TopRecipe/TopRecipe";
import SpecialChef from "../SpecialChef/SpecialChef";

const Home = () => {
  return (
    <div>
      <Header />
        <Chefs/>
      <TopRecipe />
      <SpecialChef/>
    </div>
  );
};

export default Home;
