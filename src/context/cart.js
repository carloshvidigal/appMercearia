import React, { Text, createContext, useState, useContext, useEffect, Children } from 'react'

const CartContext = createContext()

export default function CartProvider({children}) {
    
    const [cart, setCart] = useState([])
    const [totalValue, setTotalValue] = useState()

    useEffect (() =>  {
        let value = 0
        cart.map((props) =>  {
            value = value + props.cost
        })

        setTotalValue(value)
    }, [cart])

    function add (item) {
        const newCart = cart
        newCart.push(item)

        setCart([...newCart])
    }

    const store = {
        add,
        cart,
        totalValue
    }

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)

    const {
        cart,
        add,
        totalValue
    } = context

    return {
        cart, 
        add,
        totalValue
    }
}