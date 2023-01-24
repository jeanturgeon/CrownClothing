import { createContext, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
    //check if we already have an item with the same iD in the cart:
    const exisitingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
        );


    //if found, increment quantity:
    if(exisitingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        )
    }

    //return new array with new/modified cart items:
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>null,
    cartItems:[],
    addItemToCart:()=>null,

})

export const CartContextProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems}
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}