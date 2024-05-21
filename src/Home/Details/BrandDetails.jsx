import { useLoaderData, useParams } from "react-router-dom";



const BrandDetails = () => {
    const brands = useLoaderData()
    const {id}=useParams()
    const brand =brands.find(brand=>brand._id === id)
    console.log(brand);
    
    return (
        <div>
            <h3>hello:{brand.brandName}</h3>
        </div>
    );
};

export default BrandDetails;