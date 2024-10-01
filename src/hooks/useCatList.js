import { useState } from "react";

import maineCoonImage from "../assets/images/maine_coon.avif";
import siameseImage from "../assets/images/siamese.avif";

const useCatList = () => {
  const initialCats = [
    {
      id: "maine-coon-1672535000000",
      breed: "Maine Coon",
      image: maineCoonImage,
      country: "USA",
    },
    {
      id: "siamese-1672534800000",
      breed: "Siamese",
      image: siameseImage,
      country: "Thailand",
    },
    // {
    //   id: "sphynx-1672535100000",
    //   breed: "Sphynx",
    //   image: sphynxImage,
    //   country: "Canada",
    // },
    // {
    //   id: "bengal-1672535200000",
    //   breed: "Bengal",
    //   image: bengalImage,
    //   country: "USA",
    // },
    // {
    //   id: "russian-blue-1672535300000",
    //   breed: "Russian Blue",
    //   image: russianBlueImage,
    //   country: "Russia",
    // },
    // {
    //   id: "british-shorthair-1672535400000",
    //   breed: "British Shorthair",
    //   image: britishShorthairImage,
    //   country: "United Kingdom",
    // },
    // {
    //   id: "ragdoll-1672535500000",
    //   breed: "Ragdoll",
    //   image: ragdollImage,
    //   country: "USA",
    // },
    // {
    //   id: "abyssinian-1672535600000",
    //   breed: "Abyssinian",
    //   image: abyssinianImage,
    //   country: "Ethiopia",
    // },
  ];

  const [cats, setCats] = useState(initialCats);

  const addCat = (cat) => {
    const newCatWithId = {
      ...cat,
      id: `${cat.breed.toLowerCase()}-${Date.now()}`,
    };
    setCats((prevCats) => [...prevCats, newCatWithId]);
  };

  return { cats, addCat };
};

export default useCatList;
