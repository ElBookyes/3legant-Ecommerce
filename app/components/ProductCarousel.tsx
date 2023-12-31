'use client'
import React from 'react'
import Link from 'next/link'
import ArrowRight from '../icons/arrowRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules'
import ProductCard from './ProductCard'

const ProductCarousel = () => {
  return (
    <section className='kpds-section kpds-container'>
        <div className="product-carousel-title">
            <h1>New Arrivals</h1>
            <Link className='flex | living-room-link' href={''}>More Products <span><ArrowRight /></span></Link>
        </div>
        <Swiper
         className='mySwiper'
         modules={[Scrollbar]}
         slidesPerView={'auto'}
         spaceBetween={30}
         scrollbar={{ draggable: true }}
         >
            <SwiperSlide className='product-carousel-slide'><ProductCard /></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard /></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard /></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard /></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard /></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard /></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard /></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard /></SwiperSlide>
        </Swiper>
    </section>
  )
}

export default ProductCarousel