import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

        {/* Brand Section */}
        <div>
          <h3 className="font-['Playfair_Display'] text-base sm:text-lg mb-4 text-gray-900">
            SUNTE Fashion Store
          </h3>
          <p className="text-gray-600 text-sm leading-6">
            Your destination for modern fashion.
            Discover curated styles for every season.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 text-sm sm:text-base">
            SHOP
          </h4>
          <ul className="space-y-2 sm:space-y-3 text-sm">
            <li>
              <Link to="/category/men" className="text-gray-600 hover:text-pink-600 transition">
                Men
              </Link>
            </li>
            <li>
              <Link to="/category/women" className="text-gray-600 hover:text-pink-600 transition">
                Women
              </Link>
            </li>
            <li>
              <Link to="/category/kids" className="text-gray-600 hover:text-pink-600 transition">
                Kids
              </Link>
            </li>
            <li>
              <Link to="/category/genz" className="text-gray-600 hover:text-pink-600 transition">
                GenZ
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service Links */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 text-sm sm:text-base">
            CUSTOMER SERVICE
          </h4>
          <ul className="space-y-2 sm:space-y-3 text-sm">
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-pink-600 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/returns" className="text-gray-600 hover:text-pink-600 transition">
                Returns
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="text-gray-600 hover:text-pink-600 transition">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-gray-600 hover:text-pink-600 transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900 text-sm sm:text-base">
            FOLLOW US
          </h4>

          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-10 sm:mt-12 pt-5 sm:pt-6 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} SUNTE. All Rights Reserved.
      </div>
    </footer>
  );
};