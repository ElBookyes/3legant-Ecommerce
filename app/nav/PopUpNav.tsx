'use client'
import React from 'react'
import TicketPercent from '../icons/ticketPercent'
import ArrowRight from '../icons/arrowRight'
import CloseIcon from '../icons/closeIcon'
import { motion } from 'framer-motion'
import { useState } from 'react'

const PopUpNav = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <motion.div
     initial = {{'translateY':'-80%'} as any}
     animate = {{'translateY':'0%'} as any}
     transition={{ duration: .5 }}
     className={`kpds-fw-bold kpds-fs-300 ${clicked ? 'kpds-hidden' : 'flex'} | popUp`}>
      <p> <TicketPercent /> 30% off storewide — Limited time! <span><a href="#" className='kpds-clr-secondary-blue'>Shop Now <ArrowRight /></a></span></p>
      <button onClick={() => {setClicked(true), console.log(clicked)}} className={`clean | kpds-scale kpds-transition`}> <CloseIcon /> </button>
    </motion.div>
  )
}

export default PopUpNav