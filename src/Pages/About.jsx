import React from 'react';
import { 
  Users, 
  Target, 
  Eye, 
  Heart, 
  Sprout, 
  Award, 
  Globe, 
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Calendar,
  Shield,
  Zap,
  Leaf
} from 'lucide-react';

import mahfuzImg from '../assets/mahfuz.jpg';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mahfuz Hasan Reza",
      role: "Full Stack Developer",
      bio: "Full-stack developer with expertise in building scalable web applications and real-time data systems.",
      image: mahfuzImg,
      specialties: ["React", "Node.js", "Real-time Systems"]
    },
    {
      id: 2,
      name: "Mahfuz",
      role: "AI & Machine Learning Lead",
      bio: "Former Google AI researcher specializing in computer vision and pattern recognition for agricultural applications.",
      image: mahfuzImg,
      specialties: ["Computer Vision", "Machine Learning", "AI Development"]
    },
    {
      id: 3,
      name: "Hasan",
      role: "Head of Product",
      bio: "Product management expert with a passion for creating technology that makes a positive environmental impact.",
      image: mahfuzImg,
      specialties: ["Product Strategy", "User Experience", "Sustainability"]
    },
    {
      id: 4,
      name: "Hasan Reza",
      role: "Full Stack Developer",
      bio: "Full-stack developer with expertise in building scalable web applications and real-time data systems.",
      image: mahfuzImg,
      specialties: ["React", "Node.js", "Real-time Systems"]
    },
 
  ];

  const values = [
    {
      icon: Eye,
      title: "Early Detection",
      description: "We believe in identifying plant health issues before they become critical, saving crops and resources."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Our solutions promote sustainable farming practices and reduce environmental impact."
    },
    {
      icon: Shield,
      title: "Accuracy",
      description: "We're committed to providing reliable, scientifically-backed disease detection results."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible with AI and agricultural technology."
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Plant Sense was born from a vision to revolutionize plant healthcare using AI technology."
    },
    {
      year: "2023",
      title: "Beta Launch",
      description: "Successfully launched our beta platform with 95% accurate disease detection."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded our services to farmers and gardeners across 50+ countries worldwide."
    },
    {
      year: "2024",
      title: "Research Partnership",
      description: "Partnered with leading agricultural universities for ongoing research and development."
    }
  ];

  const stats = [
    { number: "50K+", label: "Plants Analyzed" },
    { number: "95%", label: "Detection Accuracy" },
    { number: "100+", label: "Diseases Identified" },
    { number: "50+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-green-50 to-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Plant Sense</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to revolutionize plant healthcare through artificial intelligence, 
            making advanced disease detection accessible to everyone from home gardeners to commercial farmers.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-green-200 p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-4">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Protecting Global Food Security Through Technology
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Plant Sense, we combine cutting-edge artificial intelligence with deep agricultural 
                expertise to create solutions that detect plant diseases early, accurately, and affordably. 
                Our technology helps prevent crop loss, reduce pesticide use, and promote sustainable farming practices worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Plant research"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Plant Sense
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:scale-105">
                <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a simple idea to a global platform for plant health
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className="lg:w-1/2 lg:px-8 mb-4 lg:mb-0">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300">
                      <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 flex justify-center lg:justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                  
                  <div className="lg:w-1/2 lg:px-8">
                    {/* Empty space for alignment */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center space-x-2">
              <Users className="w-8 h-8 text-green-600" />
              <span>Meet Our Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate experts in agriculture, technology, and sustainability working together 
              to create a healthier planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-200">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Our Technology</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Powered by Advanced AI</h2>
              <p className="text-green-100 text-lg leading-relaxed mb-6">
                Our proprietary algorithms analyze plant images with 95% accuracy, 
                identifying diseases at their earliest stages. Built on years of 
                agricultural research and millions of data points.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-green-100 text-sm">Detection Accuracy</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-2xl font-bold">2s</div>
                  <div className="text-green-100 text-sm">Average Analysis Time</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="AI Technology"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-3xl shadow-lg border-2 border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our technology or want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600">mreza221203@bscse.uiu.ac.bd</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <p className="text-gray-600">+8801770-452285</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-6 py-3 rounded-full mb-4">
            <Leaf className="w-5 h-5" />
            <span className="font-semibold">Join Our Mission</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Protect Your Plants with AI?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start detecting plant diseases early and keep your garden or farm healthy with Plant Sense.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mr-4">
            Get Started Free
          </button>
          <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;