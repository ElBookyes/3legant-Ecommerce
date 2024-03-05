import React from 'react'
import Image from 'next/image'
import freeShipping from "../images/icons8-free-shipping-50.png"
import money from "../images/icons8-money-64.png"
import lock from "../images/icons8-lock-50.png"
import call from "../images/icons8-call-50.png"

const ValuesSection = () => {
  return (
    <section className='kpds-container' data-type='wide'>
        <div className="value-section | kpds-flex-group">
          <div className='value-card'>
            <Image src={freeShipping.src} alt='shipping truck' width={50} height={50}></Image>
            <h2>Free Shipping</h2>
            <p>Order above $200</p>
          </div>
          <div className='value-card'>
            <Image src={money.src} alt='shipping truck' width={50} height={50}></Image>
            <h2>Money-back</h2>
            <p>30 days guarantee</p>
          </div>
          <div className='value-card'>
            <Image src={lock.src} alt='shipping truck' width={50} height={50}></Image>
            <h2>Secure payments</h2>
            <p>Secured by Stripe</p>
          </div>
          <div className='value-card'>
            <Image src={call.src} alt='shipping truck' width={50} height={50}></Image>
            <h2>24/7 Support</h2>
            <p>Phone and Email support</p>
          </div>
        </div>
    </section>
  )
}

export default ValuesSection