import React, { useContext } from 'react'
import { PizzaContext } from '../contexts/PizzaContext';
import CartPizzas from '../components/CartPizzas';

const Cart = () => {

    const { cart } = useContext(PizzaContext);

    return (
        <div className='cart-resume'>
            <h1 className='fs-4'>Detalles del pedido</h1>
            {cart.length === 0 ? (
                <p>No hay artículos en el carrito</p>
                ) : (
                    <CartPizzas />
                )}            
        </div>
    )
}

export default Cart