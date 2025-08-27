import React, { useEffect, useState, useRef } from "react";
import api from "../api/api";
import "../styles/Conversation.css";
import { ACCESS_TOKEN } from "../constants";
import { IoSend } from "react-icons/io5";


const Conversation = ({ conversationId, currentUserId, onBack }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [typingUser, setTypingUser] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [socket, setSocket] = useState(null);
    const [chatPartner, setChatPartner] = useState(null);
    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        const fetchConversationData = async () => {
            if (!conversationId) {
                console.error("Invalid conversationId:", conversationId);
                return;
            }

            try {
                setLoading(true);
                const response = await api.get(`chat/conversations/${conversationId}/messages/`);
                const data = response.data;
                
                const messages = Array.isArray(data) ? data : data.results || [];
                setMessages(messages);

                if (messages.length > 0) {
                    const participants = messages[0]?.participants || [];
                    const chatPartner = participants.find((user) => user.id !== currentUserId);

                    if (chatPartner) {
                        setChatPartner(chatPartner);
                    } else {
                        console.error("No valid chat partner found");
                    }
                }
            } catch (error) {
                console.error("Error fetching conversation data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchConversationData();
    }, [conversationId, currentUserId]);

    useEffect(() => {
        if (!conversationId) return;
        const token = localStorage.getItem(ACCESS_TOKEN);

        const websocket = new WebSocket(`ws://localhost:8000/ws/chat/${conversationId}/?token=${token}`);

        websocket.onopen = () => {
            console.log("WebSocket connection established");
        };

        websocket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);

                if (data.type === "chat_message") {
                    const { message, user, timestamp } = data;
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        { sender: user, content: message, timestamp },
                    ]);
                    setTypingUser(null);
                } else if (data.type === "typing") {
                    const { user, receiver } = data;

                    if (typingTimeoutRef.current) {
                        clearTimeout(typingTimeoutRef.current);
                    }
                    
                    if (receiver === currentUserId && user.id !== currentUserId) {
                        setTypingUser(user);
                        
                        typingTimeoutRef.current = setTimeout(() => {
                            setTypingUser(null);
                            typingTimeoutRef.current = null;
                        }, 2000);
                    }
                } else if (data.type === "online_status") {
                    if (data.status === "online") {
                        setOnlineUsers((prev) => [...prev, ...data.online_users]);
                    } else if (data.status === "offline") {
                        setOnlineUsers((prev) =>
                            prev.filter((user) => !data.online_users.some((u) => u.id === user.id))
                        );
                    }
                }
            } catch (error) {
                console.error("Error parsing WebSocket message:", error);
            }
        };

        websocket.onerror = (error) => {
            console.error("WebSocket error:", error);
            console.error("WebSocket state:", readyState);
            console.error("WebSocket URL:", websocket.url);
        };
        websocket.onclose = (event) => {
            console.error('Websocket closed:', event.code, event.reason);
        };

        setSocket(websocket);

        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
            websocket.close();
        };
    }, []);

    const handleSendMessage = () => {
        if (!conversationId || !newMessage.trim()) {
            console.error("Cannot send message: Invalid conversationId or empty message");
            return;
        }

        if (socket?.readyState === WebSocket.OPEN) {
            const messagePayload = {
                type: "chat_message",
                message: newMessage,
                user: currentUserId,
            };

            socket.send(JSON.stringify(messagePayload));
            setNewMessage("");
        } else {
            console.error("WebSocket is not open. Message not sent.");
        }
    };

    const handleTyping = () => {
        if (!chatPartner || socket?.readyState !== WebSocket.OPEN) {
            console.error("Cannot send typing event: No chat partner or WebSocket is not open.");
            return;
        }

        const receiverId = chatPartner.id;

        socket.send(
            JSON.stringify({
                type: "typing",
                user: currentUserId,
                receiver: receiverId,
            })
        );
    };

    const debouncedHandleTyping = () => {
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        handleTyping();
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return new Intl.DateTimeFormat("en-US", {
            dateStyle: "short",
            timeStyle: "short",
        }).format(date);
    };

    const handleDeleteMessage = async (messageId) => {
        try {
            const response = await api.delete(`chat/conversations/${conversationId}/messages/${messageId}/`);
            if (response.status === 204) {
                setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== messageId));
            }
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };
    

    return (        
        <div className="conversation-container">
            <div className="conversation-header">
                <button className="back-button" onClick={onBack}>Back</button>
                <h3>{chatPartner ? `Chat with ${chatPartner.first_name}` : "Chat"}</h3>
                <div className="online-status">
                {onlineUsers && onlineUsers.length > 0 ? (
                    onlineUsers.map((user) => (
                    <span key={user.id} className="online-user">
                        {user.username} (online)
                    </span>
                    ))
                ) : (
                    <span>No users online</span>
                )}
                </div>
            </div>

            <div className="messages-container">
                {loading ? (
                <p>Loading messages...</p>
                ) : Array.isArray(messages) && messages.length > 0 ? (
                messages.map((message) => {
                    const isSentByCurrentUser = message.sender?.id === currentUserId;

                    return (
                    <div
                        key={message.id || message.timestamp}
                        className={`message-wrapper ${isSentByCurrentUser ? "sent" : "received"}`}
                    >
                        {!isSentByCurrentUser && (
                        <span className="message-username">
                            {message.sender?.first_name || "Unknown"}
                        </span>
                        )}
                        <div className="message-bubble">
                            {message.content}
                            {isSentByCurrentUser && (
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteMessage(message.id)}
                                >
                                Delete
                                </button>
                            )}
                        </div>
                        <div className="message-timestamp">
                            {formatTimestamp(message.timestamp)}
                        </div>
                    </div>
                    );
                })
                ) : (
                    <p>No messages yet</p>
                )}
            </div>

            {typingUser && (
                <div className="typing-indicator">
                    {typingUser.first_name} is typing...
                </div>
            )}

            <div className="input-container">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => {
                        setNewMessage(e.target.value);
                        debouncedHandleTyping();
                    }}
                    onKeyDown={handleTyping}
                    placeholder="Type a message..."
                    className="message-input"
                />
                <button className="send-button" onClick={handleSendMessage}>
                    <IoSend size={17} />
                </button>
                
            </div>
        </div>
    );
};

export default Conversation;
