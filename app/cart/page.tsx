
"use client"
import React from 'react';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const router = useRouter();

  const handleCheckoutClick = () => {
    router.push('/checkout');
  };

  return (
    <div className="bg-white"> 
      <Navbar />
<div className="relative w-full flex flex-col items-center">
        <Image
          src="/contact image.png"
          alt="Contact Header"
          width={1440}
          height={316}
          layout="responsive"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">Cart</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">Home &gt; Cart</p>
        </div>
      </div>

      {/* Cart Section */}
      <div className="mt-10 flex flex-col lg:flex-row gap-6 container mx-auto px-6 lg:px-20 py-10">
        {/* Cart Table */}
        <div className="p-6 flex-1 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F9F1E7]">
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {/* Add your cart items here */}
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="bg-[#FAF5F0] p-6 w-full lg:w-80">
          <h1 className="text-xl font-semibold mb-4 text-center">Cart Totals</h1>
          <div className="flex justify-center mb-2">
            <button onClick={handleCheckoutClick} className="border border-black text-black py-2 px-4 rounded">Check Out</button>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
