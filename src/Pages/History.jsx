import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Download, 
  Eye, 
  X,
  Leaf,
  CheckCircle,
  AlertCircle,
  RotateCcw,
  BarChart3
} from 'lucide-react';

const History = () => {
  const [diseases, setDiseases] = useState([]);
  const [filteredDiseases, setFilteredDiseases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchDiseases = async () => {
    setError(null);
    try {
      const response = await fetch('https://plant-disease-detection-server-one.vercel.app/diseases');
      const result = await response.json();
      
      if (result.success) {
        const diseasesData = result.data;
        setDiseases(diseasesData);
        setFilteredDiseases(diseasesData);
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

  // Search and filter functionality
  useEffect(() => {
    let filtered = diseases.filter(disease =>
      disease.plantType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.diseaseType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.treatment.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Apply status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(disease => 
        filterStatus === 'healthy' 
          ? disease.diseaseType.toLowerCase() === 'healthy'
          : disease.diseaseType.toLowerCase() !== 'healthy'
      );
    }

    setFilteredDiseases(filtered);
  }, [searchTerm, filterStatus, diseases]);

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
      default:
        break;
    }
    
    setFilteredDiseases(sorted);
  }, [sortBy]);

  // Auto-refresh data
  useEffect(() => {
    fetchDiseases();
    const intervalId = setInterval(fetchDiseases, 30000);
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'short', 
      day: 'numeric'
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

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { 
      year: 'numeric',
      month: 'short', 
      day: 'numeric',
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

  const getStatusColor = (diseaseType) => {
    return diseaseType.toLowerCase() === 'healthy' ? 'green' : 'red';
  };

  const getStatusIcon = (diseaseType) => {
    return diseaseType.toLowerCase() === 'healthy' ? CheckCircle : AlertCircle;
  };

  const exportToCSV = () => {
    const headers = ['Plant Type', 'Disease Type', 'Confidence', 'Treatment', 'Date', 'Time'];
    const csvData = filteredDiseases.map(disease => [
      disease.plantType,
      disease.diseaseType,
      `${disease.confidence}`,
      disease.treatment,
      formatDate(disease.createdAt),
      formatTime(disease.createdAt)
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(field => `"${field}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `plant-detection-history-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const sortOptions = [
    { value: 'latest', label: 'Latest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'confidence-high', label: 'Confidence: High to Low' },
    { value: 'confidence-low', label: 'Confidence: Low to High' },
    { value: 'name-asc', label: 'Plant Name: A to Z' },
    { value: 'name-desc', label: 'Plant Name: Z to A' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status', count: diseases.length },
    { 
      value: 'healthy', 
      label: 'Healthy', 
      count: diseases.filter(d => d.diseaseType.toLowerCase() === 'healthy').length 
    },
    { 
      value: 'diseased', 
      label: 'Diseased', 
      count: diseases.filter(d => d.diseaseType.toLowerCase() !== 'healthy').length 
    }
  ];

  if (loading && diseases.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-green-50 to-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <RotateCcw className="w-12 h-12 text-green-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Loading detection history...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-green-50 to-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Detection
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> History</span>
              </h1>
              <p className="text-gray-600">Complete record of all plant disease detections and scans</p>
              {lastUpdated && (
                <p className="text-sm text-gray-500 mt-1 flex items-center space-x-1">
                  <RotateCcw className="w-3 h-3" />
                  <span>{formatLastUpdated(lastUpdated)}</span>
                  <span className="text-xs text-green-600 ml-2">• Auto-updating</span>
                </p>
              )}
            </div>
            
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button
                onClick={exportToCSV}
                disabled={filteredDiseases.length === 0}
                className="inline-flex items-center space-x-2 bg-white text-gray-700 border-2 border-gray-300 px-4 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-5 h-5" />
                <span>Export CSV</span>
              </button>
              
              {/* <button
                onClick={fetchDiseases}
                disabled={loading}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RotateCcw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                <span>{loading ? 'Updating...' : 'Update Now'}</span>
              </button> */}
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Records</p>
                <p className="text-3xl font-bold text-gray-900">{diseases.length}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Healthy Plants</p>
                <p className="text-3xl font-bold text-green-600">
                  {diseases.filter(d => d.diseaseType.toLowerCase() === 'healthy').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Diseased Plants</p>
                <p className="text-3xl font-bold text-red-600">
                  {diseases.filter(d => d.diseaseType.toLowerCase() !== 'healthy').length}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by plant name, disease type, or treatment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Status:</span>
              </div>
              <div className="flex space-x-2">
                {statusOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFilterStatus(option.value)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      filterStatus === option.value
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.label} ({option.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-2 border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
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

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-400 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <p className="text-red-800 font-semibold">{error}</p>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Detection Records
          </h2>
          <span className="text-gray-600">
            {filteredDiseases.length} {filteredDiseases.length === 1 ? 'record' : 'records'} found
          </span>
        </div>

        {/* Detection History Table */}
        {filteredDiseases.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <Leaf className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              {searchTerm || filterStatus !== 'all' 
                ? 'No records found matching your filters' 
                : 'No detection records found'
              }
            </p>
            {(searchTerm || filterStatus !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterStatus('all');
                }}
                className="mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Plant & Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Disease Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Confidence
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredDiseases.map((disease) => {
                    const StatusIcon = getStatusIcon(disease.diseaseType);
                    const statusColor = getStatusColor(disease.diseaseType);
                    
                    return (
                      <tr 
                        key={disease._id} 
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${
                              statusColor === 'green' ? 'bg-green-50' : 'bg-red-50'
                            }`}>
                              <StatusIcon className={`w-5 h-5 ${
                                statusColor === 'green' ? 'text-green-600' : 'text-red-600'
                              }`} />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{disease.plantType}</p>
                              <p className={`text-sm ${
                                statusColor === 'green' ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {disease.diseaseType.toLowerCase() === 'healthy' ? 'Healthy' : 'Diseased'}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-900 font-medium">{disease.diseaseType}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${
                            statusColor === 'green' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {disease.confidence}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span>{formatDate(disease.createdAt)}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span>{formatTime(disease.createdAt)}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => setSelectedPlant(disease)}
                            className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Details</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Plant Detail Modal */}
        {selectedPlant && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Detection Details</h3>
                  <button
                    onClick={() => setSelectedPlant(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Status Banner */}
                  <div className={`rounded-xl p-4 ${
                    selectedPlant.diseaseType.toLowerCase() === 'healthy' 
                      ? 'bg-green-50 border-2 border-green-200' 
                      : 'bg-red-50 border-2 border-red-200'
                  }`}>
                    <div className="flex items-center space-x-3">
                      {selectedPlant.diseaseType.toLowerCase() === 'healthy' ? (
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      ) : (
                        <AlertCircle className="w-8 h-8 text-red-600" />
                      )}
                      <div>
                        <h4 className={`text-lg font-bold ${
                          selectedPlant.diseaseType.toLowerCase() === 'healthy' 
                            ? 'text-green-800' 
                            : 'text-red-800'
                        }`}>
                          {selectedPlant.diseaseType}
                        </h4>
                        <p className={`text-sm ${
                          selectedPlant.diseaseType.toLowerCase() === 'healthy' 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {selectedPlant.diseaseType.toLowerCase() === 'healthy' 
                            ? 'Plant is healthy and thriving' 
                            : 'Plant requires attention and treatment'
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Plant Type</label>
                        <p className="text-lg font-semibold text-gray-900">{selectedPlant.plantType}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-500">Confidence Level</label>
                        <p className="text-lg font-semibold text-gray-900">{selectedPlant.confidence}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Detection Date</label>
                        <p className="text-lg font-semibold text-gray-900">
                          {formatDate(selectedPlant.createdAt)}
                        </p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-500">Detection Time</label>
                        <p className="text-lg font-semibold text-gray-900">
                          {formatTime(selectedPlant.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Treatment */}
                  <div>
                    <label className="text-sm font-medium text-gray-500 mb-2 block">Treatment & Recommendations</label>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-gray-700 leading-relaxed">{selectedPlant.treatment}</p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-500">
                      Detection ID: {selectedPlant._id}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;