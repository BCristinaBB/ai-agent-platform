class AgentStore {
    constructor() {
      this.agents = this.loadAgents();
    }
  
    loadAgents() {
      const savedAgents = localStorage.getItem('agents');
      return savedAgents ? JSON.parse(savedAgents) : [];
    }
  
    saveAgents() {
      localStorage.setItem('agents', JSON.stringify(this.agents));
    }
  
    addAgent(agent) {
      this.agents.push(agent);
      this.saveAgents();
    }
  
    getAgents() {
      return this.agents;
    }
  }
  
  export default new AgentStore();