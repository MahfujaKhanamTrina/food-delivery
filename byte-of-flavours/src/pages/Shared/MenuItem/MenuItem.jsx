

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-2">
            <img className="w-[130px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">৳{price}</p>      
        </div>
    );
};

export default MenuItem;