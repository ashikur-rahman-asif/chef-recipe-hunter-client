import React from "react";
import Header from "../Header/Header";
import Footer from "../../Footer/Footer";
import Chefs from "../Chefs/Chefs";

const Home = () => {
  return (
    <div>
      <Header />
        <Chefs/>
      <Footer />
    </div>
  );
};

export default Home;
