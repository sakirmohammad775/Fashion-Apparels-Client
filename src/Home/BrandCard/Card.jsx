
import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Card = () => {
    const brands = useLoaderData();
    // console.log("brands:", brands); // Add this line for debugging

    // Create a map to store the first occurrence of each brand
    const uniqueBrands = new Map();
    brands.forEach(brand => {
        if (!uniqueBrands.has(brand.brandName)) {
            uniqueBrands.set(brand.brandName, brand);
        }
    });

    // Convert the map back to an array
    const uniqueBrandList = Array.from(uniqueBrands.values());

    return (
        <div className="md:grid grid-cols-3 my-20">
            {
                uniqueBrandList.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
            }
        </div>
    );
};

export default Card;
