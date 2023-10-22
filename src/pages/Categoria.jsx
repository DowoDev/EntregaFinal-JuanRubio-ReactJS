import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCategory from '../components/Items/ItemCategory';

const Categoria = () => {
  const { category } = useParams();

  return (
    <div className='pt-5'>
      <ItemCategory category={category} />
    </div>
  );
};

export default Categoria;
