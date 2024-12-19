import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero'
import Productsection from './components/Productsection';
export default function HomePage() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
      

      {/* Page Content */}
      <main >
        <Hero />
        <Productsection />
      </main>
    </div>
  );
}
