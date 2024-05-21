

{/*Image
Name
Brand Name
Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
Price
Short description
Rating
Add button*/}

const AddBrand = () => {

    const handleButton = event => {
        event.preventDefault()
        const form = event.target

        const name = form.name.value
        const brandName = form.brandName.value
        const type= form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const imageUrl = form.imageUrl.value

        const newBrand={name,brandName,type,price,description,rating,imageUrl}
        console.log(newBrand);
        
        //send new brand data in the server
        fetch('http://localhost:5000/fashion',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newBrand)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <>
            <div className="text-3xl text-center mt-10 mb-20">ADD Brand Product</div>
            <form onSubmit={handleButton} className="max-w-screen-xl mx-auto">
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
                                <span className="label-text font-bold">Type</span>
                            </div>
                            <input type="text" placeholder="Type" name="type" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-bold">Short Description</span>
                            </div>
                            <input type="text" placeholder="Ex-More Elastic" name="description" className="input input-bordered w-full " />

                        </label>
                    </div>
                </div>

                {/*3rd row*/}
                <div className="md:flex md:w-full gap-5 sm:mx-20  md:mx-auto">
                    <div className="md:w-1/2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Price</span>
                            </div>
                            <input type="Number" placeholder="Ex-40$" name="price" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-bold">Rating</span>
                            </div>
                            <input type="text" placeholder="Ex-4.5" name="rating" className="input input-bordered w-full " />

                        </label>
                    </div>
                </div>

                {/*4th row*/}
                <div className="md:flex md:w-full gap-5 sm:mx-20  md:mx-auto">

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Image Url</span>
                        </div>
                        <input type="text" placeholder="image Url" name="imageUrl" className="input input-bordered w-full " />

                    </label>
                </div>
               

                {/*Button*/}
                <input type="submit" className="btn" value="Submit" />


            </form>
        </>
    );
};

export default AddBrand;