import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';

import menuImg from '../../../../image/menmen.png'
import dessertImg from '../../../../image/dessert.png'
import appetizerImg from '../../../../image/appetizer.png'
import pizzaImg from '../../../../image/pizza.png'
import pastaImg from '../../../../image/pasta.png'
import soupImg from '../../../../image/soup.png'
import mealImg from '../../../../image/meal.png'
import saladImg from '../../../../image/salad.png'
import drinksImg from '../../../../image/drinks.png'

import useMenu from '../../../../hooks/useMenu';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {

    const [menu] = useMenu();

    const appetizer = menu.filter(item => item.category === 'appetizer');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const pasta = menu.filter(item => item.category === 'pasta');
    const meal = menu.filter(item => item.category === 'meal');
    const desserts = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>
                    Byte of Flavours | Menu
                </title>
            </Helmet>
            <div className="h-[500px] w-full overflow-hidden">
            <img src={menuImg} className="h-full w-full object-cover" alt="Description of img3" />
            </div>

           

            <SectionTitle

            subHeading="Dont's Miss"
            heading="Today's Offer">

            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory 
            items={appetizer}
            title="appetizer"
            img={appetizerImg}>
            </MenuCategory>

            <MenuCategory 
            items={salad}
            title="salad"
            img={saladImg}>
            </MenuCategory>

            <MenuCategory 
            items={soup}
            title="soup"
            img={soupImg}>
            </MenuCategory>

            <MenuCategory 
            items={pizza}
            title="pizza"
            img={pizzaImg}>
            </MenuCategory>

            <MenuCategory 
            items={pasta}
            title="pasta"
            img={pastaImg}>
            </MenuCategory>

            <MenuCategory 
            items={meal}
            title="meal"
            img={mealImg}>
            </MenuCategory>

            <MenuCategory 
            items={desserts}
            title="dessert"
            img={dessertImg}>
            </MenuCategory>

            <MenuCategory 
            items={drinks}
            title="drinks"
            img={drinksImg}>
            </MenuCategory>
            
     
        </div>
    );
};

export default Menu;