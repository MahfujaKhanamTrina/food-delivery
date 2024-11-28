

import { FaShoppingCart, FaHome, FaList, FaCalendarAlt, FaBook, FaUtensils, FaUsers, FaAddressBook } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { Link } from "react-router-dom";


const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();


    return (
        <div className="flex">
            
            <div className="w-64 min-h-screen bg-[#FFF1D0]">
              <ul className ="menu p-4 text-l mt-20">

                    {
                        isAdmin ? <>
                    
                    <li>   
                        <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink> 
                    </li>

                    <li>   
                        <NavLink to="/dashboard/addItems"><FaUtensils />Add Items</NavLink> 
                    </li>

                    <li>   
                        <NavLink to="/dashboard/manageItems"><FaList/>Manage Items</NavLink> 
                    </li>

                   

                    <li>   
                        <NavLink to="/dashboard/users"><FaUsers/>All Users</NavLink> 
                    </li>

                

                        </> 
                        : 
                        <>

                    <li>   
                        <NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink> 
                    </li>

      

                    <li>   
                        <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink> 
                    </li>


                    <li>   
                        <NavLink to="/dashboard/paymentHistory"><FaCalendarAlt></FaCalendarAlt>Payment Real History</NavLink> 
                    </li>

                    <li>   
                        <NavLink to="/dashboard/contact"><FaAddressBook />Feedback</NavLink> 
                    </li>

                        </>
                    }


                    <div className="divider"></div>

                    <li>   
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink> 
                    </li>

                    <li>   
                        <NavLink to="/order/salad"><FaBook></FaBook>Menu</NavLink> 
                    </li>


               


                </ul>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;