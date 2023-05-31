import CartWidget from "../CardWidget/CardWidget"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav> 
            
           <Link to= '/'>   
           <h1 className="tituloPpal">Tecno<span>Opti</span></h1>  
           </Link>

           <div className="categories" >

            <NavLink to= {`/category/Apple`} className="botones">Apple</NavLink>
            <NavLink to= {`/category/HP`} className="botones">hp</NavLink>
            <NavLink to= {`/category/Dell`} className="botones">Dell</NavLink>

           </div>
            
            <CartWidget />

        </nav>
    )
}

export default NavBar