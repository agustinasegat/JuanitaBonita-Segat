import CartWidget from './cartWidget';
import Logo from '../images/Logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container_logo">
                <img src={Logo} className="logo" alt="" />
                <h1 className='logo_name'>Juanita Bonita</h1>
            </div>
            <div className='links'>
                <a  className="items" href="">Inicio</a>
                <a className="items" href="">Collares</a>
                <a className="items" href="">Pulseras</a>
                <a className="items" href="">Anillos</a>
                <a className='saleItem' href="">REBAJAS</a>
            </div>
            <CartWidget/>
        </nav>
    )
}



export default Navbar;

