import Link from 'next/link'
import React from 'react'
import ArrowRight from '../icons/arrowRight'
import Image from 'next/image'
import chairIMG from '../images/chairImg.png'
import cubbardIMG from '../images/cubbardImg.png'
import toasterIMG from '../images/ToasterIMG.png'

const BannerGrid = () => {
  return (
    <div className='kpds-container | card-grid'>
        <div className='kpds-card | living-room'>
            <div className="living-room-content">
                <h2 className='kpds-fs-900 kpds-fw-bold'>Living Room</h2>
                <Link className='flex | living-room-link' href={''}>Shop Now <span><ArrowRight /></span></Link>
            </div>
            <Image src={chairIMG} alt='ФУТЬОФЪЛ' layout='responsive' />
        </div>
        <div className="kpds-card | bedroom">
            <div className="card-content">
                <h2 className='kpds-fs-900 kpds-fw-bold'>Bedroom</h2>
                <Link className='card-content-link | flex' href={''}>Shop Now <span><ArrowRight /></span></Link>
            </div>
            <Image src={cubbardIMG} alt='a cubbard' layout='responsive'/>
        </div>
        <div className="kpds-card | kitchen">
            <div className="card-content">
                <h2 className='kpds-fs-900 kpds-fw-bold'>Kitchen</h2>
                <Link className='card-content-link | flex' href={''}>Shop Now <span><ArrowRight /></span></Link>
            </div>
            <Image src={toasterIMG} alt='a toaster' layout='responsive'/>
        </div>
    </div>
  )
}

export default BannerGrid