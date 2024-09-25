import React, { createContext, useState } from 'react';

// Importando imagens locais (novos gatos)
import siameseImage from '../assets/images/siamese.avif';
import persianImage from '../assets/images/persian.avif';
import maineCoonImage from '../assets/images/maine_coon.avif';
import sphynxImage from '../assets/images/sphynx.avif';
import bengalImage from '../assets/images/bengal.avif';
import russianBlueImage from '../assets/images/russian_blue.avif';
import britishShorthairImage from '../assets/images/british_shorthair.avif';
import ragdollImage from '../assets/images/ragdoll.avif';
import abyssinianImage from '../assets/images/abyssinian.avif';

export const CatContext = createContext();

export const CatProvider = ({ children }) => {
  const initialCats = [
    {
      breed: 'Siamese',
      image: siameseImage,
      country: 'Thailand'
    },
    {
      breed: 'Persian',
      image: persianImage,
      country: 'Iran'
    },
    {
      breed: 'Maine Coon',
      image: maineCoonImage,
      country: 'USA'
    },
    {
      breed: 'Sphynx',
      image: sphynxImage,
      country: 'Canada'
    },
    {
      breed: 'Bengal',
      image: bengalImage,
      country: 'USA'
    },
    {
      breed: 'Russian Blue',
      image: russianBlueImage,
      country: 'Russia'
    },
    {
      breed: 'British Shorthair',
      image: britishShorthairImage,
      country: 'United Kingdom'
    },
    {
      breed: 'Ragdoll',
      image: ragdollImage,
      country: 'USA'
    },
    {
      breed: 'Abyssinian',
      image: abyssinianImage,
      country: 'Ethiopia'
    }
  ];

  const [cats, setCats] = useState(initialCats);

  const addCat = (cat) => {
    setCats([...cats, cat]);
  };

  return (
    <CatContext.Provider value={{ cats, addCat }}>
      {children}
    </CatContext.Provider>
  );
};
