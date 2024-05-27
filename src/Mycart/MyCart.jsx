
import { useEffect, useState } from "react";

const MyCart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cart`)
            .then(res => res.json())
            .then(data => setCartItems(data))
            .catch(err => console.error("Error fetching cart items:", err));
    }, []);

    const handleRemove = (itemId) => {
        // Implement the remove item functionality
        fetch(`http://localhost:5000/cart/${itemId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setCartItems(cartItems.filter(item => item._id !== itemId))
                } else {
                    console.error("Failed to remove item from server");
                }
            })
            .catch(err => console.error("Error removing cart item:", err));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-2xl font-bold mb-4">My Cart</h3>
            {cartItems.length > 0 ? (
                <>
                    <ul className="space-y-4">
                        {cartItems.map(item => (
                            <li key={item._id} className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                    <div>
                                        <h2 className="text-xl font-semibold">{item.name}</h2>
                                        <p className="text-gray-500">{item.brandName}</p>
                                        <p className="text-gray-800">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemove(item._id)}
                                    className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 text-right">
                        <p className="text-lg font-semibold">Total Price: ${getTotalPrice().toFixed(2)}</p>
                        <button className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            ) : (
                <p className="text-center text-gray-500">No items in cart</p>
            )}
        </div>
    );
};

export default MyCart;
