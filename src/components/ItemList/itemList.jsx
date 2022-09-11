import React from "react"
import Item from "../item/item"



const ItemList = ({producto}) => {
       
    return(
    <div>
    {producto.map((prod => {

        return (
            <Item id={prod.id} title={prod.title} image={prod.images} price={prod.price}/>
        )
    }))}
    
    </div>)
    
}













export default ItemList