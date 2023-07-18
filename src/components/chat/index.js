import React, {useState} from 'react';
import './Chat.css';
import axios from "axios";
import {BASE_URL} from "../../index";
// import axios from "axios"; // Importing the CSS file


const ChatMessage = ({message, sender}) => (
    <div className={`chat-message ${sender}`}>
        <p>{message}</p>
    </div>
);

const ChatInput = ({onSendMessage}) => {
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button type="submit">Send</button>
        </form>
    );
};

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async message => {
        setMessages(prevMessages => [...prevMessages, {message, sender: 'user'}]);

        // Make a POST request to the server with the new and previous messages
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/langchain/chat`, {
            new_message: {message, sender: 'user'},
            previous_messages: messages,
        });

        // Add the AI's response to the chat
        setMessages(prevMessages => [...prevMessages, {message: response.data.message, sender: 'ai'}]);
    };

    return (
        <>
            <h2>Still have Questions? Chat with us</h2>
            <h5>if you want to know more about esg you can for example paste something from the output and ask your question</h5>

            <div className="chat-window">
                <div className="chat-messages">
                    {messages.map((msg, idx) => (
                        <ChatMessage key={idx} {...msg} />
                    ))}
                </div>
                <ChatInput onSendMessage={handleSendMessage}/>
            </div>
        </>
    );
};

export default ChatWindow;