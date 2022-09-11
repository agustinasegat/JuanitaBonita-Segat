import React from "react"
import Item from "../item/item"



const ItemList = ({producto}) => {
       
    return(
    <div>
    {producto.map((prod => {

        return (
            <Item title={prod.title} image={prod.images} price={prod.price} id={prod.id}/>
        )
    }))}
    
    </div>)
    
}













export default ItemList