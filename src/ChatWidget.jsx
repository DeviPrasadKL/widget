import React, { useState } from 'react';
import './chat-widget.css';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, from: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className={`chat-widget ${open ? 'open' : ''}`}>
      <div className="chat-header" onClick={() => setOpen(!open)}>
        💬 Chat with us
      </div>
      {open && (
        <div className="chat-body">
          <div className="messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
