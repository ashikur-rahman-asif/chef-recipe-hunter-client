import React from "react";
import { AiFillLike } from "react-icons/Ai";
import { useLoaderData } from "react-router-dom";
import RecipesDetails from "./RecipesDetails";

const Recipes = () => {
  const chef = useLoaderData();
  const recipes = chef.recipes;
  // console.log(chef);

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
            <p className="mt-1 mb-1 font-semibold">
              Experience: {chef?.yearsOfExperience} years
            </p>
            <p className="mt-1 mb-1 font-semibold">
              Total Recipe: {chef?.recipes.length}
            </p>
            <p className="mt-1 mb-1 font-semibold">Likes: {chef?.likes}</p>
          </div>
        </div>
          </div>
          <div className="">
              <h2 className='text-center font-bold text-5xl mt-4'>My {chef?.recipes.length} Recipes</h2>
              <div className="md:grid">
                  {
                      recipes.map(recipe => <RecipesDetails
                          key={recipe.id}
                          recipe={recipe}
                      ></RecipesDetails>)
                  }
              </div>
          </div>
    </div>
  );
};

export default Recipes;
