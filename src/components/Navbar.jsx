import { Link } from "react-router-dom";
import pizzaIcon from "../assets/img/pizzaIcon.png";
import cartIcon from "../assets/img/cartIcon.png";
import { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";

const Navbar = () => {

    const { totalCart, localCurrency } = useContext(PizzaContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-color fixed-top" data-bs-theme="dark">
            <div className="container-fluid grid justify-content-around">
                <Link 
                    to="/home"
                    className="navbar-brand pizzeria"
                >
                    <img 
                        src={pizzaIcon} 
                        width={40}
                        alt="Pizza-Icon" 
                        className="me-2"
                    />
                    Pizzeria Mamma Mia!
                </Link>
                <Link 
                    to="/carrito"
                    className={totalCart ? 'cart-total navbar-brand' : 'navbar-brand'}
                >
                    <img 
                        src={cartIcon} 
                        width={40}
                        alt="Cart-Icon"
                        className="me-2"
                    /> 
                    {totalCart ? ' ' + localCurrency(totalCart) : null}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;