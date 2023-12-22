'use client'
import React from "react";
import { useState } from "react";

const MenuIcon = () => {
  return (
    <div>
      <svg
        className="clean | menuButton"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7 8H17M7 12H17M7 16H17"
          stroke="#141718"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
