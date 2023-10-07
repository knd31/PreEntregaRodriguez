import cart from './assets/carrito.png'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    return (
        <div>
            { <img style={{width:"5px;"}} src={cart} alt="carrito"></img>}
            {cartQuantity() > 0 && cartQuantity()}           
        </div>
    )
}
export default CartWidget