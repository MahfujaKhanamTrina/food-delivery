import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (

        <div className='grid text-l ml-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8'>
        {
            items.map(item => <FoodCard
            key={item._id}
            item={item}></FoodCard>)
        }
        </div>
    );
};

export default OrderTab;