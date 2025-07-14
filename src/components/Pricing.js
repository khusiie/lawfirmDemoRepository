import React from 'react';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-marcellus">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-0.5 bg-amber-600"></div>
              <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
                Pricing Plans
              </span>
              <div className="w-8 h-0.5 bg-amber-600"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            A Passion For Justice The
            <br />
            Experience For Win
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$16</span>
                <span className="text-gray-600 ml-2">/ PER MONTH</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Free Consultation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Legal Advice And Guidance</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Negotiation And Settlement</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Negotiation And Settlement</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Implementation Services</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Case Evolution</span>
              </li>
            </ul>
            
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
              BUY NOW
            </button>
          </div>

          {/* Standard Plan (Most Popular) */}
          <div className="bg-amber-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            {/* Most Popular Badge */}
            <div className="absolute top-0 right-0 bg-gray-900 text-white px-4 py-2 text-sm font-semibold transform rotate-45 translate-x-6 -translate-y-2">
              Most Popular
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$20</span>
                <span className="text-gray-600 ml-2">/ PER MONTH</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Free Consultation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Legal Advice And Guidance</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Legal Advice And Guidance</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Legal Advice And Guidance</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Negotiation And Settlement</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Implementation Services</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Case Evolution</span>
              </li>
            </ul>
            
            <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border-2 border-gray-200">
              BUY NOW
            </button>
          </div>

          {/* Advance Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Advance</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$30</span>
                <span className="text-gray-600 ml-2">/ PER MONTH</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Free Consultation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Legal Advice And Guidance</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Legal Advice And Guidance</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Negotiation And Settlement</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Implementation Services</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">Case Evolution</span>
              </li>
            </ul>
            
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;