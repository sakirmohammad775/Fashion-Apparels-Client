
import { useEffect } from "react";
import CartItemCard from "./CartItemCard";
import { useState } from "react";

const MyCart = () => {
    const [cartItems, setCartItems] = useState([]);
    
    const fetchCartItems = () => {
        fetch('http://localhost:5000/cart')
            .then(res => res.json())
            .then(data => setCartItems(data))
            .catch(error => console.error('Error fetching cart items:', error));
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    const handleDelete = (id) => {
        setCartItems(cartItems.filter(item => item._id !== id));
    };

    return (
        <div>
            <h3>My Cart</h3>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map(item => (
                        <li key={item._id}>
                            <CartItemCard item={item} onDelete={handleDelete} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items in cart</p>
            )}
        </div>
    );
};

export default MyCart;
