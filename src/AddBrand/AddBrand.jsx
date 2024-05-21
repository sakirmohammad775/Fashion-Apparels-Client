{/*Image
Name
Brand Name
Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
Price
Short description
Rating
Add button*/}

const AddBrand = () => {
    return (
        <>
            <div className="text-3xl text-center mt-10 mb-20">ADD Brand Product</div>
            <form className="max-w-screen-xl mx-auto">
                {/*First row*/}
                <div className="md:flex md:w-full gap-5 sm:mx-20  md:mx-auto">
                    <div className="md:w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Name</span>
                            </div>
                            <input type="text" placeholder="Type name" name="name" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-bold">Brand Name</span>
                            </div>
                            <input type="text" placeholder="Type here" name="brandName" className="input input-bordered w-full " />

                        </label>
                    </div>
                </div>

                {/*2nd row*/}
                <div className="md:flex md:w-full gap-5 sm:mx-20  md:mx-auto">
                    <div className="md:w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Name</span>
                            </div>
                            <input type="text" placeholder="Type name" name="name" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-bold">Brand Name</span>
                            </div>
                            <input type="text" placeholder="Type here" name="brandName" className="input input-bordered w-full " />

                        </label>
                    </div>
                </div>

                {/*3rd row*/}
                <div className="md:flex md:w-full gap-5 sm:mx-20  md:mx-auto">
                    <div className="md:w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Name</span>
                            </div>
                            <input type="text" placeholder="Type name" name="name" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-bold">Brand Name</span>
                            </div>
                            <input type="text" placeholder="Type here" name="brandName" className="input input-bordered w-full " />

                        </label>
                    </div>
                </div>

                {/*4th row*/}
                <div className="md:flex md:w-full gap-5 sm:mx-20  md:mx-auto">
                    <div className="md:w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Name</span>
                            </div>
                            <input type="text" placeholder="Type name" name="name" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-bold">Brand Name</span>
                            </div>
                            <input type="text" placeholder="Type here" name="brandName" className="input input-bordered w-full " />

                        </label>
                    </div>
                </div>

                 {/*Button*/}
                 


            </form>
        </>
    );
};

export default AddBrand;