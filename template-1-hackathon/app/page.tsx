'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const MainSection = () => {
  return (
    <main
      className="flex-grow bg-cover bg-center"
      style={{
        backgroundImage: 'url(/main-bg.png)',
        backgroundColor: '#F2F0F1',
      }}
    >
      {/* Hero Section with Text and Image Side by Side */}
      <section className="relative flex items-center justify-between py-12 max-w-7xl mx-auto px-4">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9640218481424839"
     crossorigin="anonymous"></script>
        {/* Text Section */}
        <div className="text-left max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="text-gray-600 mt-4">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white px-6 py-3 mt-6 rounded-full hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block ml-12">
          <Image
            src="/couple.png"
            alt="Couple wearing stylish clothes"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        {/* Victor Stars */}
        <div>
          {/* Victor(1) (visible only on larger screens) */}
          <Image
            src="/Vector (1).png"
            alt="Victor Star (1)"
            width={50}
            height={50}
            className="absolute top-32 right-20 hidden sm:block"
          />
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">New Arrivals</h2>
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
            <Image
              src="/orange-tshirt.png"
              alt="Orange T-shirt"
              width={150}
              height={150}
            />
            <p className="mt-2 text-gray-700">Orange T-shirt</p>
          </div>
        </div>
      </section>

      {/* Top Selling Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Top Selling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <Image src="/orange-tshirt.png" alt="Orange T-shirt" width={150} height={150} />
            <p className="mt-2 text-gray-700">Orange T-shirt</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <Image src="/shorts.png" alt="Shorts" width={150} height={150} />
            <p className="mt-2 text-gray-700">Denim Shorts</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <Image src="/black-jeans.png" alt="Black Jeans" width={150} height={150} />
            <p className="mt-2 text-gray-700">Black Jeans</p>
          </div>
        </div>
      </section>

      {/* Browse by Dress Style Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Browse by Dress Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <Image src="/casual.png" alt="Casual" width={150} height={150} />
            <p className="mt-2 text-gray-700">Casual</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <Image src="/formal.png" alt="Formal" width={150} height={150} />
            <p className="mt-2 text-gray-700">Formal</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <Image src="/party.png" alt="Party" width={150} height={150} />
            <p className="mt-2 text-gray-700">Party</p>
          </div>
        </div>
      </section>

      {/* Our Happy Customers Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Happy Customers</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-700">"Great quality and fast shipping!" - Customer A</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-700">"Love the new collection!" - Customer B</p>
          </div>
        </div>
      </section>

      {/* Stay Up to Date About Our Latest Offers Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Stay Up to Date About Our Latest Offers</h2>
          <p className="text-gray-700 mb-4">Subscribe to our newsletter to get the latest updates and offers directly to your inbox.</p>
          <form className="flex flex-col md:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-full mb-4 md:mb-0 md:mr-4"
            />
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
};

const Page = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#F2F0F1' }}
    >
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Page;
