import "./itemDetail.css"

const ItemDetail = ({ products }) => {
    return (

        <div className='itemDetail-Container'>
            <img src={products.images} className="item-Img" alt="" />
            <div className="itemDetail-Text">
                <h4 className='itemDetail-Title'>{products.title}</h4>
                <p className='itemDetail-Description'>{products.description}</p>
                <h5 className='itemDetail-Price'>${products.price}</h5>
                <button className='itemDetail-Button'> Agregar al Carrito</button>
            </div>

        </div>
    )
}

export default ItemDetail