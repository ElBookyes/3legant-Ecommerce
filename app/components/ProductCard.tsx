import React from 'react'
import { StaticImageData } from 'next/image'
import AddToWish from '../icons/AddToWish'
import StarIcon from '../icons/StarIcon'

type Props = {
  bgimg: StaticImageData
}

const ProductCard = ({ bgimg }: Props) => {
    const caroImage = {
        backgroundImage: `url(${bgimg.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
  return (
    <div className='product-card kpds-scale kpds-pointer kpds-transition'>
      <div className='flex | card-image' style={caroImage}>
        <div className='flex | badge-section'>
          <div className='badges'>
            <div className="badge">
              NEW
            </div>
            <div className='badge'>
              -50%
            </div>
          </div>
          <button className='clean'><AddToWish /></button>
        </div>
        <button className='card-button | kpds-button'>Add to cart</button>
      </div>
      <div className='card-info'>
        <div className='flex | rating-group'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <h2>Loveseat Sofa</h2>
        <div className='flex | card-price'>
          <p>$199.00</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard