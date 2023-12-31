import React from 'react'
import Link from 'next/link'
import ArrowRight from '../icons/arrowRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const ProductCarousel = () => {
  return (
    <section>
        <div className="product-carousel-title">
            <h1>New Arrivals</h1>
            <Link className='flex | living-room-link' href={''}>More Products <span><ArrowRight /></span></Link>
        </div>

    </section>
  )
}

export default ProductCarousel