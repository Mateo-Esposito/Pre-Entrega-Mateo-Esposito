import CardWidget from "../CardWidget/CardWidget"
import "../styles/NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <p className="titulo">¡Bienvenidos a nuestra tienda en línea de tecnología! En nuestro ecommerce encontrarás los mejores productos tecnológicos a precios competitivos, desde smartphones hasta laptops, accesorios y mucho más. Nuestro compromiso es ofrecerte una experiencia de compra excepcional y un servicio de atención al cliente de primera clase. Únete a nuestra comunidad de clientes satisfechos y descubre lo último en tecnología con nosotros.</p> 
            <div className="posicion-botones">
                <button className="boton">Smartphones</button>
                <br/>
                <br/>
                <button className="boton">Laptops</button>
                <br/>
                <br/>
                <button className="boton">Smartwatch</button>
            </div>  
            <div className="CardWidget">
            <CardWidget />     
            </div>        
        </nav>
        
    )
}

export default NavBar