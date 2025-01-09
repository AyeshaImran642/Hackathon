
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-10 w-full bg-white">
      <div className="flex items-center justify-between px-4 sm:px-8 h-20">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Image
            src="/Meubel House.png"
            alt="Meubel House Logo"
            width={48}
            height={32}
            className="object-contain"
          />
          <h1 className="text-2xl font-bold text-black">Furniro</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-black text-2xl"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu />
        </button>

        {/* Navigation and Icons */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full md:static md:flex md:items-center md:justify-center`}
        >
          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row md:space-x-8 text-sm font-medium text-gray-700 md:p-3 items-center mx-auto">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/shop" className="hover:text-black transition-colors">
              Shop
            </Link>
            <Link href="/blog" className="hover:text-black transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-black transition-colors">
              Contact
            </Link>
          </nav>

          {/* Icons Section */}
          <div className="flex justify-center space-x-6 p-4 md:p-0 items-center ml-auto">
            {/* User Icon */}
            <button aria-label="User">
              <FaRegUser className="text-[20px] text-black" />
            </button>

            {/* Search Icon */}
            <button aria-label="Search Icon">
              <CiSearch className="text-[28px] text-black" />
            </button>

            {/* Wishlist Icon */}
            <button aria-label="Wishlist Icon">
              <CiHeart className="text-[28px] text-black" />
            </button>

            {/* Cart Icon */}
            <Link href="/cart" aria-label="Cart Icon">
              <IoCartOutline className="text-[20px]" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
