import { useContext } from 'react';
import { CatContext } from '../context/CatContext';

const useCat = () => {
  const { cats, addCat } = useContext(CatContext);
  return { cats, addCat };
};

export default useCat;
