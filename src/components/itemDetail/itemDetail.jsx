import "./itemDetail.css";
import ItemCount from "../ItemCount/itemCount"


const ItemDetail = ({ prod }) => {
    return (
        <div className='itemDetail-Container'>
            <img src={prod.images} className="item-Img" alt="" />
            <div className="itemDetail-Text">
                <h4 className='itemDetail-Title'>{prod.title}</h4>
                <p className='itemDetail-Description'>{prod.description}</p>
                <h5 className='itemDetail-Price'>${prod.price}</h5>
                <div className='itemDetail-Button'>
                    <ItemCount/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

