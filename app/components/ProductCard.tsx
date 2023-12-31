import React from 'react'
import sofa from '../images/PCaroSofa.png'

const ProductCard = () => {
    const caroImage = {
        backgroundImage: `url(${sofa.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
  return (
    <div className='product-card' style={caroImage}>
    </div>
  )
}

export default ProductCard