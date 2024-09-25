import React from 'react';

import useCat from '../hooks/useCat';
import CatCard from './CatCard';


const CatList = () => {
  const { cats } = useCat();

  return (
    <div className="cat-list">
      {cats.map((cat, index) => (
        <CatCard key={index} breed={cat.breed} image={cat.image} country={cat.country} />
      ))}
    </div>
  );
};

export default CatList;
