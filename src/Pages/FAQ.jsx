import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Leaf, Zap, Shield, Clock } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does Plant Sense detect plant diseases?',
      answer: 'Plant Sense uses a ResNet50 deep learning model powered by TensorFlow Lite running directly on the ESP32 microcontroller. When you press the button, the ESP32-CAM captures a high-resolution image of the plant leaf, which is then analyzed by the AI model to identify any diseases with 99% accuracy.',
      icon: Leaf,
      color: 'green'
    },
    {
      question: 'How fast is the disease detection process?',
      answer: 'The entire process from image capture to result display takes under 2 seconds. The LCD screen shows real-time progress through each stage: capturing image, running detection, saving to database, and displaying the final result with LED indicator feedback.',
      icon: Zap,
      color: 'yellow'
    },
    {
      question: 'Do I need internet connection for Plant Sense to work?',
      answer: 'The core detection process works offline as the AI model runs locally on the ESP32. However, internet connection is required to save detection results to the cloud database (MongoDB) and to access the web dashboard for viewing historical data.',
      icon: Shield,
      color: 'blue'
    },
    {
      question: 'Can I access my detection history remotely?',
      answer: 'Yes! All detection results are automatically synced to MongoDB via our Node.js backend hosted on Vercel. You can access your complete detection history anytime through the React.js web dashboard hosted on Firebase, available on both desktop and mobile devices.',
      icon: Clock,
      color: 'purple'
    },
    {
      question: 'What types of plant diseases can Plant Sense detect?',
      answer: 'Plant Sense is trained on thousands of plant disease images and can identify a wide variety of common leaf diseases. The ResNet50 model specializes in recognizing patterns and symptoms visible on plant leaves, providing accurate classification between healthy and diseased states.',
      icon: Leaf,
      color: 'green'
    },
   
  ];

  const colorClasses = {
    green: {
      bg: 'bg-green-50',
      border: 'border-green-400',
      icon: 'text-green-600',
      gradient: 'from-green-500 to-emerald-600'
    },
    yellow: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-400',
      icon: 'text-yellow-600',
      gradient: 'from-yellow-500 to-orange-500'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-400',
      icon: 'text-blue-600',
      gradient: 'from-blue-500 to-cyan-500'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-400',
      icon: 'text-purple-600',
      gradient: 'from-purple-500 to-pink-500'
    },
    cyan: {
      bg: 'bg-cyan-50',
      border: 'border-cyan-400',
      icon: 'text-cyan-600',
      gradient: 'from-cyan-500 to-teal-500'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-400',
      icon: 'text-orange-600',
      gradient: 'from-orange-500 to-amber-500'
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-400',
      icon: 'text-red-600',
      gradient: 'from-red-500 to-rose-500'
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-300 rounded-full px-4 py-2 shadow-sm">
            <HelpCircle className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-semibold">Got Questions?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Questions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Plant Sense and how it works
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? `${colorClasses[faq.color].border} shadow-2xl`
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                className={`flex items-start space-x-4 p-6 cursor-pointer group ${
                  openIndex === index ? colorClasses[faq.color].bg : 'hover:bg-gray-50'
                }`}
              >
                {/* Icon */}
                <div className={`${colorClasses[faq.color].bg} p-3 rounded-xl flex-shrink-0 ${
                  openIndex === index ? 'scale-110' : 'group-hover:scale-105'
                } transition-transform duration-300`}>
                  <faq.icon className={`w-6 h-6 ${colorClasses[faq.color].icon}`} />
                </div>

                {/* Question Text */}
                <div className="flex-1">
                  <h3 className={`text-lg font-bold transition-colors ${
                    openIndex === index ? 'text-gray-900' : 'text-gray-800 group-hover:text-green-600'
                  }`}>
                    {faq.question}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <div className="flex-shrink-0">
                  <ChevronDown
                    className={`w-6 h-6 ${
                      openIndex === index ? colorClasses[faq.color].icon : 'text-gray-400'
                    } transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className={`pl-16 pr-10 text-gray-600 leading-relaxed`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Help Card */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-5">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          </div>

          <div className="relative text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm mb-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Still Have Questions?
            </h3>
            <p className="text-green-100 text-lg max-w-xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you with any questions about Plant Sense.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <p className="text-white font-semibold">📧 mreza221203@bscse.uiu.ac.bd</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <p className="text-white font-semibold">🕐 24/7 Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;