


import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2'


const ManageItems = () => {

    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem =  (item) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${item._id}`);
                //console.log(res.data);

                if(res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

            
            }
          });

    }
    return (
        <div>
            <SectionTitle heading="Manage All Items"></SectionTitle>

            <div className="ml-16 mb-8">
            <div className="overflow-x-auto bg-gray-100 p-8 rounded-lg shadow-lg">
  <table className="table w-full text-xl">
    {/* head */}
    <thead>
      <tr className="text-xl border-b-2 border-gray-400 ">
        <th>
            #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th> Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            menu.map((item, index) =>  <tr key={item._id}>
                <td>
                    { index + 1}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  
                  </div>
                </td>
                   
                <td>
                    { item.name }
                </td>
        
                <td>৳ {item.price}</td>

                <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button 
                    className="btn btn-ghost btn-lg">
                    <FaEdit className="text-black font-2xl"></FaEdit>
                    </button>
                    </Link>
                </td>


                <td>
                <button onClick={() => handleDeleteItem(item)} 
                className="btn btn-ghost btn-lg">
                <FaTrashAlt className="text-red-500"></FaTrashAlt>
                </button>
                </td>
              </tr>)
        }
    </tbody>

  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItems;