import React from 'react';

const AgentConfig = ({ config, setConfig }) => {
  return (
    <div className="space-y-6">
      {/* Personalità dell'agente */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-4">Personalità dell'Agente</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tono di Conversazione
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={config.tone}
              onChange={(e) => setConfig({ ...config, tone: e.target.value })}
            >
              <option value="professional">Professionale</option>
              <option value="friendly">Amichevole</option>
              <option value="formal">Formale</option>
              <option value="casual">Informale</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Livello di Dettaglio nelle Risposte
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={config.detailLevel}
              onChange={(e) => setConfig({ ...config, detailLevel: e.target.value })}
            >
              <option value="concise">Conciso</option>
              <option value="balanced">Bilanciato</option>
              <option value="detailed">Dettagliato</option>
            </select>
          </div>
        </div>
      </div>

      {/* Limitazioni e Comportamenti */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-4">Limitazioni e Comportamenti</h4>
        <div className="space-y-4">
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={config.useKnowledgeBase}
                onChange={(e) => setConfig({ ...config, useKnowledgeBase: e.target.checked })}
              />
              <span className="ml-2 text-sm text-gray-700">
                Utilizza solo la knowledge base fornita
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={config.requireConfirmation}
                onChange={(e) => setConfig({ ...config, requireConfirmation: e.target.checked })}
              />
              <span className="ml-2 text-sm text-gray-700">
                Richiedi conferma per azioni importanti
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Note aggiuntive */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Note Aggiuntive
        </label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="Inserisci eventuali note o istruzioni aggiuntive per l'agente..."
          value={config.notes}
          onChange={(e) => setConfig({ ...config, notes: e.target.value })}
        ></textarea>
      </div>
    </div>
  );
};

export default AgentConfig;