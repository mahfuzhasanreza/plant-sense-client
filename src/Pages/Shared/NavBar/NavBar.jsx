import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, History, Info, Settings } from 'lucide-react';
import logo from '../../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '#dashboard' },
    { name: 'History', icon: History, href: '#history' },
    { name: 'About', icon: Info, href: '#about' },
    { name: 'Settings', icon: Settings, href: '#settings' }
  ];

  const handleNavClick = (itemName) => {
    setActiveTab(itemName);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              {/* <img 
                src="https://cdn-icons-png.flaticon.com/512/628/628283.png" 
                alt="Plant Sense Logo" 
                className="w-12 h-12 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
              /> */}
              <NavLink to="/">
                <img src={logo} alt="Plant Sense Logo" className="w-34 h-34 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
              </NavLink>
            </div>
            {/* <div className="flex flex-col">
              <span className="text-gray-800 font-bold text-2xl tracking-tight group-hover:text-green-600 transition-colors">
                Plant Sense
              </span>
              <span className="text-green-600 text-xs font-semibold uppercase tracking-wider">
                Detect. Protect. Grow.
              </span>
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`group flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                  activeTab === item.name
                    ? 'text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/50'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {activeTab === item.name && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 animate-pulse opacity-20"></div>
                )}
                <item.icon className={`w-5 h-5 relative z-10 ${
                  activeTab === item.name ? 'animate-bounce' : 'group-hover:scale-110'
                } transition-transform`} />
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 relative group"
          >
            <div className="absolute inset-0 bg-green-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 relative z-10 transform rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 relative z-10" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-b from-green-50 to-white border-t border-green-200 px-4 pt-3 pb-4 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.name)}
              className={`flex items-center space-x-3 px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 transform ${
                activeTab === item.name
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:bg-green-100 hover:text-green-700 hover:scale-102'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 50}ms forwards` : 'none'
              }}
            >
              <item.icon className={`w-5 h-5 ${activeTab === item.name ? 'animate-pulse' : ''}`} />
              <span>{item.name}</span>
              {activeTab === item.name && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full animate-ping"></div>
              )}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;