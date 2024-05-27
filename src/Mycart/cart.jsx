
// import { useEffect, useState } from "react";

// const cart = () => {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:5000/cart`)
//             .then(res => res.json())
//             .then(data => setCartItems(data))
//             .catch(error => console.error('Error fetching cart items:', error));
//     }, []);

//     const handleRemoveFromCart = (id) => {
//         fetch(`http://localhost:5000/cart/${id}`, {
//             method: 'DELETE',
//         })
//         .then(res => {
//             if (res.ok) {
//                 setCartItems(cartItems.filter(item => item._id !== id));
//                 console.log('Item deleted successfully');
//             } else {
//                 res.json().then(data => {
//                     console.error('Failed to delete item:', data.message);
//                     // You can show a toast notification here
//                 });
//             }
//         })
//         .catch(error => console.error('Error deleting item:', error));
//     };

//     return (
//         <>
//             <div>
//                 <h3>My Cart</h3>
//                 {cartItems.length > 0 ? (
//                     <ul>
//                         {cartItems.map(item => (
//                             <li key={item._id} className="my-4">
//                                 <h2>{item.name}</h2>
//                                 <p>{item.brandName}</p>
//                                 <p>{item.price}</p>
//                                 <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover" />
//                                 <button
//                                     onClick={() => handleRemoveFromCart(item._id)}
//                                     className="btn btn-danger ml-4"
//                                 >
//                                     Remove
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>No items in cart</p>
//                 )}
//             </div>
//         </>
//     );
// };

// export default cart;
