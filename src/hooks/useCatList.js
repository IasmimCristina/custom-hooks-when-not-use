import { useContext, useMemo } from "react";
import { CatContext } from "../context/CatContext";

const useCatList = () => {
  const context = useContext(CatContext);
  if (!context) {
    throw new Error("useCatList must be used within a CatProvider");
  }

  const { cats, setCats } = context;

  const addCat = (cat) => {
    const newCatWithId = {
      ...cat,
      id: `${cat.breed.toLowerCase()}-${Date.now()}`,
    };
    setCats((prevCats) => [...prevCats, newCatWithId]);
  };

  const value = useMemo(
    () => ({
      cats,
      addCat,
    }),
    [cats]
  );

  return value;
};

export default useCatList;
