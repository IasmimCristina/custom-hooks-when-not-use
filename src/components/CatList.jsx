import React, { useEffect, useRef } from "react";
import useCatList from "../hooks/useCatList";
import CatCard from "./CatCard";

import bengalImage from "../assets/images/bengal.avif";
import russianBlueImage from "../assets/images/russian_blue.avif";

const CatList = () => {
  const { cats, addCat } = useCatList();

  const hasCatsAdded = useRef(false);

  useEffect(() => {
    if (!hasCatsAdded.current) {
      addCat({ breed: "Bengal", image: bengalImage, country: "USA" });
      addCat({
        breed: "Russian Blue",
        image: russianBlueImage,
        country: "Russia",
      });
      // To avoid duplications!
      hasCatsAdded.current = true;
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

const TotallyDifferentCatList = () => {
  const { cats } = useCatList();

  return (
    <div className="cat-list">
      <h2>Different list</h2>
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
