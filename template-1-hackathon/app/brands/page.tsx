'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const Brands = () => {
  return (
    <main className="flex-grow bg-white">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center mb-10">Brands</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black p-4 rounded shadow">
            <Image src="/brand1.png" alt="Brand 1" width={150} height={150} />
            <p className="mt-2 text-white">Brand 1</p>
          </div>
          <div className="bg-black p-4 rounded shadow">
            <Image src="/brand2.png" alt="Brand 2" width={150} height={150} />
            <p className="mt-2 text-white">Brand 2</p>
          </div>
          <div className="bg-black p-4 rounded shadow">
            <Image src="/brand3.png" alt="Brand 3" width={150} height={150} />
            <p className="mt-2 text-white">Brand 3</p>
          </div>
          <div className="bg-black p-4 rounded shadow">
            <Image src="/brand4.png" alt="Brand 4" width={150} height={150} />
            <p className="mt-2 text-white">Brand 4</p>
          </div>
          <div className="bg-black p-4 rounded shadow">
            <Image src="/brand5.png" alt="Brand 5" width={150} height={150} />
            <p className="mt-2 text-white">Brand 5</p>
          </div>      
        </div>
        
        {/* Brands Name Strip Section */}
        <div className="py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Popular Brands</h2>
            <div className="flex justify-center mt-4 space-x-8">
              <p className="text-lg text-gray-700">Brand 1</p>
              <p className="text-lg text-gray-700">Brand 2</p>
              <p className="text-lg text-gray-700">Brand 3</p>
              <p className="text-lg text-gray-700">Brand 4</p>
              <p className="text-lg text-gray-700">Brand 5</p>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  );
};

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Brands />
      <Footer />
    </div>
  );
};

export default Page;
