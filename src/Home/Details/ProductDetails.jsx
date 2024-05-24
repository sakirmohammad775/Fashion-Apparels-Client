import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    // Check if products is defined
    if (!products) {
        return <div>Loading...</div>;
    }
    
    // Find the product by ID
    const product = products.find(product => product._id === id);

    if (!product) {
        return <div>Product not found</div>;
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
                    hello
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
