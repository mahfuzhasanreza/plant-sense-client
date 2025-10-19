import React, { useState } from 'react';
import { Camera, Brain, Cloud, Monitor, Zap, Shield, Database, Bell } from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: Camera,
      title: 'Smart Image Capture',
      description: 'ESP32-CAM captures high-quality leaf images with a single button press for instant analysis.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      delay: '0ms'
    },
    {
      icon: Brain,
      title: 'AI-Powered Detection',
      description: 'ResNet50 TensorFlow Lite model runs directly on ESP32 for real-time disease identification.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      delay: '100ms'
    },
    {
      icon: Monitor,
      title: 'LCD Progress Display',
      description: 'Real-time system status updates shown on LCD screen through every detection stage.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      delay: '200ms'
    },
    {
      icon: Zap,
      title: 'Visual Feedback System',
      description: 'LED indicators provide instant visual feedback - green for healthy, red for diseased plants.',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      delay: '300ms'
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'Automatic data sync to MongoDB via Node.js backend hosted on Vercel for reliable storage.',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      delay: '400ms'
    },
    {
      icon: Database,
      title: 'Complete History Tracking',
      description: 'Access all previous detection results anytime through your personalized web dashboard.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      delay: '500ms'
    },
    {
      icon: Shield,
      title: 'High Accuracy Detection',
      description: 'Advanced deep learning model ensures 99% accuracy in identifying plant diseases.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      delay: '600ms'
    },
    {
      icon: Bell,
      title: 'Audio Notifications',
      description: 'Buzzer alerts notify you when image capture starts and detection completes.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      delay: '700ms'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-200 to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-300 rounded-full px-4 py-2 shadow-sm">
            <Zap className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-semibold">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Protect Your Plants</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced IoT hardware combined with cutting-edge AI technology delivers comprehensive plant health monitoring
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-green-400 ${
                hoveredFeature === index ? 'transform scale-105 -translate-y-2' : ''
              }`}
              style={{ 
                transitionDelay: feature.delay,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Icon Container */}
              <div className={`relative mb-4 inline-block`}>
                <div className={`absolute inset-0 ${feature.bgColor} rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className={`relative ${feature.bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                
                {/* Floating Indicator */}
                {hoveredFeature === index && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Hover Effect Bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>

              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Feature Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-5">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <div className="text-2xl font-bold">Enterprise Grade</div>
                <div className="text-green-100 text-sm">Reliable & Secure</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Zap className="w-8 h-8 animate-pulse" />
              </div>
              <div>
                <div className="text-2xl font-bold">Lightning Fast</div>
                <div className="text-green-100 text-sm">Real-time Processing</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Cloud className="w-8 h-8" />
              </div>
              <div>
                <div className="text-2xl font-bold">Cloud Connected</div>
                <div className="text-green-100 text-sm">Access Anywhere</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '8', label: 'Hardware Components' },
            { value: '99%', label: 'Detection Accuracy' },
            { value: '<2s', label: 'Processing Time' },
            { value: '24/7', label: 'Cloud Monitoring' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
};

export default Features;