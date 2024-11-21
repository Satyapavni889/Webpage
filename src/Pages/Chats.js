import React, { useState } from 'react';
import { useTheme } from "../Context/Themecontext"; // Import the useTheme hook

const Chats = () => {
  const { theme } = useTheme(); // Get the current theme
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  return (
    <div style={styles.container(theme)}>
      <h1 style={styles.heading}>Chat with Us</h1>
      <div style={styles.chatWindow(theme)}>
        <div style={styles.messageContainer}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.sender === 'You' ? theme.colors.primary : '#f0f0f0',
                color: msg.sender === 'You' ? theme.colors.button.text : '#000',
              }}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.sendButton(theme)}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: (theme) => ({
    padding: theme.spacing.padding,
  }),
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  chatWindow: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '1px solid #ddd',
    borderRadius: theme.borderRadius,
    padding: '10px',
    height: '300px',
    overflowY: 'auto',
    marginBottom: '10px',
    backgroundColor: theme.colors.cardBackground,
  }),
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  message: {
    padding: '8px 12px',
    borderRadius: '4px',
    marginBottom: '8px',
    maxWidth: '70%',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  sendButton: (theme) => ({
    padding: '10px 15px',
    backgroundColor: theme.colors.primary,
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }),
};

export default Chats;
