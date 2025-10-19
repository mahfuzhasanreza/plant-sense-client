import React from 'react';
import { Leaf, Github, Linkedin, Mail, Heart, ExternalLink, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'History', href: '#history' },
    { name: 'About', href: '#about' },
    { name: 'Documentation', href: '#docs' }
  ];

  const resources = [
    { name: 'API Reference', href: '#api' },
    { name: 'Getting Started', href: '#start' },
    { name: 'User Guide', href: '#guide' },
    { name: 'FAQ', href: '#faq' }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-700' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t-2 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/628/628283.png" 
                  alt="Plant Sense Logo" 
                  className="w-10 h-10 relative z-10 transform group-hover:rotate-12 transition-transform duration-300"
                />
              </div>
              <span className="text-gray-800 font-bold text-xl group-hover:text-green-600 transition-colors">
                Plant Sense
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advanced IoT-based plant disease detection system powered by AI. 
              <span className="block mt-2 text-green-600 font-semibold">Detect. Protect. Grow.</span>
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Leaf className="w-4 h-4 text-green-500" />
              <span>Keeping plants healthy, one scan at a time</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center">
              Quick Links
              <div className="ml-2 w-12 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center">
              Resources
              <div className="ml-2 w-12 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
            </h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {resource.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center">
              Connect With Us
              <div className="ml-2 w-12 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:support@plantsense.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300 group text-sm"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>support@plantsense.com</span>
              </a>
              
              {/* Social Links */}
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-2.5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 ${social.color} group border border-gray-200 hover:border-green-400`}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>© {currentYear} Plant Sense. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-600 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using ESP32, TensorFlow & React</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-600 hover:text-green-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-600 hover:text-green-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400"></div>
    </footer>
  );
};

export default Footer;