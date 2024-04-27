import React, { useState, createContext, useEffect } from 'react'

export const PizzaContext = createContext()

export default function PizzaProvider({ children }) {
    
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchPizzas = async () => {
        try {
            const response = await fetch("https://mocki.io/v1/d760e6cb-d19f-49ac-9ceb-3001cd39a59c");
            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPizzas();
    }, []);

    const increaseCount = (index) => {
        const newCart = [...cart];
        newCart[index].count++;
        setCart(newCart);
    };

    const decreaseCount = (index) => {
        const newCart = [...cart];
        newCart[index].count--;
        if (newCart[index].count === 0) {
            newCart.splice(index, 1);
        }
        setCart(newCart);
    };

    const addToCart = (pizza) => {
        const newCart = [...cart];
        const index = newCart.findIndex((item) => item.id === pizza.id);
        if (index === -1) {
            newCart.push({ ...pizza, count: 1 });
        } else {
            newCart[index].count++;
        }
        setCart(newCart);
    };

    const totalCart = cart.reduce((acc, item) => acc + item.count * item.price, 0);

    const localCurrency = (value) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
    };

    return (
        <PizzaContext.Provider 
            value={{ 
                pizzas,
                cart,
                setCart,
                increaseCount, 
                decreaseCount, 
                addToCart, 
                totalCart, 
                localCurrency 
            }}
        >
            {children}
        </PizzaContext.Provider>
    );
}