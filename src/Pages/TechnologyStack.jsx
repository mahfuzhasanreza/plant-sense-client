import React, { useState } from 'react';
import { Cpu, Camera, Monitor, Wifi, Database, Cloud, Code, Smartphone } from 'lucide-react';

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState('hardware');

  // Brain icon component
  const BrainIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    </svg>
  );

  const categories = [
    { id: 'hardware', name: 'Hardware', icon: Cpu, color: 'blue' },
    { id: 'ai', name: 'AI & ML', icon: BrainIcon, color: 'purple' },
    { id: 'backend', name: 'Backend', icon: Database, color: 'green' },
    { id: 'frontend', name: 'Frontend', icon: Code, color: 'cyan' }
  ];

  const technologies = {
    hardware: [
      {
        icon: Camera,
        name: 'ESP32-CAM',
        description: 'High-resolution camera module for leaf image capture',
        specs: '2MP Camera',
        bgGradient: 'from-blue-500 to-blue-700',
        bgSolid: 'bg-blue-600'
      },
      {
        icon: Cpu,
        name: 'ESP32 Microcontroller',
        description: 'Powerful dual-core processor for AI model inference',
        specs: '240MHz',
        bgGradient: 'from-blue-600 to-blue-800',
        bgSolid: 'bg-blue-700'
      },
      {
        icon: Monitor,
        name: 'LCD Display',
        description: 'Real-time status updates and detection results',
        specs: '16x2 LCD',
        bgGradient: 'from-blue-400 to-blue-600',
        bgSolid: 'bg-blue-500'
      },
      {
        icon: Wifi,
        name: 'LED Indicators',
        description: 'Visual feedback system for detection results',
        specs: 'RGB LEDs',
        bgGradient: 'from-blue-700 to-blue-900',
        bgSolid: 'bg-blue-800'
      }
    ],
    ai: [
      {
        icon: Code,
        name: 'ResNet50',
        description: 'Deep residual neural network for disease classification',
        specs: '50 Layers',
        bgGradient: 'from-purple-500 to-purple-700',
        bgSolid: 'bg-purple-600'
      },
      {
        icon: Cpu,
        name: 'TensorFlow Lite',
        description: 'Optimized ML framework for embedded devices',
        specs: 'On-Device AI',
        bgGradient: 'from-purple-600 to-purple-800',
        bgSolid: 'bg-purple-700'
      },
      {
        icon: Monitor,
        name: 'Image Processing',
        description: 'Advanced preprocessing and feature extraction',
        specs: 'Real-time',
        bgGradient: 'from-purple-400 to-purple-600',
        bgSolid: 'bg-purple-500'
      },
      {
        icon: Database,
        name: 'Model Training',
        description: 'Trained on thousands of plant disease images',
        specs: '99% Accuracy',
        bgGradient: 'from-purple-700 to-purple-900',
        bgSolid: 'bg-purple-800'
      }
    ],
    backend: [
      {
        icon: Code,
        name: 'Node.js',
        description: 'High-performance JavaScript runtime for server',
        specs: 'v18+',
        bgGradient: 'from-green-500 to-green-700',
        bgSolid: 'bg-green-600'
      },
      {
        icon: Database,
        name: 'MongoDB',
        description: 'NoSQL database for detection history storage',
        specs: 'Cloud Atlas',
        bgGradient: 'from-green-600 to-green-800',
        bgSolid: 'bg-green-700'
      },
      {
        icon: Cloud,
        name: 'Vercel',
        description: 'Serverless deployment platform for API hosting',
        specs: 'Edge Network',
        bgGradient: 'from-green-400 to-green-600',
        bgSolid: 'bg-green-500'
      },
      {
        icon: Wifi,
        name: 'REST API',
        description: 'RESTful endpoints for data synchronization',
        specs: 'JSON',
        bgGradient: 'from-green-700 to-green-900',
        bgSolid: 'bg-green-800'
      }
    ],
    frontend: [
      {
        icon: Code,
        name: 'React.js',
        description: 'Modern UI library for building dashboard interface',
        specs: 'v18+',
        bgGradient: 'from-cyan-500 to-cyan-700',
        bgSolid: 'bg-cyan-600'
      },
      {
        icon: Smartphone,
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework for responsive design',
        specs: 'Mobile First',
        bgGradient: 'from-cyan-600 to-cyan-800',
        bgSolid: 'bg-cyan-700'
      },
      {
        icon: Cloud,
        name: 'Firebase Hosting',
        description: 'Fast and secure web hosting platform',
        specs: 'Global CDN',
        bgGradient: 'from-cyan-400 to-cyan-600',
        bgSolid: 'bg-cyan-500'
      },
      {
        icon: Monitor,
        name: 'Responsive UI',
        description: 'Optimized for desktop, tablet, and mobile devices',
        specs: 'All Devices',
        bgGradient: 'from-cyan-700 to-cyan-900',
        bgSolid: 'bg-cyan-800'
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-300 rounded-full px-4 py-2 shadow-sm">
            <Cpu className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-semibold">Powered By Innovation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Technology Stack</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge hardware and software working in perfect harmony to deliver exceptional plant disease detection
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group cursor-pointer px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.id === 'hardware' ? 'from-blue-500 to-blue-600' : category.id === 'ai' ? 'from-purple-500 to-purple-600' : category.id === 'backend' ? 'from-green-500 to-green-600' : 'from-cyan-500 to-cyan-600'} text-white shadow-lg scale-110`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <category.icon className={`w-5 h-5 ${activeCategory === category.id ? 'animate-bounce' : ''}`} />
                <span>{category.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies[activeCategory].map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-400 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{
                animation: 'fadeInUp 0.5s ease-out forwards',
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
            >
              {/* Glowing Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

              {/* Icon Container */}
              <div className="relative mb-4">
                <div className={`${tech.bgSolid} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`absolute -inset-2 bg-gradient-to-br ${tech.bgGradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative space-y-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-all">
                  {tech.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tech.description}
                </p>

                {/* Specs Badge */}
                <div className={`inline-block bg-gradient-to-r ${tech.bgGradient} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                  {tech.specs}
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.bgGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Architecture Overview */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Complete End-to-End Architecture
              </h3>
              <p className="text-green-100 text-lg">
                Seamlessly integrated system from hardware to cloud
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Camera className="w-12 h-12 text-white mx-auto mb-3" />
                <h4 className="text-white font-bold text-lg mb-2">Layer 1</h4>
                <p className="text-green-100 text-sm">Hardware Capture</p>
                <p className="text-green-200 text-xs mt-2">ESP32-CAM + Sensors</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Cpu className="w-12 h-12 text-white mx-auto mb-3 animate-pulse" />
                <h4 className="text-white font-bold text-lg mb-2">Layer 2</h4>
                <p className="text-green-100 text-sm">AI Processing</p>
                <p className="text-green-200 text-xs mt-2">ResNet50 + TFLite</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Cloud className="w-12 h-12 text-white mx-auto mb-3" />
                <h4 className="text-white font-bold text-lg mb-2">Layer 3</h4>
                <p className="text-green-100 text-sm">Cloud Backend</p>
                <p className="text-green-200 text-xs mt-2">Node.js + MongoDB</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Smartphone className="w-12 h-12 text-white mx-auto mb-3" />
                <h4 className="text-white font-bold text-lg mb-2">Layer 4</h4>
                <p className="text-green-100 text-sm">User Interface</p>
                <p className="text-green-200 text-xs mt-2">React + Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default TechnologyStack;