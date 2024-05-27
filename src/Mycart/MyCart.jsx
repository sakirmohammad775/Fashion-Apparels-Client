import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const MyCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/cart?userId=${user.uid}`)
                .then(res => res.json())
                .then(data => setCartItems(data))
                .catch(error => console.error('Error fetching cart items:', error));
        }
    }, [user]);

    const handleRemoveFromCart = (id) => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: 'DELETE',
        })
        .then(res => {
            if (res.ok) {
                setCartItems(cartItems.filter(item => item._id !== id));
                toast.success('Item deleted successfully');
            } else {
                res.json().then(data => {
                    console.error('Failed to delete item:', data.message);
                    toast.error('Failed to delete item');
                });
            }
        })
        .catch(error => {
            console.error('Error deleting item:', error);
            toast.error('Error deleting item');
        });
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <Toaster />
            <h1 className="text-3xl font-bold mb-6">My Cart</h1>
            {cartItems.length > 0 ? (
                <ul className="space-y-4">
                    {cartItems.map(item => (
                        <li key={item._id} className="p-4 bg-white rounded shadow flex items-center">
                            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-4" />
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold">{item.name}</h2>
                                <p className="text-gray-600">{item.brandName}</p>
                                <p className="text-gray-600">${item.price}</p>
                                <p className="text-gray-600">{item.shortDescription}</p>
                            </div>
                            <button
                                onClick={() => handleRemoveFromCart(item._id)}
                                className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">No items in cart</p>
            )}
        </div>
    );
};

export default MyCart;
