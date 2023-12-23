'use client'
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import 'swiper/css/effect-cards'
import React from 'react'

const HeroSection = () => {
  return (
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards, FreeMode]}
     spaceBetween={50}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{draggable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
     freeMode
     >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
     </Swiper>
  );
}

export default HeroSection