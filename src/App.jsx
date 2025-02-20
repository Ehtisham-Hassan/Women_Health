import { useState } from "react";
import { Bot, ChevronDown, Search, Copy, Tag } from "lucide-react";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <header className="header">
        <Bot className="menu-icon" onClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="header-content">
          <div className="chatgpt-selector">
            My-chat
            <ChevronDown className="dropdown-icon" />
          </div>
          <div className="label-container">
            <Tag className="label-icon" />
            <input type="text" placeholder="Add a label..." className="label-input" />
          </div>
        </div>
        <div className="header-actions">
          <Search className="action-icon" />
          <Copy className="action-icon" />
        </div>
      </header>

      <div className="main-layout">
        {/* Sidebar */}
        <nav className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <button className="new-chat">
            <Bot className="new-chat-icon" />
            New chat
          </button>

          <div className="chat-history">
            <div className="time-section">
              <div className="time-label">AI chat</div>
              <div className="chat-list">
                <div className="chat-item">Personal Diet</div>
                <div className="chat-item">Health</div>
              </div>
            </div>

            <div className="time-section">
              <div className="time-label">Friend's</div>
              <div className="chat-list">
                <div className="chat-item">Sara</div>
                <div className="chat-item">Ayesha</div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <h1>What can I help with?</h1>
          <div className="input-prompt">Ask me anything...</div>
        </main>
      </div>
    </div>
  );
}

export default App;
