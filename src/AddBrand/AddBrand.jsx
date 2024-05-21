

const AddBrand = () => {
    return (
        <>
            <div className="text-3xl text-center mt-10 mb-20">ADD Brand Product</div>
            <form>
                <div className="">
                    {/*Name */}
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </label>
                    </div>
                    {/* */}
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </label>
                    </div>
                </div>

            </form>
        </>
    );
};

export default AddBrand;