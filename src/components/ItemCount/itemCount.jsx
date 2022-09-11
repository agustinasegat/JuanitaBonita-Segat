import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./itemCount.css"


const ItemCount = ({ product}) => {
    const [count, setCount] = useState(1)
    const [cart, setCart] = useState([])
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

    const onAdd = () => {
        setCart([...cart, "producto"])
        console.log(cart)
    }
    return (
        <div>
            <div className='container-Count'>
                <button className='btns' onClick={takeProduct}>-</button>
                <p>{count}</p>
                <button className='btns' onClick={addProduct}>+</button>
            </div>
            <button className='btn-Add' onClick={onAdd}>Agregar al Carrito
            </button>
        </div>
    )
}

export default ItemCount