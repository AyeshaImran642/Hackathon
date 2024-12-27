"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Footer from "../../components/Footer";
import Productsection from "../../components/Productsection";

// Import icons
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// Products array with corrected image paths and consistent prices
const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/image 1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/image 2.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    image: "/image 3.png",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: "/image 4.png",
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: "/image 5.png",
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 1.50.000",
    image: "/image 6.png",
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    image: "/image 7.png",
  },
  {
    id: 8,
    name: "Coffee",
    description: "Minimalist Flower Pot",
    price: "Rp 500.000",
    image: "/image 8.png",
  },
  {
    id: 9,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/image 1.png",
  },
  {
    id: 10,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/image 2.png",
  },
  {
    id: 11,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    image: "/image 3.png",
  },
  {
    id: 12,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: "/image 4.png",
  },
  {
    id: 13,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: "/image 5.png",
  },
  {
    id: 14,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 1.50.000",
    image: "/image 6.png",
  },
  {
    id: 15,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    image: "/image 7.png",
  },
  {
    id: 16,
    name: "Coffee",
    description: "Minimalist Flower Pot",
    price: "Rp 500.000",
    image: "/image 8.png",
  },
];

// Product Page Component
const ProductPage = ({ params }: { params: { productId: string } }) => {
  const product = products.find((p) => p.id.toString() === params.productId); // Find product by ID
  const [quantity, setQuantity] = useState(1); // Quantity state

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-red-500">
          404 - Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 py-16">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span>Home</span> {" > "} <span>Shop</span> {" > "}{" "}
          <span>{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Product Images */}
          <div className="flex">
            <div className="flex flex-col space-y-4 mr-4">
              {[product.image, product.image, product.image].map(
                (thumb, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-20 border rounded-lg cursor-pointer hover:border-black"
                  >
                    <Image
                      src={thumb}
                      alt={`Thumbnail ${idx + 1}`}
                      width={80}
                      height={80}
                      className="object-cover rounded-md"
                    />
                  </div>
                )
              )}
            </div>
            <div className="relative group">
              <Image
                src={product.image}
                alt={product.name}
                width={553}
                height={500}
                className="rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-semibold mt-2">
              {product.price}
            </p>
            <div className="flex items-center mt-2 space-x-2">
              <span className="text-yellow-500 text-3xl md:text-4xl">
                ★★★★★
              </span>
              <span className="text-base md:text-lg text-gray-500">
                5 Customer Reviews
              </span>
            </div>
            <p className="text-gray-600 mt-4">
              Setting the bar as one of the loudest speakers in its class, the
              Klipsch is a compact, shelf-mounted hero with a well-balanced
              sound which boasts a clear midrange and extended highs.
            </p>
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">
                Size
              </label>
              <div className="flex space-x-4">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded-md text-sm hover:border-black bg-pink-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">
                Color
              </label>
              <div className="flex space-x-4">
                {["#000000", "#C3A882", "#9466FF"].map((color, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full cursor-pointer border"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center mt-6 space-x-4">
              <div className="flex items-center border rounded-md">
                <button
                  className="px-5 py-3"
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-l border-r"
                />
                <button
                  className="px-5 py-3"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button className="bg-gray-100 text-black px-4 md:px-9 py-2 md:py-4 rounded-md hover:border-black">
                Add to Cart
              </button>
              <button className="bg-gray-100 px-4 md:px-9 py-2 md:py-4 rounded-md border hover:border-black">
                + Compare
              </button>
            </div>

            <hr className="mt-10" />
            <div className="mt-6">
              <p className="text-gray-500 text-sm p-2">SKU: S5001</p>
              <p className="text-gray-500 text-sm p-2">Category: Sofas</p>
              <p className="text-gray-500 text-sm p-2">
                Tags: Sofa, Chair, Home, Shop
              </p>
              <p className="text-gray-500 text-sm p-2 flex items-center">
                Share:
                <span className="flex space-x-4 ml-2">
                  <AiFillTwitterCircle className="text-blue-400 w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
                  <FaFacebook className="text-blue-600 w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
                  <FaLinkedin className="text-blue-700 w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        {/* Tabs */}

        <div className="p-6 max-w-4xl mx-auto mt-9">
          <button className="m-2 md:m-6 p-2 text-gray-500 text-lg font-semibold pb-2 hover:text-black">
            Description
          </button>
          <button className="p-2 m-2 md:m-6 text-gray-500 text-lg font-semibold pb-2 hover:text-black">
            Additional Information
          </button>
          <button className="p-2 m-2 md:m-6 text-gray-500 text-lg font-semibold pb-2 hover:text-black">
            Reviews [5]
          </button>

          {/* Description Content */}
          <div className="mt-6">
            <p className="text-gray-700">
             
              Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the
              Kilburn portable active stereo speaker takes the unmistakable look
              and sound of Marshall, unplugs the chords, and takes the show on
              the road.
            </p>
            <p className="mt-4 text-gray-700">
              
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine-tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-9" />
      <div className="mt-12 md:mt-36">
        <Productsection />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
