const CLAUDE_API_KEY = import.meta.env.VITE_CLAUDE_API_KEY;
const API_URL = import.meta.env.VITE_CLAUDE_API_URL;

class ClaudeService {
  async createAgent(config, documents) {
    try {
      // Prepara il prompt iniziale basato sulla configurazione
      const systemPrompt = this.generateSystemPrompt(config);
      
      // Prepara i documenti di training
      const trainingContent = documents.map(doc => doc.content).join('\n\n');

      const response = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': CLAUDE_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-opus-20240229',
          max_tokens: 1024,
          system: systemPrompt,
          messages: [
            {
              role: 'user',
              content: `Training content:\n${trainingContent}\n\nInitialize agent with provided configuration and training data.`
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Errore nella creazione dell\'assistente');
      }

      const data = await response.json();
      return {
        id: data.id,
        ...config,
        created_at: new Date().toISOString()
      };

    } catch (error) {
      console.error('Errore:', error);
      throw error;
    }
  }

  generateSystemPrompt(config) {
    return `You are an AI assistant with the following configuration:
      - Name: ${config.name}
      - Purpose: ${config.description}
      - Tone: ${config.tone}
      - Detail Level: ${config.detailLevel}
      - Knowledge Base: ${config.useKnowledgeBase ? 'Restricted to provided content' : 'General knowledge allowed'}
      
      Additional Notes: ${config.notes}
      
      Please maintain this configuration in all interactions.`;
  }
}

export default new ClaudeService();