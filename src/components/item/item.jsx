import { useParams, Link } from "react-router-dom"
import "./item.css"

const Item = ({ id, title, image, price }) => {
 
    return (

        <div className='item-Container'>
            <h4 className='item-Title'>{title}</h4>
            <img src={image} className="item-Img" alt="" />
            <h5 className='item-Price'>${price}</h5>
            <div>
                
                <Link to={`/detalle/${id}`}>
                <button className='btn-Add'> 
                Ver detalle
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Item