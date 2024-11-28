import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

              axiosSecure.delete(`/carts/${id}`)
              .then(res => {
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              })

            }
          });
    }


    return (
        <div className="mt-10 ml-16">
          <div className="flex justify-evenly mt-4 mb-8">
           <h2 className="text-2xl">Total Items: {cart.length}</h2>
           <h2 className="text-2xl">Total Price: ৳ {totalPrice}</h2>
           { cart.length ? <Link to="/dashboard/payment">
           <button className="bg-yellow-200 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300">Pay</button>
           </Link> :
           <button disabled className="bg-yellow-200 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400">Pay</button>
            }
          </div>

          <div className="overflow-x-auto bg-gray-100 p-8 rounded-lg shadow-lg">
  <table className="table w-full text-l">
    {/* head */}
    <thead>
      <tr className="text-l border-b-2 border-gray-400">
        <th>
           #
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Delete Item</th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map((item, index) =>  <tr key={item._id}>
                <th>
                    {index+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>

                  </div>
                </td>
                <td>
                    {item.name}
                </td>
                <td>৳ {item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item._id)} 
                  className="btn btn-ghost btn-lg">
                    <FaTrashAlt className="text-red-500"></FaTrashAlt>
                  </button>
                </th>
              </tr>)
        }





    </tbody>

  </table>
</div>


        </div>
    );
};

export default Cart;