import React from 'react';
import './itemListContainer.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/itemList';


const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  const fetchData = async () => {

    try {
      const data = await fetch('./database/db.json');
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
    <ItemList producto={products}/>
  )


}


export default ItemListContainer;