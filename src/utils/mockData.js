// Mock data emitter to simulate real-time device connection

class MockDeviceEmitter {
  constructor() {
    this.listeners = {};
    this.messageInterval = null;
    this.messages = [];
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(data));
    }
  }

  startSimulation() {
    if (this.messageInterval) return;
    
    // Simulate initial connection
    setTimeout(() => {
      this.emit('status', { connected: true, battery: 82, signal: 'Strong', active: true });
    }, 1500);

    const needs = [
      { message: "Water Needed", type: "basic", color: "blue", icon: "💧" },
      { message: "Food Needed", type: "basic", color: "blue", icon: "🍲" },
      { message: "Medicine Needed", type: "basic", color: "blue", icon: "💊" },
      { message: "I need rest", type: "comfort", color: "purple", icon: "🛏" },
      { message: "Too cold", type: "comfort", color: "purple", icon: "❄️" },
      { message: "Help me move", type: "movement", color: "green", icon: "🏃" },
      { message: "Want to talk", type: "communication", color: "teal", icon: "💬" }
    ];

    // Emit a random message every 10-30 seconds
    this.messageInterval = setInterval(() => {
      const isEmergency = Math.random() < 0.1; // 10% chance of emergency
      
      let newMessage;
      if (isEmergency) {
        newMessage = {
          id: Date.now(),
          message: "EMERGENCY ALERT",
          type: "emergency",
          color: "red",
          icon: "🚨",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else {
        const randomNeed = needs[Math.floor(Math.random() * needs.length)];
        newMessage = {
          id: Date.now(),
          ...randomNeed,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }
      
      this.messages.unshift(newMessage);
      this.emit('message', newMessage);
      
    }, 15000); // reduced interval for demo purposes
  }

  stopSimulation() {
    if (this.messageInterval) {
      clearInterval(this.messageInterval);
      this.messageInterval = null;
    }
  }
}

export const mockDevice = new MockDeviceEmitter();
