// import React, { useEffect, useState } from "react";
// import { getChatRooms } from "../../api/chatAPI";
// import { useNavigate } from "react-router-dom";


// const RoomsList = () => {
//     const [username, setUsername] = useState("");
//     const [usernameSet, setUsernameSet] = useState(false);
//     const [inputName, setInputName] = useState("");
//     const [rooms, setRooms] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (usernameSet) {
//             const fetchRooms = async () => {
//                 try {
//                     const data = await getChatRooms();
//                     console.log("Chat Rooms API Response:", data);

//                     // Defensive check in case backend sends unexpected format
//                     if (Array.isArray(data)) {
//                         setRooms(data);
//                     } else if (data?.results) {
//                         setRooms(data.results); // If paginated
//                     } else {
//                         setRooms([]);
//                     }
//                 } catch (error) {
//                     console.error("Failed to fetch rooms:", error);
//                     setRooms([]);
//                 }
//             };
//             fetchRooms();
//         }
//     }, [usernameSet]);

//     const handleSetUsername = () => {
//         if (inputName.trim()) {
//             setUsername(inputName.trim());
//             setUsernameSet(true);
//         } else {
//             alert("Please enter a valid username.");
//         }
//     };

//     const handleRoomClick = (slug) => {
//         navigate(`/patient/chat/${slug}?username=${encodeURIComponent(username)}`);
//     };

//     if (!usernameSet) {
//         return (
//             <div className="max-w-sm mx-auto p-4 text-center">
//                 <div className="mb-4">
//                     <input
//                         type="text"
//                         placeholder="Enter your username"
//                         value={inputName}
//                         onChange={(e) => setInputName(e.target.value)}
//                         className="border border-gray-300 rounded px-3 py-2 w-3/4 mr-2"
//                     />
//                     <button
//                         onClick={handleSetUsername}
//                         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//                     >
//                         Set Username
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     // Step 2: Show available chat rooms
//     return (
//         <div className="max-w-sm mx-auto p-4">
//             <h2 className="mb-2 text-lg font-bold">Welcome, {username}!</h2>
//             <h3 className="mb-4 text-md font-semibold">Choose a chat room:</h3>

//             {rooms.length === 0 ? (
//                 <p className="text-gray-500">No rooms available</p>
//             ) : (
//                 <ul className="space-y-2">
//                     {rooms.map((room) => (
//                         <li key={room.id || room.slug} onClick={() => handleRoomClick(room.slug)}
//                             className="p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
//                         >
//                             {room.name}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default RoomsList;


import React, { useEffect, useState } from "react";
import { getChatRooms } from "../../api/chatAPI";
import { useNavigate } from "react-router-dom";

const RoomsList = () => {
    const [username, setUsername] = useState("");
    const [usernameSet, setUsernameSet] = useState(false);
    const [inputName, setInputName] = useState("");
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (usernameSet) {
            const fetchRooms = async () => {
                setLoading(true);
                setError("");
                try {
                    const data = await getChatRooms();
                    console.log("Chat Rooms API Response:", data);

                    // Defensive check in case backend sends unexpected format
                    if (Array.isArray(data)) {
                        setRooms(data);
                    } else if (data?.results) {
                        setRooms(data.results); // If paginated
                    } else {
                        setRooms([]);
                    }
                } catch (error) {
                    console.error("Failed to fetch rooms:", error);
                    setError("Failed to load chat rooms. Please try again.");
                    setRooms([]);
                } finally {
                    setLoading(false);
                }
            };
            fetchRooms();
        }
    }, [usernameSet]);

    const handleSetUsername = () => {
        const trimmedName = inputName.trim();
        if (trimmedName.length < 2) {
            alert("Username must be at least 2 characters long.");
            return;
        }
        if (trimmedName.length > 20) {
            alert("Username must be less than 20 characters.");
            return;
        }
        setUsername(trimmedName);
        setUsernameSet(true);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSetUsername();
        }
    };

    const handleRoomClick = (slug) => {
        navigate(`/patient/chat/${slug}?username=${encodeURIComponent(username)}`);
    };

    const handleBackToUsername = () => {
        setUsernameSet(false);
        setRooms([]);
        setError("");
    };

    if (!usernameSet) {
        return (
            <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                        Join Chat
                    </h1>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            maxLength="20"
                            autoFocus
                        />
                        <button
                            onClick={handleSetUsername}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                        >
                            Set Username
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Step 2: Show available chat rooms
    return (
        <div className="min-h-screen bg-gray-800 p-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Welcome, {username}!</h2>
                            <h3 className="text-gray-600">Choose a chat room to join:</h3>
                        </div>
                        <button
                            onClick={handleBackToUsername}
                            className="text-blue-500 hover:text-blue-600 text-sm underline"
                        >
                            Change Username
                        </button>
                    </div>

                    {loading && (
                        <div className="text-center py-8">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                            <p className="mt-2 text-gray-600">Loading rooms...</p>
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}

                    {!loading && !error && (
                        <>
                            {rooms.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-500 text-lg">No chat rooms available</p>
                                    <p className="text-gray-400 text-sm mt-2">Check back later or contact support</p>
                                </div>
                            ) : (
                                <div className="grid gap-3">
                                    {rooms.map((room) => (
                                        <div
                                            key={room.id || room.slug}
                                            onClick={() => handleRoomClick(room.slug)}
                                            className="group p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                                        >
                                            <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">
                                                {room.name}
                                            </h4>
                                            {room.description && (
                                                <p className="text-gray-600 text-sm mt-1">{room.description}</p>
                                            )}
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-xs text-gray-500">
                                                    Click to join
                                                </span>
                                                <span className="text-blue-500 group-hover:text-blue-600">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RoomsList;