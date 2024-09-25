import React from 'react';
import useCat from '../hooks/useCat';
import CatCard from './CatCard';

const CatList = () => {
  const { cats } = useCat();

  return (
    <div className="cat-list">
      {cats.map((cat) => (
        <CatCard key={cat.id} breed={cat.breed} image={cat.image} country={cat.country} />
      ))}
    </div>
  );
};

export default CatList;
