import React, { useState } from 'react';
import { Shield, Zap, TrendingUp, Award, Globe, Sparkles, Target, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const reasons = [
    {
      icon: Zap,
      title: 'Lightning Fast Detection',
      description: 'Get disease detection results in under 2 seconds with on-device AI processing',
      stats: '<2s',
      statsLabel: 'Detection Time',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Shield,
      title: '99% Accuracy Rate',
      description: 'Advanced ResNet50 deep learning model ensures highly accurate disease identification',
      stats: '99%',
      statsLabel: 'Accuracy',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Globe,
      title: 'Access Anywhere',
      description: 'Cloud-connected dashboard lets you monitor your plants from any device, anytime',
      stats: '24/7',
      statsLabel: 'Availability',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Target,
      title: 'Complete Automation',
      description: 'One-button operation from image capture to cloud storage - fully automated workflow',
      stats: '1-Click',
      statsLabel: 'Operation',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Award,
      title: 'Enterprise Hardware',
      description: 'Industrial-grade ESP32 microcontrollers with robust camera and sensor integration',
      stats: 'ESP32',
      statsLabel: 'Powered',
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Historical Analytics',
      description: 'Track detection history and plant health trends over time with detailed records',
      stats: '∞',
      statsLabel: 'History',
      color: 'from-indigo-500 to-violet-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Sparkles,
      title: 'Real-time Feedback',
      description: 'LCD display, LED indicators, and buzzer provide instant visual and audio feedback',
      stats: 'Live',
      statsLabel: 'Updates',
      color: 'from-cyan-500 to-teal-500',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      icon: Users,
      title: 'Easy to Use',
      description: 'No technical expertise required - designed for farmers, gardeners, and plant enthusiasts',
      stats: 'Simple',
      statsLabel: 'Interface',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  const benefits = [
    { label: 'Prevent Crop Loss', value: '95%', icon: Shield },
    { label: 'Save Time', value: '80%', icon: Zap },
    { label: 'Reduce Costs', value: '70%', icon: TrendingUp },
    { label: 'Increase Yield', value: '60%', icon: Award }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-500 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-300 rounded-full px-4 py-2 shadow-sm">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-semibold">Your Plant's Best Friend</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Plant Sense</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced technology meets simplicity - discover why Plant Sense is the ultimate solution for plant disease detection
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-400 ${
                hoveredCard === index ? 'transform scale-105 -translate-y-2' : ''
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>

              {/* Icon */}
              <div className="relative mb-4">
                <div className={`${reason.bgColor} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className={`w-8 h-8 ${reason.iconColor} ${hoveredCard === index ? 'animate-bounce' : ''}`} />
                </div>
                {hoveredCard === index && (
                  <div className="absolute -inset-2 bg-green-400 rounded-xl blur-md opacity-30 animate-pulse"></div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {reason.description}
              </p>

              {/* Stats Badge */}
              <div className={`inline-flex flex-col items-start bg-gradient-to-r ${reason.color} text-white px-4 py-2 rounded-lg shadow-md`}>
                <span className="text-2xl font-bold">{reason.stats}</span>
                <span className="text-xs opacity-90">{reason.statsLabel}</span>
              </div>

              {/* Bottom Border */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Benefits Panel */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-white opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Measurable Impact on Your Plants
              </h3>
              <p className="text-green-100 text-lg">
                See the difference Plant Sense makes in protecting your crops
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105"
                >
                  <benefit.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-4xl font-bold text-white mb-2">{benefit.value}</div>
                  <div className="text-green-100 text-sm font-semibold">{benefit.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              BEST CHOICE
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Plant Sense</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">AI-powered detection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">Cloud dashboard access</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">Real-time feedback</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">Automated workflow</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-md opacity-75">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600">Manual Inspection</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-500 text-sm">Time-consuming</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-500 text-sm">Requires expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-500 text-sm">Prone to errors</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-500 text-sm">No data tracking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-md opacity-75">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600">Lab Testing</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-500 text-sm">Expensive costs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-500 text-sm">Days of waiting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-500 text-sm">Sample transportation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-500 text-sm">Limited accessibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

export default WhyChooseUs;