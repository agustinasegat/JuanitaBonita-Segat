import React from 'react';
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail';



const ItemDetailContainer = () => {
  const [product, setItem] = useState([])
  const { idproducto } = useParams()
  const getItem = async () => {
    try {

      const data = await fetch(`https://api.escuelajs.co/api/v1/products/${idproducto}`);
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


    <ItemDetail prod={product} />
  )



}

export default ItemDetailContainer;
