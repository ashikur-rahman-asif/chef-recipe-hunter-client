import React from "react";

const TopRecipe = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.freepik.com/free-vector/food-ingredients-recipe-ravioli-hand-drawn-vector-illustration_1284-42012.jpg?w=360"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Enjoy Recipe All over the World</h1>
          <p className="py-6">
          There’s cooking, and then there’s cooking with passion, creativity, and love. At Little Rae’s, we firmly believe that the energy you put into a recipe is just as important as the ingredients you use. And we’re not alone. Below is a collection of quotes about cooking from the heart that will make you look at food in a whole new light.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopRecipe;
