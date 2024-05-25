import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    // Find the product by ID
    const product = products.find(product => product._id === id);
    if (!product) {
        return <div>Product not found</div>;
    }

    //handle the add to cart
    const handleAddToCart=()=>{
        // const userId = "user123"; // Replace with actual user ID***
        fetch('http://localhost:5000/cart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }



    

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={product.image} alt={product.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.brandName}</h2>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.rating}</p>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
