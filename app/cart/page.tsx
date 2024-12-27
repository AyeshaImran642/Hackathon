
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function CartPage() {
  return (
    <div className="bg-white"> {/* White background for the whole page */}
      <Navbar />

      {/* Header Image */}
      <Image
        src="/contact image.png"
        alt="Cart Header"
        width={1440}
        height={316}
        className="w-full h-[316px] object-cover"
      />

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
            <button className="border border-black text-black py-2 px-4 rounded">Check Out</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
