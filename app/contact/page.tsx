
// import React from 'react';
// import Navbar from '../components/navbar';
// import Image from 'next/image';
// import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
// import Footer from '../components/Footer';

// export default function Contact() {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />

//       {/* Header Image */}
//       <div className="w-full -mt-1 h-[316px]">
//         <Image
//           src="/contact image.png"
//           alt="Contact Header"
//           width={1440}
//           height={316}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Contact Section */}
//       <div className="bg-white py-16 px-8">
//         <h2 className="text-[36px] font-semibold leading-[54px] text-center font-poppins">
//           Get In Touch With Us
//         </h2>
//         <p className="text-center text-gray-600 mt-4 text-[16px] leading-[24px] font-poppins">
//           For More Information About Our Products & Services, Please Feel Free To Drop<br /> Us An Email. Our Staff Is Always Here To Help You Out. Do Not Hesitate!
//         </p>

//         <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {/* Left Section */}
//           <div className="space-y-8">
//             <div className="flex items-start gap-4">
//               <FaLocationDot className="text-black text-2xl" />
//               <div>
//                 <h3 className="text-lg font-semibold">Address</h3>
//                 <p className="text-gray-600">
//                   226 5th SE Avenue, New<br /> York NY10000, United States
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <FaPhone className="text-black text-2xl" />
//               <div>
//                 <h3 className="text-lg font-semibold">Phone</h3>
//                 <p className="text-gray-600">
//                   Mobile: +1 (84) 546-6789 <br />
//                   Hotline: +1 (84) 456-8789
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <FaClock className="text-black text-2xl" />
//               <div>
//                 <h3 className="text-lg font-semibold">Working Time</h3>
//                 <p className="text-gray-600">
//                   Monday–Friday: 9:00 –<br /> 22:00 <br />
//                   Saturday–Sunday: 9:00 –<br /> 21:00
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div>
//             <form className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Your name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Abc"
//                   className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"

//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="abc@def.com"
//                   className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   placeholder="This is an optional"
//                   className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"

//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   placeholder="Hi! I'd like to ask about..."
//                   className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"

//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="py-2 px-10 bg-[#B88E2F] text-white font-semibold shadow hover:bg-yellow-600 ">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* Features Section */}
// <div className="bg-[#FDF6EE] py-8">
//   <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
//     {/* Feature 1 */}
//     <div className="flex flex-col items-center">
//       <svg className="w-8 h-8 text-black mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//       <h3 className="text-lg font-semibold">High Quality</h3>
//       <p className="text-sm text-gray-600">crafted from top materials</p>
//     </div>

//     {/* Feature 2 */}
//     <div className="flex flex-col items-center">
//       <svg className="w-8 h-8 text-black mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 21a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7z" />
//       </svg>
//       <h3 className="text-lg font-semibold">Warranty Protection</h3>
//       <p className="text-sm text-gray-600">Over 2 years</p>
//     </div>

//     {/* Feature 3 */}
//     <div className="flex flex-col items-center">
//       <svg className="w-8 h-8 text-black mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 21V3m6 18V3" />
//       </svg>
//       <h3 className="text-lg font-semibold">Free Shipping</h3>
//       <p className="text-sm text-gray-600">Order over $150</p>
//     </div>

    
//   </div>
// </div>

//               <Footer />
//     </div>
//   );
// }
// import React from 'react';
// import Navbar from '../components/navbar';
// import Image from 'next/image';
// import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
// import Footer from '../components/Footer';
// import Featuresection from '../components/featuresection';

// export default function Contact() {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />

//       {/* Header Image */}
//       <div className="w-full -mt-1 h-[316px]">
//         <Image
//           src="/contact image.png"
//           alt="Contact Header"
//           width={1440}
//           height={316}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Contact Section */}
//       <div className="bg-white py-16 px-8">
//         <h2 className="text-[36px] font-semibold leading-[54px] text-center font-poppins">
//           Get In Touch With Us
//         </h2>
//         <p className="text-center text-gray-600 mt-4 text-[16px] leading-[24px] font-poppins">
//           For More Information About Our Products & Services, Please Feel Free To Drop<br /> Us An Email. Our Staff Is Always Here To Help You Out. Do Not Hesitate!
//         </p>

//         <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {/* Left Section */}
//           <div className="space-y-8">
//             <div className="flex items-start gap-4">
//               <FaLocationDot className="text-black text-2xl" />
//               <div>
//                 <h3 className="text-lg font-semibold">Address</h3>
//                 <p className="text-gray-600">
//                   226 5th SE Avenue, New<br /> York NY10000, United States
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <FaPhone className="text-black text-2xl" />
//               <div>
//                 <h3 className="text-lg font-semibold">Phone</h3>
//                 <p className="text-gray-600">
//                   Mobile: +1 (84) 546-6789 <br />
//                   Hotline: +1 (84) 456-8789
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <FaClock className="text-black text-2xl" />
//               <div>
//                 <h3 className="text-lg font-semibold">Working Time</h3>
//                 <p className="text-gray-600">
//                   Monday–Friday: 9:00 –<br /> 22:00 <br />
//                   Saturday–Sunday: 9:00 –<br /> 21:00
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div>
//             <form className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Your name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Abc"
//                   className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="abc@def.com"
//                   className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   placeholder="This is an optional"
//                   className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   placeholder="Hi! I'd like to ask about..."
//                   className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="py-2 px-10 bg-[#B88E2F] text-white font-semibold shadow hover:bg-yellow-600">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
      
//               <Featuresection />
//       <Footer />
//     </div>
//   );
// } 


/// perfect 
/// responsive 
import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import Footer from '../components/Footer';
import Featuresection from '../components/featuresection';

export default function Contact() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Header Image */}
      <div className="w-full -mt-1 h-[316px]">
        <Image
          src="/contact image.png"
          alt="Contact Header"
          width={1440}
          height={316}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-[36px] font-semibold leading-[54px] text-center font-poppins">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-600 mt-4 text-[16px] leading-[24px] font-poppins">
          For More Information About Our Products & Services, Please Feel Free To Drop<br /> Us An Email. Our Staff Is Always Here To Help You Out. Do Not Hesitate!
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaLocationDot className="text-black text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-600">
                  226 5th SE Avenue, New<br /> York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-black text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">
                  Mobile: +1 (84) 546-6789 <br />
                  Hotline: +1 (84) 456-8789
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-black text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Working Time</h3>
                <p className="text-gray-600">
                  Monday–Friday: 9:00 –<br /> 22:00 <br />
                  Saturday–Sunday: 9:00 –<br /> 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="abc@def.com"
                  className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi! I'd like to ask about..."
                  className="mt-1 p-5 block w-full border border-gray-300 shadow-sm focus:border-black focus:ring-0 sm:text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="py-2 px-10 bg-[#B88E2F] text-white font-semibold shadow hover:bg-yellow-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Featuresection />
      <Footer />
    </div>
  );
}
