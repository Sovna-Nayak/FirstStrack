import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center transform -skew-y-6">
                <span className="text-white font-bold text-xl transform skew-y-6">F</span>
              </div>
              <div className="text-lg font-bold text-gray-900 leading-tight">FIRST TRACK</div>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              First Track delivers fast, reliable, and seamless logistics solutions, ensuring
              timely and secure shipments worldwide.
            </p>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-200"
            >
              About Us
            </Button>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-emerald-600 flex-shrink-0" />
                <span>BMC Bhawani Mall, Saheed Nagar Bhubaneswar, Odisha-751007.</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-emerald-600 flex-shrink-0" />
                <span>+91-8240742313</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-emerald-600 flex-shrink-0" />
                <span>+91-9040170727</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-emerald-600 flex-shrink-0" />
                <span>info@firsttrack.site</span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Pick & Drop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Packaging
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  International & Domestic Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Refund & Cancellation
                </a>
              </li>
            </ul>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">Follow Us:</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-200 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                >
                  <Facebook size={18} className="text-gray-700 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-200 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                >
                  <Twitter size={18} className="text-gray-700 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-200 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                >
                  <Instagram size={18} className="text-gray-700 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-200 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                >
                  <Linkedin size={18} className="text-gray-700 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-200 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                >
                  <Youtube size={18} className="text-gray-700 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8">
          <div className="bg-black text-white py-4 px-6 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-center md:text-left">
                Copyright © 2024 First Track Solution Technologies. All rights reserved
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Home
                </a>
                <span className="text-gray-500">|</span>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
                <span className="text-gray-500">|</span>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  About Us
                </a>
                <span className="text-gray-500">|</span>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-500">|</span>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Terms Of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;