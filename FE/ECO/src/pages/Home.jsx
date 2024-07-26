// import React from 'react';
import { CiSearch } from "react-icons/ci";
import { VscHeart } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiUserOutline } from "react-icons/ti";
import { IoChevronDown } from "react-icons/io5";

export default function Logo() {
  return (
    <>
      <div>
        <nav>
          <div></div>
          <div><h1>LOGO</h1></div>
          <div className="hedIcon">
            <CiSearch className="icon" />
            <VscHeart className="icon" />
            <HiOutlineShoppingBag className="icon" />
            <TiUserOutline className="icon" />
            <div className="eng">ENG <IoChevronDown /></div>
          </div>
        </nav>
      </div>
      {Navbar()}
    </>
  );
}

function Navbar() {
  return <>
    <div className="navbar">
      <ul>
        <li>SHOP</li>
        <li>SKILLS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  </>
}
