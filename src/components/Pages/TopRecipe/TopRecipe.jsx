import React from "react";

const TopRecipe = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.freepik.com/free-vector/food-ingredients-recipe-ravioli-hand-drawn-vector-illustration_1284-42012.jpg?w=360"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Enjoy Recipe All over the World</h1>
          <p className="py-6">
          With travel off limits, you may be experiencing some major wanderlust. And while you can't hop on a plane right now, you can make a delicious dinner inspired by different cuisines and cultures around the world. Here are 40 recipes to taste your way around the world without leaving the house.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopRecipe;
