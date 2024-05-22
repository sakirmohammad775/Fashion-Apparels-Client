import { useLoaderData, useParams } from "react-router-dom";



const BrandDetails = () => {
    const brands = useLoaderData()
    const { id } = useParams()
    const brand = brands.find(brand => brand._id === id)
    console.log(brand);

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={brand.imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brand.brandName}</h2>
                    <p>{brand.name}</p>
                    <p>{brand.price}</p>
                    <p>{brand.rating}</p>
                    <div className="card-actions justify-end"></div>
                </div>
            </div>
            

        </>
    );
};

export default BrandDetails;