import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';



const Category = () => {
    return (

      <section>

        <SectionTitle
   
        heading={"Order Online"}></SectionTitle>
                <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src="https://www.unicornsinthekitchen.com/wp-content/uploads/2022/05/Grilled-peach-salad-3.1200px-Copy.jpg" alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-20'>Salad</h3>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src="https://www.sunglowkitchen.com/wp-content/uploads/2023/10/dairy-free-potato-leek-soup-11.jpg" alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-20'>Soup</h3>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src="https://www.sugarsaltmagic.com/wp-content/uploads/2023/08/Creamy-Pesto-Pasta-4.jpg" alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-20'>Pasta</h3>
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://foxeslovelemons.com/wp-content/uploads/2020/10/Instant-Pot-Salmon-2.jpg" alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-20'>Salad</h3>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Desserts.jpg/1200px-Desserts.jpg" alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-20'>Dessert</h3>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src="https://lovingitvegan.com/wp-content/uploads/2020/10/Pumpkin-Pie-Smoothie-9.jpg" alt="" />
            <h3 className='text-4xl uppercase text-center text-white -mt-20'>Drinks</h3>
        </SwiperSlide>

        
      </Swiper>
      </section>

    );
};

export default Category;