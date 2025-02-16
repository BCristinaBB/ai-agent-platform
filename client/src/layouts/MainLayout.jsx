import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Plus, Settings } from 'lucide-react';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              AI Agent Platform
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/new-agent"
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              <span>Nuovo Agente</span>
            </Link>
            <Link to="/settings" className="p-2 text-gray-500 hover:text-gray-700">
              <Settings className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;