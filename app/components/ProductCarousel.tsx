'use client'
import React from 'react'
import Link from 'next/link'
import ArrowRight from '../icons/arrowRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules'
import ProductCard from './ProductCard'
import sofa from '../images/PCaroSofa.png'
import lamp1 from '../images/lamp1.png'
import lamp2 from '../images/lamp2.png'
import basket from '../images/basket.png'
import toaster from '../images/ToasterIMG.png'


const ProductCarousel = () => {
  return (
    <section className='product-carousel'>
        <div className="flex | product-carousel-title">
            <h1 className='kpds-fw-bold'>New<br />Arrivals</h1>
            <div className='product-carousel-link'>
              <Link className='flex | living-room-link' href={''}>More Products <span><ArrowRight /></span></Link>
            </div>
        </div>
        <Swiper
         className='mySwiper'
         modules={[Scrollbar]}
         slidesPerView={'auto'}
         spaceBetween={20}
         scrollbar={{ draggable: true }}
         >
            <SwiperSlide className='product-carousel-slide'><ProductCard bgimg={sofa}/></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard bgimg={lamp1}/></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard bgimg={lamp2}/></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard bgimg={basket}/></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard bgimg={toaster}/></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard bgimg={sofa}/></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard bgimg={lamp1}/></SwiperSlide>
            <SwiperSlide className='product-carousel-slide'><ProductCard bgimg={lamp2}/></SwiperSlide>
        </Swiper>
    </section>
  )
}

export default ProductCarousel