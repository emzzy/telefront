import React, { useEffect, useState } from "react";
import api from "../api/api";
import { jwtDecode } from "jwt-decode";
import Conversation from "./Conversation";
import "../styles/ChatList.css";
import { ACCESS_TOKEN } from "../constants";


const ChatList = () => {
    const [conversations, setConversations] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [activeConversation, setActiveConversation] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeData = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem(ACCESS_TOKEN);
                if (token) {
                    const decodedToken = jwtDecode(token);
                    setCurrentUserId(decodedToken.user_id);
                }

                try {
                    const userResponse = await api.get("api/users/");
                    
                    if (Array.isArray(userResponse.data)) {
                        setUsers(userResponse.data);
                    } else if (userResponse.data && Array.isArray(userResponse.data.results)) {
                        setUsers(userResponse.data.results);
                    } else {
                        console.error('Users API returned unexpected data structure:', userResponse.data);
                        setUsers([]);
                    }
                } catch (userError) {
                    console.error('Error fetching users:', userError);
                    setUsers([]);
                }

                try {
                    const conversationResponse = await api.get("chat/conversations/");

                    if (Array.isArray(conversationResponse.data)) {
                        setConversations(conversationResponse.data);
                    } else if (conversationResponse.data && Array.isArray(conversationResponse.data.results)) {
                        setConversations(conversationResponse.data.results);
                    } else {
                        console.error('Conversation API returned unexpected data structure:', conversationResponse.data);
                        setConversations([]);
                    }
                } catch (conversationError) {
                    console.error('Error fetching conversations:', conversationError);
                    
                    if (conversationError.response) {
                        console.error('Response status:', conversationError.response.status);
                        // console.error('Response data:', conversationError.response.data);
                    }
                    setConversations([]);
                }
            
            } catch (error) {
                console.error("Error initializing data:", error);
                setErrorMessage('Failed to load initial data. Please refresh the page.');
            } finally {
                setLoading(false);
            }
        };

        initializeData();
    }, []);

    const handleStartConversation = async () => {
        if (selectedUser && currentUserId) {
            const participants = [selectedUser, currentUserId];
            try {
                const response = await api.post("chat/conversations/", { participants });
                const newConversation = response.data;
                                
                setConversations(prevConversations => [...prevConversations, newConversation]);
                setActiveConversation(newConversation);
                setErrorMessage("");
            } catch (error) {
                console.error('Error creating conversation:', error);
                if (error.response?.data?.error) {
                    setErrorMessage(error.response.data.error);
                } else if (error.response?.status === 500) {
                    setErrorMessage("Server error. Please check if the backend is running properly.");
                } else {
                    setErrorMessage("An unexpected error occurred. Please try again.");
                }
            }
        }
    };

    const handleSelectConversation = (conversation) => {
        setActiveConversation(conversation);
    };

    const handleBackToChatList = () => {
        setActiveConversation(null);
    };

    if (loading) {
        return (
            <div className="chat-list-container">
                <div className="loading-message">Loading...</div>
            </div>
        );
    }

    return (
        <div className="chat-list-container">
            <div className={`chat-sidebar ${activeConversation ? "slide-out" : "slide-in"}`}>
                <header className="chat-header">
                    <h1>Welcome to ChitChat</h1>
                    <p>Connect with your friends instantly!</p>
                </header>

                {errorMessage && (
                    <div className="error-message-banner">
                        <p>{errorMessage}</p>
                        <button
                            className="close-error"
                            onClick={() => setErrorMessage("")}
                        >
                            ×
                        </button>
                    </div>
                )}

                <div className="user-selector">
                    <select 
                        onChange={(e) => setSelectedUser(e.target.value)} 
                        value={selectedUser || ""}
                    >
                        <option value="" disabled>
                            {users.length === 0 ? "No users available" : "Select a user to chat with"}
                        </option>
                        {Array.isArray(users) && users
                            .filter(user => user.id !== currentUserId)
                            .map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.first_name || user.username || `User ${user.id}`}
                                </option>
                            ))}
                    </select>
                    <button 
                        onClick={handleStartConversation}
                        disabled={!selectedUser || users.length === 0}
                    >
                        Start Conversation
                    </button>
                </div>

                <div className="conversation-list">
                    <h2>Active Conversations</h2>
                    {conversations.length === 0 ? (
                        <p className="no-conversations">No conversations yet</p>
                    ) : (
                        Array.isArray(conversations) && conversations.map((conversation) => (
                            <div
                                key={conversation.id}
                                className="conversation-item"
                                onClick={() => handleSelectConversation(conversation)}
                            >
                                <p>
                                    {conversation.participants
                                        ?.filter((user) => user.id !== currentUserId)
                                        ?.map((user) => user.username || user.first_name || `User ${user.id}`)
                                        ?.join(", ") || "Unknown User"}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div>
                {activeConversation ? (
                    <Conversation
                        conversationId={activeConversation.id}
                        currentUserId={currentUserId}
                        onBack={handleBackToChatList}
                    />
                ) : (
                    <div className="no-conversation-message">
                        <h3>Welcome to ChitChat!</h3>
                        <p>Select a user from the dropdown to start a conversation, or click on an existing conversation.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatList;