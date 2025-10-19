import React, { useState, useRef } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  Tag,
  Share2,
  Heart,
  MessageCircle,
  Filter,
  ChevronRight,
  X,
  Play,
  Pause,
  Volume2
} from 'lucide-react';

import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';


const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speech, setSpeech] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Common Plant Diseases and Their Prevention",
      excerpt: "Learn about the most common plant diseases, their symptoms, and effective prevention strategies to keep your plants healthy and thriving.",
      content: `
        <h2>Introduction to Plant Diseases</h2>
        <p>Plant diseases can be caused by various pathogens including fungi, bacteria, and viruses. Early detection is crucial for effective treatment and prevention of widespread damage to your garden or crops.</p>
        
        <h3>Common Types of Plant Diseases</h3>
        <p><strong>Fungal Diseases:</strong> These are among the most common plant diseases. They include powdery mildew, rust, and leaf spot diseases. Fungi thrive in moist conditions and can spread rapidly through spores.</p>
        
        <p><strong>Bacterial Diseases:</strong> Bacterial infections often cause wilting, leaf spots, and cankers. They can enter plants through wounds or natural openings and are difficult to control once established.</p>
        
        <p><strong>Viral Diseases:</strong> Viruses cause mosaic patterns, stunted growth, and leaf curling. They're typically spread by insects and can persist in plants for long periods.</p>
        
        <h3>Prevention Strategies</h3>
        <p>1. <strong>Proper Watering:</strong> Water plants at the base to keep foliage dry and prevent fungal growth.</p>
        <p>2. <strong>Good Air Circulation:</strong> Space plants properly to allow air to circulate freely.</p>
        <p>3. <strong>Sanitation:</strong> Remove and destroy infected plant material promptly.</p>
        <p>4. <strong>Soil Health:</strong> Maintain balanced soil pH and nutrient levels.</p>
        <p>5. <strong>Resistant Varieties:</strong> Choose plant varieties known for disease resistance.</p>
        
        <h3>Early Detection Signs</h3>
        <p>Look for these common symptoms: yellowing leaves, spots or lesions, wilting, stunted growth, and unusual patterns on leaves. Regular inspection is key to catching problems early.</p>
      `,
      author: "Dr. Sarah Green",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "disease-prevention",
      tags: ["plant-care", "disease-prevention", "gardening-tips"],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 2,
      title: "The Science Behind Plant Disease Detection Technology",
      excerpt: "Discover how modern AI and machine learning are revolutionizing plant disease detection and helping farmers worldwide.",
      content: `
        <h2>Revolutionizing Agriculture with AI</h2>
        <p>Advanced computer vision algorithms can now identify plant diseases with remarkable accuracy. This technology analyzes leaf patterns, color variations, and other visual cues to detect issues before they become visible to the naked eye.</p>
        
        <h3>How AI Detection Works</h3>
        <p>Our AI models are trained on millions of plant images showing various diseases and healthy conditions. The system uses convolutional neural networks (CNNs) to analyze new images and compare them against known patterns.</p>
        
        <p><strong>Image Processing:</strong> The system first processes the image to enhance relevant features and remove noise.</p>
        <p><strong>Feature Extraction:</strong> Key characteristics like color distribution, texture patterns, and lesion shapes are identified.</p>
        <p><strong>Classification:</strong> The extracted features are compared against our database to identify specific diseases.</p>
        
        <h3>Benefits of AI Detection</h3>
        <p>1. <strong>Early Detection:</strong> Identify problems days or weeks before human observation</p>
        <p>2. <strong>Accuracy:</strong> 95%+ accuracy in identifying common plant diseases</p>
        <p>3. <strong>Speed:</strong> Get results in seconds instead of days</p>
        <p>4. <strong>Accessibility:</strong> Available to anyone with a smartphone</p>
        
        <h3>Real-World Impact</h3>
        <p>Farmers using our technology have reported up to 30% reduction in crop losses and 25% decrease in pesticide use through targeted treatment applications.</p>
      `,
      author: "Prof. Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "technology",
      tags: ["ai", "technology", "innovation"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Organic Solutions for Common Plant Health Issues",
      excerpt: "Explore natural and organic methods to treat plant diseases without harmful chemicals.",
      content: `
        <h2>Natural Plant Care Solutions</h2>
        <p>Organic gardening focuses on using natural remedies to maintain plant health. From neem oil to companion planting, learn how to create a sustainable garden ecosystem that naturally resists diseases.</p>
        
        <h3>Effective Organic Treatments</h3>
        <p><strong>Neem Oil:</strong> A powerful natural fungicide and insecticide that's safe for beneficial insects.</p>
        <p><strong>Baking Soda Spray:</strong> Effective against powdery mildew and other fungal diseases.</p>
        <p><strong>Garlic and Chili Sprays:</strong> Natural insect repellents that deter common pests.</p>
        <p><strong>Compost Tea:</strong> Boosts plant immunity and improves soil health.</p>
        
        <h3>Companion Planting Strategies</h3>
        <p>Certain plant combinations can naturally repel pests and prevent diseases:</p>
        <p>• Marigolds with tomatoes to deter nematodes</p>
        <p>• Basil with peppers to repel aphids</p>
        <p>• Chives with roses to prevent black spot</p>
        
        <h3>Soil Health Management</h3>
        <p>Healthy soil equals healthy plants. Focus on building soil organic matter, maintaining proper pH, and encouraging beneficial microorganisms.</p>
      `,
      author: "Emma Rodriguez",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "organic-gardening",
      tags: ["organic", "natural-remedies", "sustainable"],
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Seasonal Plant Care: What to Watch For Each Season",
      excerpt: "A comprehensive guide to seasonal plant care and the specific diseases that affect plants during different times of the year.",
      content: `
        <h2>Seasonal Plant Health Guide</h2>
        <p>Each season brings unique challenges for plant health. Spring may bring fungal issues due to moisture, while summer heat can cause stress-related diseases. Learn how to anticipate and prevent seasonal plant problems.</p>
        
        <h3>Spring Care (March-May)</h3>
        <p><strong>Common Issues:</strong> Fungal diseases, damping off, root rot</p>
        <p><strong>Prevention:</strong> Improve drainage, avoid overwatering, use fungicide treatments</p>
        <p><strong>Tasks:</strong> Pruning, soil preparation, early pest monitoring</p>
        
        <h3>Summer Care (June-August)</h3>
        <p><strong>Common Issues:</strong> Heat stress, powdery mildew, spider mites</p>
        <p><strong>Prevention:</strong> Proper watering, shade protection, good air circulation</p>
        <p><strong>Tasks:</strong> Regular watering, mulching, pest control</p>
        
        <h3>Fall Care (September-November)</h3>
        <p><strong>Common Issues:</strong> Leaf spot diseases, preparation for winter</p>
        <p><strong>Prevention:</strong> Clean up fallen leaves, apply fall fertilizers</p>
        <p><strong>Tasks:</strong> Harvesting, bulb planting, winter preparation</p>
        
        <h3>Winter Care (December-February)</h3>
        <p><strong>Common Issues:</strong> Frost damage, rodent problems, winter burn</p>
        <p><strong>Prevention:</strong> Protective coverings, proper pruning timing</p>
        <p><strong>Tasks:</strong> Planning, tool maintenance, indoor plant care</p>
      `,
      author: "David Thompson",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "seasonal-care",
      tags: ["seasonal-care", "maintenance", "gardening-calendar"],
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: 5,
      title: "How to Identify Nutrient Deficiencies in Plants",
      excerpt: "Learn to recognize the signs of nutrient deficiencies and how to properly address them for optimal plant health.",
      content: `
        <h2>Understanding Plant Nutrition</h2>
        <p>Nutrient deficiencies often mimic disease symptoms. Yellowing leaves, stunted growth, and poor flowering can indicate specific nutrient issues. This guide helps you identify and correct these problems effectively.</p>
        
        <h3>Macronutrient Deficiencies</h3>
        <p><strong>Nitrogen (N):</strong> Yellowing of older leaves, stunted growth</p>
        <p><strong>Phosphorus (P):</strong> Purple or reddish leaves, poor root development</p>
        <p><strong>Potassium (K):</strong> Brown leaf edges, weak stems</p>
        
        <h3>Micronutrient Deficiencies</h3>
        <p><strong>Iron (Fe):</strong> Yellowing between leaf veins on new growth</p>
        <p><strong>Magnesium (Mg):</strong> Yellow patches between leaf veins</p>
        <p><strong>Calcium (Ca):</strong> Distorted new growth, blossom end rot</p>
        
        <h3>Soil Testing and Correction</h3>
        <p>Regular soil testing is essential for identifying nutrient imbalances. Based on results:</p>
        <p>• Adjust pH levels</p>
        <p>• Apply specific fertilizers</p>
        <p>• Use organic amendments like compost</p>
        <p>• Consider foliar feeding for quick correction</p>
      `,
      author: "Dr. Lisa Wang",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "plant-nutrition",
      tags: ["nutrients", "soil-health", "plant-care"],
      image: "https://images.unsplash.com/photo-1597848212624-e5ebf38a8534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: 6,
      title: "The Future of Smart Farming: AI in Agriculture",
      excerpt: "Exploring how artificial intelligence is transforming agriculture and plant disease management on a global scale.",
      content: `
        <h2>The AI Agriculture Revolution</h2>
        <p>Smart farming technologies are revolutionizing how we grow food. From drone monitoring to AI-powered disease detection, these innovations are making agriculture more efficient and sustainable.</p>
        
        <h3>Key Technologies Transforming Farming</h3>
        <p><strong>Precision Agriculture:</strong> Using GPS and sensors to apply water, fertilizers, and pesticides only where needed.</p>
        <p><strong>Automated Monitoring:</strong> Drones and ground robots that continuously monitor crop health.</p>
        <p><strong>Predictive Analytics:</strong> AI models that predict disease outbreaks and optimal planting times.</p>
        <p><strong>Automated Harvesting:</strong> Robotics that can identify and harvest ripe produce.</p>
        
        <h3>Benefits for Farmers</h3>
        <p>1. <strong>Increased Yields:</strong> Optimized growing conditions lead to better production</p>
        <p>2. <strong>Reduced Costs:</strong> Precise application of inputs saves money</p>
        <p>3. <strong>Labor Savings:</strong> Automation reduces manual work requirements</p>
        <p>4. <strong>Sustainability:</strong> Reduced environmental impact through efficient resource use</p>
        
        <h3>Future Trends</h3>
        <p>The integration of IoT devices, blockchain for supply chain transparency, and advanced machine learning models will continue to transform agriculture in the coming years.</p>
      `,
      author: "Tech Agriculture Team",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "technology",
      tags: ["smart-farming", "ai", "future-tech"],
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles', count: blogPosts.length },
    { id: 'disease-prevention', name: 'Disease Prevention', count: blogPosts.filter(post => post.category === 'disease-prevention').length },
    { id: 'technology', name: 'Technology', count: blogPosts.filter(post => post.category === 'technology').length },
    { id: 'organic-gardening', name: 'Organic Gardening', count: blogPosts.filter(post => post.category === 'organic-gardening').length },
    { id: 'seasonal-care', name: 'Seasonal Care', count: blogPosts.filter(post => post.category === 'seasonal-care').length },
    { id: 'plant-nutrition', name: 'Plant Nutrition', count: blogPosts.filter(post => post.category === 'plant-nutrition').length }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleLike = (postId) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  const openModal = (post) => {
    setSelectedPost(post);
    setIsPlaying(false);
    // Stop any ongoing speech when opening new modal
    if (speech) {
      speech.cancel();
      setSpeech(null);
    }
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsPlaying(false);
    // Stop speech when closing modal
    if (speech) {
      speech.cancel();
      setSpeech(null);
    }
  };

  const toggleSpeech = () => {
    if (!selectedPost) return;

    if (isPlaying) {
      // Pause speech
      if (speech) {
        speech.pause();
        setIsPlaying(false);
      }
    } else {
      // Start or resume speech
      if (speech) {
        speech.resume();
      } else {
        // Create new speech synthesis
        const utterance = new SpeechSynthesisUtterance();
        
        // Extract text content from HTML (remove HTML tags)
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = selectedPost.content;
        const textContent = tempDiv.textContent || tempDiv.innerText || '';
        
        utterance.text = `${selectedPost.title}. ${textContent}`;
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        utterance.onend = () => {
          setIsPlaying(false);
          setSpeech(null);
        };
        
        utterance.onerror = () => {
          setIsPlaying(false);
          setSpeech(null);
        };
        
        window.speechSynthesis.speak(utterance);
        setSpeech(utterance);
      }
      setIsPlaying(true);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  // Stop speech when component unmounts
  React.useEffect(() => {
    return () => {
      if (speech) {
        window.speechSynthesis.cancel();
      }
    };
  }, [speech]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-green-50 to-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Plant Sense
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover expert insights, latest research, and practical tips on plant health, 
            disease prevention, and agricultural technology.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Category:</span>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border-2 border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <BookOpen className="w-7 h-7 text-green-600" />
              <span>Featured Articles</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      
                      <button 
                        onClick={() => openModal(post)}
                        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <span>
              {selectedCategory !== 'all' || searchTerm ? 'Filtered Articles' : 'All Articles'}
            </span>
            <span className="text-gray-500 text-lg font-normal ml-2">
              ({filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'})
            </span>
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                {searchTerm 
                  ? 'No articles found matching your search' 
                  : 'No articles found in this category'
                }
              </p>
              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 text-green-600 hover:text-green-700 font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                  </div>
                  
                  <div className="p-6">
                    {/* Category and Meta */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center space-x-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        <Tag className="w-3 h-3" />
                        <span>
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                      </span>
                      
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Author and Date */}
                    <div className="flex items-center space-x-3 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index}
                          className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="inline-block text-gray-400 text-xs">
                          +{post.tags.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => toggleLike(post.id)}
                          className={`flex items-center space-x-1 text-sm transition-colors ${
                            likedPosts.has(post.id) 
                              ? 'text-red-600' 
                              : 'text-gray-400 hover:text-red-500'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                          <span>Like</span>
                        </button>
                        
                        <button className="flex items-center space-x-1 text-sm text-gray-400 hover:text-blue-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => openModal(post)}
                        className="inline-flex items-center space-x-1 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                      >
                        <span>Read</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Plant Science</h2>
            <p className="text-green-100 mb-6 text-lg">
              Get the latest articles, research updates, and gardening tips delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
              />
              <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-green-200 text-sm mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Blog Post Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
                <div className="flex items-center space-x-4">
                  {/* Voice Read Button */}
                  {/* <button
                    onClick={toggleSpeech}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                      isPlaying 
                        ? 'bg-red-500 text-white hover:bg-red-600' 
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4" />
                        <span>Listen</span>
                      </>
                    )}
                  </button> */}
                  
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Header Image */}
                <div className="mb-6">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedPost.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Tag className="w-4 h-4" />
                    <span>{categories.find(cat => cat.id === selectedPost.category)?.name}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Blog Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                {/* Actions Footer */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleLike(selectedPost.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        likedPosts.has(selectedPost.id) 
                          ? 'bg-red-50 text-red-600 border border-red-200' 
                          : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedPosts.has(selectedPost.id) ? 'fill-current' : ''}`} />
                      <span>Like</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>
                  
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 text-gray-600 hover:text-gray-700 font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;