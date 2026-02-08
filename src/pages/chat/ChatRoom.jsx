// import React, { useEffect, useState, useRef } from "react";
// import { useParams, useLocation } from "react-router-dom";


// const ChatRoom = () => {
//     const { slug } = useParams(); // from /rooms/:slug
//     const query = new URLSearchParams(useLocation().search);
//     const username = query.get("username"); // from ?username=...

//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState("");
//     const socketRef = useRef(null);
//     const messagesEndRef = useRef(null);

//     // Build WebSocket URL dynamically based on room slug
//     const BACKEND_WS_URL = `ws://${window.location.host}/ws/${slug}/`;

//     // Scroll chat to bottom when messages update
//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, [messages]);

//     // Connect to WebSocket
//     useEffect(() => {
//         socketRef.current = new WebSocket(BACKEND_WS_URL);

//         socketRef.current.onopen = () => {
//             console.log("Connected to WebSocket for room:", slug);
//         };

//         socketRef.current.onmessage = (event) => {
//             const data = JSON.parse(event.data);
//             if (data.message) {
//                 setMessages((prev) => [
//                     ...prev,
//                     { username: data.username, content: data.message },
//                 ]);
//             }
//         };

//         socketRef.current.onclose = () => {
//             console.warn("WebSocket closed unexpectedly");
//         };

//         return () => {
//             socketRef.current.close();
//         };
//     }, [slug, BACKEND_WS_URL]);

//     const sendMessage = () => {
//         if (!message.trim()) return;
//             socketRef.current.send(JSON.stringify({ message: message.trim(), username: username, room: slug, })
//         );
//         setMessage("");
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             sendMessage();
//         }
//     };

//     return (
//         <div className="p-10 lg:p-20 text-center bg-gray-800 min-h-screen">
//             <h1 className="text-3xl lg:text-6xl font-bold text-white mb-10">
//                 {slug}
//             </h1>

//             <div
//                 id="chat-messages"
//                 className="lg:w-2/4 mx-auto p-4 bg-white rounded-xl shadow-lg max-h-96 overflow-y-auto space-y-4"
//                 style={{ minHeight: "300px" }}
//             >
//                 {messages.map((m, i) => {
//                     const isUser = m.username === username;
//                     return (
//                         <div key={i} className={`text-${isUser ? "right" : "left"}`}>
//                             <div
//                                 className={`inline-block p-2 rounded-xl ${
//                                     isUser
//                                         ? "bg-teal-500 text-white"
//                                         : "bg-gray-200 text-gray-800"
//                                 }`}
//                                 style={{ maxWidth: "80%", wordWrap: "break-word" }}
//                             >
//                                 <span className="block text-sm font-semibold">
//                                     {isUser ? "You" : m.username}
//                                 </span>
//                                 <span>{m.content}</span>
//                             </div>
//                         </div>
//                     );
//                 })}
//                 <div ref={messagesEndRef} />
//             </div>

//             <div className="lg:w-2/4 mt-6 mx-auto p-4 bg-white rounded-xl shadow-lg flex gap-2">
//                 <input
//                     type="text"
//                     placeholder="Your message..."
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     onKeyDown={handleKeyDown}
//                     className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     autoFocus
//                 />
//                 <button
//                     onClick={(e) => {
//                         e.preventDefault();
//                         sendMessage();
//                     }}
//                     className="px-5 py-2 rounded-xl text-white bg-teal-600 hover:bg-teal-700 transition"
//                 >
//                     Send
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ChatRoom;

import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";

const ChatRoom = () => {
    const { slug } = useParams(); // from /rooms/:slug
    const query = new URLSearchParams(useLocation().search);
    const username = query.get("username"); // from ?username=...

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [messageQueue, setMessageQueue] = useState([]);
    const socketRef = useRef(null);
    const messagesEndRef = useRef(null);

    // Build WebSocket URL dynamically based on room slug
    const BACKEND_WS_URL = `ws://127.0.0.1:8000/ws/${slug}/`;
        console.log("🔌 Connecting to:", BACKEND_WS_URL);

    // Scroll chat to bottom when messages update
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Connect to WebSocket
    useEffect(() => {
        socketRef.current = new WebSocket(BACKEND_WS_URL);

        socketRef.current.onopen = () => {
            console.log("Connected to WebSocket for room:", slug);
            setIsConnected(true);
            
            // Send any queued messages
            messageQueue.forEach(msg => {
                socketRef.current.send(JSON.stringify(msg));
            });
            setMessageQueue([]);
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
            setIsConnected(false);
        };

        socketRef.current.onerror = (error) => {
            console.error("WebSocket error:", error);
            setIsConnected(false);
        };

        return () => {
            setIsConnected(false);
            socketRef.current.close();
        };
    }, [slug, BACKEND_WS_URL]);

    const sendMessage = () => {
        if (!message.trim()) return;
        
        const messageObj = {
            message: message.trim(),
            username: username,
            room: slug,
        };

        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            // WebSocket is open, send immediately
            socketRef.current.send(JSON.stringify(messageObj));
        } else if (socketRef.current && socketRef.current.readyState === WebSocket.CONNECTING) {
            // WebSocket is still connecting, queue the message
            console.log("WebSocket connecting, queueing message...");
            setMessageQueue(prev => [...prev, messageObj]);
        } else {
            // WebSocket is closed or failed, show error
            console.error("WebSocket is not available");
            alert("Connection lost. Please refresh the page.");
            return;
        }
        
        setMessage("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="p-10 lg:p-20 text-center bg-gray-800 min-h-screen">
            <h1 className="text-3xl lg:text-6xl font-bold text-white mb-10">
                {slug}
            </h1>

            {/* Connection status indicator */}
            <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    isConnected 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-black'
                }`}>
                    {isConnected ? 'Connected' : 'Connecting...'}
                </span>
            </div>

            <div
                id="chat-messages"
                className="lg:w-2/4 mx-auto p-4 bg-white rounded-xl shadow-lg max-h-96 overflow-y-auto space-y-4"
                style={{ minHeight: "300px" }}
            >
                {messages.map((m, i) => {
                    const isUser = m.username === username;
                    return (
                        <div key={i} className={`text-${isUser ? "right" : "left"}`}>
                            <div
                                className={`inline-block p-2 rounded-xl ${
                                    isUser
                                        ? "bg-teal-500 text-white"
                                        : "bg-gray-200 text-gray-800"
                                }`}
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
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    autoFocus
                    disabled={!isConnected}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        sendMessage();
                    }}
                    disabled={!isConnected}
                    className={`px-5 py-2 rounded-xl text-white transition ${
                        isConnected
                            ? 'bg-teal-600 hover:bg-teal-700'
                            : 'bg-gray-400 cursor-not-allowed'
                    }`}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;