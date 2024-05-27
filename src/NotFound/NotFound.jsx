
import image from "../assets/404error.jpg"

const NotFound = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
        </>
    );
};

export default NotFound;