import ItemCount from './itemCount';
import "./item.css"

const Item = ({ item }) => {
    return (
        <div className='item-Container'>
            <h4 className='item-Title'>{item.title}</h4>
            <img src={item.images} className="item-Img" alt="" />
            <h5 className='item-Price'>${item.price}</h5>
            <ItemCount />
        </div>
    )
}

export default Item