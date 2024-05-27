import { useState } from "react";



const MyCart = () => {
    const [cartItems,setCartItems]=useState()

    return (
        <>
            <div>
                <h3>My Cart</h3>
                {cartItems.length > 0 ? (
                    <ul>
                        {cartItems.map(item => (
                            <li key={item._id} className="my-4">
                                <h2>{item.name}</h2>
                                <p>{item.brandName}</p>
                                <p>{item.price}</p>
                                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover" />
                                <button className="btn btn-danger ml-4"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No items in cart</p>
                )}
            </div>
        </>
    );
};

export default MyCart;
