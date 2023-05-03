import React from "react";
import { AiFillLike } from "react-icons/Ai";
import { useLoaderData } from "react-router-dom";

const Recipes = () => {
  const chef = useLoaderData();
  const chefRecipes = chef.recipes;
  console.log(chef);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img
              src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg"
              className="max-w-sm rounded-3xl shadow-2xl"
            />
            <h1 className="text-4xl font-bold mt-3">{chef?.chefName}</h1>
            <p className="mt-1 mb-1 font-semibold">Biography: {chef?.bio}</p>
            <p className="mt-1 mb-1 font-semibold">Experience: {chef?.yearsOfExperience} years</p>
                      <p className="mt-1 mb-1 font-semibold">Total Recipe: {chef?.recipes.length} </p>
                      <p className="mt-1 mb-1 font-semibold">Likes: {chef?.likes}</p>
            <button className="btn btn-primary mt-1 mb-1">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
