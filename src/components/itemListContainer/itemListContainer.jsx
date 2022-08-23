import React from 'react';
import './itemListContainer.css';


const ItemListContainer = (props) => {
    return (
          <div className='itemContainer'>
            <h2 style={{color:props.color}}> {props.greeting}</h2>
            </div>
    );
};

export default ItemListContainer;