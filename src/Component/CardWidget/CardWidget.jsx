import cart from "../Assets/carrito_compras.jpg" 

const CartWidget = () => {

    return (
        <div id="imgContainer">
            <img src = {cart} alt="cart-widget" className="cartImg"/> 

         <span className="cartNumber"> 0 </span> 
       
        </div>
    )
}

export default CartWidget