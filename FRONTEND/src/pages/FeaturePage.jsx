import React from 'react';

const FeaturePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Powerful Features</h1>
            <p className="mt-4 text-xl text-gray-600">Everything you need in a modern URL shortener</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-3xl mb-4">🔗</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Shorten Long URLs Instantly</h3>
              <p className="text-gray-600">Turn bulky, complex links into clean, short ones in a single click.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-3xl mb-4">📊</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Click Analytics</h3>
              <p className="text-gray-600">Track how many times your link has been clicked — get real-time stats.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-3xl mb-4">👤</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">User-Based History</h3>
              <p className="text-gray-600">Logged-in users can view and manage all their previously shortened URLs.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-3xl mb-4">🛡️</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">All links are handled securely. Only you can see your dashboard.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Custom Short Links</h3>
              <p className="text-gray-600">Choose your own short slug instead of random strings.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-3xl mb-4">🔁</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Auto Refresh Stats</h3>
              <p className="text-gray-600">Your clicks update automatically every few seconds — no need to reload.</p>
            </div>
            
            {/* Feature 7 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-3xl mb-4">📱</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Mobile Friendly UI</h3>
              <p className="text-gray-600">Works seamlessly across devices with a modern, responsive interface.</p>
            </div>
            
            {/* Feature 8 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-3xl mb-4">☁️</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Built with MERN Stack</h3>
              <p className="text-gray-600">Fast, scalable and reliable — built using MongoDB, Express, React, and Node.js.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Try It Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturePage;