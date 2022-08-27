import React, { useState } from 'react';
import "./itemCount.css"


function ItemCount() {
    const [count, setCount] = useState(1)
    const stock = 10
    const addProduct = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const takeProduct = () => {
        if (count > 1)
            setCount(count - 1)
    }

    return (

        <div className='item-Count'>
            <div>
                <h3>Nombre del Producto</h3>
            </div>
            <div className='container-Count'>
                <button className='btns' onClick={takeProduct}>-</button>
                <p>{count}</p>
                <button className='btns' onClick={addProduct}>+</button>
            </div>
            <button className='btn-Add'>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount