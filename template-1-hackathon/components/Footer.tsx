import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">SHOP.CO</h2>
            <p className="text-gray-600">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex space-x-4">
              <Link href="#">
                <div className="text-gray-600 hover:text-gray-900 cursor-pointer">
                  <i className="fab fa-twitter" />
                </div>
              </Link>
              <Link href="#">
                <div className="text-gray-600 hover:text-gray-900 cursor-pointer">
                  <i className="fab fa-facebook-f" />
                </div>
              </Link>
              <Link href="#">
                <div className="text-gray-600 hover:text-gray-900 cursor-pointer">
                  <i className="fab fa-instagram" />
                </div>
              </Link>
              <Link href="#">
                <div className="text-gray-600 hover:text-gray-900 cursor-pointer">
                  <i className="fab fa-github" />
                </div>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">About</div></Link></li>
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">Features</div></Link></li>
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">Works</div></Link></li>
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">Career</div></Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Help</h3>
            <ul className="space-y-2">
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">Customer Support</div></Link></li>
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">Delivery Details</div></Link></li>
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">Terms & Conditions</div></Link></li>
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">Privacy Policy</div></Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">FAQ</h3>
            <ul className="space-y-2">
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">Account</div></Link></li>
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">Manage Deliveries</div></Link></li>
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">Orders</div></Link></li>
              <li><Link href="#"><div className="text-gray-600 hover:text-gray-900 cursor-pointer">Payment</div></Link></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 pt-6 border-t flex-wrap">
          <div className="text-gray-600 text-center w-full mb-4 md:mb-0 md:w-auto">
            &copy; 2024 SHOP.CO, All rights reserved.
          </div>
          <div className="flex space-x-4 justify-center w-full md:w-auto">
            <Image src="/Visa.png" alt="Payment Method 1" width={40} height={24} />
            <Image src="/master.png" alt="Payment Method 2" width={40} height={24} />
            <Image src="/paypal.png" alt="Payment Method 3" width={40} height={24} />
            <Image src="/ipay.png" alt="Payment Method 4" width={40} height={24} />
            <Image src="/Visa.png" alt="Payment Method 5" width={40} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
