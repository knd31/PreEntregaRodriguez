import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    cart: []
})
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map((prod) =>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + quantity}
                }else{
                    return prod
                }
            }))

        }else{
            setCart([...cart, {...item, quantity}])
        }
    }
    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }
    const clearCart = () => {
        setCart([])
    }
    
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const cartQuantity = () =>{
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }
    const total = () =>{
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
    }

    return(
       <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartQuantity, total}}>
        { children }
       </CartContext.Provider>
    )
}
