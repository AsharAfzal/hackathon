import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="ml-2 text-2xl font-bold text-gray-800">SHOP.CO</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/shop" className="text-gray-700 hover:text-gray-900 cursor-pointer">
            Shop
          </Link>
          <Link href="/on-sale" className="text-gray-700 hover:text-gray-900 cursor-pointer">
            On Sale
          </Link>
          <Link href="/new-arrivals" className="text-gray-700 hover:text-gray-900 cursor-pointer">
            New Arrivals
          </Link>
          <Link href="/brands" className="text-gray-700 hover:text-gray-900 cursor-pointer">
            Brands
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="hidden md:block px-4 py-2 border rounded-full"
          />
          <Image src="/cart.png" alt="Cart" width={24} height={24} />
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/shop" className="block px-4 py-2 text-gray-700 hover:text-gray-900 cursor-pointer">
            Shop
          </Link>
          <Link href="/on-sale" className="block px-4 py-2 text-gray-700 hover:text-gray-900 cursor-pointer">
            On Sale
          </Link>
          <Link href="/new-arrivals" className="block px-4 py-2 text-gray-700 hover:text-gray-900 cursor-pointer">
            New Arrivals
          </Link>
          <Link href="/brands" className="block px-4 py-2 text-gray-700 hover:text-gray-900 cursor-pointer">
            Brands
          </Link>
          <input
            type="text"
            placeholder="Search for products..."
            className="block w-full px-4 py-2 border rounded-full mt-2"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
