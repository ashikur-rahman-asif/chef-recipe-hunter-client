import React from "react";

const SpecialChef = () => {
  return (
    <div className="mt-5">
      <h3 className="text-4xl font-bold text-center">
        Our Special Recipe Items
      </h3>
      <div className="grid md:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://marleysmenu.com/wp-content/uploads/2020/09/Gourmet-Truffle-Mushroom-Risotto-Featured-Image-1.jpg"
              alt="recipe"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mushroom and Truffle Risotto</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.forkknifeswoon.com/wp-content/uploads/2013/05/StuffedShellswithSpinachRicotta5-ThumbWEB.jpg"
              alt="recipe"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Spinach and Ricotta Stuffed</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.allrecipes.com/thmb/xnKVOdWRwnrp_bqBOa-7Lbknd1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4543319-e5e16e390d994cd5acdba6d4fd3a5b08.jpg"
              alt="recipe"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Quinoa Stuffed Bell</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialChef;
