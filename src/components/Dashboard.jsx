import React from 'react';
import { Eye, MessageSquare, ThumbsUp, Layout, Bell, Search, User } from 'lucide-react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">DevReview</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <Layout className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <span className="font-medium">↑ 12%</span>
              <span className="ml-2 text-gray-500">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Reviews</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <span className="font-medium">↑ 8%</span>
              <span className="ml-2 text-gray-500">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Likes</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">2.4k</p>
              </div>
              <div className="bg-pink-50 p-3 rounded-lg">
                <ThumbsUp className="h-6 w-6 text-pink-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <span className="font-medium">↑ 24%</span>
              <span className="ml-2 text-gray-500">from last month</span>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add Project
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Project Card */}
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">E-commerce Dashboard</h3>
                  <p className="text-sm text-gray-500 mt-1">Full-stack dashboard with authentication and analytics</p>
                  <div className="flex items-center space-x-4 mt-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      React
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Node.js
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      MongoDB
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>124</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>3</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>18</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">Weather App</h3>
                  <p className="text-sm text-gray-500 mt-1">Real-time weather app with location-based forecasts</p>
                  <div className="flex items-center space-x-4 mt-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      JavaScript
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      API
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                      CSS
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>89</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>5</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;