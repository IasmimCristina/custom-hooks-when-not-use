import React, { useEffect, useRef } from "react";
import useCatList from "../hooks/useCatList";
import CatCard from "./CatCard";
import bengalImage from "../assets/images/bengal.avif";
import russianBlueImage from "../assets/images/russian_blue.avif";

const CatList = () => {
  const { cats, addCat } = useCatList();
  const hasAddedCats = useRef(false);
  // useRef to control if the cats are already added

  useEffect(() => {
    if (!hasAddedCats.current) {
      addCat({ breed: "Bengal", image: bengalImage, country: "USA" });
      addCat({
        breed: "Russian Blue",
        image: russianBlueImage,
        country: "Russia",
      });
      hasAddedCats.current = true;
    }
  }, [addCat]);
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

export { CatList, TotallyDifferentCatList };
