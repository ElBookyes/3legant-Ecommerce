'use client'
import React from 'react'
import { useState } from 'react'
import SearchIcon from '../icons/searchIcon'
import UserIcon from '../icons/userIcon'
import CartButton from '../icons/cartButton'
import Eclipse1 from '../icons/eclipse1'
import MenuIcon from '../icons/menuIcon'
import Link from 'next/link'
import MobileNavOpen from './MobileNavOpen'



const Nav = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
    <header className='kpds-site-header'>
        <div className='kpds-container'>
          <nav className='flex'>
            <div className='flex'>
              <button className="clean kpds-pointer kpds-scale"
                onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setToggle(true)
               } }>
                <MenuIcon />
              </button>
              <Link href={"/"} className="kpds-fw-bold kpds-fs-900 kpds-scale kpds-pointer kpds-link | brand-logo">3legant.</Link>
            </div>
            <ul className='kpds-nav kpds-flex-group kpds-fs-500 | Links' role='list'>
              <li data-state="true"><Link href={"/"} className='clean kpds-clr-neutral-300'>Home</Link></li>
              <li data-state="false"><Link href={"/Shop"} className='clean kpds-clr-neutral-300'>Shop</Link></li>
              <li data-state="false"><Link href={"/Products"} className='clean kpds-clr-neutral-300'>Products</Link></li>
              <li data-state="false"><Link href={"/Contacts"} className='clean kpds-clr-neutral-300'>Contact Us</Link></li>
            </ul>
            <ul className='kpds-nav kpds-flex-group' role='list'>
              <li className='kpds-pointer kpds-scale'><SearchIcon/></li>
              <li className='kpds-pointer kpds-scale'><UserIcon/></li>
              <li className='kpds-scale kpds-pointer flex'>
                <CartButton/>
                <Eclipse1/>
              </li>
            </ul>
          </nav>
        </div>
    </header>
    {toggle && <MobileNavOpen setToggle = {setToggle} />}
    </>
  )
}

export default Nav