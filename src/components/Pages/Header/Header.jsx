import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage: `url("/src/assets/main.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Simply Recipes</h1>
          <p className="mb-5">
          No Fluff, Just Recipes
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
