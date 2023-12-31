'use client'
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import 'swiper/css/effect-cards'
import React from 'react'
import SofaImage from '../images/sliderSofa'
import SwiperNavButtons from './arrowButtons'


const HeroSection = () => {
  return (
    <>
      <section>
        <div className="slider">
          <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={50}
           slidesPerView={1}
           navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
           }}
           pagination={{ clickable: true }}
           scrollbar={{draggable: true }}
           loop={true}
           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
           >
            <SwiperSlide><SofaImage /></SwiperSlide>
            <SwiperSlide><SofaImage /></SwiperSlide>
            <SwiperSlide><SofaImage /></SwiperSlide>
            <SwiperSlide><SofaImage /></SwiperSlide>
            <SwiperNavButtons />
          </Swiper>
        </div>
        <div className='kpds-even-columns kpds-container | hero-content'>
          <h1 className='kpds-fw-bold'>Simply Unique <span>/</span> <br /> Simply Better <span>.</span></h1>
          <p><span className='kpds-fw-bold'>3legant</span> is a gift & decorations store based in HCMC, Vietman. Est since 2019.</p>
        </div>
      </section>
    </>
  );
}

export default HeroSection