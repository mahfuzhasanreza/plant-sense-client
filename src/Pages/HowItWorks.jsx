import React, { useState, useEffect } from 'react';
import { Camera, Cpu, Radio, Database, CheckCircle, Bell, Monitor, Activity } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Button Pressed',
      description: 'Press the button to initiate the plant leaf image capture process',
      detail: 'ESP32-CAM activates and prepares to capture high-resolution image',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      number: '02',
      icon: Bell,
      title: 'Buzzer Alerts',
      description: 'Buzzer sounds to indicate image capture has started',
      detail: 'Audio feedback confirms the system is actively capturing',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      number: '03',
      icon: Monitor,
      title: 'LCD: Capturing Image',
      description: 'LCD display shows "Capturing Image" status message',
      detail: 'Real-time visual feedback on the device screen',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      number: '04',
      icon: Radio,
      title: 'Image Transfer',
      description: 'Captured image is sent from ESP32-CAM to ESP32 microcontroller',
      detail: 'Wireless transmission ensures quick data transfer',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      number: '05',
      icon: Cpu,
      title: 'AI Processing',
      description: 'ResNet50 TFLite model runs disease detection on ESP32',
      detail: 'LCD displays "Running Disease Detection" during AI inference',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      number: '06',
      icon: Database,
      title: 'Cloud Storage',
      description: 'Detection result sent to MongoDB via Node.js server on Vercel',
      detail: 'LCD shows "Saving to Database" during POST operation',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      number: '07',
      icon: CheckCircle,
      title: 'Result Display',
      description: 'LCD shows final result: "Healthy" or "Diseased"',
      detail: 'Green LED blinks for healthy, Red LED blinks for diseased',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      number: '08',
      icon: Activity,
      title: 'Web Dashboard',
      description: 'React.js dashboard retrieves and displays all detection history',
      detail: 'Access results remotely via Firebase-hosted web/mobile interface',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-300 rounded-full px-4 py-2 shadow-sm">
            <Activity className="w-4 h-4 text-green-600 animate-pulse" />
            <span className="text-green-700 text-sm font-semibold">Complete Process Flow</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Plant Sense </span>
            Works
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From image capture to cloud dashboard - experience seamless plant disease detection in 8 simple steps
          </p>
        </div>

        {/* Timeline View for Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-pink-500 opacity-20"></div>
            <div 
              className="absolute top-20 left-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-pink-500 transition-all duration-1000"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transform transition-all duration-500 ${
                    activeStep === index ? 'scale-110' : 'scale-100'
                  }`}
                >
                  {/* Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative w-40 h-40 rounded-2xl ${step.bgColor} p-6 shadow-lg ${
                      activeStep === index ? 'ring-4 ring-green-400 shadow-2xl' : ''
                    } transition-all duration-500`}>
                      <div className="flex flex-col items-center justify-center h-full">
                        <step.icon className={`w-12 h-12 ${step.iconColor} mb-2 ${
                          activeStep === index ? 'animate-bounce' : ''
                        }`} />
                        <span className={`text-3xl font-bold ${step.iconColor}`}>{step.number}</span>
                      </div>
                      
                      {activeStep === index && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-30 animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3 className={`text-lg font-bold ${
                      activeStep === index ? 'text-green-600' : 'text-gray-900'
                    } transition-colors`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    {activeStep === index && (
                      <p className="text-xs text-green-600 font-semibold italic animate-pulse">
                        {step.detail}
                      </p>
                    )}
                  </div>

                  {/* Active Indicator */}
                  {activeStep === index && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card View for Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 border-2 ${
                activeStep === index ? 'border-green-400 shadow-2xl scale-105' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`${step.bgColor} p-4 rounded-xl`}>
                  <step.icon className={`w-8 h-8 ${step.iconColor} ${
                    activeStep === index ? 'animate-bounce' : ''
                  }`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`text-2xl font-bold ${step.iconColor}`}>{step.number}</span>
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    {step.detail}
                  </p>
                </div>

                {activeStep === index && (
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Panel */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-5">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative text-center text-white space-y-4">
            <div className="text-3xl font-bold">Complete Process in Under 2 Seconds</div>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              From button press to dashboard update, Plant Sense delivers lightning-fast disease detection with real-time feedback at every stage
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Fully Automated</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Activity className="w-5 h-5 animate-pulse" />
                <span className="font-semibold">Real-time Processing</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Database className="w-5 h-5" />
                <span className="font-semibold">Cloud Synchronized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;