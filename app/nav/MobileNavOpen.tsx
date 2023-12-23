"use client";
import React, { useState } from "react";
import { motion } from 'framer-motion'
import Link from "next/link";
import CloseIcon from "../icons/closeIcon";
import CartButton from "../icons/cartButton";
import Eclipse1 from "../icons/eclipse1";
import HeartIcon from "../icons/heartIcon";
import InstagramIcon from "../icons/instagramIcon";
import FacebookIcon from "../icons/facebookIcon";
import YoutubeIcon from "../icons/youtubeIcon";
import ShevronDown from "../icons/shevronDown";

type ToggleProps = {
  setToggle: (toggle: boolean) => void;
};

const MobileNavOpen = ({ setToggle }: ToggleProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <motion.div
     initial={{'translateY': '-100%', 'opacity': '0'} as any}
     animate={{'translateY': '0%', 'opacity': '1'} as any}
     transition={{duration: .5}}
     className="kpds-container | fly-menu">
      <nav className="fly-nav">
        <div className="nav-lists">
          <ul className='kpds-fs-500 | main-nav-list' role="list">
          <div className="nav-title kpds-container | flex">
            <Link
            href={"/"}
            className="kpds-fw-bold kpds-fs-900 kpds-scale kpds-pointer kpds-link | brand-logo"
            >
            3legant.
            </Link>
            <button
            className="clean kpds-pointer kpds-scale"
            onClick={() => {
              setToggle(false);
            }}
            >
            <CloseIcon />
            </button>
          </div>
          <label className="search-bar">
            <input
            type="text"
            placeholder="Search"
            value={searchQuery || ""}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input | kpds-fs-500"
            />
            <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            >
            <path
              d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
              stroke="#141718"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              />
            </svg>
          </label>
              <li data-state="true"><Link href={"/"} className='clean kpds-fw-bold'>Home</Link></li>
              <div className="flex | dropdown-item">
                  <li data-state="false"><Link href={"/Shop"} className='clean kpds-fw-bold'>Shop</Link></li>
                  <ShevronDown />
              </div>
              <div className="flex | dropdown-item">
                  <li data-state="false"><Link href={"/Products"} className='clean kpds-fw-bold'>Products</Link></li>
                  <ShevronDown />
              </div>
              <li data-state="false"><Link href={"/Contacts"} className='clean kpds-fw-bold'>Contact Us</Link></li>
          </ul>
          <ul className="secondary-nav-list" role="list">
                <div className="flex">
                  <li>
                    <p className="kpds-fw-semi-bold kpds-clr-neutral-300 kpds-fs-600">Cart</p>
                  </li>
                  <div className="flex | cart-item">
                    <CartButton />
                    <Eclipse1 />
                  </div>
                </div>
                <div className="flex">
                  <li>
                    <p className="kpds-fw-semi-bold kpds-clr-neutral-300 kpds-fs-600">Wishlist</p>
                  </li>
                  <div className="flex | cart-item">
                    <HeartIcon />
                    <Eclipse1 />
                  </div>
                </div>
                <button className="kpds-button kpds-fs-600 | signIn-button">Sign In</button>
                <div className="socials">
                    <InstagramIcon />
                    <FacebookIcon />
                    <YoutubeIcon />
                </div>
            </ul>
        </div>
      </nav>
    </motion.div>
  );
};

export default MobileNavOpen;
