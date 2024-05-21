
import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Card = () => {
    const brands = useLoaderData();
    console.log("brands:", brands); // Add this line for debugging
    return (
        <div className="md:grid grid-cols-3 my-20">
            {
                brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
            }
        </div>
    );
};

export default Card;
