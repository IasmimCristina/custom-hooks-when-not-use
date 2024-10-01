import React from "react";

const CatCard = React.memo(({ breed, image, country }) => {
  console.log("CatCard rendered!");
  return (
    <div className="cat-card">
      <img src={image} alt={breed} />
      <h2>{breed}</h2>
      <p>{country}</p>
    </div>
  );
});

export default CatCard;
