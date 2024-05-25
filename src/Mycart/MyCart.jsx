
import { useEffect, useState } from "react";

const MyCart = () => {
    const [cartItems,setCartItems]=useState([])
    // const userId='user123' // Replace with actual user ID

    useEffect(()=>{
        fetch(`http://localhost:5000/cart`)
        .then(res=>res.json())
        .then(data=>setCartItems(data))
        
    })
    return (
        <>
            <div>
                <h3>My Cart</h3>
                {cartItems.length>0 ?
                (
                    <ul>
                    {cartItems.map(item=>
                        <li key={item._id}>
                        <h2>{item.name}</h2>
                        <p>{item.brandName}</p>
                        <p>{item.price}</p>
                        <img src={item.imageUrl} alt={item.name} />
                    </li>
                    )}
                </ul>
                ):
                (
                    <p>No items in cart</p>
                )}
                
            </div>
        </>
    );
};

export default MyCart;