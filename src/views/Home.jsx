import React, { useContext } from 'react'
import { PizzaContext } from '../contexts/PizzaContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const { pizzas, addToCart, localCurrency } = useContext(PizzaContext);
    const navigate = useNavigate();

    return (
        <div>
            <div className='header-img'>
                <div className='header-content'>
                    <h1>¡Pizzería Mamma Mia!</h1>
                    <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
                </div>
            </div>
            <div className='card-container'>
                <div className='row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4'>
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className='col d-flex justify-content-center'>
                            <div className='card card-style mt-3 mb-3'>
                                <img src={pizza.img} className='card-img-top' alt={pizza.name} />
                                <div className='card-body'>
                                    <h5 className='card-title nombre-pizza'>{pizza.name}</h5>
                                    <hr />
                                    <div className='card-body m-0 p-0'>
                                    <p className='fw-bold'>Ingredientes:</p>
                                        <ul>
                                            {pizza.ingredients.map((ingredient, index) => (
                                                <li key={index} className='pizza-list'>🍕 {ingredient}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <hr />
                                    <p className='card-text fw-bold moneda'>{localCurrency(pizza.price)}</p>
                                </div>
                                <div className='card-footer d-flex flex-row justify-content-between'>
                                    <button
                                        onClick={() => {
                                            navigate(`/pizza/${pizza.id}`);
                                        }}
                                        className='btn see-more'
                                    >
                                        Ver más
                                    </button>
                                    <button
                                        onClick={() => {
                                            addToCart(pizza);
                                        }}
                                        className='btn add-cart'
                                    >
                                        Añadir
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home