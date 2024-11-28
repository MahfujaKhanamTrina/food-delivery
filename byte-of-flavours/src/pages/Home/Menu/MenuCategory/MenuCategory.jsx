import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
             { title && <Cover img={img} title={title} ></Cover> }

            <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-4 my-6">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}></MenuItem>)
                }
            </div>

            <Link to={`/order/${title}`}>
              <div className="text-center">
              <button className="btn btn-outline border-0 border-b-4 border-yellow-500 mt-0 text-l"> Order Now!</button>
              </div>
            </Link>
        </div>
    );
};

export default MenuCategory;