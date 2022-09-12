import React, { useState } from 'react';
import "./itemCount.css"


const ItemCount = ({ item, onAdd}) => {


    
    const [count, setCount] = useState(1)
  
    const stock = 10


    const addProduct = () => {
        if (count < stock) {
            setCount(count +1)
        }
    }

    const takeProduct = () => {
        if (count > 1)
            setCount(count -1)
    }

    return (
        <div>
            <div className='container-Count'>
                <button className='btns' onClick={takeProduct}>-</button>
                <p> {count}</p>
                <button className='btns' onClick={addProduct}>+</button>
            </div>
            <button className='btn-Add' onClick={()=>onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount