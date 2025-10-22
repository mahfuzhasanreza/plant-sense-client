import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Leaf, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Calendar,
  Search,
  Filter,
  RotateCcw
} from 'lucide-react';

const Dashboard = () => {
  const [diseases, setDiseases] = useState([]);
  const [filteredDiseases, setFilteredDiseases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [lastUpdated, setLastUpdated] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    healthy: 0,
    diseased: 0,
    avgConfidence: 0
  });

  const fetchDiseases = async () => {
    setError(null);
    try {
      const response = await fetch('https://plant-disease-detection-server-one.vercel.app/diseases');
      const result = await response.json();
      
      if (result.success) {
        const diseasesData = result.data;
        setDiseases(diseasesData);
        setFilteredDiseases(diseasesData);
        calculateStats(diseasesData);
        setLastUpdated(new Date());
      } else {
        setError('Failed to fetch data');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data) => {
    const total = data.length;
    const healthy = data.filter(d => d.diseaseType.toLowerCase() === 'healthy').length;
    const diseased = total - healthy;
    const avgConfidence = data.reduce((sum, d) => sum + parseInt(d.confidence), 0) / total;
    
    setStats({ total, healthy, diseased, avgConfidence: avgConfidence.toFixed(1) });
  };

  // Get latest plant info
  const getLatestPlant = () => {
    if (diseases.length === 0) return null;
    
    // Sort by createdAt in descending order and get the first one
    const sortedByDate = [...diseases].sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
    return sortedByDate[0];
  };

  // Search functionality
  useEffect(() => {
    const filtered = diseases.filter(disease =>
      disease.plantType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.diseaseType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.treatment.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDiseases(filtered);
  }, [searchTerm, diseases]);

  // Sort functionality
  useEffect(() => {
    const sorted = [...filteredDiseases];
    
    switch (sortBy) {
      case 'latest':
        sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'oldest':
        sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case 'confidence-high':
        sorted.sort((a, b) => parseInt(b.confidence) - parseInt(a.confidence));
        break;
      case 'confidence-low':
        sorted.sort((a, b) => parseInt(a.confidence) - parseInt(b.confidence));
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.plantType.localeCompare(b.plantType));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.plantType.localeCompare(a.plantType));
        break;
      case 'healthy-first':
        sorted.sort((a, b) => {
          const aHealthy = a.diseaseType.toLowerCase() === 'healthy';
          const bHealthy = b.diseaseType.toLowerCase() === 'healthy';
          return bHealthy - aHealthy;
        });
        break;
      case 'diseased-first':
        sorted.sort((a, b) => {
          const aDiseased = a.diseaseType.toLowerCase() !== 'healthy';
          const bDiseased = b.diseaseType.toLowerCase() !== 'healthy';
          return bDiseased - aDiseased;
        });
        break;
      default:
        break;
    }
    
    setFilteredDiseases(sorted);
  }, [sortBy]);

  // Auto-refresh data periodically
  useEffect(() => {
    // Initial fetch
    fetchDiseases();

    // Set up interval for auto-refresh (every 30 seconds)
    const intervalId = setInterval(fetchDiseases, 30000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatLastUpdated = (date) => {
    if (!date) return '';
    return `Last updated: ${date.toLocaleTimeString('en-US', { 
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    })}`;
  };

  const latestPlant = getLatestPlant();

  const statCards = [
    {
      title: 'Total Scans',
      value: stats.total,
      icon: Activity,
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Healthy Plants',
      value: stats.healthy,
      icon: CheckCircle,
      color: 'green',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Diseased Plants',
      value: stats.diseased,
      icon: AlertCircle,
      color: 'red',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      gradient: 'from-red-500 to-rose-600'
    },
    {
      title: 'Avg Confidence',
      value: `${stats.avgConfidence}%`,
      icon: TrendingUp,
      color: 'purple',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const sortOptions = [
    { value: 'latest', label: 'Latest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'confidence-high', label: 'Confidence: High to Low' },
    { value: 'confidence-low', label: 'Confidence: Low to High' },
    { value: 'name-asc', label: 'Plant Name: A to Z' },
    { value: 'name-desc', label: 'Plant Name: Z to A' },
    { value: 'healthy-first', label: 'Healthy First' },
    { value: 'diseased-first', label: 'Diseased First' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-green-50 to-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Plant Health
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Dashboard</span>
              </h1>
              <p className="text-gray-600">Monitor your plant disease detection history and analytics</p>
              {lastUpdated && (
                <p className="text-sm text-gray-500 mt-1 flex items-center space-x-1">
                  <RotateCcw className="w-3 h-3" />
                  <span>{formatLastUpdated(lastUpdated)}</span>
                  <span className="text-xs text-green-600 ml-2">• Auto-updating</span>
                </p>
              )}
            </div>
{/*             
            <button
              onClick={fetchDiseases}
              disabled={loading}
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RotateCcw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              <span>{loading ? 'Updating...' : 'Update Now'}</span>
            </button> */}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.bgColor} p-3 rounded-xl`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                  {stat.value}
                </div>
              </div>
              <h3 className="text-gray-600 font-semibold">{stat.title}</h3>
            </div>
          ))}
        </div>

        {/* Latest Plant Section */}
        {latestPlant && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-green-600" />
              <span>Latest Plant Scan</span>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full ml-2">
                New
              </span>
            </h2>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-5">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full filter blur-3xl animate-pulse"></div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Leaf className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-semibold">{latestPlant.plantType}</span>
                      </div>
                      
                      <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Calendar className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-semibold">{formatDate(latestPlant.createdAt)}</span>
                      </div>
                      
                      <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Clock className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-semibold">{formatTime(latestPlant.createdAt)}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {latestPlant.diseaseType}
                    </h3>
                    
                    <p className="text-white/90 text-lg mb-4">
                      {latestPlant.treatment}
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                        <p className="text-white text-sm">Confidence: <span className="font-bold">{latestPlant.confidence}</span></p>
                      </div>
                      
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                        latestPlant.diseaseType.toLowerCase() === 'healthy' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {latestPlant.diseaseType.toLowerCase() === 'healthy' ? 'Healthy' : 'Diseased'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-6 flex-shrink-0">
                    {latestPlant.diseaseType.toLowerCase() === 'healthy' ? (
                      <CheckCircle className="w-20 h-20 text-white opacity-80" />
                    ) : (
                      <AlertCircle className="w-20 h-20 text-white opacity-80" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-400 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <p className="text-red-800 font-semibold">{error}</p>
            </div>
          </div>
        )}

        {/* Search and Filter Section */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by plant name, disease, or treatment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white shadow-sm"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-2 border-gray-300 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white shadow-sm"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Detection History */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <Clock className="w-6 h-6 text-green-600" />
              <span>Detection History</span>
              <span className="text-gray-500 text-lg font-normal ml-2">
                ({filteredDiseases.length} {filteredDiseases.length === 1 ? 'record' : 'records'})
              </span>
            </h2>
          </div>
          
          {loading ? (
            <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
              <RotateCcw className="w-12 h-12 text-green-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Loading detection history...</p>
            </div>
          ) : filteredDiseases.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
              <Leaf className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                {searchTerm ? 'No records found matching your search' : 'No detection records found'}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-green-600 hover:text-green-700 font-medium"
                >
                  Clear search
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDiseases.map((disease, index) => (
                <div
                  key={disease._id}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${
                      disease.diseaseType.toLowerCase() === 'healthy' ? 'bg-green-50' : 'bg-red-50'
                    } p-3 rounded-xl`}>
                      {disease.diseaseType.toLowerCase() === 'healthy' ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-red-600" />
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      disease.diseaseType.toLowerCase() === 'healthy' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {disease.confidence}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Leaf className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{disease.plantType}</span>
                    </div>
                    
                    <h3 className={`text-xl font-bold ${
                      disease.diseaseType.toLowerCase() === 'healthy' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {disease.diseaseType}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {disease.treatment}
                    </p>
                    
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(disease.createdAt)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{formatTime(disease.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;