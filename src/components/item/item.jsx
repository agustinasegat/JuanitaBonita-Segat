import ItemCount from '../ItemCount/itemCount';
import "./item.css"

const Item = ({ title, images, price }) => {
    return (
        
        <div className='item-Container'>
            <h4 className='item-Title'>{title}</h4>
            <img src={images} className="item-Img" alt="" />
            <h5 className='item-Price'>${price}</h5>
            <ItemCount />
        </div>
    )
}

export default Item