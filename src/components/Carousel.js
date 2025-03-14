import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from "swiper/modules";
import {Navigation} from "react-router";

const Carousel = ({}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
        >
            <SwiperSlide>
                <img src="diapositiva1.jpg" alt="Slide 1" className="Slide" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;

