import React, { useState, useEffect } from 'react';
import { Activity, Leaf, AlertCircle, CheckCircle, Clock, TrendingUp, RefreshCw, Calendar } from 'lucide-react';

const Dashboard = () => {
  const [diseases, setDiseases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    healthy: 0,
    diseased: 0,
    avgConfidence: 0
  });

  const fetchDiseases = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://plant-disease-detection-server-one.vercel.app/diseases');
      const result = await response.json();
      
      if (result.success) {
        setDiseases(result.data);
        calculateStats(result.data);
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

  useEffect(() => {
    fetchDiseases();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

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
            </div>
            
            <button
              onClick={fetchDiseases}
              disabled={loading}
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              <span>{loading ? 'Refreshing...' : 'Refresh Data'}</span>
            </button>
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

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-400 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <p className="text-red-800 font-semibold">{error}</p>
            </div>
          </div>
        )}

        {/* Latest Detection Card */}
        {!loading && diseases.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Activity className="w-6 h-6 text-green-600" />
              <span>Latest Detection</span>
            </h2>
            
            <div className={`bg-gradient-to-r ${
              diseases[0].diseaseType.toLowerCase() === 'healthy' 
                ? 'from-green-500 to-emerald-600' 
                : 'from-red-500 to-rose-600'
            } rounded-3xl p-8 shadow-2xl relative overflow-hidden`}>
              <div className="absolute inset-0 bg-white opacity-5">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full filter blur-3xl animate-pulse"></div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <Leaf className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-semibold">{diseases[0].plantType}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {diseases[0].diseaseType}
                    </h3>
                    
                    <p className="text-white/90 text-lg mb-6">
                      {diseases[0].treatment}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                        <p className="text-white text-sm">Confidence: <span className="font-bold">{diseases[0].confidence}</span></p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                        <p className="text-white text-sm">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {formatDate(diseases[0].createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 md:mt-0">
                    {diseases[0].diseaseType.toLowerCase() === 'healthy' ? (
                      <CheckCircle className="w-24 h-24 text-white opacity-80" />
                    ) : (
                      <AlertCircle className="w-24 h-24 text-white opacity-80" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Detection History */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <Clock className="w-6 h-6 text-green-600" />
            <span>Detection History</span>
          </h2>
          
          {loading ? (
            <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
              <RefreshCw className="w-12 h-12 text-green-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Loading detection history...</p>
            </div>
          ) : diseases.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
              <Leaf className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No detection records found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diseases.map((disease, index) => (
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
                      <p className="text-xs text-gray-500 flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{formatDate(disease.createdAt)}</span>
                      </p>
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