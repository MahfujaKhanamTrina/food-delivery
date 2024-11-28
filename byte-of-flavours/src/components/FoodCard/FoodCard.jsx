
import Swal from 'sweetalert2'
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';



const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const {user} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const axiosSecure = useAxiosSecure();

    const [, refetch] = useCart();


    const handleAddToCart = () => {
        if(user && user.email){
//TODO
        // console.log(user.email, food);
         const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
         }
         axiosSecure.post('/carts', cartItem)
         .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} added to the cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
         })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state : {from:location}})
                }
              });
        }
    }


    const handleViewDetails = () => {
        navigate('/food-details', { state: { item } });
    };

    return (
        <div className="-ml-6 card bg-base-100 shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
        <figure>
            <img 
                className="w-full h-48 sm:h-60 md:h-72 object-cover" 
                src={image} 
                alt={name} 
            />
        </figure>
        <div className="card-body p-4">
            <h2 className="card-title sm:text-xl md:text-2xl">{name}</h2>
            <p className="text-sm sm:text-base md:text-l">{recipe}</p>
    
            <div className="card-actions flex flex-col sm:flex-row justify-between items-center mt-4">
                <p className="text-l sm:text-2xl text-yellow-600">৳{price}</p>
                <div className="flex space-x-2">
                    <button
                        className="btn btn-outline border-0 border-b-4 bg-slate-100 border-amber-900 mt-2 sm:mt-0"
                        onClick={handleViewDetails}
                    >
                        View Details
                    </button>
                    <button 
                        onClick={handleAddToCart} 
                        className="btn btn-outline border-0 border-b-4 bg-slate-200 border-yellow-500 mt-2 sm:mt-0"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FoodCard;
