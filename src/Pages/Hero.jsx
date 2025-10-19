import React, { useState, useEffect } from 'react';
import { Play, X, Leaf, CheckCircle, Activity, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStatus, setActiveStatus] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const statusItems = [
    { icon: Activity, text: 'Real-time Detection', color: 'text-blue-500' },
    { icon: Leaf, text: 'AI-Powered Analysis', color: 'text-green-500' },
    { icon: CheckCircle, text: '99% Accuracy', color: 'text-emerald-500' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStatus((prev) => (prev + 1) % statusItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      
      {/* --- Modal --- */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 relative w-[90%] md:w-[700px]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>

            {/* YouTube Video */}
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/EMUizAu0flA?si=6nxFZn-GLdaA8_35"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Caption (Optional) */}
            <h3 className="text-lg font-semibold text-gray-700 mt-4 text-center">
              🌿 PlantSense Demo — Detect. Protect. Grow.
            </h3>
          </div>
        </div>
      )}
      
      {/* Animated Background Elements */}
      
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-300 rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 text-sm font-semibold">IoT-Powered Plant Health System</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Plant
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Sense</span>
              </h1>
              <div className="flex items-center space-x-3">
                <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                <p className="text-2xl md:text-3xl font-bold text-green-600">
                  Detect. Protect. Grow.
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Advanced AI-powered plant disease detection system using ESP32, TensorFlow Lite, and real-time cloud monitoring. Protect your plants with instant disease detection and actionable insights.
            </p>

            {/* Status Indicators */}
            <div className="flex flex-wrap gap-4">
              {statusItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-500 ${
                    activeStatus === index
                      ? 'bg-white shadow-lg scale-105 border-2 border-green-400'
                      : 'bg-white/50 border border-gray-200'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${item.color} ${activeStatus === index ? 'animate-pulse' : ''}`} />
                  <span className={`text-sm font-semibold ${activeStatus === index ? 'text-gray-900' : 'text-gray-600'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <NavLink to="/dashboard">Get Started</NavLink>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

        
      {/* --- Button --- */}
      <button
        onClick={openModal}
        className="group px-8 py-4 bg-white text-gray-800 font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-green-400 hover:scale-105"
      >
        <span className="flex items-center justify-center space-x-2">
          <Play className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
          <span>Watch Demo</span>
        </span>
      </button>

      
   
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">99%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">&lt;2s</div>
                <div className="text-sm text-gray-600">Detection Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/628/628283.png"
                    alt="Plant Monitoring"
                    className="w-full h-auto animate-float"
                  />
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float animation-delay-1000 border-2 border-green-200">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <div>
                      <div className="text-sm font-bold text-gray-800">Healthy</div>
                      <div className="text-xs text-gray-500">Last scan: 2m ago</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 animate-float animation-delay-2000 border-2 border-green-200">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-6 h-6 text-blue-500 animate-pulse" />
                    <div>
                      <div className="text-sm font-bold text-gray-800">Scanning...</div>
                      <div className="text-xs text-gray-500">AI Processing</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;