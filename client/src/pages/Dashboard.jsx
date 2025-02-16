import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header sezione */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Pannello di controllo</h1>
        <p className="text-gray-600 text-lg">
          Gestisci i tuoi agenti AI e monitora le loro attività
        </p>
      </div>

      {/* Grid degli agenti */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Card Nuovo Agente */}
        <Link to="/new-agent" className="block group">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:border-blue-500 transition-colors h-full">
            <div className="flex items-center justify-center h-24 bg-gray-50 rounded-md mb-4 group-hover:bg-blue-50 transition-colors">
              <Plus className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Crea Nuovo Agente</h3>
            <p className="text-gray-600">
              Configura un nuovo agente AI per le tue esigenze
            </p>
          </div>
        </Link>

        {/* Card Stato */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">I tuoi Agenti</h3>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              0 attivi
            </span>
          </div>
          <div className="p-4 bg-gray-50 rounded-md text-gray-600 text-center">
            Nessun agente creato
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            Piattaforma agente AI - Sviluppato con ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;