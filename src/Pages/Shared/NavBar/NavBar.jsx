import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, History, Info, Newspaper, HomeIcon } from 'lucide-react';
import logo from '../../../assets/logo.png';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: HomeIcon, href: '/' },
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
      { name: 'History', icon: History, href: '/history' },
    { name: 'Blog', icon: Newspaper, href: '/blog' },
    { name: 'About', icon: Info, href: '/about' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper function to check if a nav item is active
  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <NavLink to="/" onClick={() => handleNavClick()}>
                <img src={logo} alt="Plant Sense Logo" className="w-34 h-34 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
              </NavLink>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick()}
                  className={({ isActive }) => 
                    `group flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/50'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 animate-pulse opacity-20"></div>
                      )}
                      <item.icon className={`w-5 h-5 relative z-10 ${
                        isActive ? 'animate-bounce' : 'group-hover:scale-110'
                      } transition-transform`} />
                      <span className="relative z-10">{item.name}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
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
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => handleNavClick()}
              className={({ isActive }) => 
                `flex items-center space-x-3 px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 transform ${
                  isActive
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:bg-green-100 hover:text-green-700 hover:scale-102'
                }`
              }
              style={{ 
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                  <span>{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-ping"></div>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;