import React from "react";
import { AiFillLike } from 'react-icons/Ai';
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom";
const ChefCard = ({chef}) => {
    const {id,image,chefName,yearsOfExperience,likes}=chef
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 ">
                  <LazyLoad height={304} offset={200} threshold={0.95}>
                  <img
            src={image}
            alt="Chefs picture"
            className="rounded-xl"
          />
          </LazyLoad>
        </figure>
        <div className="card-body items-center text-center">
                  <h2 className="card-title">{chefName}</h2>
                  <p>Experience: {yearsOfExperience} years</p>
                  <p>Total Recipe: {chef.recipes.length} </p>
                  <div className="flex items-center gap-1">
                      <span><AiFillLike /></span>
                      <span>{likes}</span>
                  </div>
          <div className="card-actions">
          <Link to={`/chefRecipes/${id}`}>
              <button className="btn btn-primary">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
