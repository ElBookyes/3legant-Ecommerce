"use client";
import React, { useState } from "react";
import Link from "next/link";
import CloseIcon from "../icons/closeIcon";
import SearchIcon from "../icons/searchIcon";
import CartButton from "../icons/cartButton";
import Eclipse1 from "../icons/eclipse1";
import HeartIcon from "../icons/heartIcon";
import InstagramIcon from "../icons/instagramIcon";
import FacebookIcon from "../icons/facebookIcon";
import YoutubeIcon from "../icons/youtubeIcon";

type ToggleProps = {
  setToggle: (toggle: boolean) => void;
};

const MobileNavOpen = ({ setToggle }: ToggleProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="kpds-container | fly-menu">
      <nav>
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
        <div className="nav-lists">
            <ul className='kpds-fs-500' role="list">
                  <li data-state="true"><Link href={"/"} className='clean kpds-clr-neutral-300'>Home</Link></li>
                  <li data-state="false"><Link href={"/Shop"} className='clean kpds-clr-neutral-300'>Shop</Link></li>
                  <li data-state="false"><Link href={"/Products"} className='clean kpds-clr-neutral-300'>Products</Link></li>
                  <li data-state="false"><Link href={"/Contacts"} className='clean kpds-clr-neutral-300'>Contact Us</Link></li>
            </ul>
            <ul>
                <li>
                    <p>Cart</p>
                    <div>
                        <CartButton />
                        <Eclipse1 />
                    </div>
                </li>
                <li>
                    <p>Wishlist</p>
                    <div>
                        <HeartIcon />
                        <Eclipse1 />
                    </div>
                </li>
            </ul>
        </div>
        <button>Sign in</button>
        <div>
            <InstagramIcon />
            <FacebookIcon />
            <YoutubeIcon />
        </div>
      </nav>
    </div>
  );
};

export default MobileNavOpen;
