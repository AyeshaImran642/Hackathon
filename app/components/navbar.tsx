// import React from 'react'

// export default function navbar() {
//   return (
//     <div>
//           <header className="relative z-10 w-full h-24 bg-white shadow-md flex items-center justify-between px-8">
//             {/* Logo */}
//       <div className="flex items-center">
//         <Image
//           src="/Meubel House.png"
//           alt="Meubel House Logo"
//           width={48}  
//           height={32} 
//           className="object-contain"  
//         />
//         <h1 className="text-2xl font-bold text-black ml-3">Furniro</h1>
//       </div>
//           </header>

//     </div>
//   )
// }
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { CiSearch, CiHeart } from "react-icons/ci";
// import { FaRegUser } from "react-icons/fa6";


// export default function Navbar() {
//   return (
//     <header className="relative z-10 w-full h-24 bg-white shadow-md flex items-center justify-between px-8">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <Image
//           src="/Meubel House.png"
//           alt="Meubel House Logo"
//           width={48}
//           height={32}
//           className="object-contain"
//         />
//         <h1 className="text-2xl font-bold text-black ml-3">Furniro</h1>
//       </div>

//       {/* Icons Section */}
//       <div className="flex items-center space-x-6">
//         {/* Account Icon */}

//         {/* Search Icon */}
//         <button aria-label="Search">
//         <FaRegUser className="text-1xl text-black" />
//         </button>

//         {/* Search Icon */}
//         <button aria-label="Search">
//           <CiSearch className="text-2xl text-black" />
//         </button>

//         {/* Heart Icon */}
//         <button aria-label="Wishlist">
//           <CiHeart className="text-2xl" />
//         </button>

//         {/* Cart Icon */}
//         <button aria-label="Shopping Cart">
//           <AiOutlineShoppingCart className="text-3x1 " />
//         </button>
//       </div>
//     </header>
//   );
// }


// import React from "react";
// import Image from "next/image";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { CiSearch, CiHeart } from "react-icons/ci";
// import { FaRegUser } from "react-icons/fa6";


// export default function Navbar() {
//   return (
//     <header className="relative z-10 w-full h-24 bg-white shadow-md flex items-center justify-between px-8">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <Image
//           src="/Meubel House.png"
//           alt="Meubel House Logo"
//           width={48}
//           height={32}
//           className="object-contain"
//         />
//         <h1 className="text-2xl font-bold text-black ml-3">Furniro</h1>
//       </div>

//       {/* Icons Section */}
//       <div className="flex items-center space-x-6">

//         {/* Search Icon */}
//          <button aria-label="Search">
//         <FaRegUser className="text-1x5 text-black" />
//          </button>

//         {/* Account Icon */}
//         <button aria-label="Account">
//         <CiSearch className="text-2xl" />
//         </button>


//         {/* Heart Icon */}
//         <button aria-label="Heart Icon">
//         <CiHeart className="text-2xl " />
//         </button>


//         {/* Cart Icon */}
//         <button aria-label="Cart Icon">
//         <AiOutlineShoppingCart className="text-2xl" /> 
//         </button>

//       </div>
//     </header>
//   );
// }
import React from "react";
import Image from "next/image";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="relative z-10 w-full h-24 bg-white shadow-sm flex items-center justify-between px-8">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/Meubel House.png"
          alt="Meubel House Logo"
          width={48}
          height={32}
          className="object-contain"
        />
        <h1 className="text-2xl font-bold text-black ml-3">Furniro</h1>
      </div>

         {/* Navigation Links */}
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-8 text-sm font-medium text-gray-700">
          <li>
            <a href="#" className="hover:text-black transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition-colors">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition-colors">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      
      {/* Icons Section */}
      <div className="flex items-center space-x-6">
         
         {/* User Icon */}
          <button aria-label="User">
         <FaRegUser className="text-1x5 text-black" />
          </button>
        
        {/* Account Icon */}
        <button aria-label="Search Icon">
          <CiSearch className="text-[28px] text-black" />
        </button>

        {/* Heart Icon */}
        <button aria-label="Wishlist Icon">
          <CiHeart className="text-[28px] text-black" />
        </button>

        {/* Cart Icon */}
        <button aria-label="Cart Icon">
          <IoCartOutline className="text-[20px] " />
        </button>
      </div>
    </header>
  );
}
