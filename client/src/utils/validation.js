export const validateAgentConfig = (formData, config, documents) => {
    const errors = [];
  
    if (!formData.name?.trim()) {
      errors.push('Il nome dell\'agente è obbligatorio');
    }
  
    if (!formData.description?.trim()) {
      errors.push('La descrizione è obbligatoria');
    }
  
    if (config.useKnowledgeBase && (!documents || documents.length === 0)) {
      errors.push('È necessario caricare almeno un documento per il training');
    }
  
    return errors;
  };