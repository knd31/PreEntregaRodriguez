
import "./cartitem.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
const CartItem= ({item}) =>{
    const  {removeItem} = useContext(CartContext)
    return(
        <div className="div1">
            <img src={item.img} alt={item.name} width={'150rem'}></img>
            <p>{item.name}</p>
            <p>Cantidad:{item.quantity}</p>
            <p>SubTotal: ${item.quantity * item.price} </p>
            <button className="button1" onClick={() =>removeItem(item.id)}> Eliminar </button>
        </div>
    )
}

export default CartItem