import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {
    const { _id, name, brandName, type, price, description, rating, imageUrl } = brand
    
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brandName}</h2>
                    <p>{name}</p>
                    <p>{price}</p>
                    <p>{rating}</p>

                    <div className="card-actions justify-end">
                       
                    <Link to={`/brand/${brandName}`}> <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandCard;