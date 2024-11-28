import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useState, useEffect } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Featured = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('feedback.json') // Ensure feedbacks.json is in the public directory
            .then(res => res.json())
            .then(data => setFeedbacks(data));
    }, []);

    return (
        <section>
            {/* Section Title */}
            <SectionTitle
              
                heading="Our Happy Customers!"
            />

            {/* Swiper Carousel */}
            <Swiper 
                navigation={true} 
                modules={[Navigation]} 
                className="mySwiper"
            >
                {feedbacks.map(feedback => (
                    <SwiperSlide key={feedback._id}>
   
                        <div className=" flex flex-col items-center text-center p-6 mx-8">
                        <Rating 
                        style={{maxWidth: 180}}
                        value={feedback.rating} 
                        readOnly
                        />

                        <h3 className="text-2xl font-bold mt-2 mb-2">{feedback.name}</h3>
                            <p className="text-lg italic mb-4">{feedback.details}</p>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Featured;
