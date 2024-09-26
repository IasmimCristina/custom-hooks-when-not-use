import React, { createContext, useMemo, useState, useEffect } from "react";

// Cats list images
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
      id: "persian-1672534900000",
      breed: "Persian",
      image: persianImage,
      country: "Iran",
    },
    {
      id: "maine-coon-1672535000000",
      breed: "Maine Coon",
      image: maineCoonImage,
      country: "USA",
    },
    {
      id: "sphynx-1672535100000",
      breed: "Sphynx",
      image: sphynxImage,
      country: "Canada",
    },
    {
      id: "bengal-1672535200000",
      breed: "Bengal",
      image: bengalImage,
      country: "USA",
    },
    {
      id: "russian-blue-1672535300000",
      breed: "Russian Blue",
      image: russianBlueImage,
      country: "Russia",
    },
    {
      id: "british-shorthair-1672535400000",
      breed: "British Shorthair",
      image: britishShorthairImage,
      country: "United Kingdom",
    },
    {
      id: "ragdoll-1672535500000",
      breed: "Ragdoll",
      image: ragdollImage,
      country: "USA",
    },
    {
      id: "abyssinian-1672535600000",
      breed: "Abyssinian",
      image: abyssinianImage,
      country: "Ethiopia",
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
