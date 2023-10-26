import React, { useEffect, useState } from 'react'
import CardList from '../Cards/CardList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemCategory = ({ category }) => {

  const listaCategorias = {
    strong: 'Strong',
    sweetest: 'Sweetest',
    green: 'Green',
    coolest: 'Coolest',
  };

  const categorias = listaCategorias[category.toLowerCase()];

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const db = getFirestore();
      const itemCollection = collection(db, "items");
      const q = query(itemCollection, where("category", "==", categorias));

      getDocs(q)
        .then(snapshot => {
          const allData = snapshot.docs.map((document) => ({ id: document.id, ...document.data() }));

          setItems(allData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [category])

  return (
    <>
      <h3 className='total2'> ESTAS VIENDO LA CATEGORIA {categorias}</h3>
      <div className='d-flex justify-content-center align-items-center'>
        <div className="container">
          <div className='row '>
            {items !== null && items.map((item) => (
              <div key={item.id} className='col-xl-3 col-md-4 col-sm-12'>
                <CardList className='col-xl-3 col-md-4 col-sm-12' item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}

export default ItemCategory


