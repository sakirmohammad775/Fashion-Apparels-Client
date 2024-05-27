
import Swal from 'sweetalert2';

const CartItemCard = ({ item, onDelete }) => {
    const { _id, name, brandName, price, image } = item;

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.message === 'Item deleted successfully') {
                        Swal.fire(
                            'Deleted!',
                            'Your item has been deleted.',
                            'success'
                        );
                        onDelete(_id);
                    } else {
                        Swal.fire(
                            'Error!',
                            data.message,
                            'error'
                        );
                    }
                })
                .catch(error => {
                    console.error('Error deleting item:', error);
                    Swal.fire(
                        'Error!',
                        'An error occurred while deleting the item.',
                        'error'
                    );
                });
            }
        });
    };

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <div className="flex justify-between border w-full pr-4 pt-3">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Brand: {brandName}</p>
                    <p>Price: ${price}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">View</button>
                        <button className="btn bg-orange-500" onClick={handleDelete}>X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItemCard;
