
import Logo from './images/Logo.png';

const Navbar = () => {

    const nav = {
        backgroundColor: "#FFFFFF",
        fontSize: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        boxShadow: "5px 5px 5px 5px #9E9E9E",
        height: "100px"
    }

    const logo = {
        height: "50px",
    }

    const container_logo={
        display: "flex",
        alignItems: "center"
    }

    const logo_name = {
        color: "#F50F6B",
        letterSpacing: "1px",
        fontFamily: "Varela Round",
        fontWeight: "500",
        fontSize: "20px"

    }
    const links = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }

    const items = {
        display: "inline-block",
        padding: "10px",
        textDecoration: "none",
        color: "#F50F6B",
        letterSpacing: "2px",
        fontFamily: "Varela Round",
        marginRight: "10px",
        fontWeight: "500",

    }

    const saleItem = {
        display: "inline-block",
        padding: "10px",
        textDecoration: "none",
        backgroundColor: "#F50F6B",
        color: "#FFFFFF",
        fontWeight: "700",
        letterSpacing: "2px",
        fontFamily: "Varela Round",
        marginRight: "10px"
    }

    function changeColor({ target }) {
        target.style.color = "black"
    }
    return (

        <nav style={nav} className="nav">
            <div style={container_logo}>
                <img style={logo} src={Logo} alt="" />
                <h1 style={logo_name}>Juanita Bonita</h1>
            </div>
            <div style={links}>
                <a onClick={changeColor} style={items} href="">Inicio</a>
                <a onClick={changeColor} style={items} href="">Collares</a>
                <a onClick={changeColor} style={items} href="">Pulseras</a>
                <a onClick={changeColor} style={items} href="">Anillos</a>
                <a onClick={changeColor} style={saleItem} href="">REBAJAS</a>
            </div>
        </nav>
    )
}



export default Navbar;

