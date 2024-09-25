import React, { createContext, useMemo, useState, useEffect } from "react";

// Importando imagens locais (novos gatos)
import siameseImage from "../assets/images/siamese.avif";
import persianImage from "../assets/images/persian.avif";
import maineCoonImage from "../assets/images/maine_coon.avif";
import sphynxImage from "../assets/images/sphynx.avif";
import bengalImage from "../assets/images/bengal.avif";
import russianBlueImage from "../assets/images/russian_blue.avif";
import britishShorthairImage from "../assets/images/british_shorthair.avif";
import ragdollImage from "../assets/images/ragdoll.avif";
import abyssinianImage from "../assets/images/abyssinian.avif";

export const CatContext = createContext();

export const CatProvider = ({ children }) => {
  const initialCatList = [
    {
      id: "siamese-1672534800000",
      breed: "Siamese",
      image: siameseImage,
      country: "Thailand",
    },
    {
      id: "maine-coon-1672535000000",
      breed: "Maine Coon",
      image: maineCoonImage,
      country: "USA",
    },
  ];

  const [cats, setCats] = useState(() => {
    const savedCats = localStorage.getItem("cats");
    return savedCats ? JSON.parse(savedCats) : initialCatList;
  });

  useEffect(() => {
    localStorage.setItem("cats", JSON.stringify(cats));
  }, [cats]);

  // To avoid changing the object on every render
  const value = useMemo(
    () => ({
      cats,
      setCats,
    }),
    [cats]
  );

  return <CatContext.Provider value={value}>{children}</CatContext.Provider>;
};
