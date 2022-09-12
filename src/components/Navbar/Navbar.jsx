import CartWidget from '../cartWidget/cartWidget';
import Logo from '../images/Logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarBoots() {
    return (
        <Navbar className='nav-bg' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand>
                  <Link to={"/"}>
                    <div className="container_logo">
                        <img src={Logo} className="logo" alt="" />
                    </div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <div className='links'>
                        <Link className="items"to={"/"}>Inicio</Link>
                        <Link className="items"to={"/categoria/:idcategoria"}>Collares</Link>
                        <Link className="items"to={"/categoria/:idcategoria"}>Pulseras</Link>
                        <Link className="items"to={"/categoria/:idcategoria"}>Anillos</Link>
                        <Link className="saleItem"to={"/categoria/:idcategoria"}>REBAJAS</Link>
                        </div>
                        <div className='cartWidget-Container'>
                            <CartWidget />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarBoots;

