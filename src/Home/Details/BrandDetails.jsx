import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
    const brands = useLoaderData();
    const { brandName } = useParams();
    
    // Filter products by the selected brand name
    const brandProducts = brands.filter(brand => brand.brandName === brandName);

    if (brandProducts.length === 0) {
        return <div>No products found for this brand</div>;
    }

    return (
        <>
        <div><h3 className="text-3xl font-semibold text-center mt-5">{brandName} Product</h3></div>
        <div className="md:grid grid-cols-3 my-20">
            {brandProducts.map(product => (
                <div key={product.name} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product.image} alt={product.name} /></figure>
                    <div className="card-body">
                        
                        <h2 className="card-title">{product.brandName}</h2>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{product.rating}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/product/${product._id}`}><button>View Products</button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default BrandDetails;
