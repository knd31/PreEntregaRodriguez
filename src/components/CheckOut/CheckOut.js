import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useState, useContext } from "react"
import "./check.css"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/firebase"

const CheckOut = () => {
    const [user, setUser] = useState({})
    const [valiteEmail, setValideEmail] = useState('')
    const {cart, total, clearCart}= useContext(CartContext);

    const [orderId, setOrderId] = useState('')
    const datosComprador = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefault();
        if (!user.name || !user.phone) {
            alert('Completar campos faltantes');
        } else if (!cart || cart.length === 0) {
            alert('El carrito está vacío');
        } else {
            const orders = {
                user,
                item: cart,
                total: total(),
                date: serverTimestamp()
            }
             const venta = collection(db, "orders")
            //  addDoc(venta, order)
            addDoc(venta,orders)
                 .then(res => {
                     setOrderId(res.itemId)
                     clearCart()
                 })
                 .catch((error) => console.log(error))
         
        }
    }
    
    return (
        <div>
            {orderId !== ''
                ? <div>
                    <h1> Felicitaciones, orden generada con exito!</h1>
                    <h4> El codigo de resgistro es: {orderId}</h4>
                </div>
                : <div className="contenedor">
                    <h2>Terminar compra</h2>
                    <h3>Por favor, ponga sus datos!</h3>
                    <form id="miFormulario" onSubmit={finalizarCompra}>
                        <div>
                            <label>Nombre completo:</label>
                            <input onChange={datosComprador} type='text' placeholder='Nombre y apellido' name='name' required></input>
                        </div>
                        <div>
                            <label>Numero de telefono:</label>
                            <input onChange={datosComprador} type='number' placeholder='+35148952678' name='phone'></input>
                        </div>
                        <div>
                            <label>Numero de telefono alternativo:</label>
                            <input onChange={datosComprador} type='number' placeholder='+35148957826' name='phone2'></input>
                        </div>
                        <div>
                            <label>Correo electronico:</label>
                            <input onChange={datosComprador} type='email' placeholder='ana@hotmail.com' name='mail'></input>
                        </div>
                        <div>
                            <label>Valide su correo electronico:</label>
                            <input onChange={((e) => setValideEmail(e.target.value))} type='email' placeholder='ana@hotmail.com' name='mail'></input>
                        </div>
                        <button className="boton" type='submit' disabled={valiteEmail !== user.mail}>Confirmar orden de compra</button>
                    </form>
                </div>
            }
        </div>
    )
}
export default CheckOut