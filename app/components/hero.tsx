/// new code 
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="relative w-full h-[716.83px]">
//         <Image
//           src="/banner.png"
//           alt="Banner Image"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           className="opacity-1"
//         />

//         Hero Content
//         <div className="absolute top-[253px] left-[739px] bg-[#FFF3E3] w-[643px] h-[443px] rounded-tl-lg flex items-start">
//           <div className="px-8 py-6">
//             <h1
//               className="text-[#333333] font-poppins font-semibold"
//               style={{
//                 fontSize: "16px",
//                 lineHeight: "24px",
//                 letterSpacing: "3px",
//                 marginBottom: "20px",
//               }}
//             >
//               New Arrival
//             </h1>
//             <h1
//               className="text-[#B88E2F] font-poppins font-bold"
//               style={{
//                 fontSize: "52px",
//                 lineHeight: "65px",
//                 textDecoration: "none",
//                 textDecorationSkipInk: "none",
//                 whiteSpace: "pre-wrap",
//               }}
//             >
//               Discover Our {"\n"}New Collection
//             </h1>
//             <p
//               className="mt-6 text-[#000000] font-poppins"
//               style={{ fontSize: "20px", lineHeight: "30px" }}
//             >
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec
//               ullamcorper mattis.
//             </p>
//             <button className="mt-10 px-8 py-4 bg-[#B88E2F] text-white rounded-md hover:bg-[#D4A553] transition">
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Browse Section */}
//       <div className="w-full flex flex-col items-center mt-16">
//         {/* Section Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-[#333333] text-[32px] font-bold leading-[48px] tracking-wider uppercase w-[700]">
//             Browse The Range
//           </h2>

//           <p className="text-[#666666] text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//         </div>

//         <div className="grid grid-cols-3 gap-6 w-[1183px] h-[685px]">
//           {/* First Image */}
//           <div className="flex flex-col items-center">
//             <div className="relative bg-[#F9F9F9] flex items-end justify-center h-[443px] w-full rounded-lg overflow-hidden">
//               <Image
//                 src="/picture 2.png"
//                 alt="Dining Room"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <p className="mt-4 text-[#333333] text-lg font-semibold">Dining</p>
//           </div>

//           {/* Second Image */}
//           <div className="flex flex-col items-center">
//             <div className="relative bg-[#F9F9F9] flex items-end justify-center h-[443px] w-full rounded-lg overflow-hidden">
//               <Image
//                 src="/picture 1.png"
//                 alt="Living Room"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <p className="mt-4 text-[#333333] text-lg font-semibold">Living</p>
//           </div>

//           {/* Third Image */}
//           <div className="flex flex-col items-center">
//             <div className="relative bg-[#F9F9F9] flex items-end justify-center h-[443px] w-full rounded-lg overflow-hidden">
//               <Image
//                 src="/picture 3.png"
//                 alt="Bedroom"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <p className="mt-4 text-[#333333] text-lg font-semibold">Bedroom</p>
//           </div>

          
//         </div>
        
//       </div>
//     </div>
//   );
// }

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[716.83px]">
        {/* Banner Image */}
        <Image
          src="/banner.png"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-1"
        />

        {/* Hero Content */}
        <div className="absolute top-1 left-0 w-full h-full flex items-center justify-end mt-20 p-7 ">
          <div className="bg-[#FFF3E3] w-[90%] md:w-[643px] h-auto md:h-[443px] rounded-tl-lg flex items-start">
            <div className="px-8 py-6">
              <h1 className="text-[#333333] font-poppins font-semibold text-[16px] leading-[24px] tracking-[3px] mb-5 mt-10">
                New Arrival
              </h1>
              <h1 className="text-[#B88E2F] font-poppins font-bold text-[36px] md:text-[52px] leading-[45px] md:leading-[65px] mb-4">
                Discover Our <br /> New Collection
              </h1>
              <p className="mt-4 text-[#000000] font-poppins text-[18px] md:text-[20px] leading-[28px] md:leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec ullamcorper mattis.
              </p>
              <button className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-[#B88E2F] text-white rounded-md hover:bg-[#D4A553] transition">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Browse Section */}
      <div className="w-full flex flex-col items-center mt-16">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[#333333] text-[32px] font-bold leading-[48px] tracking-wider uppercase w-[700]">
            Browse The Range
          </h2>

          <p className="text-[#666666] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 w-[1183px] h-[685px]">
          {/* First Image */}
          <div className="flex flex-col items-center">
            <div className="relative bg-[#F9F9F9] flex items-end justify-center h-[443px] w-full rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/picture 2.png"
                alt="Dining Room"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-4 text-[#333333] text-lg font-semibold">Dining</p>
          </div>

          {/* Second Image */}
          <div className="flex flex-col items-center">
            <div className="relative bg-[#F9F9F9] flex items-end justify-center h-[443px] w-full rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/picture 1.png"
                alt="Living Room"
                layout="fill"
                objectFit="cover"
            
              />
            </div>
            <p className="mt-4 text-[#333333] text-lg font-semibold">Living</p>
          </div>

          {/* Third Image */}
          <div className="flex flex-col items-center">
            <div className="relative bg-[#F9F9F9] flex items-end justify-center h-[443px] w-full rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/picture 3.png"
                alt="Bedroom"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-4 text-[#333333] text-lg font-semibold">Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
