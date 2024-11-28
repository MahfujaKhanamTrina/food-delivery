import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const FoodDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const { name, image, recipe, price, nutrition, _id } = location.state.item;

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            };

            axiosSecure.post('/carts', cartItem).then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${name} added to the cart`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                }
            });
        } else {
            Swal.fire({
                title: 'You are not logged in',
                text: 'Please login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, login!!',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div>

            <div className="max-w-4xl mx-auto p-2 mt-2">
                <h1 className="text-3xl text-center font-bold">{name}</h1>
                <div className="flex flex-col md:flex-row items-start">
                    {/* Image on the left side */}
                    <div className="md:w-1/2 flex-shrink-0">
                        <img
                            className="w-full h-[400px] object-contain mt-5"
                            src={image}
                            alt={name}
                        />
                    </div>

                    {/* Information on the right side */}
                    <div className="md:w-1/2 md:ml-8 mt-5 md:mt-0">
                        <p className="mt-5 text-lg">Recipe: {recipe}</p>
                        <h3 className="mt-5 text-2xl">Price: ৳{price}</h3>

                        {/* Nutrition Information */}
                        <div className="mt-5">
                            <h3 className="text-xl font-semibold">
                                Nutrition Information
                            </h3>
                            <table className="table-auto w-full mt-3">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2 font-semibold">Nutrient</th>
                                        <th className="border px-4 py-2 font-semibold">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2 font-medium">Calories</td>
                                        <td className="border px-4 py-2">{nutrition.calories}</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2 font-medium">Protein</td>
                                        <td className="border px-4 py-2">{nutrition.protein}</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2 font-medium">Fat</td>
                                        <td className="border px-4 py-2">{nutrition.fat}</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2 font-medium">Carbohydrates</td>
                                        <td className="border px-4 py-2">{nutrition.carbohydrates}</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2 font-medium">Sodium</td>
                                        <td className="border px-4 py-2">{nutrition.sodium}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Add to Cart Button */}

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                        <button
                            onClick={handleAddToCart}
                            className="btn btn-outline border-0 border-b-4 bg-slate-200 border-yellow-500"
                        >
                            Add to Cart
                        </button>
                    
                        <button className="btn btn-outline border-0 border-b-4 bg-slate-200 border-yellow-500">
                            <Link to="/">Go Back Home</Link>
                        </button>
                    </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
