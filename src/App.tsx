import React, { useState } from 'react';
import { Shirt, TrendingUp, Home } from 'lucide-react';
import { GardeRobe } from './components/GardeRobe';
import { Suggestions } from './components/Suggestions';

function App() {
  const [activeTab, setActiveTab] = useState<'garderobe' | 'suggestions'>('garderobe');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Shirt className="h-8 w-8 text-purple-500" />
              <h1 className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Ma Garde-Robe
              </h1>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('garderobe')}
              className={`px-4 py-3 text-sm font-medium flex items-center transition-colors ${
                activeTab === 'garderobe'
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-gray-300 hover:text-purple-300'
              }`}
            >
              <Home className="w-4 h-4 mr-2" />
              Garde-robe
            </button>
            <button
              onClick={() => setActiveTab('suggestions')}
              className={`px-4 py-3 text-sm font-medium flex items-center transition-colors ${
                activeTab === 'suggestions'
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-gray-300 hover:text-purple-300'
              }`}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Suggestions
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {activeTab === 'garderobe' ? <GardeRobe /> : <Suggestions />}
      </main>
    </div>
  );
}

export default App;