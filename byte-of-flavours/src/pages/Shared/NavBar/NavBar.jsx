import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error));
    };

    const navOptions = (
        <>
            <li className="text-l font-bold mt-4"><Link to="/">Home</Link></li>
            <li className="text-l font-bold mt-4"><Link to="/menu">Our Menu</Link></li>
            <li className="text-l font-bold mt-4"><Link to="/order/salad">Order Food</Link></li>
            <li className="text-l font-bold mt-4"><Link to="/secret">Exercise</Link></li>

            {user && isAdmin && (
                <li className="text-l font-bold mt-4"><Link to="/dashboard/adminHome">Dashboard</Link></li>
            )}

            {user && !isAdmin && (
                <li className="text-l font-bold mt-4"><Link to="/dashboard/userHome">Dashboard</Link></li>
            )}

            <li className="text-xl">
                <Link to="/dashboard/cart">
                    <button className="btn">
                        <FaShoppingCart />
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </Link>
            </li>

            {user ? (
                <>
                    <button onClick={handleLogOut} className="btn btn-ghost text-l mt-2">Logout</button>
                </>
            ) : (
                <li className="text-l mt-4"><Link to="/login">Login</Link></li>
            )}
        </>
    );

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-50 max-w-[1200px] h-8 bg-slate-700 text-white">
                <div className="navbar">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#c67700] lg:bg-slate-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
>
                            {/* Responsive menu has bg-slate-500 */}
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Byte of Flavours</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;
