import React  from "react";
import useCatList from "../hooks/useCatList";
import CatCard from "./CatCard";

const CatList = () => {
  const { cats } = useCatList();

  console.log("CatList rendered!");
  return (
    <div className="cat-list">
      <h2>First list</h2>
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
