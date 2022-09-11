import { useParams, Link } from "react-router-dom"
import "./item.css"

const Item = ({ id, title, image, price }) => {
 
    return (

        <div className='item-Container'>
            <h4 className='item-Title'>{title}</h4>
            <img src={image} className="item-Img" alt="" />
            <h5 className='item-Price'>${price}</h5>
            <div>
                <button className='btn-Add'> 
                <Link to={'/detalle/${id}'}>
                Ver detalle
         </Link>
                </button>
            </div>
        </div>
    )
}

export default Item