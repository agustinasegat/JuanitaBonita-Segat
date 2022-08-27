import React from 'react';
import './itemListContainer.css';
import ItemCount from './itemCount';


const ItemListContainer = (props) => {
  return (
          <div className='itemContainer'>
            <ItemCount/>
            </div>
           
  );
};

export default ItemListContainer;