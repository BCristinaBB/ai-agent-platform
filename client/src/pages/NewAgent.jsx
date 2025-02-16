import { validateAgentConfig } from '../utils/validation';
import  claudeService  from '../services/claudeService';
import  agentStore  from '../utils/agentStore';
import LoadingOverlay from '../components/LoadingOverlay';
const NewAgent = () => {
  // ... (other state variables)

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const validationErrors = validateAgentConfig(formData, config, documents);
      if (validationErrors.length > 0) {
        setError(validationErrors.join('\n'));
        setIsLoading(false);
        return;
      }

      const agentData = {
        ...formData,
        ...config,
        documents
      };

      const agent = await claudeService.createAgent(agentData);
      agentStore.addAgent(agent);
      navigate('/');
    } catch (err) {
      setError('Errore durante la creazione dell\'agente: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {isLoading && <LoadingOverlay message="Creazione agente in corso..." />} {/* Loading Overlay */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">{error}</p>
        </div>
      )} {/* Error Message */}

      {/* ... (rest of the JSX) */}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {/* ... (other buttons) */}
        <div className="ml-auto">
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              Continua
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading} // Disabled while loading
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creazione in corso...' : 'Crea Agente'}
            </button>
          )}
        </div>
      </div>

    </div>
  );
};

export default NewAgent;