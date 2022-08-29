import React from "react"
import Item from "./item"



const ItemList = ({items}) => {
   
   
    
    return(
    <div>
    {items.map((product => {

        return (
            <Item item={product}/>

        )
    }))}
    
    </div>)
    
}













export default ItemList