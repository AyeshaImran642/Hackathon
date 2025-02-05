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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">Wishlist</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">Home &gt; WishList</p>
        </div>
      </div>
      

      {/* <Footer /> */}
    </div>
  );
}