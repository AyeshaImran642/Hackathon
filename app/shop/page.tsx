
import Link from 'next/link';
import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import FeatureSection from '../components/featuresection';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/image 1.png" },
  { id: 2, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/image 2.png" },
  { id: 3, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", image: "/image 3.png" },
  { id: 4, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", image: "/image 4.png" },
  { id: 5, name: "Grifo", description: "Night lamp", price: "Rp 1.500.000", image: "/image 5.png" },
  { id: 6, name: "Muggo", description: "Small mug", price: "Rp 1.50.000", image: "/image 6.png" },
  { id: 7, name: "Pingky", description: "Cute bed set", price: "Rp 7.000.000", image: "/image 7.png" },
  { id: 8, name: "Coffee", description: "Minimalist Flower Pot", price: "Rp 500.000", image: "/image 8.png" },
];

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col items-center -mt-32">
        <Image
          src="/contact image.png"
          alt="Contact Header"
          width={1440}
          height={316}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Filter and Sorting Section */}
      <div className="w-full bg-[rgba(249,241,231,1)] h-auto md:h-[100px] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-0 -mt-2">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="flex items-center space-x-2">
            <Image
              src="/Vector.png"
              alt="Filter Icon"
              width={16}
              height={16}
              className="object-contain"
            />
            <button className="border border-gray-400 px-4 py-2 rounded">Filter</button>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/ci_grid-big-round.png"
              alt="Grid View Icon"
              width={16}
              height={16}
              className="object-contain cursor-pointer"
            />
            <Image
              src="/bi_view-list.png"
              alt="List View Icon"
              width={16}
              height={16}
              className="object-contain cursor-pointer"
            />
          </div>
          <span>Showing 1–16 of 32 results</span>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="show" className="text-sm">Show</label>
            <input
              id="show"
              type="text"
              placeholder="16"
              className="border border-gray-400 rounded px-2 py-1 w-12 text-center"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-sm">Sort By</label>
            <select id="sort" className="border border-gray-400 rounded px-2 py-1">
              <option value="default">Default</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6 bg-gray-50">
        {products.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`}>
            <div className="relative w-full bg-white shadow-lg rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-between">
              {/* Product Image */}
              <div className="flex justify-center items-center w-full h-[350px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={285}
                  height={350}
                  className="object-cover"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-yellow-600 px-4 py-2 rounded font-bold mb-4">
                  Add to cart
                </button>
                <div className="flex gap-4 text-white">
                  <span className="cursor-pointer">Share</span>
                  <span className="cursor-pointer">Compare</span>
                  <span className="cursor-pointer">Like</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 text-left">
                <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
                <p className="text-gray-500 text-sm truncate">{product.description}</p>
                <p className="font-bold text-black mt-2">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <FeatureSection />
      <Footer />
    </div>
  );
}
