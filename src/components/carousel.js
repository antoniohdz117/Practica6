import React from 'react';

const Carousel = ({}) => {
    return(
        <swiper>
            modules={[Navigation, Pagination, Autoplay]}
            pagination
            Autoplay
            spaceBetween ={50}
            slidesPerView={1}
            pagination={{ clickable:true }}
            carrusel
        </swiper>
    );
};

export default Carousel;

