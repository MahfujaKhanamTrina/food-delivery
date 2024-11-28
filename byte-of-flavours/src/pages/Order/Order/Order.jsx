import { useState } from 'react';
import orderCoverImg from '../../../image/our_shop.png'
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories = ['appetizer', 'soup', 'salad', 'pizza', 'pasta', 'meal', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

 

    const appetizer = menu.filter(item => item.category === 'appetizer');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const pasta = menu.filter(item => item.category === 'pasta');
    const meal = menu.filter(item => item.category === 'meal');
    const desserts = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');


    return (
        <div>

            <Helmet>
                <title>Byte of Flavours | Order Food</title>
            </Helmet>

            <div className="h-[500px] w-full overflow-hidden">
            <img src={orderCoverImg} className="h-full w-full object-cover" alt="Description of img3" />
            </div>

            

            <SectionTitle heading="Here's Your food"></SectionTitle>

            <Tabs className="mt-10 mb-10 text-l" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
               <TabList>
                 <Tab>Appetizer</Tab>
                 <Tab>Salad</Tab>
                 <Tab>Soup</Tab>
                 <Tab>Pizza</Tab>
                 <Tab>Pasta</Tab>
                 <Tab>Meal</Tab>
                 <Tab>Dessert</Tab>
                 <Tab>Drinks</Tab>
                 </TabList>

                <TabPanel>
                    <OrderTab items={appetizer}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pasta}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={meal}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>

            </Tabs>
  
        </div  >
    );
};

export default Order;