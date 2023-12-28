import React from 'react'
import ArrowLeft from '../icons/arrowLeft'
import ArrowRight from '../icons/arrowRight'
import { useSwiper } from 'swiper/react'

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="custom-navigation">
        <button onClick={() => swiper.slidePrev()} className="swiper-button-prev | clean">
          <ArrowLeft />
        </button>
        <button onClick={() => swiper.slideNext()} className="swiper-button-next | clean">
          <ArrowRight />
        </button>
      </div>
  )
}

export default SwiperNavButtons