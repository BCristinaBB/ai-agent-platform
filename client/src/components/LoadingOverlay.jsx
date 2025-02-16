// src/components/LoadingOverlay.jsx
import React from 'react';

const LoadingOverlay = ({ message }) => (
  <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full mx-4">
      <div className="flex flex-col items-center">
        {/* Spinner personalizzato */}
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Messaggio principale */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {message || 'Caricamento in corso...'}
        </h3>
        
        {/* Sottotitolo opzionale */}
        <p className="text-sm text-gray-500 text-center">
          L'operazione potrebbe richiedere alcuni secondi
        </p>
      </div>
    </div>
  </div>
);

export default LoadingOverlay;