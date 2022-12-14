import "./itemDetail.css";
import ItemCount from "../ItemCount/itemCount"
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ prod }) => {

    const [checkOut, setCheckOut] = useState(false)

    const onAdd = (quantity) => {
        setCheckOut (true);
        console.log({ quantity })
    }
    return (
        <div className='itemDetail-Container'>
            <img src={prod.images} className="item-Img" alt="" />
            <div className="itemDetail-Text">
                <h4 className='itemDetail-Title'>{prod.title}</h4>
                <p className='itemDetail-Description'>{prod.description}</p>
                <h5 className='itemDetail-Price'>${prod.price}</h5>
                <div className='itemDetail-Button'>
                    {checkOut ? (
                    <Link to ="./cart"><button className="Checkout-Button">Terminar Compra</button></Link>):(
                    <ItemCount onAdd={onAdd}/>)}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

