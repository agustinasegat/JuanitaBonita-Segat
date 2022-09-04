import React from "react"
import Item from "../item/item"



const ItemList = ({items}) => {
       
    return(
    <div>
    {items.map((product => {

        return (
            <Item title={product.title} images={product.images} price={product.price}/>


        )
    }))}
    
    </div>)
    
}













export default ItemList