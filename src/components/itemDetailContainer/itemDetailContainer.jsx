import React from 'react';
import { useState, useEffect } from "react"
import ItemDetail from '../itemDetail/itemDetail';



const ItemDetailContainer = () => {
  const [product, setItem] = useState([])

  const getItem = async () => {

    try {
    
      const data = await fetch('https://api.escuelajs.co/api/v1/categories/1/products');
      const items = await data.json()
      setItem(items)
      console.log(items)
    }
    catch (err) {
      console.error(err)
    }

  }

  useEffect(() => { getItem() }, [])
  return (

    <ItemDetail products={product} />

  )


}

export default ItemDetailContainer;