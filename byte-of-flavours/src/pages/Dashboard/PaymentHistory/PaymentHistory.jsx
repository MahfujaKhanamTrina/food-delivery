import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div className="ml-16 mt-10">
            <h2 className="text-3xl mb-8">Total Payments: {payments.length}</h2>

            <div className="overflow-x-auto bg-gray-100 p-8 rounded-lg shadow-lg">
  <table className="table table-zebra text-l">
    {/* head */}
    <thead>
      <tr className="text-l border-b-2 border-gray-400">
        <th>#</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    
    </thead>
    <tbody>
      {payments.map((payment, index) =>       <tr key={payment._id}>
        <th>{index+1}</th>
        <td>{payment.price}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.status}</td>
      </tr>)}

    
    </tbody>
  </table>
</div>

        </div>
    );
};

export default PaymentHistory;