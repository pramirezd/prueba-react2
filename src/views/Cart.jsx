import React, { useContext } from 'react'
import { PizzaContext } from '../contexts/PizzaContext';
import CartPizzas from '../components/CartPizzas';

const Cart = () => {

    const { cart } = useContext(PizzaContext);

    return (
        <div className='p-5 mt-5'>
            <h1 className='fs-4'>Detalle</h1>
            {cart.length === 0 ? (
                <p>No hay pizzas en el carrito</p>
                ) : (
                    <CartPizzas />
                )}            
        </div>
    )
}

export default Cart