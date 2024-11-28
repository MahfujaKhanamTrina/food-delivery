
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {

    const [menu] = useMenu();

    const popular = menu.filter(item => item.category === 'popular');

    //const [menu, setMenu] = useState([]);

   // useEffect(() => {
   //     fetch('menu.json')
    //    .then(res => res.json())
    //    .then(data => {
    //        const popularItems = data.filter(item => item.category === 'popular');
     //       setMenu(popularItems)}) 
   // }, [])
    return (
        <div>
            <section className="mb-12">
                <SectionTitle  

                heading="Popular Menu"
                >

                </SectionTitle>

                <div className="grid text-l md:grid-cols-2 gap-4">
                    {
                        popular.map(item => <MenuItem
                        key={item._id}
                        item={item}></MenuItem>)
                    }
                </div>
                <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 border-yellow-500 text-l mt-4"> <Link to="/menu">View Full Menu</Link></button>
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;