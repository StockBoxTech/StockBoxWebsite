import { useEffect, useState } from 'react';
import axios from 'axios';
import { FiFilter, FiX, FiCalendar, FiTag, FiDollarSign } from 'react-icons/fi';

const ResReport = () => {
  const [issues, setIssues] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  const API_URL = 'http://localhost:5000/api/report';

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const res = await axios.get(API_URL);
        setIssues(res.data);
      } catch (err) {
        console.error('Error fetching issues:', err.message);
      }
    };

    fetchIssues();
  }, []);

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-red-100 text-red-800';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatINR = (amount) => {
    const value = parseFloat(amount);
    if (isNaN(value)) return '₹0.00';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const filteredIssues = issues.filter((issue) => {
    return (
      (categoryFilter ? issue.category === categoryFilter : true) &&
      (monthFilter ? issue.issueMonth === monthFilter : true) &&
      (yearFilter ? issue.issueYear.toString() === yearFilter : true)
    );
  });

  // Get unique years for filter dropdown
  const uniqueYears = [...new Set(issues.map(i => i.issueYear))].sort((a, b) => b - a);
  
  // Months array for filter dropdown
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
        Research Reports
      </h2>

      {/* Enhanced Filter Section */}
      <div className="bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl shadow-md p-6 mb-8 border border-blue-100">
        <div className="flex items-center mb-4">
          <FiFilter className="text-blue-600 text-xl mr-2" />
          <h3 className="text-xl font-semibold text-gray-700">Filter Reports</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiTag className="text-gray-400" />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 shadow-sm transition"
            >
              <option value="">All Categories</option>
              <option value="small-cap">Small Cap</option>
              <option value="mid-cap">Mid Cap</option>
              <option value="large-cap">Large Cap</option>
            </select>
          </div>

          {/* Month Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiCalendar className="text-gray-400" />
            </div>
            <select
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 shadow-sm transition"
            >
              <option value="">All Months</option>
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>

          {/* Year Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiCalendar className="text-gray-400" />
            </div>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 shadow-sm transition"
            >
              <option value="">All Years</option>
              {uniqueYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              setCategoryFilter('');
              setMonthFilter('');
              setYearFilter('');
            }}
            className="flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            <FiX className="mr-2" />
            Reset Filters
          </button>
        </div>
      </div>

      {/* No data message */}
      {filteredIssues.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">No research reports found</p>
          <p className="text-gray-400 mt-2">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIssues.map((issue) => {
            const issueDate = new Date(issue.issueDate);
            const formattedDate = issueDate.toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });

            return (
              <div
                key={issue._id}
                className="bg-gradient-to-br from-[#dbf169] to-[#d9f356] rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-2 min-h-[56px]">
                      {issue.heading}
                    </h3>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getStatusStyle(issue.status)}`}>
                      {issue.status}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="inline-flex items-center text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                      <FiTag className="mr-1" />
                      {issue.category}
                    </span>
                  </div>

                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-center">
                      <FiCalendar className="text-gray-400 mr-2" />
                      <span>Issue Date:{formattedDate}</span>
                    </div>

                    <div className="flex items-center">
                      <FiCalendar className="text-gray-400 mr-2" />
                      <span>Issue Month: {issue.issueMonth}</span>
                    </div>

                     <div className="flex items-center">
                      <FiCalendar className="text-gray-400 mr-2" />
                      <span>Issue Year: {issue.issueYear}</span>
                    </div>
                    
                    
                    <div className="flex items-center">
                      <FiDollarSign className="text-gray-400 mr-2" />
                      <span>{issue.issuePrice}</span>
                    </div>
                    
                  
                  </div>
                </div>

                <div className="bg-gray-300 px-5 py-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 flex justify-between items-center">
                    <span>GET REPORTS ON OUR APP</span>
                   <button className="relative group inline-flex items-center justify-center px-4 py-2 bg-gray-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
  <span className="relative z-10 flex items-center">
    Download App
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  </span>
  
  {/* Animated background elements */}
  <span className="absolute inset-0 bg-gradient-to-r from-[#d9f356] to-[#deff3b]  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
  
  {/* Shimmer effect */}
  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-full bg-white opacity-20 group-hover:w-full group-hover:opacity-0 transition-all duration-700"></span>
</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ResReport;