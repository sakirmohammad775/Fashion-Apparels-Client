

const BrandCard = ({ brand }) => {
     const {name}=brand

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p>{name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandCard;