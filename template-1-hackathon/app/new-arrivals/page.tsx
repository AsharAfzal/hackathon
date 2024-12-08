'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const NewArrivals = () => {
  return (
    <main className="flex-grow bg-white">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center mb-10">New Arrivals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <Image src="/tshirt.png" alt="T-shirt" width={150} height={150} />
            <p className="mt-2 text-gray-700">Black T-shirt</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <Image src="/jeans.png" alt="Jeans" width={150} height={150} />
            <p className="mt-2 text-gray-700">Blue Jeans</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <Image src="/shirt.png" alt="Shirt" width={150} height={150} />
            <p className="mt-2 text-gray-700">Checkered Shirt</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <Image src="/orange-tshirt.png" alt="Orange T-shirt" width={150} height={150} />
            <p className="mt-2 text-gray-700">Orange T-shirt</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <Image src="/casual.png" alt="Casual Wear" width={150} height={150} />
            <p className="mt-2 text-gray-700">Casual Wear</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <Image src="/formal.png" alt="Formal Wear" width={150} height={150} />
            <p className="mt-2 text-gray-700">Formal Wear</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <Image src="/party.png" alt="Party Wear" width={150} height={150} />
            <p className="mt-2 text-gray-700">Party Wear</p>
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
      <NewArrivals />
      <Footer />
    </div>
  );
};

export default Page;
