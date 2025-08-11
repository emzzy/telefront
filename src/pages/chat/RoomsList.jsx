import React, { useEffect, useState } from "react";
import { getChatRooms } from "../../api/chatAPI";
import { useNavigate } from "react-router-dom";


const RoomsList = () => {
    const [username, setUsername] = useState("");
    const [usernameSet, setUsernameSet] = useState(false);
    const [inputName, setInputName] = useState("");
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (usernameSet) {
            const fetchRooms = async () => {
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
                    setRooms([]);
                }
            };
            fetchRooms();
        }
    }, [usernameSet]);

    const handleSetUsername = () => {
        if (inputName.trim()) {
            setUsername(inputName.trim());
            setUsernameSet(true);
        } else {
            alert("Please enter a valid username.");
        }
    };

    const handleRoomClick = (slug) => {
        navigate(`/rooms/${slug}?username=${encodeURIComponent(username)}`);
    };

    // Step 1: Ask for username first
    if (!usernameSet) {
        return (
            <div className="max-w-sm mx-auto p-4 text-center">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 w-3/4 mr-2"
                    />
                    <button
                        onClick={handleSetUsername}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Set Username
                    </button>
                </div>
            </div>
        );
    }

    // Step 2: Show available chat rooms
    return (
        <div className="max-w-sm mx-auto p-4">
            <h2 className="mb-2 text-lg font-bold">Welcome, {username}!</h2>
            <h3 className="mb-4 text-md font-semibold">Choose a chat room:</h3>

            {rooms.length === 0 ? (
                <p className="text-gray-500">No rooms available</p>
            ) : (
                <ul className="space-y-2">
                    {rooms.map((room) => (
                        <li key={room.id || room.slug} onClick={() => handleRoomClick(room.slug)}
                            className="p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
                        >
                            {room.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RoomsList;
