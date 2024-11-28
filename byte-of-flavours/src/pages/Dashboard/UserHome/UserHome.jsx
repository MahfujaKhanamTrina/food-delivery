import useAuth from "../../../hooks/useAuth";

const UserHome = () => {

    const {user} = useAuth();

    return (
        <div>
             <h2 className = "text-3xl mt-10 ml-10"> Hi,
             
                {
                    user?.displayName ? user.displayName : 'Back'
                }

<p className="mt-4"> Welcome to Your Dashboard</p>
             </h2>
        </div>
    )
}
export default UserHome;