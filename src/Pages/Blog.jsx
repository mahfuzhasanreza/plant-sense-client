import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedPosts, setLikedPosts] = useState(new Set());

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Common Plant Diseases and Their Prevention",
      excerpt: "Learn about the most common plant diseases, their symptoms, and effective prevention strategies to keep your plants healthy and thriving.",
      content: "Plant diseases can be caused by various pathogens including fungi, bacteria, and viruses. Early detection is crucial for effective treatment. This comprehensive guide covers common symptoms like leaf spots, wilting, and discoloration, along with proven prevention methods.",
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
      content: "Advanced computer vision algorithms can now identify plant diseases with remarkable accuracy. This technology analyzes leaf patterns, color variations, and other visual cues to detect issues before they become visible to the naked eye.",
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
      content: "Organic gardening focuses on using natural remedies to maintain plant health. From neem oil to companion planting, learn how to create a sustainable garden ecosystem that naturally resists diseases.",
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
      content: "Each season brings unique challenges for plant health. Spring may bring fungal issues due to moisture, while summer heat can cause stress-related diseases. Learn how to anticipate and prevent seasonal plant problems.",
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
      content: "Nutrient deficiencies often mimic disease symptoms. Yellowing leaves, stunted growth, and poor flowering can indicate specific nutrient issues. This guide helps you identify and correct these problems effectively.",
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
      content: "Smart farming technologies are revolutionizing how we grow food. From drone monitoring to AI-powered disease detection, these innovations are making agriculture more efficient and sustainable.",
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

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
                      
                      <button className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors">
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
                      
                      <button className="inline-flex items-center space-x-1 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors">
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
      </div>
    </div>
  );
};

export default Blog;