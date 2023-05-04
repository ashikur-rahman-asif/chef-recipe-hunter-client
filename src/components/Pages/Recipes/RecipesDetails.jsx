import React, { useState } from "react";
import Rating from "react-rating";
import "@smastrom/react-rating/style.css";
import { AiFillStar, AiOutlineStar } from "react-icons/Ai";
import { toast } from "react-toastify";
const RecipesDetails = ({ recipe }) => {
  const [isDisabled, setIsDisabled] = useState(false);
    const {id, name, thumbnail, ingredients, method, rating } = recipe;
    const handleFavourite = () => {
        toast.success("Added to Favourite!");
        setIsDisabled(true);
      };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 mt-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={thumbnail} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">
              {ingredients.map((i) => (
                <li>{i}</li>
              ))}
            </p>
            <p className="py-6">Method: {method} </p>
            <div className="flex items-center">
              <Rating
                placeholderRating={Math.round(rating || 0)}
                readonly
                emptySymbol={<AiOutlineStar />}
                placeholderSymbol={<AiFillStar />}
                fullSymbol={<AiFillStar />}
              />
              <span className="ms-2"> {rating}</span>
            </div>
            <button
              onClick={handleFavourite}
              disabled={isDisabled}
              className="btn bg-red-500 mt-4"
            >
              Add to Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
