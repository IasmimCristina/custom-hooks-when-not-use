import React from 'react';


const CatCard = ({ breed, image, country }) => {
  return (
    <div className="cat-card">
      <img src={image} alt={breed} />
      <h2>{breed}</h2>
      <p>{country}</p>
    </div>
  );
};

export default CatCard;
