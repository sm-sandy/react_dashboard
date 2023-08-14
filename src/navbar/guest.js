import {Routes, Route, Link} from "react-router-dom";
import Home from "../components/home";
import Login from "../components/login";
import Register from "../components/register";
import Products from "../pages/front_pages/products/Products"
import ProductDetails from "../pages/front_pages/products/ProductDetails"
import CartCheckout from "../pages/front_pages/checkout/CartCheckout"

function Guest() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>} />
            </Routes>
        </div>
    );
}

export default Guest;
