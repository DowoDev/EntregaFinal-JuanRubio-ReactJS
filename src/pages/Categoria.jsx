// import React from 'react';
// import { useParams } from 'react-router-dom';
// import ItemCategory from '../components/Items/ItemCategory'

// const Categoria = () => {
//   const { categoryid } = useParams()
//   return (
//     <div className='bodyCategoria'>
//       <div className='pt-5'>
//         <ItemCategory category={categoryid} />
//       </div>
//     </div>
//   );
// };

// export default Categoria;

import React from 'react'
import { useParams } from 'react-router-dom';
import ItemCategory from '../components/Items/ItemCategory';

function Categoria() {
  const { categoryid } = useParams();
  return (
    <div className='bodyCategoria'>
      <div className='pt-5'>
        <ItemCategory category={categoryid} />
      </div>
    </div>
  )
}
export default Categoria