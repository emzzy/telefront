import React, { useEffect, useState, useRef } from "react";

const ChatRoom = ({ roomName, userName }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const socketRef = useRef(null);
    const messagesEndRef = useRef(null);

    // WebSocket URL (adjust for production)
    const BACKEND_WS_URL = `ws://${window.location.host}/ws/${roomName}/`;

    // Scroll chat to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Scroll on messages update
    useEffect(scrollToBottom, [messages]);

    // Setup WebSocket connection on mount and roomName change
    useEffect(() => {
        socketRef.current = new WebSocket(BACKEND_WS_URL);

        socketRef.current.onopen = () => {
            console.log("WebSocket connected");
        };

        socketRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.message) {
                setMessages((prev) => [
                    ...prev,
                    { username: data.username, content: data.message },
                ]);
            }
        };

        socketRef.current.onclose = () => {
            console.warn("WebSocket closed unexpectedly");
        };

        return () => {
            socketRef.current.close();
        };
    }, [roomName, BACKEND_WS_URL]);

    const sendMessage = () => {
        if (!message.trim()) return;
        socketRef.current.send(
            JSON.stringify({
                message: message.trim(),
                username: userName,
                room: roomName,
            })
        );
        setMessage("");
    };

    // Handle Enter key for send
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="p-10 lg:p-20 text-center bg-gray-800 min-h-screen">
            <h1 className="text-3xl lg:text-6xl font-bold text-white mb-10">
                {roomName}
            </h1>

            <div
                id="chat-messages"
                className="lg:w-2/4 mx-auto p-4 bg-white rounded-xl shadow-lg max-h-96 overflow-y-auto space-y-4"
                style={{ minHeight: "300px" }}
            >
                {messages.map((m, i) => {
                const isUser = m.username === userName;
                return (
                    <div key={i} className={`text-${isUser ? "right" : "left"}`} >
                        <div className={`inline-block p-2 rounded-xl ${isUser ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-800"}`}
                            style={{ maxWidth: "80%", wordWrap: "break-word" }}
                        >
                            <span className="block text-sm font-semibold">
                                {isUser ? "You" : m.username}
                            </span>
                            <span>{m.content}</span>
                        </div>
                    </div>
                );
                })}
                <div ref={messagesEndRef} />
            </div>

            <div className="lg:w-2/4 mt-6 mx-auto p-4 bg-white rounded-xl shadow-lg flex gap-2">
                <input
                    type="text"
                    id="chat-message-input"
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    autoFocus
                />
                <button
                    id="chat-message-submit"
                    onClick={(e) => {
                        e.preventDefault();
                        sendMessage();
                    }}
                    className="px-5 py-2 rounded-xl text-white bg-teal-600 hover:bg-teal-700 transition"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
