import React, { useEffect } from "react";
import useCatList from "../hooks/useCatList";
import CatCard from "./CatCard";

const CatList = () => {
  const { cats } = useCatList();

  return (
    <div className="cat-list">
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          breed={cat.breed}
          image={cat.image}
          country={cat.country}
        />
      ))}
    </div>
  );
};

export default CatList;
