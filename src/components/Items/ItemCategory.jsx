import React, { useEffect, useState } from 'react'
import CardList from '../Cards/CardList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemCategory = ({ category }) => {
  console.log('Category:', category);
  const categoryMapping = {

    strong : 'Strong', 
    sweetest : 'Sweetest',
    green : 'Green',
    coolest : 'Coolest',
  };

  // const actualCategory = categoryMapping[category.toLowerCase()];


  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const db = getFirestore();
      const itemCollection = collection(db, "items");
      const q = query(itemCollection, where("category", "==", categoryMapping));


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

    <div className='d-flex justify-content-center align-items-center'>

      <div className="container">
        <div className='row '>
          {items !== null && items.map((item) => (
            <div key={item.id} className='col-md-4 mb-4'>
              <CardList item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItemCategory
