import React from 'react';
import './itemListContainer.css';
import { useState, useEffect } from "react"
import ItemList from './itemList';


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const fetchData = async () => {

    try {
    
      const data = await fetch('https://api.escuelajs.co/api/v1/categories/1/products');
      const items = await data.json()
      setProducts(items)
      console.log(items)
    }

    catch (err) {
      console.error(err)
    }

  }
  useEffect(() => { setTimeout(() => { fetchData()}, 2000) }, [])

  return (
    <ItemList items={products}/>
  )


}


export default ItemListContainer;