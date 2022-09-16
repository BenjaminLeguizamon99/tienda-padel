import React, {useState, useContext} from 'react'
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    //Función para eliminar todos los productos del carrito
    const clearCart = () => setCart([]);

    //Función para saber si existe un producto en el carrito
    const isInCart=(id)=>{
        return cart.find(product => product.id === id) ? true : false; 
    }

    //Función para eliminar un producto del carrito
    const removeProduct = (id) => setCart(cart.filter(product => product.id!==id));

    //Función para agregar al carrito
    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({...item, quantity: newQuantity});
        setCart(newCart)
    }

    console.log(cart)
  
  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider