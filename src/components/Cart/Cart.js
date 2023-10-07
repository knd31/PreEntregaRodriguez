import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"



const Cart = () => {
    const { cart, clear, total } = useContext(CartContext)
    return (
        <div>
            {cart.length
            ? <div>
               {cart.map((item) =><CartItem key={item.id} item={item}/>)}
                     <h1>Total a pagar: ${total()}</h1>
                    <div>
                        <button onClick={clear}> Vaciar carrito</button>
                        <Link> Terminar compra</Link>
                    </div> 
            </div>
            : <div>
                    <h2> El carrito esta vacio!</h2>
                    <Link to='/'>Ir a comprar</Link>
                </div>}
        </div>
    )
}

export default Cart 