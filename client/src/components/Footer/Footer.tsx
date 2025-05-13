import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; 
import Link from "@/components/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 relative bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
            <p className="mb-4">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex items-center border border-white rounded-md p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white placeholder-white outline-none w-full"
              />
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <p className="mb-2">
              Address: Alexandria, Egypt
            </p>
            <p
              className="mb-2 !text-wrap"
            >
              mahmoudkhames.dev<br />@gmail.com
            </p>
            <p>+01227063324</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="mb-2">Save $3 with App New User Only</p>
            <div className="flex space-x-2 mb-4">
              {/* QR Code - ممكن تضيف صورة QR Code هنا */}
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">QR Code</span>
              </div>
              <div className="flex flex-col space-y-2">
                <a href="#" className="block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-10"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-10"
                  />
                </a>
              </div>
            </div>

            <div className="flex space-x-8">
              <Link href="#">
                <Facebook className="w-6 h-6 hover:text-gray-300" />
              </Link>
              <Link href="#">
                <Twitter className="w-6 h-6 hover:text-gray-300" />
              </Link>
              <Link href="#">
                <Instagram className="w-6 h-6 hover:text-gray-300" />
              </Link>
              <Link href="#">
                <Linkedin className="w-6 h-6 hover:text-gray-300" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400 text-sm">
          © Copyright 2025. All right reserved
        </div>
      </div>
    </footer>
  );
}
