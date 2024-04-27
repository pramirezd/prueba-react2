import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { PizzaContext } from '../contexts/PizzaContext';

const PizzaInfo = () => {

    const { id } = useParams();
    const { pizzas, addToCart, localCurrency } = useContext(PizzaContext);
    const navigate = useNavigate();

    return (
        <div className='p-5'>
            {pizzas
                .filter((pizza) => pizza.id === id)
                .map((pizza) => (
                    <div key={pizza.id} className='card row flex-row p-3 m-5'>
                        <div className='col-12 col-md-5'>
                            <img src={pizza.img} className='card-img' alt={pizza.name} />
                        </div>
                        <div className='col-12 col-md-7'>
                            <div className='card-header'>
                                <p className='text-capitalize fw-bold fs-5'>
                                    {pizza.name}
                                </p>
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>{pizza.desc}</p>
                                <p className='fw-bold'>Ingredientes:</p>
                                <ul>
                                    {pizza.ingredients.map((ingredient, index) => (
                                        <li key={index} className='pizza-list'>🍕 {ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='card-footer text-center'>
                                <div className='d-flex justify-content-around align-items-center'>
                                    <p className='card-text moneda-dos'>
                                        Precio: {localCurrency(pizza.price)}
                                    </p>
                                    <button
                                        onClick={() => addToCart(pizza)}
                                        className='btn btn-primary add-cart'
                                    >
                                        Añadir
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    navigate('/home');
                                }}
                                className='btn see-more m-2'
                                >
                                Volver al inicio
                                </button>
                        </div>
                    </div>
                ))};
        </div>
    )
}

export default PizzaInfo